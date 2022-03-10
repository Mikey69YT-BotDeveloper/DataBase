const ig = require('instatouch');
const sID = "38420191934%3A3TMzGnxgbeTqqk%3A7"

const options = {
  // Number of posts to scrape: {int default: 0}
  count: 0,
  // Media type to scrape: ["image", "video", "all"]: {string default: 'all'}
  mediaType: 'all',
	timeout: 0,
  session: "sessionid="+sID
};

function igsres(username) {
	return new Promise((resolve, reject) => {
		ig.getUserMeta(username, options).then(async(data) => {
			resolve({
					foto_perfil: data.graphql.user.profile_pic_url,
					foto_perfil_hd: data.graphql.user.profile_pic_url_hd,
					nombre_completo: data.graphql.user.full_name,
					es_privada: data.graphql.user.is_private,
					esta_verificada: data.graphql.user.is_verified,
					bio: data.graphql.user.biography,
					seguidores: data.graphql.user.edge_followed_by.count,
					siguiendo: data.graphql.user.edge_follow.count
			})
		}).catch(reject);
	});
};

module.exports = {igsres};