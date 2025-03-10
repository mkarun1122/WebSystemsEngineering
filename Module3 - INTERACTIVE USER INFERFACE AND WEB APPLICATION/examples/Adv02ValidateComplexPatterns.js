// let dob = "26/02/2025";
// let dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

// console.log(dobRegex.test(dob));  // true

//   US Social Security Number (SSN):
let ssn = "123-45-6789";
let ssnRegex = /^\d{3}-\d{2}-\d{4}$/;

console.log(ssnRegex.test(ssn));  // true
