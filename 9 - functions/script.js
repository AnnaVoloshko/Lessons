/*function avarage(a,b,c){
     return (a+b+c)/3;
}

function pow(a) {
    return a * a;
}

function sqrt(a) {
    return Math.sqrt(a);
}

function manipulate(number, operation) {
    return operation(number);          //callback
}

console.log(manipulate(2, sqrt));*/
______________________________________________________________

var arr = [1, 2, 3, 4];

var callback = function (el) {    //перебор массивов (альтернатива циклу for)
    console.log('Tick!', el)
}
arr.forEach(callback);

//OR

function forEach(arr, callback) {
    for (var index = 0; index < arr.length; index++) {
        callback(arr[index], index, arr);
    }
}

forEach(arr, function (el) { //присваивания НЕ выполняются
    console.log(el) 
}); 
______________________________________________________________


var newArr = arr.map(function (value) {
    return value;
});

//OR

function map(arr, callback) {
    var newArr = [];
    for (var index = 0; index < arr.length; index++) {
        var result = callback(arr[index], index, arr);
        newArr[index] = result;
    }
    return newArr;
}
______________________________________________________________


console.log(map(arr, function (el) {
    return el * el;
}), newArr === arr, arr === arr);   //newArr === arr это false так как ссылки на пути не совпадают
                                    //arr === arr это true так как совпадают ссылки на пути 

//OR

var res = arr.filter(function (el, index) {
    return index > 1;
} );
console.log(res);

function filter(arr, callback) {
    var newArray = [];
    for (var index = 0; index < arr.length; index++) {
        var res = callback(arr[index], index, arr);
        if (res){
            newArray.push(arr[index]);
        }        
    }
    return newArray;
}
console.log(res);