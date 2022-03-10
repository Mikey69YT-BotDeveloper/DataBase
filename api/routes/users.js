const express = require("express");
const router = express.Router();
const passport = require("passport");
const { site_key, secret_key } = require("../lib/settings");

const Recaptcha = require("express-recaptcha").RecaptchaV2;

const recaptcha = new Recaptcha(site_key, secret_key);

const { getHashedPassword, randomText } = require("../lib/function");
const { checkUsername, addUser } = require("../database/db");
const { notAuthenticated, captchaRegister, captchaLogin } = require("../lib/auth");

router.get("/", notAuthenticated, (req, res) => {
	addVisitor();
	res.render("login", {
		layout: "layouts/main",
	});
});

router.get("/login", notAuthenticated, recaptcha.middleware.render, (req, res) => {
	res.render("login", {
		recaptcha: res.recaptcha,
		layout: "layouts/main",
	});
});

router.post("/login", recaptcha.middleware.verify, captchaLogin, (req, res, next) => {
	passport.authenticate("local", {
		successRedirect: "/docs",
		failureRedirect: "/users/login",
		failureFlash: true,
	})(req, res, next);
});

router.get("/register", notAuthenticated, recaptcha.middleware.render, (req, res) => {
	res.render("register", {
		recaptcha: res.recaptcha,
		layout: "layouts/main",
	});
});

router.post("/register", recaptcha.middleware.verify, captchaRegister, async (req, res) => {
	try {
		let { username, password, confirmPassword } = req.body;
		if (password.length < 6 || confirmPassword < 6) {
			req.flash("error_msg", "La contraseña debe tener 6 caracteres minimo");
			res.redirect("/users/register");
		}
		if (password === confirmPassword) {
			let checking = await checkUsername(username);
			if (checking) {
				req.flash("error_msg", "El nombre de usuario ya existe");
				res.redirect("/users/register");
			} else {
				let hashedPassword = getHashedPassword(password);
				let apikey = randomText(8);
				addUser(username, hashedPassword, apikey);
				req.flash("success_msg", "Ya estas registrado, ya puedes iniciar sesión");
				res.redirect("/users/login");
			}
		} else {
			req.flash("error_msg", "La contraseña no coincide");
			res.redirect("/users/register");
		}
	} catch (err) {
		console.log(err);
	}
});

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/users/login");
});

module.exports = router;
