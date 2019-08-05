const express = require('express');
const bodyParser
const app = express();
const port = 3000;

const userList=[];

app.get('/', function (request, response) {
    response.send('Hello world!');
});


app.post('/', function(request, response) {
    response.send('POST request');
});

app.get('/users', function (req, res) {
    res.send(userList);
});

app.post('/users', function(req, res) {
    res.send(req.body);
});

app.use(bodyParser.json());


app.listen(port, function () {
    console.log('Server app listening on port ' + port);
});