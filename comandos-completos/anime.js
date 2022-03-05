case 'neko2': {
  let neko = await axios.get('https://nekos.life/api/v2/img/neko')
  client.sendMessage(m.chat, { image: { url: neko.data.url }}, { quoted: mek})
}
break
case 'wallpaper2': {
  let neko = await axios.get('https://nekos.life/api/v2/img/wallpaper')
  client.sendMessage(m.chat, { image: neko.data.url }, { quoted: mek})
}
break
case 'waifu2': {
  let neko = await axios.get('https://api.waifu.pics/sfw/waifu')
  client.sendMessage(m.chat, { image: { url: neko.data.url }, }, { quoted: mek})
}
break