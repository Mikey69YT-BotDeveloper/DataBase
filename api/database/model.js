const mongoose = require('mongoose');

const Users = mongoose.Schema({
    username: { type: String },
    password: { type: String},
    apikey: { type: String },
    defaultKey: { type: String },
    premium: { type: String },
    limit: { type: Number }
}, { versionKey: false });
module.exports.User = mongoose.model('api2', Users);

const Utils = mongoose.Schema({
    total: { type: Number },
    today: { type: Number },
    visitor: { type: Number },
    util: { type: String }
}, { versionKey: false });
module.exports.Utils = mongoose.model('util', Utils);