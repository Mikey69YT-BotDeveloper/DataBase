const express = require('express');
const router = express.Router();
const { readFileTxt, readFileJson } = require('../lib/function');
const { cekKey, checkLimit, resetLimit } = require('../database/db'); 
const { mikeyesp, mikeyeng, bzrp, playlists } = require('../controllers/canciones');

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

router.get('/mikey-esp', mikeyesp);

router.get('/mikey-eng', mikeyeng);

router.get('/bzrp', bzrp);

router.get('/playlist', playlists);

module.exports = router;
