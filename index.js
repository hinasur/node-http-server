import http from "http";

http.createServer(function(request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('hello world\n');
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/')