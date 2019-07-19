function Dog() {

}

Dog.prototype.move = function () {
    console.log('RUN!')
}


function Cat() {

}

Cat.prototype.move = function () {
    console.log('RUN!')
}

function Rat() {

}

Rat.prototype.move = function () {
    console.log('RUN!')
}

Baer.prototype.move = function () {
    console.log('RUN!')
}

var d = new Dog(),
    c = new Cat(),
    r = new Rat(),
    b = new Bear();

Dog.prototype.move = function () {
    console.log('Dig!')
}

Cat.prototype.move = function () {
    console.log('Dig!')
}

Rat.prototype.move = function () {
    console.log('Dig!')
}
console.log(d, c, r, b);

d.move();
c.move();
r.move();
b.move();