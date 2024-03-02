//    // ES5 15.2.3.3 Object.getOwnPropertyDescriptor ( O, P )
if (typeof Object.getOwnPropertyDescriptor !== "function") {
  Object.getOwnPropertyDescriptor = function (o, name) {
    if (o !== Object(o)) { throw TypeError(); }
    if (o.hasOwnProperty(name)) {
      return {
        value: o[name],
        enumerable: true,
        writable: true,
        configurable: true
      };
    }
  };
}