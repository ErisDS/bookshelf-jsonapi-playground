At HTTP level (express middleware)
    - Authenticate
    - Parse the data & params into a standardised format

At controller/method level: (api middleware)
    - Parse the data & options into a standardised format
    - Clean data & options according to what is allowed
    - Validate the remaining data
    - Pre-fetch permissions
    - Map opts to query function 
    - Call query function & fetch data to return
    - Post-fetch permissions
    - Format data

API middleware looks like:

function apiMiddleware(areq, ares, anext) {
    // Do some stuff
    anext();
}

The a's are to remind you these are not express request/response objects.

APIRequest = {
    resource: 'post',
    method: 'PUT',
    action: 'edit',
    data: {},
    options: {},
}

APIResponse = {
    request: APIRequest,
    query: {
    },
    resultModel: {}, // Bookshelf's result
    resultJSON: {} // Formatted result
}

Ability to define an API Method:

- resource E.g. posts
- operation E.g. read
- http route E.g. /posts/:id
- http method E.g. GET


- resource E.g. posts
- operation E.g. publish (non standard)
- http route E.g. /posts/:id/publish
- http method E.g. PUT
- model method that can be looked up

- standard actions have standardised options that can be passed in
- nonstandard actions will need a definition for options & their validation


