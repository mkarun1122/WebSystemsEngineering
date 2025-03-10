let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = "test@examplecom";
console.log(emailRegex.test(email));  // true
