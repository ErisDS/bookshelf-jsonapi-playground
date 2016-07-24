var nconf = require('nconf'),
    path = require('path');

var defaults = require('../config.example');

nconf.set('NODE_ENV', process.env.NODE_ENV);

nconf.argv()
    .env()
    .file({
        file: path.join(process.cwd(), 'config.' + process.env.NODE_ENV + '.json')
    });

nconf.defaults(defaults);
module.exports = nconf;