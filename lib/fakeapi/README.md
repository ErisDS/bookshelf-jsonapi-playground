# FakeAPI

## API Example Version 1 

This is a quick test of some of the concepts, without the extra module.

It shows a resource (posts) which has one operation (read).

The operation is split into 3 parts:

- **internal** - this is the core of the operation and does all the work
- **method** - this handles taking arguments from a method call, and returns a promise for Bookshelf JSON
- **http** - this handles taking arugments from an express router. It does eventually return JSONAPI JSON, but this is done slightly oddly through middleware at the moment.

Usage:

`fakeapi.posts.read({id: 4})` 

This returns a Promise:
  - resolves to Bookshelf JSON
  - should reject to an Error

`app.use('api/v1', api.stack)` 

api.stack returns a middleware stack.. it's quite ugly but it works for now


This version evolves into Version 2, by abstracting out the concepts and 
allowing configuration to be provided.

