function User(id, name) { //конструктор
    this.id = id;
    this.name = name;

    this.sayName = function() { 
        console.log (this.name);
    }
};

User.prototype.sayHello = function () {
    console.log('Hello', this.name)
}

var user = new User(1, 'Vasya');
var user2 = new User(2, 'Lora');
var user3 = new User(3, 'Katya');

user.sayName();

console.log(user, user2, user3);

String.prototype.circus = function (){
    console.log(this.valueOf())
}

'string'.circus();