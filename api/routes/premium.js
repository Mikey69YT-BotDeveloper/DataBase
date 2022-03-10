const express = require('express');
const { checkUsername, resetAllLimit } = require('../database/db');
const { addPremium, deletePremium, tokens, checkPremium, changeKey, resetOneLimit, resetTodayReq } = require('../database/premium');
const { isAuthenticated } = require('../lib/auth');
const { limitCount } = require('../lib/settings');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('premium/index', {
        layout: 'layouts/main'
    })
})

router.get('/add', (req, res) => {
    res.render('premium/add',  {
        layout: 'layouts/main'
    });
});

router.post('/add', async (req, res) => {
    let { username, expired, customKey, token } = req.body;
    if (token != tokens) {
        req.flash('error_msg', 'Token invalido');
        return res.redirect('/premium/add');
    }
    let checking = await checkUsername(username);
    if (!checking) {
        req.flash('error_msg', 'El usuario no esta registrado');
        return res.redirect('/premium/add');
    } else {
        let checkPrem = await checkPremium(username)
        if (checkPrem) {
            req.flash('error_msg', 'El usuario ya es Premium');
            return res.redirect('/premium/add');
        } else {
            addPremium(username, customKey, expired)
            req.flash('success_msg', `Añadiste a ${username} a usuarios Premium`);
            return res.redirect('/premium');
        }
    }
})

router.get('/delete', (req, res) => {
    res.render('premium/delete',  {
        layout: 'layouts/main'
    });
});

router.post('/delete', async (req, res) => {
    let { username, token } = req.body;
    if (token != tokens) {
        req.flash('error_msg', 'Token invalido');
        return res.redirect('/premium/delete');
    }
    let checking = await checkUsername(username);
    if (!checking) {
        req.flash('error_msg', 'Usuario no registrado');
        return res.redirect('/premium/delete');
    } else {
        let checkPrem = await checkPremium(username)
        if (checkPrem) {
            deletePremium(username);
            req.flash('success_msg', `Has eliminado a ${username} de usuarios Premium`);
            return res.redirect('/premium');
        } else {
            req.flash('error_msg', 'El usuario no es Premium');
            return res.redirect('/premium/delete');
        }
    };
});

router.get('/custom', isAuthenticated, (req, res) => {
    res.render('premium/custom',  {
        layout: 'layouts/main'
    });
})

router.post('/custom', isAuthenticated, async (req, res) => {
    let { customKey } = req.body;
    let { username } = req.user
    let checkPrem = await checkPremium(username);
    if (checkPrem) {
        changeKey(username, customKey)
        req.flash('success_msg', `Cambio a ApiKey custom ${customKey}`);
        return res.redirect('/docs');
    } else {
        req.flash('error_msg', 'No eres Premium');
        return res.redirect('/docs');
    }
})

router.get('/limit', (req, res) => {
    res.render('premium/limit',  {
        layout: 'layouts/main'
    });
})

router.post('/limit', async (req, res) => {
    let { username, token } = req.body;
    if (token != tokens) {
        req.flash('error_msg', 'Token invalido');
        return res.redirect('/premium/limit');
    }
    let reset = await checkPremium(username);
    if (!reset) {
        resetOneLimit(username)
        req.flash('success_msg', `Succes Reset Limit Apikey User ${username} to ${limitCount}`);
        return res.redirect('/premium');
    } else {
        req.flash('error_msg', 'Cannot Reset Premium Apikey');
        return res.redirect('/premium/limit');
    }
})

router.post('/resetall', (req, res) => {
    let { token } = req.body;
    if (token != tokens) {
        req.flash('error_msg', 'Invalid Token');
        return res.redirect('/premium');
    } else {
        resetAllLimit();
        resetTodayReq();
        req.flash('success_msg', `Succes Reset Limit All Apikey`);
        return res.redirect('/premium');
    }
})

module.exports = router;