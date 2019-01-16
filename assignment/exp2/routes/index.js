const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "welcome.html"));
});
router.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "users.html"));
});

module.exports = router;
