const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()



case 'zodiaco': {
                let zodiak = [
                    ["Capricornio", new Date(1970, 0, 1)],
                    ["Acuario", new Date(1970, 0, 20)],
                    ["Piscis", new Date(1970, 1, 19)],
                    ["Aries", new Date(1970, 2, 21)],
                    ["Tauro", new Date(1970, 3, 21)],
                    ["Geminis", new Date(1970, 4, 21)],
                    ["Cáncer", new Date(1970, 5, 22)],
                    ["León", new Date(1970, 6, 23)],
                    ["Virgo", new Date(1970, 7, 23)],
                    ["Libra", new Date(1970, 8, 23)],
                    ["Escorpión", new Date(1970, 9, 23)],
                    ["Sagitario", new Date(1970, 10, 22)],
                    ["Capricornio", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Fecha invalida') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return client.reply(anu.message)
                client.sendText(m.chat, `⭔ *Sibolo del zodiaco :* ${anu.message.zodiak}\n⭔ *Numero :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planeta :* ${anu.message.planet_yang_mengitari}\n⭔ *Flor :* ${anu.message.bunga_keberuntungan}\n⭔ *Color :* ${anu.message.warna_keberuntungan}\n⭔ *Roca :* ${anu.message.batu_keberuntungan}\n⭔ *Elemento :* ${anu.message.elemen_keberuntungan}\n⭔ *Pareja del zodiaco :* ${anu.message.pasangan_zodiak}\n⭔ *Notas :* ${anu.message.catatan}`)
            }
            break