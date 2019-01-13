const http = require("http");
const fs = require("fs");
const routes = require("./routes");

function requestListener(req, res) {}
//One way to decLARE server
//http.createServer(requestListener);

const server = http.createServer(routes);

server.listen(3000,()=>{
  console.log('Listening to port 3000');
});
