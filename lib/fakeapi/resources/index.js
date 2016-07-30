var debug = require('../../vendor/debug')('api:resources');
var _ = require('lodash');
var resources = ['posts'];
var controllers = {};

debug('Loading resources: ', resources.join(', '));

_.each(resources, function (resource) {
    controllers[resource] = require('./' + resource);
});

debug('Loaded resources.');

module.exports = controllers;
