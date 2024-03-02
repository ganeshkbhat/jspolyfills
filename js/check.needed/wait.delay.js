/**
 * JavaScript function to wait/delay for a specified period of time (in
 * milliseconds) before executing a function.
 *
 * @param {number} ms
 */
function wait(ms) {
  return new Promise(function (resolve) {
      setTimeout(resolve, ms);
  });
}

//
// Example usage
//

// Wait one second, then write "I waited long enough!" to the console.
wait(1000).then(function () {
  console.log("I waited long enough!");
});