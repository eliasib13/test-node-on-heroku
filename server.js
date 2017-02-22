var http = require('http');

function onRequest(request, response) {
    console.log('[function]onRequest: Start');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello world!');
    response.end();
}

let port = process.env.PORT || 9999;
http.createServer(onRequest).listen(port);
console.log(`Server started. Listening on port ${port}`);