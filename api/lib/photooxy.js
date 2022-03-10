const { default: axios } = require("axios");
const cheerio = require('cheerio');
const qs = require('qs');
const request = require('request');

function oxy(teks, url) {
    return new Promise((resolve, reject) => {
        const data = qs.stringify({
            'text_1': teks,
            'login': 'OK' 
        })
        let cookie = [
            "NID=222=l8eMrKlD0zDQNFo7E57eS9VZt8j1NW-KwVBy9IMfbhl2VPPukz0SdI8206eUMcLdOvR_fCzv3NjCv5tdudwjQcPMIyDVXxa_GsOlQaF89DJ-LwV4h7ASZhA2poU3JEKfRW2IdHLg568yht_ngW7_fFM_jCkKjPDyOQTp3PlONxE; _gat_gtag_UA_111543820_4=1; _ga=GA1.2.1879492694.1630158578; _gid=GA1.2.1279518250.1630158578; __gads=ID=328f9ef1fa21f582-22aa8e3c2fcb00d2:T=1630158578:RT=1630158578:S=ALNI_Ma4RCzCGt-Lp-nPH8I6hzeMfpxNTg",
            "NID=222=Kq2iHq4d-Zjf2Uaufbxfv-S8iuLc0Uf5Y1rGgrX-B1HEzmc667mBZqG7Yua4CCL4dBvo3g49kBDaQU5Jzh8aE-Bt2UH9jBxb9EoR5AfDT43fZD8Mqd1h_-FJKXNJQgUCB2ef6fWXf28rJPyhPcrN4vPML6M-U2vWNXZbbWP-OPI; _gat_gtag_UA_111543820_4=1; _ga=GA1.2.606489003.1630165018; _gid=GA1.2.1906843129.1630165018; __gads=ID=b30caa3c84474de9-22286b4439cb0087:T=1630165017:RT=1630165017:S=ALNI_MZ6vpjgfpR2tz1Ei2Kul1B4zcWAIg",
            "NID=222=m9RyJNpniAVZtWSCCWau-wici1wKy6e4uS076LG_-qiypGRojOPdHLMYJgGjjgfe0rLX_Hwx7dZWAvA1Sika7NgOOg03fpUVU6G1LsexaWXTsDpIS-QxLyZJ_NvDpMT7BWhH6l_I2a63t_tPk0an1zytyCdc-ReC35dYLW_o7i3Z7wY; _gat_gtag_UA_111543820_4=1; _ga=GA1.2.1738651910.1630161919; _gid=GA1.2.965637401.1630161919; __gads=ID=3902974a75a54e53-222bf7a227cb00c2:T=1630161919:RT=1630161919:S=ALNI_MatZtsLs-nuEpZnZSxHXeSXenAJeQ"
        ]
        const random = cookie[Math.floor(Math.random()*cookie.length)];
        const config = {
        method: 'post',
        url,
        headers: { 
            'authority': 'photooxy.com', 
            'content-type': 'application/x-www-form-urlencoded', 
            'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9',
            "cookie": random
        },
        data : data
        }
        axios(config)
        .then(({data}) => {
            const $ = cheerio.load(data)
            const result = $('div.btn-group > a').attr('href')
            resolve({result: result});
        })
    })
}

async function slidePhotooxy(text, value) {
    return new Promise((resolve, reject) => {
        request({ method: 'POST',
            url: 'https://photooxy.com/other-design/make-a-video-that-spells-your-name-237.html',
            headers: { 
                'content-type': 'application/x-www-form-urlencoded',
                "cookie": "NID=222=l8eMrKlD0zDQNFo7E57eS9VZt8j1NW-KwVBy9IMfbhl2VPPukz0SdI8206eUMcLdOvR_fCzv3NjCv5tdudwjQcPMIyDVXxa_GsOlQaF89DJ-LwV4h7ASZhA2poU3JEKfRW2IdHLg568yht_ngW7_fFM_jCkKjPDyOQTp3PlONxE; _gat_gtag_UA_111543820_4=1; _ga=GA1.2.1879492694.1630158578; _gid=GA1.2.1279518250.1630158578; __gads=ID=328f9ef1fa21f582-22aa8e3c2fcb00d2:T=1630158578:RT=1630158578:S=ALNI_Ma4RCzCGt-Lp-nPH8I6hzeMfpxNTg"
            },
            formData: { optionNumber_0: value, text_1: text, login: 'OK' } }, 
            async function (error, response, body) {
            if (error) throw new Error(error);
                const $ = cheerio.load(body)
                const result = $('div.btn-group > a').attr('href')
                resolve({
                    result: result
                });
        });
    })
}

module.exports = { oxy, slidePhotooxy }