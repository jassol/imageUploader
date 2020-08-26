const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/index.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Local Authorization Route
app.get

// All API routes mounted on '/api'
app.use("/api", api)

app.listen(port, () => console.log(`Listening on port ${port}`));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error Handling Middleware')
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
