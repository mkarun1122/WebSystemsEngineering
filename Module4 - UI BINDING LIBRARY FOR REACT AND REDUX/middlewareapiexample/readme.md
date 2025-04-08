
Step 1: Create a React App
If you haven’t already created your React app, do so by running:

npx create-react-app api-middleware-example

Step 2: Install Axios
Axios is a popular library for making HTTP requests. You can install it via npm:

npm install axios

Step 3: Set Up API Service (Middleware)
Create a service file to handle API calls. Inside your src folder, create a new file called apiService.js:

// src/apiService.js
import axios from 'axios';

// Set up a base URL for all your requests (e.g., your backend API)
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your actual API base URL
  timeout: 10000, // Optional timeout value for requests
});

// You can set up request interceptors to manipulate requests before sending
api.interceptors.request.use(
  (config) => {
    // Modify config here, e.g., add Authorization header if needed
    // config.headers['Authorization'] = `Bearer ${yourAuthToken}`;
    console.log('Request sent: ', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// You can also set up response interceptors to handle API responses
api.interceptors.response.use(
  (response) => {
    // Do something with the response data
    console.log('Response received: ', response);
    return response;
  },
  (error) => {
    // Handle errors globally here
    console.error('Error occurred: ', error);
    return Promise.reject(error);
  }
);

export default api;


Step 4: Using the API Service in Your React Components
Now you can use this api service inside your components to make API calls. Here’s an example of using it in a functional component with useEffect to fetch data:

// src/App.js
import React, { useState, useEffect } from 'react';
import api from './apiService';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data using the API service
    api.get('/posts')  // Fetch posts from the API
      .then((response) => {
        setPosts(response.data); // Set the posts data
      })
      .catch((error) => {
        setError(error.message); // Set any error message
      });
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


Step 5: Start the Development Server
Now, you can run your React app to see everything in action.

Explanation:
apiService.js: This file contains a wrapper around axios where you can add interceptors to handle API request/response logic. You can add logic like adding tokens, logging requests, and handling errors in one place.

App.js: This file uses the apiService.js to make API requests. Inside useEffect, we fetch data from the /posts endpoint of the API and display it. If an error occurs, it will be caught and displayed.

Optional Step: Handling Authentication
If you need to add authentication (e.g., adding a token to the request header), you can modify the interceptor like so:

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Retrieve token from local storage or other means
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


Summary
You set up an API service using Axios.

You used request and response interceptors to handle API logic globally (like authentication and error handling).

The React component fetches data from an API and displays it.

 