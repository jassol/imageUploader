const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const api = require('./server/api.js');
const auth = require('./server/auth.js')

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// All API routes mounted on '/api'
app.use("/api", api);

// All auth routes mounted on '/auth'
app.use('/auth', auth);

// Production environment static file routing
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'build')));

  // Block any requests for a file with an extension
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// 404 handling middleware
app.use('*', (req, res) => {
  res.status(404).send('Oops. The page you are looking for cannot be found')
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error Handling Middleware')
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(port, () => console.log(`Listening on port ${port}`));
