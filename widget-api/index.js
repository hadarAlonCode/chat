const express = require('express');
const http = require('http');
const routes = require('./routes/index');

const app = express();
const server = http.createServer(app);

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// Parse JSON request bodies
app.use(express.json());

app.use('/', routes)

// Start the server
const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
