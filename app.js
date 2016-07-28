var express = require('express'),
    debug   = require('./lib/debug')('app'),
    server  = require('./lib/server'),
    models  = require('./models'),
    app;

app = express();

app.get('/', function (req, res) {
    debug('Serving /');
    res.sendStatus(200);
});

app.get('/post', function (req, res) {
    models.Post.read({id: 3}).then(function (result) {
       res.send(result.toJSON());
    });
});

server.start(app);