const { igsres } = require("../lib/igstalk");
const { cekKey } = require('../database/db');

async function igstalk(req, res) {
    var username = req.query.u || req.query.username;
    const apikey = req.query.apikey;
    if (username === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter username & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    igsres(username).then(data => {
        res.status(200).send({
            status: 200, 
            result: data
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

module.exports = { igstalk };