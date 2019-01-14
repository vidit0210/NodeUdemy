const express = require("express"); //exports a function
const app = express();
const http = require("http");
app.use((req, res, next) => {
  console.log("In the MiddleWare");

  next(); // Allows the request to the next middleware
});
app.use((req, res, next) => {
  console.log("Came from Initial Middleware");
  res.send("<h2>Hello from Express</h2>");
});
app.listen(3003,()=>{
    console.log('Listening to The 3003');
}) //Creates Port and Listen to the Server
