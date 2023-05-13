const app = require('../app.js');
const http = require('http');
const normalizePort = require('./normalizePort.js');

const mongoose = require('mongoose')

const Shorturl = require('../models/url.model.js')

// Get port from environment and store in Express.

const PORT = normalizePort(process.env.PORT || '3000');

app.set('port', PORT);

// Create HTTP server.
const server = http.createServer(app);

mongoose.connect('mongodb://127.0.0.1:27017/url-shortne', {
  dbName: 'url-shortner',
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('mongoose connected'))
.catch((error) => console.log('error connecting to mongoose:', error));


// start the server
server.listen(PORT,()=>{
  console.log('Starting server on port '  + PORT);
})