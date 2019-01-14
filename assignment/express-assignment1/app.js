const express = require("express");
const app = express();
// app.use((req, res, next) => {
//   console.log("In first middleWare");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("In the Second MiddleWare");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Result after the 2 middleware");
//   res.send("Here is your Result");
// });
app.use("/", (req, res, next) => {
  next();
});
app.use("/user", (req, res) => {
  res.send("List of Users");
});
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}`);
});
