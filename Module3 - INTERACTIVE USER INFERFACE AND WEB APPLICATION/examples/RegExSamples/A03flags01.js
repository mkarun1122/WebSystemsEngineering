let regex = /abc/gi;
let str = "ABC  DFC abc ";
console.log(str.match(regex));  // ["ABC", "abc", "AbC"]
