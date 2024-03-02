// ES5 15.2.3.14 Object.keys ( O )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = function (o) {
      if (o !== Object(o)) {
          throw TypeError('Object.keys called on non-object');
      }
      var ret = [],
          p;
      for (p in o) {
          if (Object.prototype.hasOwnProperty.call(o, p)) {
              ret.push(p);
          }
      }
      return ret;
  };
}