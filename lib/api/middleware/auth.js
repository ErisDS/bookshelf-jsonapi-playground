var debug = require('../../debug')('api:middleware:auth');

// This is a fake authentication middleware
function auth(req, res, next) {
    debug('Authenticating...');
    next();
}

module.exports = auth;