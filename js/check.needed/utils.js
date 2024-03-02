const map = f => step => (a, c) => step(a, f(c));

const filter = predicate => step => (a, c) => predicate(c) ? step(a, c) : a;

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const curry = (f, arr = []) => (...args) => (
  a => a.length === f.length ? f(...a) : curry(f, a)
)([...arr, ...args]);

const transduce = curry((step, initial, xform, foldable) =>
  foldable.reduce(xform(step), initial)
);

const concatArray = (a, c) => a.concat([c]);

const toArray = transduce(concatArray, []);

const logStep = v => { console.log(v); return v; }

// https://gist.github.com/afuggini/ccc74896676751b50f471ec571ea9f5d

const sumArrayValues = (values) => {
  return values.reduce((p, c) => p + c, 0)
}

const weightedMean = (factorsArray, weightsArray) => {
  return sumArrayValues(factorsArray.map((factor, index) => factor * weightsArray[index])) / sumArrayValues(weightsArray)
}

weightedMean([251, 360, 210], [0.1, 0.5, 0.7]);
// => 270.8461538461539

// check this out
// https://gist.github.com/afuggini/9732769b51b114f88cd455ff070584b5


// nice script lists
// https://gist.github.com/afuggini/70a1951bf8352c36b4d9d0922324ca01


// https://gist.github.com/afuggini/70a1951bf8352c36b4d9d0922324ca01

// /*
//  * Inspiration from:
//  * https://github.com/addyosmani/memoize.js/blob/master/memoize.js
//  *
//  * Thanks Addy!
//  */
// (function (root, factory) {
//   if (typeof define === 'function' && define.amd) {
//       // AMD. Register as an anonymous module.
//       define([], factory);
//   } else if (typeof exports === 'object') {
//       // Node. Does not work with strict CommonJS, but
//       // only CommonJS-like environments that support module.exports,
//       // like Node.
//       module.exports = factory();
//   } else {
//       // Browser globals (root is window)
//       root.memoize = factory();
//   }
// }(this, function() {
//   "use strict";

//   var memoize = function(func) {
//     /* Your awesome module logic here */
//   };

//   return memoize;
// }));

// /*
//  * Inspiration (well… copy pasting more or less) from:
//  * https://github.com/ScottHamper/Cookies/blob/0.3.1/src/cookies.js#L127-L140
//  *
//  * Thanks Scott!
//  */
// (function (global) {
//   'use strict';

//   var MyModule = function () {
//     /* Your awesome module logic here… */
//   };

//   /* …and here */
//   MyModule.foo = 'bar';

//   // AMD support
//   if (typeof define === 'function' && define.amd) {
//       define(function () { return MyModule; });
//   // CommonJS and Node.js module support.
//   } else if (typeof exports !== 'undefined') {
//       // Support Node.js specific `module.exports` (which can be a function)
//       if (typeof module !== 'undefined' && module.exports) {
//           exports = module.exports = MyModule;
//       }
//       // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
//       exports.MyModule = MyModule;
//   } else {
//       global.MyModule = MyModule;
//   }
// })(this);


// https://gist.github.com/afuggini/3b9430a9f3c6f181f16c4ac66cdad958#file-extend-js-L2

// var extend = function() {
//   var extended = {};

//   for(key in arguments) {
//     var argument = arguments[key];
//     for (prop in argument) {
//       if (Object.prototype.hasOwnProperty.call(argument, prop)) {
//         extended[prop] = argument[prop];
//       }
//     }
//   }

//   return extended;
// };

