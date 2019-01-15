const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const router = express.Router();
router.get("/add-product", (req, res) => {
  //res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

//Same Path Can Be  used with different Methods
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
