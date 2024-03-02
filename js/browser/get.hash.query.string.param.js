/**
 * Retrieves the value of a hash query string parameter by name.
 *
 * Hat tip: https://stackoverflow.com/a/57018898
 *
 * @param {string} paramName
 * @return {string|null} The value of the hash query string parameter, or null if not found.
 */
export function getHashQueryStringParam(paramName) {
  const params = new URLSearchParams(window.location.hash.substr(1));
  return params.get(paramName);
}