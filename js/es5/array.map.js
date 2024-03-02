// ES5 15.4.4.19 Array.prototype.map ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Map
if (!Array.prototype.map) {
  Array.prototype.map = function (fun /*, thisp */ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== "function") {
          throw TypeError();
      }

      var res = [];
      res.length = len;
      var thisp = arguments[1],
          i;
      for (i = 0; i < len; i++) {
          if (i in t) {
              res[i] = fun.call(thisp, t[i], i, t);
          }
      }

      return res;
  };
}