var debug = require('../../debug')('api:controllers');
var _ = require('lodash');
var resources = ['posts'];
var controllers = {};

debug('Loading resources: ', resources.join(', '));

_.each(resources, function (resource) {
    controllers[resource] = require('./' + resource);
});

debug('Loaded resources.');

module.exports = controllers;
