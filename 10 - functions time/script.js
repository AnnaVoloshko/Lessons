var timerId = setTimeout(function () {
    console.log('One second');
}, 1000); //очистится быстрее, чем выполнится
clearTimeout(timerId); // очищение таймера (выполнится быстрее, чем сам таймер)


var timerId = setTimeout(function () {
    console.log(new Date);
}, 1000);




function task(number) {
    console.log('Task num: ' + number);
}

var i = 1;

var timer = setTimeout(function cb()  {
    task (i++);
    timer = setTimeout(cb, 500); //безопастнее
    //без переприсваивания не сработает очистка так как не совпадет id
    clearTimeout(timer);
}, 500);


function sum(a, b) {
    return a + b;
}
sum(2, 5); //7

var c = sum(2);
c(5); //7
c(6) //8