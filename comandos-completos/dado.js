case 'dado':
const ui5 =['https://i.ibb.co/mCyS8wn/01.webp', 'https://i.ibb.co/NsNn2H9/02.webp', 'https://i.ibb.co/wBGxpHf/03.webp', 'https://i.ibb.co/jyNbx9F/04.webp', 'https://i.ibb.co/Jm0Lscc/05.webp', 'https://i.ibb.co/k2whZJ2/06.webp']
xfjjs5 = ui5[Math.floor(Math.random() * ui5.length)]
dadoz = await getBuffer(xfjjs5)
client.sendMessage(from, dadoz, MessageType.sticker, {quoted: mek})
.catch((err) => {
client.reply(`❎ Error, intente de nuevo mas tarde`);
})
break