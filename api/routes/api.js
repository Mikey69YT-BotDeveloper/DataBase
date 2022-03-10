const express = require('express');
const router = express.Router();
const { readFileTxt, readFileJson } = require('../lib/function');
const { ytMp4, ytMp3, ytPlay } = require('../lib/youtube');
const { igstalk } = require('../controllers/ig');
const { cancion } = require('../controllers/adivina');
const { couple, gura } = require('../controllers/random');
const { cekKey, checkLimit, resetLimit } = require('../database/db'); 
const { youtubePlay, youtubeMp4, youtubeMp3 } = require('../controllers/yt');
const { cakLontong, bijak, quotes, fakta, ptl, motivasi } = require('../controllers/randomtext');
const { photoOxy } = require('./oxy');

router.get('/checkkey', async (req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `El apikey: ${apikey} no se encontró, por favor, registrese antes!`
    });
    const limit = await checkLimit(apikey);
    res.send({status: 200, apikey: apikey, limit: limit});
});

router.get('/ytplay', youtubePlay);

router.get('/ytmp4', youtubeMp4);

router.get('/ytmp3', youtubeMp3);

router.get('/igstalk', igstalk);

router.get('/caklontong', cakLontong);

router.get('/quotes', quotes);

router.get('/fakta', fakta);

router.get('/bijak', bijak);

router.get('/ptl', ptl);

router.get('/motivasi', motivasi);

router.get('/oxy/:tema', photoOxy);

router.get('/adivina_cancion', cancion);

router.get('/couple', couple);

router.get('/gura', gura);


module.exports = router;
