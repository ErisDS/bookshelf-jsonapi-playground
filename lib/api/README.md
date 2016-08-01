# API
 
## API Example Version 2

This demonstrates how the API might be built from configuration
Using a 3rd party module which handles the key wiring

- `jsonapi.js` - require & configure the ghost-bookshelf-jsonapi module
- `middleware/` - any other api middleware, e.g. authentication, spam protection etc

It shows a resource (posts) which has one operation (read). 
The resource can be accessed via direct method call or over HTTP.

Usage:

`fakeapi.posts.read({id: 4})` 

This returns a Promise:
  - resolves to Bookshelf JSON
  - should reject to an Error

`app.use('api/v2/', api.router())` 

`api.router()` uses an express.Router() internally

This mounts the `.http` version of each operation at the correct route. 


