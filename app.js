var express = require('express'),
    debug   = require('./lib/debug')('app'),
    server  = require('./lib/server'),
    app;

app = express();

app.get('/', function (req, res) {
    debug('Serving /');
    res.sendStatus(200);
});

server.start(app);