# Bookshelf JSONAPI Playground

A playground for experiments around bookshelf including models, plugins and particularly wiring up an API.
 
* /lib - where any code specific to this project lives
* /models - everything to do with the bookshelf model layer
* /api - experiments with API layers, which should eventually be independent of the model layer

Problems with the current API:

- permissions & authentication
- requires too much code to be written to create a new endpoint
- and is therefore always incomplete
- convoluted code is ridiculously hard to follow
- side-effects of editing options as they are passed around
- is not possible to version as the behaviour is tightly coupled to the models   
- responses are not standardised or easy to reason about 
  
