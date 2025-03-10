
// 1. Positive Lookahead: o/p: Matches digits that are followed by px.
// let regex = /\d+(?=px)(?=\D)/ // /\d+(?=px)/;
// let str = "The width is 200px, and height is 150px.";
// console.log(str.match(regex));  // ["200", "150"]

// 2. Negative Lookahead: o/p :  Matches digits that are not followed by px.
// let regex = /\d+(?!px)/;
// let str = "The width is 200px, and height is 150em.";
// console.log(str.match(regex));  // ["150"]

let regex = /\d+(?!px)(?=\D)/;
let str = "The width is 200px, and height is 150em.";
console.log(str.match(regex));  // ["150"]
/* 
Explanation of changes:
\d+ — This still matches one or more digits.
(?!px) — This is a negative lookahead to make sure that the match isn't followed by px. This part works as before.
(?=\D) — This is a positive lookahead to ensure that the number is followed by a non-digit character (i.e., a unit like em, rem, etc.).
*/



