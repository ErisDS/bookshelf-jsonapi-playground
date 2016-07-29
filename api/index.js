var format = require('./lib/format');

var api = function api ()  {
    return function (req, res, next) {
        res.sendStatus(200);
    }
};

//module.exports = api;

// Temporary exports to start using code from this module
module.exports.format = format;

