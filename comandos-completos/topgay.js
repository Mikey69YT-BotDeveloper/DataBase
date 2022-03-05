case 'topgay':
member = []
top5 = args.join(' ')
const v1 = groupMembers
const v2 = groupMembers
const v3 = groupMembers
const v4 = groupMembers
const v5 = groupMembers
const v6 = groupMembers
const v7 = groupMembers
const v8 = groupMembers
const v9 = groupMembers
const v10 = groupMembers
const b1 = v1[Math.floor(Math.random() * v1.length)]
const b2 = v2[Math.floor(Math.random() * v2.length)]
const b3 = v3[Math.floor(Math.random() * v3.length)]
const b4 = v4[Math.floor(Math.random() * v4.length)]
const b5 = v5[Math.floor(Math.random() * v5.length)]
const b6 = v6[Math.floor(Math.random() * v6.length)]
const b7 = v7[Math.floor(Math.random() * v7.length)]
const b8 = v8[Math.floor(Math.random() * v8.length)]
const b9 = v9[Math.floor(Math.random() * v9.length)]
const b10 = v10[Math.floor(Math.random() * v10.length)]
teks = `≡ 🏳️‍🌈 *TOP 10 GAYS*
Está es una lista de los más gays del grupo
╭──────────────────✾
├╼ @${b1.jid.split('@')[0]}
├╼ @${b2.jid.split('@')[0]}
├╼ @${b3.jid.split('@')[0]}
├╼ @${b4.jid.split('@')[0]}
├╼ @${b5.jid.split('@')[0]}
├╼ @${b6.jid.split('@')[0]}
├╼ @${b7.jid.split('@')[0]}
├╼ @${b8.jid.split('@')[0]}
├╼ @${b9.jid.split('@')[0]}
├╼ @${b10.jid.split('@')[0]}
╰──────────────────✾` 
member.push(b1.jid)
member.push(b2.jid)
member.push(b3.jid)
member.push(b4.jid)
member.push(b5.jid)
member.push(b6.jid)
member.push(b7.jid)
member.push(b8.jid)
member.push(b9.jid)
member.push(b10.jid)
client.mentions(teks, member, true)
break