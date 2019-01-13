const SHA256 = require("crypto-js/sha256");
let data = SHA256("Vidit.").toString();
console.log(data);
