const fs = require('fs')
const read_data = fs.readFileSync('./data.json')
const data = JSON.parse(read_data.toString());
data.name = 'Vidit';
data.age = 22;
const convet_to_JSON = JSON.stringify(data)
fs.writeFileSync('data.json', convet_to_JSON)