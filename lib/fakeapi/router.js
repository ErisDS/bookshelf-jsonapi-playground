var debug     = require('ghost-ignition').debug('api:router');
var express   = require('express');
var resources = require('./resources');
var router    = express.Router();

router.get('/posts/:id(\\d+)', resources.posts.http.read);

module.exports = router;