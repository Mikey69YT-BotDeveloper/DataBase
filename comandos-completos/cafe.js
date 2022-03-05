case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Siguiente Imagen ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(from, buttonMessage, { quoted: m })
            }
            break