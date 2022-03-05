case 'robar': {
if (!/webp/.test(mime)) throw `Responda un sticker con subtítulo *${prefix + command}*`
var kls = q
var pack = kls.split("|")[0];
var author2 = kls.split("|")[1];
if (!q) return reply('*Y el nombre de autor y paquete?*')
if (!pack) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
if (!author2) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(from, media, { packname: pack, author: author2 })
await fs.unlinkSync(encmedia)
}
break