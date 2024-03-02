/**
 * Retrieves the value of a URL query string parameter by name.
 *
 * @param {string} paramName
 * @return {string|null} The value of the query string parameter, or null if not found.
 */
export function getQueryStringParam(paramName) {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName);
}
