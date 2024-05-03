// index.js

// Import the Express framework
const express = require('express');
const path = require('path');
const app = express();
// Middleware to enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // Allow requests from http://localhost:3001
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for your views (optional, but recommended)
app.set('views', path.join(__dirname, 'views'));
const Demorouter= require('./routes/routes')
const ApiRoutes=require('./routes/apiRoutes')
// Create an instance of the Express application

app.use('/api',ApiRoutes)
app.use('/demo',Demorouter)


// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
