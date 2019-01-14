const SHA256 = require("crypto-js/sha256");
let data = SHA256("Vidit").toString();
console.log(data);
let name = "Vidi";
hashName = SHA256(name).toString();
console.log(hashName);
console.log(hashName == data);
