var div = document.createElement('div');
div.className = 'card';



var click1 = function () { console.log('One!')},
    click2 = function () { console.log('Two!')},
    click3 = function () { console.log('Three!')};

/*
div.onClick = function (event) {
    allClick.forEach(function (cb) {
        cb(event)
    })
}*/
div.addEventListener('click', click1);
div.addEventListener('click', click2);
div.addEventListener('click', click3);

var a = document.createElement('a');
a.href='http:example.com';
a.className = 'Link';

a.addEventListener('click1', function(e){
    console.log(this.getAttribute('href'));
    e.preventDefault();
})

document.body.appendChild(a);
document.body.appendChild(div);