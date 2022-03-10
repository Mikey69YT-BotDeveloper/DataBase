const needle = require('needle')

function ghres(user) {
return new Promise((resolve, reject) => {
	needle('https://api.github.com/users/' + encodeURIComponent(user), (body) => {
    const { avatar_url, html_url, name, email, bio, twitter_username, public_repos, followers, following, created_at } = body
          resolve({
			  nombre: name,
			  avatar: avatar_url,
              enlace: html_url,
			  correo: email,
			  bio: bio,
			  usuario_twitter: twitter_username,
			  repositorios_publicados: public_repos,
			  seguidores: followers,
			  siguiendo: following,
			  creada_el: created_at
			})
        })
})
}
module.exports = {ghres};