var doubleSwap = function (word, c1, c2) {
    return word.split('').map(function (c) { return c === c1 ? c2 : c === c2 ? c1 : c; }).join('');
};
var a = doubleSwap("aabbccc", "a", "b");
console.log(a);
function wordToDecimal(w) {
    var word = w.toUpperCase();
    var decimalVal = 0;
    var highestLetter = 65;
    for (var i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) > highestLetter)
            highestLetter = word.charCodeAt(i);
    }
    highestLetter -= 64;
    var base = highestLetter + 10;
    console.log("base: " + base);
    for (var i = 0; i < word.length; i++) {
        var currentLetter = word.charCodeAt(word.length - 1 - i) - 65 + 10;
        decimalVal += currentLetter * (Math.pow(base, i));
    }
    return decimalVal;
}
console.log("Edabit", wordToDecimal("Edabit"));
"a";
