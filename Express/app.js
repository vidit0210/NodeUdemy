const express = require("express"); //exports a function
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const ShopRoutes = require("./routes/shop");
// app.use((req, res, next) => {
//   console.log("In the MiddleWare");
//   next(); // Allows the request to the next middleware
// });
app.use(bodyParser.urlencoded({ extended: false })); // Handles request body Parsing
app.use(adminRoutes);
app.use(ShopRoutes);
app.use("/", (req, res, nex) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});


// app.use((req, res, next) => {
//   console.log("Came from Initial Middleware");
//   res.send("<h2>Hello from Express</h2>");
// });
const PORT = 3003;
app.listen(PORT, () => {
  console.log("Listening to The 3003");
}); //Creates Port and Listen to the Server
