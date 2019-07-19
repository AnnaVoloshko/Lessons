function Animal() {
    this.type = 'animal';
}

Animal.prototype.move = function () {
    console.log('RUN!')
}

function Dog() {
    Animal.call(this); //копирование свойств Animal
}

Dog.prototype = Object.create(Animal.prototype); //наследуется прототип Animal
Dog.prototype.constructor = Dog;

function Cat() {
    Animal.call(this);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


function Rat() {
    Animal.call(this);
}

Rat.prototype = Object.create(Animal.prototype);
Rat.prototype.constructor = Rat;


function Bear() {
    Animal.call(this);
    this.subtype = 'mammal';
}

Bear.prototype = Object.create(Animal.prototype);
Bear.prototype.constructor = Bear;



var d = new Dog(),
    c = new Cat(),
    r = new Rat(),
    b = new Bear();

/** Animal.prototype.move = function () {
    console.log('Dig!')
}

Bear.prototype.move = function () {
    console.log('RUN!')
}

console.log(d, c, r, b);

d.move();
c.move();
r.move();
b.move();*/

function Ovcharka(){
    Dog.call(this);
}

Ovcharka.prototype = Object.create(Dog.prototype);
Ovcharka.prototype.constructor = Ovcharka;

function Bulldog(){
    Dog.call(this);
}

Bulldog.prototype = Object.create(Dog.prototype);
Bulldog.prototype.constructor = Bulldog;

console.log(new Ovcharka());