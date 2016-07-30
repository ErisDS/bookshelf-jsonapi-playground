var debug = require('../../vendor/debug')('api:middleware:auth');

// This is a fake authentication middleware
function auth(req, res, next) {
    debug('Authenticating...');
    req.source = {user: {id: 1}};
    next();
}

module.exports = auth;