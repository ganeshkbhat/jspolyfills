
// ES5 15.2.3.5 Object.create ( O [, Properties] )
if (typeof Object.create !== "function") {
  Object.create = function (prototype, properties) {
      if (typeof prototype !== "object") {
          throw TypeError();
      }

      function Ctor() {}
      Ctor.prototype = prototype;
      var o = new Ctor();
      if (prototype) {
          o.constructor = Ctor;
      }
      if (properties !== undefined) {
          if (properties !== Object(properties)) {
              throw TypeError();
          }
          Object.defineProperties(o, properties);
      }
      return o;
  };
}