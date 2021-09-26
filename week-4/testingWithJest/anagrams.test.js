const anagrams = require('./anagrams.js');

describe('Anagram Test Suite', () => {
    test('anagrams function exists', () => {
        expect(typeof anagrams).toEqual('function');
    });
    test('"hello" is an anagram of "llohe"', () => {
        expect(anagrams('hello', 'llohe')).toBeTruthy();
    });
});