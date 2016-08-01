# Bookshelf JSONAPI Playground

Contains 2 separate experiments into wiring up a JSONAPI, which hopefully
demonstrate an evolution of logic which I've wrapped up inside of a new module.

To play with this module, you first need to get the [ghost-bookshelf-jsonapi](https://github.com/ErisDS/ghost-bookshelf-jsonapi) module:

- `git@github.com:ErisDS/ghost-bookshelf-jsonapi.git`
- `cd ghost-bookshelf-jsonapi`
- `npm install`
- `npm link`
- `cd ../`
- `git clone git@github.com:ErisDS/bookshelf-jsonapi-playground.git`
- `cd bookshelf-jsonapi-playground`
- `npm link ghost-bookshelf-jsonapi`
- `npm install`
- `npm start`

## The experiments

There are two experiments.
 
### 1. Hardcoded
 
The first experiment is a hardcoded `posts.read` operation which exists only to show
some of the concepts more clearly. 

It lives in `/lib/fakeapi`. It's called fake, because it's just a demo of concepts. 
It is not an example of how the API might be coded. 

#### Concept 1: Different calling mechanisms

The first important concept is to maintain the feature that an api operation can be called both via a route:
E.g. `api/v1/posts/4/`
And via a method call:
E.g. `api.posts.read()`

Whilst maintaining all the logic for santisation, validation, permissions and querying.

Note that the response from these two calls is different.
HTTP calls in JSONAPI compliant JSON
Method calls result in standard bookshelf JSON

The reason for this is that interally, we never want or need to mess around with linked objects.
JSONAPI is a serialization format, intended to be sent over the wire and makes sense for HTTP.

This falls down when we want to use the `{{get}}` helper as the responses are a different format to what's 
returned if you use AJAX. I think this is expected, and we will need to provide a toolkit for handling AJAX responses.

#### Concept 2: Internal middleware-esque layer

The second important concept is that the internal behaviour of the API call is wired up LIKE express middleware.
The calls from http/method are interpreted and converted into a standard format: An APIRequest and an APIResponse.

These two objects are then handed through a queue, executed in order, just like a middleware stack.
The expectation is that the Request remains unmodified (this can be enforced), so we can always see what the 
original request looked like. As we pass the two objects through sanitisation, validation, and permissions, the
response query object can be modified, until finally it is passed to the model layer.

By defining 1. how http url params, query params & data are converted to an APIRequest object and 2. how the
arguments passed to a method call are converted to an APIRequest object, and then 3. defining how an APIResponse query
object is passed to the model's method, we can make the API and Model layer independent of one another.

Conversion functions can be global utilities or be passed as part of the operation configuration.
Better still, we can have base utils with before/after hooks so we can perform extra modifications.

#### Concept 3: Clear coupling

The third concept, which is perhaps not clearly demonstrated yet, is the idea that coupling between the API
and the model layer is explicit and clear.

An API operation maps to a model method.

We can define sanitization & formatting to ensure that exactly the same inputs are accepted
and outputs are returned from the API no matter what happens to the model.

But also, if we need to make significant changes to a model method, we can create a completely
new method and wire different APIs to use different model methods.

### 2. Configurable module

The second experiment lives in `/lib/api` & the new `ghost-bookshelf-jsonapi` module.
 
It takes all the concepts from Example 1 and reimagines them where we have a core module and our project can ONLY
provide configuration.

The code inside of `ghost-bookshelf-jsonapi` borrows a bit from express. There are many different ways it could be written.
I've hacked it together to show that it is workable, don't worry about the code in there too much! 

It's very, very early days but hopefully just good enough to show you what I'm thinking.
 
 
## Code Structure
* /data - knex migration, seed and DB
* /lib - where any code specific to this project lives
    - /api - Experiment 2
    - /fakeapi - Experiment 1
    - /vendor - shared libs that can be ignored like config, server, etc
* /models - bookshelf model layer, always returns bookshelf models
* /tests - I actually wrote a few 
* app.js - wiring it all together! 

## Problems with the current API in Ghost

- permissions & authentication
- requires too much code to be written to create a new endpoint
- and is therefore always incomplete
- convoluted code is ridiculously hard to follow
- side-effects of editing options as they are passed around
- is not possible to version as the behaviour is tightly coupled to the models   
- responses are not standardised or easy to reason about 
  
