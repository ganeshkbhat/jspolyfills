/**
 * Simple (en-us) pluralizer.
 *
 * This obviously doesn't support all english edge-cases, but it's suitable for
 * most purposes. Based on https://stackoverflow.com/a/39835908.
 * For a more robust/complete solution, see https://github.com/plurals/pluralize.
 *
 * @param {string} word The subject of the count.
 * @param {number} count What to count.
 * @param {string} [suffix] The suffix that will make the specified word plural. Defaults to "s" if not specified.
 * @param {boolean} [inclusive] Whether to prefix with the number (e.g. 3 turtles). Defaults to false if not specified.
 *
 * @return {string} The pluralized version of the word, or its singular form.
 *
 * @example
 *     maybePluralize('turtle', 0); // turtles
 *     maybePluralize('turtle', 0, 's', true); // 0 turtles
 *     maybePluralize('turtle', 0, 's', false); // turtles
 *
 *     maybePluralize('turtle', 1); // turtle
 *     maybePluralize('turtle', 1, 's', true); // 1 turtle
 *     maybePluralize('turtle', 1, 's', false); // turtle
 *
 *     maybePluralize('turtle', 2); // turtles
 *     maybePluralize('turtle', 2, 's', true); // 2 turtles
 *     maybePluralize('turtle', 2, 's', false); // turtles
 *
 *     maybePluralize('fox', 3, 'es'); // foxes
 *     maybePluralize('fox', 3, 'es', true); // 3 foxes
 *     maybePluralize('fox', 3, 'es', false); // foxes
 */
var maybePluralize = function (word, count, suffix, inclusive) {
  if (suffix === void 0) {
      suffix = "s";
  }

  if (inclusive === void 0) {
      inclusive = false;
  }

  if (inclusive) {
      return count + " " + word + (count !== 1 ? suffix : "");
  } else {
      return word + (count !== 1 ? suffix : "");
  }
};