case 'emparejar': {
let member = participants.map(u => u.id)
let pareja1 = member[Math.floor(Math.random() * member.length)]
let pareja2 = member[Math.floor(Math.random() * member.length)]
let texto = `Estos son 💖 La pareja del dia 🐤

@${pareja1.split('@')[0]} ❤️ @${pareja2.split('@')[0]}`
let menst = [pareja1, pareja2]
let buttons = [
{ buttonId: 'emparejar', buttonText: { displayText: 'mi alma gemela' }, type: 1 }
]
await client.sendButtonText(from, buttons, texto, client.user.name, {mentions: menst})
}
break