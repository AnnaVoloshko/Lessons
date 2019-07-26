//console.log('Ajax');

var pagination = document.getElementById('pagination');


request('get', 'https://swapi.co/api/people/')
    .then(parseJSON)
    .then(function (data) {
        return data.results[0].starships;
    })
    .then(function (ships) {
        console.log('get ', ships[0]);
    })
    // result of returned promise 
    .then(parseJSON)
    .then(function (starshipsInfo) {
        console.log(starshipsInfo);
    });


//_______________________________________________________________________________
/*var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([1, 352, 23, 11]);     //выполнение метода (return не работает)
    }, 1000);
});

promise
    .then(function (value) {  //callback, который получается значение с promise
        return value.sort();
    })
    .then(function (value) {
        console.log(value);
    });
*/

//_________________________________________________________________________________
/*
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve([1, 352, 23, 11]);
        }, ms);
    });
}
var promise = delay(1000);

promise.then(function (value) {
    console.log('SORT!');
    return [].concat(value).sort();
});

promise.then(function (value) {
    console.log(value);
});*/