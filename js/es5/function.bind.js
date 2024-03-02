//----------------------------------------------------------------------
// ES5 15.3 Function Objects
//----------------------------------------------------------------------

//
// ES5 15.3.4 Properties of the Function Prototype Object
//

// ES5 15.3.4.5 Function.prototype.bind ( thisArg [, arg1 [, arg2, ... ]] )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind) {
  Function.prototype.bind = function (o) {
      if (typeof this !== 'function') {
          throw TypeError("Bind must be called on a function");
      }
      var slice = [].slice,
          args = slice.call(arguments, 1),
          self = this,
          bound = function () {
              return self.apply(this instanceof nop ? this : o,
                  args.concat(slice.call(arguments)));
          };

      function nop() {}
      nop.prototype = self.prototype;
      bound.prototype = new nop();
      return bound;
  };
}