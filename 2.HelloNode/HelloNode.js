const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Node!!!!');
    res.end();
});

server.listen(port, hostname, function () {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});
