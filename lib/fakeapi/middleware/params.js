var debug = require('../../vendor/debug')('api:middleware:params');
var JsonApiQueryParser = require('jsonapi-query-parser');
var parser = new JsonApiQueryParser();

module.exports = function queryParser(req, res, next) {
    debug('Processing params...', req.url, req.params);

    req.queryParams = parser.parseRequest(req.url);
    next();
};