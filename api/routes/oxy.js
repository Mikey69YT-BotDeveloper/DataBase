const { limitAdd, isLimit, cekKey } = require("../database/db");
const { download_Url } = require("../lib/function");
const { oxy, slidePhotooxy } = require("../lib/photooxy");
const path = require('path');

async function photoOxy(req, res) {
    const text = req.query.text
    const tema = req.params.tema
    let listTema = ['/love', '/wood', '/coffee', '/stars', '/butterfly', '/summer', '/candy', '/royal', '/underwater',
                    '/shadow', '/flaming', '/rainbow', '/smoke', '/neon', '/tiktok', '/paper', '/fur' ]
    if (!text || !tema) return res.status(404).send({
        status: 404,
        message: `Input Parameter text & tema (/oxy/(tema)?text=(text))`
    });
    const apikey = req.query.apikey;
    if (!apikey) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    let url = []
    if (tema === 'shadow') {
        url.push('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html')
    } else if (tema == 'flaming') {
        url.push('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html')
    } else if (tema == 'rainbow') {
        url.push('https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html')
    } else if (tema == 'smoke') {
        url.push('https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html')
    } else if (tema === 'neon') {
        url.push('https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html')
    } else if (tema == 'love') {
        url.push('https://photooxy.com/logo-and-text-effects/love-text-effect-372.html')
    } else if (tema === 'wood') {
        url.push('https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html')
    } else if (tema === 'coffee') {
        url.push('https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html')
    } else if (tema === 'stars') {
        url.push('https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html')
    } else if (tema === 'butterfly') {
        url.push('https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html')
    } else if (tema === 'summer') {
        url.push('https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html')
    } else if (tema === 'candy') {
        url.push('https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html')
    } else if (tema === 'royal') {
        url.push('https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html')
    } else if (tema === 'underwater') {
        url.push('https://photooxy.com/logo-and-text-effects/creating-text-underwater-ocean-363.html')
    } else if (tema === 'paper') {
        url.push('https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html')
    } else if (tema === 'fur') {
        url.push('https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html')
    } else if (tema === 'poly' || tema === 'bold' || tema === 'colorful' || tema === 'glowing' 
    || tema === 'army' || tema === 'retro' || tema == 'cross') {
        if (tema === 'poly') var value = 0
        else if (tema === 'bold') var value = 1
        else if (tema === 'glowing') var value = 2
        else if (tema === 'colorful') var value = 3
        else if (tema === 'army') var value = 4
        else if (tema === 'retro') var value = 5
        return slidePhotooxy(text, value).then(reso => {
            const { result } = reso
            return download_Url(result, './media/video.mp4', function(){
                limitAdd(apikey);
                return res.sendFile(path.resolve('./media/video.mp4'))
            })
        })
    } else if (!tema) {
        return res.send({status: 404, message: `Input Parameter text & tema (/oxy/(tema)?text=(text))`})
    } else {
        return res.send({
            status: 404, 
            message: 'Tema Tersedia Sebagai Berikut: (The following themes are available:)',
            result: listTema
        })
    }
    if (url.length !== 0) {
        oxy(text, url[0]).then(r => {
            const { result } = r
            download_Url(result, './media/image.jpg', function(){
                limitAdd(apikey);
                res.sendFile(path.resolve('./media/image.jpg'))
            })
        }).catch(error => {
            console.log(error);
            return res.status(500).send({status: 500, message: response500()});
        });
    }
}

module.exports = { photoOxy }