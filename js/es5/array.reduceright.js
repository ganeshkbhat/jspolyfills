// ES5 15.4.4.22 Array.prototype.reduceRight ( callbackfn [, initialValue ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/ReduceRight
if (!Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function (callbackfn /*, initialValue */ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof callbackfn !== "function") {
          throw TypeError();
      }

      // no value to return if no initial value, empty array
      if (len === 0 && arguments.length === 1) {
          throw TypeError();
      }

      var k = len - 1;
      var accumulator;
      if (arguments.length >= 2) {
          accumulator = arguments[1];
      }
      else {
          do {
              if (k in this) {
                  accumulator = this[k--];
                  break;
              }

              // if array contains no values, no initial value to return
              if (--k < 0) {
                  throw TypeError();
              }
          }
          while (true);
      }

      while (k >= 0) {
          if (k in t) {
              accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
          }
          k--;
      }

      return accumulator;
  };
}