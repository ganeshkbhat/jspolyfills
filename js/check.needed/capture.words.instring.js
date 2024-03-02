"use strict";

var WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g;
var WORDS_EXTENDED = /[A-Z\xC0-\xD6\xD8-\xDEА-Я]?[a-z\xDF-\xF6\xF8-\xFFа-я]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g;

function match(l3, x) {
    if (arguments.length === 1) {
        return function (m3) {
            return match(l3, m3);
        };
    }
    var n3 = x.match(l3);
    return n3 === null ? [] : n3;
}

function words(str) {
    return match(WORDS, str);
}

function wordsX(str) {
    return match(WORDS_EXTENDED, str);
}

// -------------------------------------------------------------------
// Usage
// -------------------------------------------------------------------

var wordsArray = words("this is a sentence... but only words are captured!?!");
console.log("wordsArray", wordsArray); // ["this", "is", "a", "sentence", "but", "only", "words", "are", "captured"]

var wordsOnlyAsciiArray = words("äÄçÇéÉêlorem-ipsumöÖÐþúÚ");
console.log("wordsOnlyAsciiArray", wordsOnlyAsciiArray); // ["lorem", "ipsum"]

var wordsXArray = wordsX("this is a sentence... but only extended words are captured, including spéçïãl çhârs!?!");
console.log("wordsXArray", wordsXArray); // ["this", "is", "a", "sentence", "but", "only", "extended", "words", "are", "captured", "including", "spéçïãl", "çhârs"]