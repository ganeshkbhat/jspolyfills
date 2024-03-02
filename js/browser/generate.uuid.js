/**
 * UUID (Universally Unique Identifier) version 4 generator.
 *
 * @return {string} UUID (Universally Unique Identifier) version 4 generator.
 */
function uuid4() {
  var isUndefined = function (value) {
      return typeof value === "undefined";
  };

  var crypto = window.crypto || window.msCrypto;

  if (!isUndefined(crypto) && crypto.getRandomValues) {
      // Use window.crypto API if available
      var arr = new Uint16Array(8);
      crypto.getRandomValues(arr);

      // set 4 in byte 7
      arr[3] = (arr[3] & 0xfff) | 0x4000;

      // set 2 most significant bits of byte 9 to '10'
      arr[4] = (arr[4] & 0x3fff) | 0x8000;

      var pad = function (num) {
          var v = num.toString(16);
          while (v.length < 4) {
              v = "0" + v;
          }
          return v;
      };

      return (
          pad(arr[0]) +
          pad(arr[1]) +
          pad(arr[2]) +
          pad(arr[3]) +
          pad(arr[4]) +
          pad(arr[5]) +
          pad(arr[6]) +
          pad(arr[7])
      );
  } else {
      // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (
          c
      ) {
          var r = (Math.random() * 16) | 0,
              v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
      });
  }
}