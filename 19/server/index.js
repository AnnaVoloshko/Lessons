var additional = require('./lib/additional');
var http = require('http');

/*additional.read('../index.html')
    .then(function (buffer) {return buffer.toString(); })
    .then (function (data) {
        console.log(data);
    })*/

var host = '0.0.0.0';
var port = 3000;

var app = http.createServer(function (request, response) {
    console.log('New request ', request.method);
    additional.read('../index.html')
        .then(function(buffer){
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(buffer.toString());
        });
    //response.end('Hello world!');
});

app.listen(port, host, function () {
    console.log('Server listen on ' + host + ':' + port);
});