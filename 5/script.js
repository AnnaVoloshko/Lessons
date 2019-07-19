/*var guess, i=0,
    rand = Math.round(Math.random()*5);
/*while (guess !== rand) {
    guess =+prompt('Guess a number!');
    alert('Try again!');
    console.log(guess, rand);
}*/

/*
do{
    guess = prompt('Guess a number!');
    i++;
} while (guess !== null && +guess !== rand);

console.log('Good job! You did it in ' + i + ' times')*/


for (var index = 1; index < 10; index++) {
    if (!(index % 2)) break;
    console.log(index);
}