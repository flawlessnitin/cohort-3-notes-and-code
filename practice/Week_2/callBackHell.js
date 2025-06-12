// Callback hell
// setTimeout(function () {
//   console.log("hi");
//   setTimeout(function () {
//     console.log("Hello"),
//       setTimeout(() => {
//         console.log("Hello Dev!");
//       }, 5000);
//   }, 3000);
// }, 1000);



function setTimeoutPromisified(duration) {
  return new Promise(function(resolve) {
    setTimeout(resolve, duration)
  })
}
// promises hell
// setTimeoutPromisified(1000).then(function() {
//   console.log("hi");
//   setTimeoutPromisified(3000).then(function() {
//     console.log("Hello");
//     setTimeoutPromisified(5000).then(function() {
//       console.log("Hello There")
//     })
//   })
// })
// Promise chaning
setTimeoutPromisified(1000).then(function() {
  console.log("h1");
  return setTimeoutPromisified(3000);
}).then(function() {
  console.log("hello");
  return setTimeoutPromisified(5000);
}).then(function() {
  console.log("Hello there")
})
