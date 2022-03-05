case 'gimage': {
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: 'Siguiente Imagen ➡️'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*-------「 IMAGEN ENCONTRADA 」-------*
🤠 *Busqueda* : ${text}`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(from, buttonMessage, { quoted: m })
})
}
break