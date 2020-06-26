const fs = require("fs");
const readfile = "C:/Bhavi/Node_JSON_Programs/readfile.json";
const writefile = "C:/Bhavi/Node_JSON_Programs/writefile.json";
const file = require(readfile);
file.name = "Wipro Ltd";
fs.writeFileSync(writefile, JSON.stringify(file));