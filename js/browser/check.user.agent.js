// A tiny user agent checking RegExp for analytics purposes

// The order matters with these
const OS_REGEXPS = [
  /(iphone os|ipad os) ([^);]+)/i,
  /(mac) os x ([^);]+)/i,
  /(windows) ([^);]+)/i,
  /(android) ([^);]+)/i,
  /(linux) ([^);]+)/i
]

// The order matters with these
const BROWSER_REGEXPS = [
  /(firefox)\/([^\s)]+)/i,
  /(edge)\/([^\s)]+)/i,
  /(chrome)\/([^\s)]+)/i,
  /(safari)\/([^\s)]+)/i,
  /ms(ie)\/([^\s)]+)/i
]

export default function parseUserAgent (ua = navigator.userAgent) {
  ua = ua.toLowerCase()
  let [, os = 'other', os_version = '0'] = ua.match(
    OS_REGEXPS.find(re => re.test(ua))
  )
  if (os === 'iphone os' || os === 'ipad os') os = 'ios'
  const [, browser = 'other', browser_version = '0'] = ua.match(
    BROWSER_REGEXPS.find(re => re.test(ua))
  )
  return { os, os_version, browser, browser_version }
}

// ---------------------------------------------------------------------------
// ES5 version:
// ---------------------------------------------------------------------------

var OS_REGEXPS = [
    /(iphone os|ipad os) ([^);]+)/i,
    /(mac) os x ([^);]+)/i,
    /(windows) ([^);]+)/i,
    /(android) ([^);]+)/i,
    /(linux) ([^);]+)/i
];

var BROWSER_REGEXPS = [
    /(firefox)\/([^\s)]+)/i,
    /(edge)\/([^\s)]+)/i,
    /(chrome)\/([^\s)]+)/i,
    /(safari)\/([^\s)]+)/i,
    /ms(ie)\/([^\s)]+)/i
];

function parseUserAgent(ua) {
    if (ua === void 0) {
        ua = navigator.userAgent;
    }

    ua = ua.toLowerCase();
    var _a = ua.match(
            OS_REGEXPS.find(function (re) {
                return re.test(ua);
            })
        ),
        _b = _a[1],
        os = _b === void 0 ? "other" : _b,
        _c = _a[2],
        os_version = _c === void 0 ? "0" : _c;

    if (os === "iphone os" || os === "ipad os") {
        os = "ios";
    }
    var _d = ua.match(
            BROWSER_REGEXPS.find(function (re) {
                return re.test(ua);
            })
        ),
        _e = _d[1],
        browser = _e === void 0 ? "other" : _e,
        _f = _d[2],
        browser_version = _f === void 0 ? "0" : _f;

    return {
        os: os,
        os_version: os_version,
        browser: browser,
        browser_version: browser_version
    };
}

//
// Usage:

parseUserAgent(navigator.userAgent);
// {os: "mac", os_version: "10_15_6", browser: "safari", browser_version: "605.1.15"} = $1