function wordToDecimal(word) {
    var decimalVal = 0;
    var highestLetter = 65;
    for (var i = 0; i < word.length; i++) {
        if (word.toUpperCase().charCodeAt(i) > highestLetter)
            highestLetter = word.toUpperCase().charCodeAt(i);
    }
    highestLetter -= 64;
    var base = highestLetter + 10;
    console.log('base: ' + base);
    for (var i = 0; i < word.length; i++) {
        var currentLetter = word.toUpperCase().charCodeAt(word.length - 1 - i) - 65 + base;
        decimalVal += Math.pow(currentLetter, (base * i));
    }
    return decimalVal;
}
console.log('Edabit', wordToDecimal('Edabit'));
//Nothing in this application works
function getLength(array) {
    var length = 0;
    if ((array.length === 1) && (array[0][0] === undefined))
        return 1;
    else
        for (var i = 0; i < array.length; i++)
            length += getLength(array[i]);
    return length;
}
console.log(getLength([1, [2, 3]]));
