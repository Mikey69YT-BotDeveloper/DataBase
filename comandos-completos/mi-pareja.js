case 'pareja': {
let member = participants.map(u => u.id)
let me = sender
let pareja = member[Math.floor(Math.random() * member.length)]
let texto = `👫tu pareja es

@${me.split('@')[0]} ❤️ @${pareja.split('@')[0]}`
let ments = [me, pareja]
let buttons = [
{ buttonId: 'pareja', buttonText: { displayText: 'mi alma gemela' }, type: 1 }
]
await client.sendButtonText(from, buttons, texto, client.user.name, {mentions: ments})
}
break