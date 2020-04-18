const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.end('Send this');
  }

  if (req.method === 'POST') {
    // here
  }
});

server.listen(3000);
