const fs = require("node:fs");

function readTheFile(sendTheFinalValueHere, reject) {
  fs.readFile("text.txt", "utf8", function (error, data) {
    error && reject(error)
    data && sendTheFinalValueHere(data);
  });
}
function readFile(fileName) {
  // read the file and return it's value
  return new Promise(readTheFile);
}

const p = readFile();

function callback(contents) {
  console.log(contents);
}

p.then(callback); 
