module.exports = {
    // Default bookshelf registry plugin
    registry: 'registry',
    // Plugin from our new magic module, this could be nicer!
    jsonapi: require('ghost-bookshelf-jsonapi').plugin,

};