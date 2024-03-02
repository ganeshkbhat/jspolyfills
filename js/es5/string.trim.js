//----------------------------------------------------------------------
// ES5 15.5 String Objects
//----------------------------------------------------------------------

//
// ES5 15.5.4 Properties of the String Prototype Object
//


// ES5 15.5.4.20 String.prototype.trim()
if (!String.prototype.trim) {
  String.prototype.trim = function () {
      return String(this).replace(/^\s+/, '').replace(/\s+$/, '');
  };
}