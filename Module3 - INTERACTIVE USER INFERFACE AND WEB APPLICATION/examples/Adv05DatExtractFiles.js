// Data Validation and Extraction from Complex Structures

let data = '{name: "John", age: 30, city: "New York"}';
let regex = /(\w+):\s*"([^"]+)"/g;
let matches;
let extractedData = {};

while ((matches = regex.exec(data)) !== null) {
  extractedData[matches[1]] = matches[2];  // matches[1] is the key, matches[2] is the value
}

console.log(extractedData);
// Output: { name: "John", age: "30", city: "New York" }
