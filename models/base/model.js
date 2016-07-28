var _             = require('lodash');
var debug         = require('../../lib/debug')('base:model');
var db            = require('../../lib/db');
var plugins       = require('../plugins')
var BaseBookshelf = require('bookshelf')(db);

// Default Plugins
BaseBookshelf.plugin('registry');

_.each(plugins, function (plugin, name) {
    debug('Loading plugin: ' + name);
    BaseBookshelf.plugin(plugin);
});

BaseBookshelf.Model = BaseBookshelf.Model.extend({
    hasTimestamps: true
});

// Export Bookshelf for use elsewhere
module.exports = BaseBookshelf;
