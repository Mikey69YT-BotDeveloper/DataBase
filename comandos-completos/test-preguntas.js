case 'test':
const buttons1 = [
{buttonId: `${prefix}test1`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst1`, buttonText: {displayText: 'No'}, type: 1}]
const button1Message = {
contentText: `RESPONDA ALGUNAS DE LAS SIGUIENTES PREGUNTAS!

*_¿Te consideras Otaku?_*`,
buttons: buttons1,
headerType: 1
}
client.sendMessage(from, button1Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test1': case 'otst1':
const buttons2 = [
{buttonId: `${prefix}test2`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst2`, buttonText: {displayText: 'No'}, type: 1}]
const button2Message = {
contentText: `*_¿Te gustan los animes? ?_*`,
buttons: buttons2,
headerType: 1
}
client.sendMessage(from, button2Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test2': case 'otst2':
const buttons3 = [
{buttonId: `${prefix}test3`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst3`, buttonText: {displayText: 'No'}, type: 1}]
const button3Message = {
contentText: `*_¿Has visto mas de 15 animes?_*`,
buttons: buttons3,
headerType: 1
}
client.sendMessage(from, button3Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test3': case 'otst3':
const buttons4 = [
{buttonId: `${prefix}test4`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst4`, buttonText: {displayText: 'No'}, type: 1}]
const button4Message = {
contentText: `*_Quieres ser mi amigo ?_*`,
buttons: buttons4,
headerType: 1
}
client.sendMessage(from, button4Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test4': case 'otst4':
const buttons5 = [
{buttonId: `${prefix}test5`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst5`, buttonText: {displayText: 'No'}, type: 1}]
const button5Message = {
contentText: `*_¿Todavía te gusta tu ex? ?_*`,
buttons: buttons5,
headerType: 1
}
client.sendMessage(from, button5Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test5': case 'otst5':
const buttons6 = [
{buttonId: `${prefix}test6`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst6`, buttonText: {displayText: 'No'}, type: 1}]
const button6Message = {
contentText: `*_Eres un jugador ?_*`,
buttons: buttons6,
headerType: 1
}
client.sendMessage(from, button6Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test6': case 'otst6':
const buttons7 = [
{buttonId: `${prefix}test7`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst7`, buttonText: {displayText: 'No'}, type: 1}]
const button7Message = {
contentText: `*_¿Eres una carga familiar? ?_*`,
buttons: buttons7,
headerType: 1
}
client.sendMessage(from, button7Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test7': case 'otst7':
const buttons8 = [
{buttonId: `${prefix}test8`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst8`, buttonText: {displayText: 'No'}, type: 1}]
const button8Message = {
contentText: `*_Eres huérfano ?_*`,
buttons: buttons8,
headerType: 1
}
client.sendMessage(from, button8Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test8': case 'otst8':
const buttons9 = [
{buttonId: `${prefix}test9`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst9`, buttonText: {displayText: 'No'}, type: 1}]
const button9Message = {
contentText: `*_Te gusta acostarte ?_*`,
buttons: buttons9,
headerType: 1
}
client.sendMessage(from, button9Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test9': case 'otst9':
const buttons10 = [
{buttonId: `${prefix}test10`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst10`, buttonText: {displayText: 'No'}, type: 1}]
const button10Message = {
contentText: `*_Estás perezoso?; Eres perezoso ?_*`,
buttons: buttons10,
headerType: 1
}
client.sendMessage(from, button10Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test10': case 'otst10':
const buttons11 = [
{buttonId: `${prefix}test11`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst11`, buttonText: {displayText: 'No'}, type: 1}]
const button11Message = {
contentText: `*_Tienes un trabajo ?_*`,
buttons: buttons11,
headerType: 1
}
client.sendMessage(from, button11Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test11': case 'otst11':
const buttons12 = [
{buttonId: `${prefix}test12`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst12`, buttonText: {displayText: 'No'}, type: 1}]
const button12Message = {
contentText: `*_¿Eres una comadreja? ?_*`,
buttons: buttons12,
headerType: 1
}
client.sendMessage(from, button12Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test12': case 'otst12':
const buttons13 = [
{buttonId: `${prefix}test13`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst13`, buttonText: {displayText: 'No'}, type: 1}]
const button13Message = {
contentText: `*_Te gusta el plastico ?_*`,
buttons: buttons13,
headerType: 1
}
client.sendMessage(from, button13Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test13': case 'otst13':
const buttons14 = [
{buttonId: `${prefix}test14`, buttonText: {displayText: 'Chica'}, type: 1},
{buttonId: `${prefix}otst14`, buttonText: {displayText: 'Chico'}, type: 1}]
const button14Message = {
contentText: `*_Cuál es su género ?_*`,
buttons: buttons14,
headerType: 1
}
client.sendMessage(from, button14Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test14': case 'otst14':
const buttons15 = [
{buttonId: `${prefix}test15`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst15`, buttonText: {displayText: 'No'}, type: 1}]
const button15Message = {
contentText: `*_¿Eres musulmán? ?_*`,
buttons: buttons15,
headerType: 1
}
client.sendMessage(from, button15Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test15': case 'otst15':
const buttons16 = [
{buttonId: `${prefix}test16`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst16`, buttonText: {displayText: 'No'}, type: 1}]
const button16Message = {
contentText: `*_Estás casado ?_*`,
buttons: buttons16,
headerType: 1
}
client.sendMessage(from, button16Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test16': case 'otst16':
const buttons17 = [
{buttonId: `${prefix}test17`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst17`, buttonText: {displayText: 'No'}, type: 1}]
const button17Message = {
contentText: `*_Ya tienes un amante ?_*`,
buttons: buttons17,
headerType: 1
}
client.sendMessage(from, button17Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test17': case 'otst17':
const buttons18 = [
{buttonId: `${prefix}test18`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst18`, buttonText: {displayText: 'No'}, type: 1}]
const button18Message = {
contentText: `*_Eres gay ?_*`,
buttons: buttons18,
headerType: 1
}
client.sendMessage(from, button18Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test18': case 'otst18':
const buttons19 = [
{buttonId: `${prefix}test19`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}otst19`, buttonText: {displayText: 'No'}, type: 1}]
const button19Message = {
contentText: `*_Eres lesbiana ?_*`,
buttons: buttons19,
headerType: 1
}
client.sendMessage(from, button19Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'test19': case 'otst19':
const buttons20 = [
{buttonId: `${prefix}ya1`, buttonText: {displayText: 'Si'}, type: 1},
{buttonId: `${prefix}ya2`, buttonText: {displayText: 'No'}, type: 1}]
const button20Message = {
contentText: `*_¿Alguna vez ha tenido relaciones sexuales? ?_*`,
buttons: buttons20,
headerType: 1
}
client.sendMessage(from, button20Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [sender]}, quoted: msg})
break

case 'ya1': case 'ya2':
client.reply(`Gracias por todas tus respuestas!`)
break