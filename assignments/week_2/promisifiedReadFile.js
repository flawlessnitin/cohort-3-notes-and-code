const fs = require("node:fs");

// fs.readFile("a.txt", "utf-8", function(error, data) {
//   console.log(data)
// })
function getData(resolve, reject) {
  return fs.readFile("a.txt", "utf-8", function(error, data) {
    if(error) {
      reject(error)
    }
    resolve(data);
  })
}
function promosifiedReadFile() {
  return new Promise(getData)
}
function callback(data) {
  console.log(data)
}
promosifiedReadFile().then(callback)
