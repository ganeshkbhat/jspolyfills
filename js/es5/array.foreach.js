// ES5 15.4.4.18 Array.prototype.forEach ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fun /*, thisp */ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== "function") {
          throw TypeError();
      }

      var thisp = arguments[1],
          i;
      for (i = 0; i < len; i++) {
          if (i in t) {
              fun.call(thisp, t[i], i, t);
          }
      }
  };
}