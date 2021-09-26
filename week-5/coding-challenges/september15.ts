function wordToDecimal(word:string):number {
    let decimalVal = 0;
    let highestLetter = 65;
    for (let i = 0; i < word.length; i++) {
        if (word.toUpperCase().charCodeAt(i) > highestLetter) highestLetter = word.toUpperCase().charCodeAt(i);
    }
    highestLetter-=64;
    const base = highestLetter + 10;
    console.log('base: ' + base);
    for (let i = 0; i < word.length; i++) {
        let currentLetter = word.toUpperCase().charCodeAt(word.length-1-i) - 65 + base;
        decimalVal += currentLetter**(base*i);
    }
    return decimalVal;
}

console.log('Edabit', wordToDecimal('Edabit'));


//Nothing in this application works


function getLength(array) {
    let length = 0;
    if ( (array.length === 1) && (array[0][0] === undefined) ) return 1;
    else for (let i = 0; i < array.length; i++) length += getLength(array[i]);
    return length;
}
console.log(getLength([1, [2, 3]]));