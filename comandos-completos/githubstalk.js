case "githubstalk":
client.reply('Mensaje de espera')
const oi = await fetchJson(`https://api.dhnjing.xyz/stalk/github?user=${q}`)
client.reply(`┌──「 *GITHUB STALK* 」
▢ *🔖 Username* : ${oi.result.username}
▢ *🔖 Nombre Completo* : ${oi.result.name}
▢ *📌 Bio :* ${oi.result.user_bio}
▢ *🗂️ Repositorios :* ${oi.result.user_repo}
▢ *🫂 Siguiendo* : ${oi.result.user_following}
▢ *👥 Seguidores* : ${oi.result.user_followers}
└──────────────`)
break