const http = require("http");
const route = require("./routes");
const server = http.createServer(route);
server.listen(3003, () => {
  console.log("Listening to Port 3003");
});
