// Get the formatter
var Mapper = require('jsonapi-mapper'),
    mapper = new Mapper.Bookshelf('http://localhost:2375/api/v1');

module.exports = function formatter(req, res, next) {
    if (res.apiResult.model && res.apiResult.type) {
        res.send(mapper.map(res.apiResult.model, res.apiResult.type));
    }

    next();
};