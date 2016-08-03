var express    = require('express');
var bodyParser = require('body-parser');
var debug      = require('ghost-ignition').debug('app');
var server     = require('ghost-ignition').server;
var auth       = require('./lib/api/middleware/auth');
var fakeapi    = require('./lib/fakeapi');
var api        = require('./lib/api/jsonapi');

var app = express();

// Configure express
app.set('x-powered-by', false);
app.set('query parser', false);

// Should this live in the API ?
app.use(bodyParser.json());

app.get('/test1', function (req, res) {
    // This should work the same as if we called via HTTP
    // The same permisions should be applied, and we should get back a JSON response
    fakeapi.posts.read({id: 4}).then(function (post) {
        res.status(200).send(post.title);
    });
});

app.get('/test2', function (req, res) {
    // This should work the same as if we called via HTTP
    // The same permisions should be applied, and we should get back a JSON response
    api.posts.read({id: 4}).then(function (post) {
        res.status(200).send(post.title);
    });
});

// We load a full API as one thing, like this:
app.use('/api/v1', auth, fakeapi.stack);

app.use('/api/v2', auth, api.router());

server.start(app);

module.exports = app;