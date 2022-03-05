case 'halah': 
case 'hilih': 
case 'huluh': 
case 'heleh': 
case 'holoh': {
ter = command[1].toLowerCase()
texto = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
client.reply(texto.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break