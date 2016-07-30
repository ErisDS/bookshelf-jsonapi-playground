var _             = require('lodash');
var debug         = require('../../lib/vendor/debug')('base:model');
var db            = require('../../lib/vendor/db');
var plugins       = require('../plugins')
var BaseBookshelf = require('bookshelf')(db);

// Load Plugins - see plugins/index.js for the list
_.each(plugins, function (plugin, name) {
    debug('Loading plugin: ' + name);
    BaseBookshelf.plugin(plugin);
});

BaseBookshelf.Model = BaseBookshelf.Model.extend({
    hasTimestamps: true
});

// Export Bookshelf for use elsewhere
module.exports = BaseBookshelf;
