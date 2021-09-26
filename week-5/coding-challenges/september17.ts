const doubleSwap = (word, c1, c2):string => {
    return word.split('').map( (c) => c === c1 ? c2 : c === c2? c1 : c).join('');
}

const a = doubleSwap( "aabbccc", "a", "b");
console.log(a);


function wordToDecimal(w: string): number {
    const word = w.toUpperCase();
	let decimalVal = 0;
	let highestLetter = 65;
	for (let i = 0; i < word.length; i++) {
		if (word.charCodeAt(i) > highestLetter)
			highestLetter = word.charCodeAt(i);
	}
	highestLetter -= 64;
	const base = highestLetter + 10;
	console.log("base: " + base);
	for (let i = 0; i < word.length; i++) {
		let currentLetter =	word.charCodeAt(word.length - 1 - i) - 65 + 10;
		decimalVal += currentLetter * (base ** i);
	}
	return decimalVal;
}

console.log("Edabit", wordToDecimal("Edabit"));`a`