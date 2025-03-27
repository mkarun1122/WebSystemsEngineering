let str = "I have 2 apples and 3 bananas for 5 people";
let regex =  /\d+/g;
let digits = str.match(regex);
console.log(digits);  // ["2", "3"]
