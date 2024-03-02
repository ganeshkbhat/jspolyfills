// ES5 15.4.4.20 Array.prototype.filter ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Filter
if (!Array.prototype.filter) {
  Array.prototype.filter = function (fun /*, thisp */ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== "function") {
          throw TypeError();
      }

      var res = [];
      var thisp = arguments[1],
          i;
      for (i = 0; i < len; i++) {
          if (i in t) {
              var val = t[i]; // in case fun mutates this
              if (fun.call(thisp, val, i, t)) {
                  res.push(val);
              }
          }
      }

      return res;
  };
}