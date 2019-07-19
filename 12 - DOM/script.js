//document.body.innerHTML = 'Hello world!'; //небезопасно
//document.body.innerText = '<p> Hello world! </p>';

console.log(list.children[0].innerText = 'TEXT'); //изменение первого элемента 

console.log(list.children[0].nextElementSibling.previousElementSibling);


var elements = document.getElementsByClassName('element');
console.log(elements);


var div = document.createElement('div');
div.className = 'card';
div.innerText = 'Text';

document.body.appendChild(div);
//console.log(div)
