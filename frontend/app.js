const http = require('http');

const server = http.createServer((req,res)=>{
  res.writeHead(200);
  res.end("Frontend running");
});

server.listen(3000);
