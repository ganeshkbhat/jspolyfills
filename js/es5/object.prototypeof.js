
if (!Object.getPrototypeOf) {
  if (({}).__proto__ === Object.prototype && ([]).__proto__ === Array.prototype) {
    Object.getPrototypeOf = function getPrototypeOf(object) {
      return object.__proto__;
    };
  } else {
    Object.getPrototypeOf = function getPrototypeOf(object) {
      // May break if the constructor has been changed or removed
      return object.constructor ? object.constructor.prototype : void 0;
    };
  }
}
