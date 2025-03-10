let phone = "1234567890";
let formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
console.log(formattedPhone);  // "(123) 456-7890"
