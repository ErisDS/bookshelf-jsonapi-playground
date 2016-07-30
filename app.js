var express    = require('express');
var bodyParser = require('body-parser');
var debug      = require('./lib/vendor/debug')('app');
var server     = require('./lib/vendor/server');
var auth       = require('./lib/api/middleware/auth');
var fakeapi    = require('./lib/fakeapi');

var app = express();

// Configure express
app.set('x-powered-by', false);
app.set('query parser', false);

// Should this live in the API ?
app.use(bodyParser.json());

app.get('/', function (req, res) {
    // This should work the same as if we called via HTTP
    // The same permisions should be applied, and we should get back a JSON response
    // Question, should it be Bookshelf JSON or JSONAPI?
    fakeapi.posts.read({id: 4}).then(function (post) {
        console.log('READ a post', post);
        res.status(200).send('Hello World');
    });
});

// We load a full API as one thing, like this:
app.use('/api/v1', auth, fakeapi.stack);

server.start(app);

module.exports = app;