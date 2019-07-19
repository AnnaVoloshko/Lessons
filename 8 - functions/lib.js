var str = 'abcdefghijklmnopqrstuvwxyz';

function rand (min, max) {
    return Math.round(Math.random() * (max + min) - min);

}

function roar(lettersCount) {
    var newWord ='';
    letters = lettersCount || 0;
    for (var letterIteration = lettersCount; letterIteration > 0; letterIteration--) {
        var letterIndex = Math.round(Math.random() * (str.length - 1));
        newWord += str[letterIndex];
    }
    
    return newWord;
}

function randString(){
    return roar(rand(0, 100));
}