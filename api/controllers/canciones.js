const { cekKey } = require('../database/db');
const { readFileTxt, readFileJson } = require('../lib/function');

async function mikeyesp(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileJson('./lib/data/musica/mikey-esp.json').then(result => {
        res.status(200).send({
            status: 200, 
            result: {
            link_song: result.link_song, 
            nombre_cancion: result.nombre_cancion
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function mikeyeng(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileJson('./lib/data/musica/mikey-eng.json').then(result => {
        res.status(200).send({
            status: 200, 
            result: {
            link_song: result.link_song, 
            nombre_cancion: result.nombre_cancion
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function bzrp(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileJson('./lib/data/musica/bzrp.json').then(result => {
        res.status(200).send({
            status: 200, 
            result: {
            link_song: result.link_song, 
            nombre_cancion: result.nombre_cancion
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function playlists(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileJson('./lib/data/musica/playlists.json').then(result => {
        res.status(200).send({
            status: 200, 
            result: {
            creador: result.creador,
            nombre_cancion: result.nombre_cancion,
            link_song: result.link_song
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

module.exports = {mikeyesp, mikeyeng, bzrp, playlists };