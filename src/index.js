import '@babel/polyfill';
import http from 'http';

function requestHandler(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Raphael detaillons les processus de dev nodeJS et React via docker');
}

const server = http.createServer(requestHandler);
server.listen(9099);
