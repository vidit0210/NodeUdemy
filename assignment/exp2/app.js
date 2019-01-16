const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mainRouter = require("./routes/index");
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname,'public'))) //Serve Static Files like CSS

app.use(mainRouter);
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "view", "404.html"));
});

app.listen(PORT, () => {
  console.log("Listening to Port", PORT);
});
