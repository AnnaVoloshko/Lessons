var fs = require('fs');

function additional() {
    console.log('Hello world!');
}



function read(path, callback) {
    return new Promise(function (resolve) {
        fs.readFile(path, function (error, data) {
            resolve(data.toString());
        });
    });
};

module.exports = {
    additional: additional,
    read: read
}