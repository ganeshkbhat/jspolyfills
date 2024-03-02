// ES 15.2.3.7 Object.defineProperties ( O, Properties )
if (typeof Object.defineProperties !== "function") {
  Object.defineProperties = function (o, properties) {
      if (o !== Object(o)) {
          throw TypeError("Object.defineProperties called on non-object");
      }
      var name;
      for (name in properties) {
          if (Object.prototype.hasOwnProperty.call(properties, name)) {
              Object.defineProperty(o, name, properties[name]);
          }
      }
      return o;
  };
}