# Models

Here lies Bookshelf models.

As much logic as possible should be compartmentalised into plugins or 
other modules = e.g. a user auth module which handles password resets etc

**Note:** the bread plugin which provides basic operations is currently
located within the ghost-bookshelf-jsonapi module. Not sure if this is a good 
idea as the only jsonapi-specific thing it does is apply params like 
`fields`, `include`, `filter` etc  to the model.