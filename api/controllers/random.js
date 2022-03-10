const { cekKey } = require('../database/db');
const { readFileTxt, readFileJson } = require('../lib/function');

async function couple(req, res) {
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
    readFileJson('./lib/data/couple.json').then(result => {
        res.status(200).send({
            status: 200, 
            result: {
            creador: result.creador, 
            hombre: result.hombre, 
            mujer: result.mujer
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function gura(req, res) {
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
    readFileJson('./lib/data/gura.json').then(result => {
        res.status(200).send({
            status: 200, 
            result: {
            creador: result.creador, 
            enlace: result.enlace, 
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

module.exports = {couple, gura };