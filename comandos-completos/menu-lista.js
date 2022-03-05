case 'listabots':
              lisMsg = {
                buttonText: 'TEXTO DEL BOTON',
                footerText: `Texto que aparecerà en el mensaje`,
                sections: [
                {
                "title": `apartado 1`,
                rows: [
                {
                "title": "titulo menu 1",
                description: `\ndescripcion menu 1`,
                "rowUrl": `${prefix}comando`
                },
                {
                  "title": "titulo menu 2",
                  description: `\ndescripcion menu 2`,
                  "rowUrl": `${prefix}comando`
                },
                {
                  "title": "titulo menu 3",
                  description: `\ndescripcion menu 3`,
                  "rowUrl": `${prefix}comando`
                },
                {
                  "title": "titulo menu 4",
                  description: `\ndescripcion menu 4`,
                  "rowUrl": `${prefix}mkbot4`
                }]},
                {
                "title": `apartado 2`,
                rows: [
                {
                "title": "titulo menu 1",
                description: `\ndescripcion menu 1`,
                "rowUrl": `${prefix}comando`
                },
                {
                  "title": "titulo menu 2",
                  description: `\ndescripcion menu 2`,
                  "rowUrl": `${prefix}comando`
                },
                {
                  "title": "titulo menu 3",
                  description: `\ndescripcion menu 3`,
                  "rowUrl": `${prefix}comando`
                },
                {
                  "title": "titulo menu 4",
                  description: `\ndescripcion menu 4`,
                  "rowUrl": `${prefix}mkbot4`
                }]}],
                listType: 1
                }
