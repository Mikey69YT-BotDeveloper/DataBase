case 'ttp':
client.reply('Mensaje de espera')
teks = args.join(' ')
const datax = {"text": `${encodeUrl(teks)}`, "outlineColor":"255,0,0,255", "textColor":"0,0,0,255"}
result = axios({
url: "https://salism3api.pythonanywhere.com/text2img",
method: 'post',
data: new URLSearchParams(Object.entries(datax))
})
.then(res => {
client.sendStickerUrl(from, res.data.image)
})
.catch((err) => {
client.reply(`❎ Error, intente de nuevo mas tarde`); 
})
break

case 'ttp2':
colorf = ["red","yellow","white","magenta","lime","aqua"]
ttpfg = colorf[Math.floor(Math.random() * colorf.length)]
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${encodeUrl(body.slice(5))}&color=${ttpfg}`
client.reply('Mensaje de espera')
client.sendStickerUrl(from, buffer)
.catch((err) => {
client.reply(`❎ Error, intente de nuevo mas tarde`); 
})
break 
						
case 'attp':
client.reply('Mensaje de espera')
var teks = encodeURIComponent(args.join(' '))
const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeUrl(teks)}`)
client.sendMessage(from, attp, sticker, {quoted: mek})
.catch((err) => {
client.reply(`❎ Error, intente de nuevo mas tarde`); 
})
break
					
case 'attp2':
client.reply('Mensaje de espera')
teks = args.join(' ')
const dataz = {"text": `${encodeUrl(teks)}` }
result = axios({
url: "https://salism3api.pythonanywhere.com/text2gif",
method: 'post',
data: new URLSearchParams(Object.entries(dataz))
})
.then(res => {
client.sendStickerUrl(from, res.data.image)
})
.catch((err) => {
client.reply(`❎ Error, intente de nuevo mas tarde`); 
})
break

case 'attp3':
buffer = `https://pecundang.herokuapp.com/api/attp?teks=${encodeUrl(q)}`
client.reply('Mensaje de espera')
client.sendStickerUrl(from, buffer)
.catch((err) => {reply(`❎ Error, intente de nuevo mas tarde`); })
break