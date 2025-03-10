/*
//  1. test example 
let regex = /abc/;
console.log(regex.test('abcdef'));  // true



// .exec(): Executes a search for a match in a string. Returns an array with the match or null if no match is found.
let regex = /(\d+)/;
let result = regex.exec("There are 123 apples");
console.log(result);  // ["123", "123"]

// .match(): Same as .exec(), but it’s a method for strings.
let str = "There are 123 apples";
let regex = /\d+/;
let result = str.match(regex);
console.log(result);  // ["123"]

*/


// .replace(): Replaces matched text with a new string.

let str = "Hello world!";
let regex = /world/;
let newStr = str.replace(regex, "JavaScript");
console.log(newStr);  // "Hello JavaScript!"

