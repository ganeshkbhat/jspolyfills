/**
 * Wrap `value` with double quotes, and escape internal double quotes.
 *
 * @param {string|number|boolean} value
 * @return {string}
 * @example
 *     quote(1); // "\"1\""
 *     quote("someValue"); // "\"someValue\""
 */
function quote(value) {
  return '"' + String(value).replace(/"/g, '\\"') + '"';
}