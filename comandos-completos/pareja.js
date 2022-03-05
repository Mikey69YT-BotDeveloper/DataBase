	    case 'couple': {
                client.reply('Mensaje de espera')
                let anu = await fetchJson('https://raw.githubusercontent.com/Mikey69YT-BotDeveloper/DataBase/main/comandos/couple.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                client.sendMessage(from, { image: { url: random.hombre }, caption: `Foto Hombre` }, { quoted: m })
                client.sendMessage(from, { image: { url: random.mujer }, caption: `Foto Mujer` }, { quoted: m })
            }
	    break