// class Rectangle {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color
//   }
//   area() {
//     const area = this.width * this.height;
//     return area;
//   }
//   paint() {
//     console.log(`Painting with color ${this.color}`)
//   }
// }

// const obj = new Rectangle(10, 20, 30);
// const area = obj.area();
// console.log("Area:- ", area)

// Writing our own promise
// First have reference a little bit from /assignments/week_2/promisifiedCleanFile.js
class Promise2 {
  constructor(fn) {
    const afterDone = () => {
      this.resolve();
    }
    fn(afterDone);
  }
  then(callback) {
    this.resolve = callback;
  }
}
function readTheFile(resolve) {
  setTimeout(function () {
    console.log("callback based setTimeout completed");
    resolve();
  }, 3000);
}

function setTimeoutPromisified() {
  return new Promise2(readTheFile);
}

let p = setTimeoutPromisified();
function callback() {
  console.log("Callback has been called!!");
}

p.then(callback);
