/**
 * Provide basic BREAD operations for each model
 *
 * These should have before/after hooks, rather than being overriden
 *
 */

var bread = function bread(Bookshelf) {
    var Model = Bookshelf.Model.extend({

    },
    {
        browse: function browse(options) {
            return this.forge().fetchAll(options);
        },

        read: function read(data, options) {
            return this.forge(data).fetch(options);
        },

        edit: function edit(data, options) {

        },

        add: function add(data, options) {

        },

        destroy: function destroy(options) {

        }
    });

    Bookshelf.Model = Model;
};

module.exports = bread;