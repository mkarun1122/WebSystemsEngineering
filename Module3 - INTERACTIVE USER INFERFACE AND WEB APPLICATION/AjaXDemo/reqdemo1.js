// Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Configure the request
xhr.open('GET', 'data.json', true);  // GET request to 'data.json' file

// Define a callback function to handle the response
xhr.onload = function() {
  if (xhr.status === 200) {  // Check if the request was successful
    let data = JSON.parse(xhr.responseText);  // Parse the response as JSON
    console.log(data);  // Use the data (e.g., update the page)
  }
};

// Send the request
xhr.send();
