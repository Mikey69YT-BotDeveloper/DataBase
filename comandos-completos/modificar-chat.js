case 'chat': {
if (!q) throw 'Opciones : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
    client.chatModify({ mute: 'Infinity' }, from, []).then((res) => client.reply(jsonformat(res))).catch((err) => client.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
    client.chatModify({ mute: null }, from, []).then((res) => client.reply(jsonformat(res))).catch((err) => client.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
    client.chatModify({  archive: true }, from, []).then((res) => client.reply(jsonformat(res))).catch((err) => client.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
    client.chatModify({ archive: false }, from, []).then((res) => client.reply(jsonformat(res))).catch((err) => client.reply(jsonformat(err)))
} else if (args[0] === 'read') {
    client.chatModify({ markRead: true }, from, []).then((res) => client.reply(jsonformat(res))).catch((err) => client.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
    client.chatModify({ markRead: false }, from, []).then((res) => client.reply(jsonformat(res))).catch((err) => client.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
    client.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, from, []).then((res) => client.reply(jsonformat(res))).catch((err) => client.reply(jsonformat(err)))
}
}
break