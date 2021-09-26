const http = require('http');   // node's http module

const hostname = '127.0.0.1';
const port = 3000;

// Note how we pass a callback function to create our webserver.
// Whenever an http request is received, node.js will call this function.
const server = http.createServer( (request, response) => {
    request.statuscode = 200;   // Setting HTTP status code of the response (OK)
    response.setHeader('Content-Type', 'text/plain');   // Set HTTP response headers

    // The response object is a node.js *stream* object - 
    // that's why we pass in response body content in the .end() call
    response.end('Hello, world!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});