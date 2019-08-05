const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

const userList = [];

app.use(bodyParser.json())
    .use(express.static(path.join(__dirname, '../client/public')));

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '../client/index.html'));
});


app.post('/', function (request, response) {
    response.send('POST request');
});

app.get('/users', function (req, res) {
    res.send(userList);
});

app.post('/users', function (req, res) {
    userList.push(req.body);
    res.send(req.body);
});



app.listen(port, function () {
    console.log('Server app listening on port ' + port);
});