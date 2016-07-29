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
    // Do some stufff
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

