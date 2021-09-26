function anagrams(word1:string, word2:string) {
    return formatString(word1) === formatString(word2);
    // let freq1 = [];
    // let freq2 = [];
    // for (let i = 0; i < word1.length; i++) {
    //     const asciiVal = word1.toLowerCase().charCodeAt(i);
    //     let offset = 0;
    //     if (asciiVal >= 65 && asciiVal <= 90)
    //         freq1[asciiVal-64]++;
    // }
}

module.exports = anagrams;

function formatString(str:string) {
    return str
        .replace(/[^\w]/g, '')  // removes white space
        .toLowerCase()          // make all lowercase
        .split('')              // turn into array so we can..
        .sort()                 // sort the array
        .join('');              // and rejoin into a string
}