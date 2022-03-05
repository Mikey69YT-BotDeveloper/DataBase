case 'list': case 'menu': case 'help': case '?': {
anu = `Texto y lista del menu

Tambien se pueden añadir información del usuario`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('localizacion foto') }, { upload: client.waUploadToServer })
const template = generateWAMessageFromContent(from, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'texto',
                                    url: 'enlace'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'texto',
                                    url: 'enlace'
                                }
                            }, {
                                callButton: {
                                    displayText: 'texto',
                                    phoneNumber: 'numero de telefono'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'texto',
                                    id: 'comando'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'texto',
                                    id: 'comando'
                                }  
                            }]
                        }
                    }
                }), { userJid: from, quoted: m })
client.relayMessage(from, template.message, { messageId: template.key.id })
}
break