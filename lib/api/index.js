// Require top-level module, eventually this should live on npm
// var api = require('../../api');
var debug = require('../debug')('api');
var auth = require('./middleware/auth');
var router = require('./router');


// TODO: add configuration step
// api = new API({url: 'http://localhost:2375/api/v1'});

// Exports the api methods directly
module.exports = require('./controllers');

// Exports a express middleware stack for use();
module.exports.stack = [
    auth,
    router
];
