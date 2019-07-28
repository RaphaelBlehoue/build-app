import '@babel/polyfill';
import http from 'http';

function requestHandler(res) {
  res.writeHead(200, { 'Content-Type': 'Text/plain' });
  res.end('Hello Raphael detaillons les processus de dev nodeJS et React via docker');
}

const server = http.createServer(requestHandler);
server.listen(9099);
