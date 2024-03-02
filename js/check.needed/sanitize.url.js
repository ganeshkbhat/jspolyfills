/**
 * Sanitize a URL.
 *
 * Source @braintree/sanitize-url
 * <https://github.com/braintree/sanitize-url>
 *
 * @param {string} url
 * @return {string}
 */
function sanitizeUrl(url) {
  if (!url) {
      return "about:blank";
  }

  var invalidProtocolRegex = /^(%20|\s)*(javascript|data|vbscript)/im;
  var ctrlCharactersRegex = /[^\x20-\x7EÀ-ž]/gim;
  var urlSchemeRegex = /^([^:]+):/gm;
  var relativeFirstCharacters = [".", "/"];

  function _isRelativeUrlWithoutProtocol(url) {
      return relativeFirstCharacters.indexOf(url[0]) > -1;
  }

  var sanitizedUrl = url.replace(ctrlCharactersRegex, "").trim();
  if (_isRelativeUrlWithoutProtocol(sanitizedUrl)) {
      return sanitizedUrl;
  }

  var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
  if (!urlSchemeParseResults) {
      return sanitizedUrl;
  }

  var urlScheme = urlSchemeParseResults[0];
  if (invalidProtocolRegex.test(urlScheme)) {
      return "about:blank";
  }

  return sanitizedUrl;
}