client.sendMessage(from, lisMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break








//---------------EJEMPLO MENU LISTA------------------

case 'menu':
        case 'menú':
        case 'comandos':
        case 'commands':
        if(!isVerify) return isUser()
          if (isBanned) return
          try {
            Mikey = "34698901397"
          infost = await Fg.getStatus(`${sender.split('@')[0]}@c.us`)
        infost = infost.status == 401 ? 'sin info' : infost.status
          imgth = fs.readFileSync('./storage/image/shiro_0.jpg')
          autorfg = `${sender.split("@")[0]}`
      let totalchat2 = await Fg.chats.all()
      let i2 = []
                   let giid2 = []
                   for (let mem2 of totalchat2){ 
                   i2.push(mem2.jid)
                   }
                   for (let id2 of i2){
                   if (id2 && id2.includes('g.us')){
                   giid2.push(id2)
                    }
                    }

let lisMsg = {
buttonText: '𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐌𝐄𝐍𝐔𝐒 🌹',
footerText: `𝓒𝓾𝓪𝓵𝓺𝓾𝓲𝓮𝓻 𝓭𝓾𝓭𝓪 𝓱𝓪𝓫𝓵𝓪 𝓬𝓸𝓷 𝓶𝓲 𝓬𝓻𝓮𝓪𝓭𝓸𝓻 𝓺𝓾𝓮 𝓮𝓼𝓽𝓪 𝓶𝓮𝓷𝓬𝓲𝓸𝓷𝓪𝓭𝓸 𝓭𝓮𝓫𝓪𝓳𝓸 𝓭𝓮 𝓮𝓼𝓽𝓮 𝓶𝓮𝓷𝓼𝓪𝓳𝓮. 
𝓢𝓲 𝓮𝓼 𝓹𝓪𝓻𝓪 𝓱𝓪𝓫𝓵𝓪𝓻 𝓭𝓮 𝓽𝓸𝓷𝓽𝓮𝓻𝓲𝓪𝓼 𝓷𝓸 𝓱𝓪𝓬𝓮 𝓯𝓪𝓵𝓽𝓪 𝓷𝓲 𝓺𝓾𝓮 𝓵𝓮 𝓱𝓪𝓫𝓵𝓮𝓼 𝔂𝓪 𝓺𝓾𝓮 𝓷𝓲 𝓽𝓮 𝓿𝓪 𝓪 𝓻𝓮𝓼𝓹𝓸𝓷𝓭𝓮𝓻.

║▌│█║▌│ █║▌│█│║▌║\n║▌│█║▌│ █║▌│█│║▌║\n      *C̴̢͈̏́̓̾̋ó̷̙͔͒̉̆̈́͝͝ṕ̷̖̹̑y̴̟͖̑͛̈́̽̿͊̈́ȓ̷̀͋͗̐̑́͠͝į̷͚̮̩̂̍͆͜ģ̸̭̲̝̝̔̋͜͠h̷̦̃̅̈́̾̈̐̃͠t̷̢̛̀̈͛̒͊͗́ © ${botname} 2K21*`,
description: `
╔╦══• • ✠•❀•✠ • •══╦╗
 𒈞𒀱๓ḳ-Ᏸ๏t𒅒𒈞 
╚╩══• • ✠•❀•✠ • •══╩╝

Holi @${autorfg}, ${saludo}


||- *_-DATOS DEL USUARIO-_*

[💈] Usuario: _@${sender.split('@')[0]}_
[💈] Tu Info: *${infost}*

||- *_-INFO DEL BOT-_*

[🔰] Creador: @${Mikey.split('@')[0]}
[🔰] Prefijo: *${prefix}*
[🔰] Fecha: *${fecha2}*
[🔰] Fecha Actual : *${fecha2}*
[🔰] Hora: *${hora2}*
[🔰] Usos: *${totalhit}*
[🔰] Dispositivo: *${Fg.user.phone.device_manufacturer}*
[🔰] Servidor: *${Fg.browserDescription[0]}*
[🔰] Version de WhatsApp: *${Fg.browserDescription[2]}*
[🔰] Navedador: *${Fg.browserDescription[1]}*
[🔰] Velocidad: *${process.uptime()}*
[🔰] Ram: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
[🔰] Chat Totales: *${totalchat2.length}*
[🔰] Chat Privado: *${giid2.length}*
[🔰] Chat de Grupos:  *${totalchat2.length - giid2.length}*
[🔰] Version: *34.2*`,
sections: [
{
"title": `𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏 𝒅𝒆 𝑴𝑲-𝑩𝒐𝒕`,
rows: [
{
"title": "𝐂𝐨𝐦𝐨 𝐚𝐧̃𝐚𝐝𝐢𝐫 𝐌𝐊-𝐁𝐨𝐭",
description: `\nHaga clic para mostrar la información para poder añadir el bot a su grupo.`,
"rowId": `${prefix}sewabot`
},
{
"title": "𝐂𝐫𝐞𝐚𝐝𝐨𝐫",
description: `\nHaga clic para mostrar el creador de MK-Bot`,
"rowId": `${prefix}creator`
},
{
"title": `𝐍𝐨𝐫𝐦𝐚𝐬`,
description: `\nHaga clic para mostrar las reglas de MK-Bot`,
"rowId": `${prefix}reglas`
},
{
"title": `𝗣𝗶𝗻𝗴`,
description: `\nHaga clic para mostrar la velocidad de MK-Bot`,
"rowId": `${prefix}ping`
},
{
"title": `𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 𝗰𝗿𝗲𝗮𝗱𝗼𝗿`,
description: `\nHaga clic para mostrar la información de mi creador`,
"rowId": `${prefix}infocreator`
}
]},
{
"title": `𝐒𝐩𝐚𝐦 𝐝𝐞 𝐦𝐢 𝐂𝐫𝐞𝐚𝐝𝐨𝐫`,
rows: [
{
"title": "𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦",
description: `\nHaga clic para mostrar la cuenta de Instagram de Mikey.`,
"rowId": `${prefix}instagrammk`
},
{
"title": "𝐆𝐢𝐭𝐇𝐮𝐛",
description: `\nHaga clic para mostrar el canal de GitHub de Mikey`,
"rowId": `${prefix}githubmk`
},
{
"title": `𝐘𝐨𝐮𝐓𝐮𝐛𝐞`,
description: `\nHaga clic para mostrar el canal de YouTube de MK-Mods`,
"rowId": `${prefix}youtubemk`
},
{
"title": `𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦`,
description: `\nHaga clic para mostrar el grupo oficial de Telegram`,
"rowId": `${prefix}telegrammk`
},
{
"title": `𝐏𝐚𝐠𝐢𝐧𝐚 𝐖𝐞𝐛`,
description: `\nHaga clic para mostrar la pagina oficial`,
"rowId": `${prefix}paginawebmk`
},
{
"title": `𝐍𝐮𝐦𝐞𝐫𝐨𝐬 𝐁𝐨𝐭𝐬 (𝐂𝐑𝐄𝐀𝐍𝐃𝐎)`,
description: `\nHaga clic para mostrar la lista de bots`,
"rowId": `${prefix}listabots`
}
]},
{
"title": `𝑳𝒊𝒔𝒕𝒂 𝒅𝒆 𝑴𝒆𝒏𝒖𝒔`,
rows: [
{
"title": "𝐌𝐞𝐧𝐮 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐝𝐨𝐫𝐞𝐬",
description: `\nHaga clic para mostrar el menú de convertidores`,
"rowId": `${prefix}convertidoresmenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬",
description: `\nHaga clic para mostrar el menú de descargas`,
"rowId": `${prefix}descargasmenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐁𝐮𝐬𝐪𝐮𝐞𝐝𝐚𝐬",
description: `\nHaga clic para mostrar el menú de busquedas`,
"rowId": `${prefix}busquedamenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐆𝐫𝐮𝐩𝐨",
description: `\nHaga clic para mostrar el menú de grupo`,
"rowId": `${prefix}grupomenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐒𝐞𝐠𝐮𝐫𝐢𝐝𝐚𝐝 𝐆𝐫𝐮𝐩𝐨𝐬",
description: `\nHaga clic para mostrar el menú de seguridad`,
"rowId": `${prefix}securitymenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐄𝐝𝐮𝐜𝐚𝐜𝐢𝐨𝐧",
description: `\nHaga clic para mostrar el menú de educacion`,
"rowId": `${prefix}educacionmenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐂𝐫𝐞𝐚𝐝𝐨𝐫 𝐅𝐨𝐭𝐨𝐬",
description: `\nHaga clic para mostrar el menú de creacion de logos`,
"rowId": `${prefix}logosmenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐞𝐬",
description: `\nHaga clic para mostrar el menú de funciones`,
"rowId": `${prefix}funcionesmenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐄𝐜𝐨𝐧𝐨𝐦𝐢𝐚",
description: `\nHaga clic para mostrar el menú de economia`,
"rowId": `${prefix}economiamenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐃𝐢𝐯𝐞𝐫𝐬𝐢𝐨𝐧",
description: `\nHaga clic para mostrar el menú de diversion`,
"rowId": `${prefix}diversionmenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐈𝐦𝐚𝐠𝐞𝐧𝐞𝐬",
description: `\nHaga clic para mostrar el menú de imagenes`,
"rowId": `${prefix}imagenesmenu`
},
{
"title": "𝐌𝐞𝐧𝐮 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐞𝐬",
description: `\nHaga clic para mostrar el menú de menciones`,
"rowId": `${prefix}mencionesmenu`
},
{
"title": `𝐌𝐞𝐧𝐮 𝐒𝐞𝐬𝐢𝐨𝐧`,
description: `\nHaga clic para mostrar el menú de sesion`,
"rowId": `${prefix}sesionmenu`
},
{
"title": `𝐌𝐞𝐧𝐮 𝐌𝐞𝐝𝐢𝐚`,
description: `\nHaga clic para mostrar el menú de media`,
"rowId": `${prefix}mediamenu`
},
{
"title": `𝐌𝐞𝐧𝐮 𝐀𝐯𝐚𝐧𝐳𝐚𝐝𝐨`,
description: `\nHaga clic para mostrar el menú avanzado`,
"rowId": `${prefix}avanzadomenu`
},
{
"title": `𝐌𝐞𝐧𝐮 𝐂𝐫𝐞𝐚𝐝𝐨𝐫`,
description: `\nHaga clic para mostrar el menú del creador`,
"rowId": `${prefix}ownermenu`
},
{
"title": `𝐌𝐞𝐧𝐮 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨𝐧`,
description: `\nHaga clic para mostrar el menú de Información`,
"rowId": `${prefix}infomenu`
},
{
"title": `𝐌𝐞𝐧𝐮 𝐂𝐚𝐧𝐜𝐢𝐨𝐧𝐞𝐬`,
description: `\nHaga clic para mostrar el menú de Canciones`,
"rowId": `${prefix}canciones`
},
{
"title": `𝐌𝐞𝐧𝐮 +𝟏𝟖`,
description: `\nHaga clic para mostrar el menú nsfw`,
"rowId": `${prefix}nsfwmenu`
}
]
}],
listType: 1
}
Fg.sendMessage(from, lisMsg, MessageType.listMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000,
isForwarded: false,
sendEphemeral: true,
"externalAdReply": {
"title": `Hallo ${pushname}` ,
"body": `${fecha2} ${hora2}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/v1cj7xp/820baf60f67e.jpg",
"mediaUrl": "https://youtu.be/3jYbJq2JMiM",
"thumbnail": fs.readFileSync('./sticker/mecha.jpeg'),
"sourceUrl": "https://www.instagram.com/mikey69yt",
},mentionedJid:[sender, Mikey]}, quoted:mek})
} catch (e) {
  console.log(`Error :`, color(e,'red'))
     reply('❎ Error al mostrar el menú, intenta de nuevo después de este mensaje')
}
break