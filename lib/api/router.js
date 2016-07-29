var debug = require('../debug')('api:router');
var express     = require('express');
var controllers = require('./controllers');
var api         = require('../../api');
var router      = express.Router();

router.get('/', function (req, res) {
    debug('Serving API /');
    res.sendStatus(200);
});

// This is the HTTP level, where req & res come from express
router.get('/posts', function (req, res) {
    debug('Responding to GET POSTS');

    controllers.posts.browse().then(function (result) {
        res.send(api.format(result, 'posts'));
    });
});

router.get('/posts/:id', function (req, res) {
    debug('Responding to GET POSTS :id');

    controllers.posts.read({id: req.params.id}).then(function (result) {
        res.send(api.format(result, 'post'));
    });
});

module.exports = router;