
var relation = 'friend';

//var obj = Object();

/*user1.relation = 'friend';
user1.name='Anna';
user1.age = 25;
user1.hasExp = true;*/

var user2 = {
    name : 'Vasya',
    age : 18,
    hasExp : false
};

var user1 = {
    relation : 'friend',
    name : 'Anna',
    age : 25,
    hasExp : true,
    [relation]: user2 // для ECMAscript 6
};

/*user2.name='Vasya';
user2.age = 18;
user2.hasExp = false;*/

//user1[relation] = user2;
user1[user1.relation] = user2;
 

console.log(user1, user2);


//var arr = Array();
var arr = [];
arr[0]=1;
arr[1]=2;


console.log(arr);

