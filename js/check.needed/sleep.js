/**
 * JavaScript function to wait/delay for a specified period of time (in
 * milliseconds) before executing a function.
 *
 * @param {number} ms
 */
function sleep(ms) {
  let a = performance.now();
  while (performance.now() !== a + ms) {
    continue
  }
  return
}

function wait(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

//
// Example usage
//

// Wait one second, then write "I waited long enough!" to the console.
sleep(5000)
console.log("I waited long enough!");
wait(5000)
console.log("I waited long enough!");

// var elapsed_time = function(note){
//   var precision = 3; // 3 decimal places
//   var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
//   console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
//   start = process.hrtime(); // reset the timer
// }
// elapsed_time("recieved request 1")
// var start = process.hrtime();
// elapsed_time("recieved request 2")
