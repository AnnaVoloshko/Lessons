/*function counter(defaultValue) {
    var value = defaultValue || 0;
    return {
        inc: function () {
            value++;
        },
        dec: function () {
            value--;
        },
        value: value, //value = 0
        getValue: function (){
            return value; //замыкание
        }
    }
}

var count = counter();

count.inc();
count.inc();

console.log(count.value, //0
            count.getValue()); //2

count.dec();

console.log(count.value, //0
            count.getValue()); //1 
*/

/*
function sum(a) {
    return function (b) {
        return a + b; //замыкание
    };
}

var mem = sum(2);


console.log(mem(4)); //6
console.log(mem(1)); //3
console.log(mem(10)); //12

*/


//MODULE

(function () {
    var name = 'myModule';
    console.log('Hello ' + name + '!')
}());
console.log(name);

var counter = (function counter() {
    var value = 0;
    return {
        inc: function () {
            value++;
        },
        dec: function () {
            value--;
        },
        getValue: function (){
            return value; //замыкание
        }
    }
});