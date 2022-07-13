module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/nuxt-logo","2":"components/tutorial","3":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__(31)
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', { value: true });

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputStr) {
  return ["./", "../"].some((str) => inputStr.startsWith(str));
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }
  return input;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withLeadingSlash = withLeadingSlash;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutTrailingSlash = withoutTrailingSlash;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)["URLSearchParams"]))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', { value: true });

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (typeof val === "number" || typeof val === "boolean") {
    val = String(val);
  }
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputStr) {
  return ["./", "../"].some((str) => inputStr.startsWith(str));
}
const PROTOCOL_REGEX = /^\w+:(\/\/)?/;
const PROTOCOL_RELATIVE_REGEX = /^\/\/[^/]+/;
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return PROTOCOL_REGEX.test(inputStr) || acceptProtocolRelative && PROTOCOL_RELATIVE_REGEX.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.substring(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function withHttp(input) {
  return withProtocol(input, "http://");
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withoutProtocol(input) {
  return withProtocol(input, "");
}
function withProtocol(input, protocol) {
  const match = input.match(PROTOCOL_REGEX);
  if (!match) {
    return protocol + input;
  }
  return protocol + input.substring(match[0].length);
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function isEqual(a, b, opts = {}) {
  if (!opts.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!opts.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!opts.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isEqual = isEqual;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withHttp = withHttp;
exports.withHttps = withHttps;
exports.withLeadingSlash = withLeadingSlash;
exports.withProtocol = withProtocol;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutProtocol = withoutProtocol;
exports.withoutTrailingSlash = withoutTrailingSlash;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)["URLSearchParams"]))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const punycode = __webpack_require__(13);
const tr46 = __webpack_require__(27);

const specialSchemes = {
  ftp: 21,
  file: null,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

const failure = Symbol("failure");

function countSymbols(str) {
  return punycode.ucs2.decode(str).length;
}

function at(input, idx) {
  const c = input[idx];
  return isNaN(c) ? undefined : String.fromCodePoint(c);
}

function isASCIIDigit(c) {
  return c >= 0x30 && c <= 0x39;
}

function isASCIIAlpha(c) {
  return (c >= 0x41 && c <= 0x5A) || (c >= 0x61 && c <= 0x7A);
}

function isASCIIAlphanumeric(c) {
  return isASCIIAlpha(c) || isASCIIDigit(c);
}

function isASCIIHex(c) {
  return isASCIIDigit(c) || (c >= 0x41 && c <= 0x46) || (c >= 0x61 && c <= 0x66);
}

function isSingleDot(buffer) {
  return buffer === "." || buffer.toLowerCase() === "%2e";
}

function isDoubleDot(buffer) {
  buffer = buffer.toLowerCase();
  return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}

function isWindowsDriveLetterCodePoints(cp1, cp2) {
  return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
}

function isWindowsDriveLetterString(string) {
  return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}

function isNormalizedWindowsDriveLetterString(string) {
  return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}

function containsForbiddenHostCodePoint(string) {
  return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
}

function containsForbiddenHostCodePointExcludingPercent(string) {
  return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
}

function isSpecialScheme(scheme) {
  return specialSchemes[scheme] !== undefined;
}

function isSpecial(url) {
  return isSpecialScheme(url.scheme);
}

function defaultPort(scheme) {
  return specialSchemes[scheme];
}

function percentEncode(c) {
  let hex = c.toString(16).toUpperCase();
  if (hex.length === 1) {
    hex = "0" + hex;
  }

  return "%" + hex;
}

function utf8PercentEncode(c) {
  const buf = new Buffer(c);

  let str = "";

  for (let i = 0; i < buf.length; ++i) {
    str += percentEncode(buf[i]);
  }

  return str;
}

function utf8PercentDecode(str) {
  const input = new Buffer(str);
  const output = [];
  for (let i = 0; i < input.length; ++i) {
    if (input[i] !== 37) {
      output.push(input[i]);
    } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
      output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
      i += 2;
    } else {
      output.push(input[i]);
    }
  }
  return new Buffer(output).toString();
}

function isC0ControlPercentEncode(c) {
  return c <= 0x1F || c > 0x7E;
}

const extraPathPercentEncodeSet = new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);
function isPathPercentEncode(c) {
  return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
}

const extraUserinfoPercentEncodeSet =
  new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
function isUserinfoPercentEncode(c) {
  return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
}

function percentEncodeChar(c, encodeSetPredicate) {
  const cStr = String.fromCodePoint(c);

  if (encodeSetPredicate(c)) {
    return utf8PercentEncode(cStr);
  }

  return cStr;
}

function parseIPv4Number(input) {
  let R = 10;

  if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
    input = input.substring(2);
    R = 16;
  } else if (input.length >= 2 && input.charAt(0) === "0") {
    input = input.substring(1);
    R = 8;
  }

  if (input === "") {
    return 0;
  }

  const regex = R === 10 ? /[^0-9]/ : (R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/);
  if (regex.test(input)) {
    return failure;
  }

  return parseInt(input, R);
}

function parseIPv4(input) {
  const parts = input.split(".");
  if (parts[parts.length - 1] === "") {
    if (parts.length > 1) {
      parts.pop();
    }
  }

  if (parts.length > 4) {
    return input;
  }

  const numbers = [];
  for (const part of parts) {
    if (part === "") {
      return input;
    }
    const n = parseIPv4Number(part);
    if (n === failure) {
      return input;
    }

    numbers.push(n);
  }

  for (let i = 0; i < numbers.length - 1; ++i) {
    if (numbers[i] > 255) {
      return failure;
    }
  }
  if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
    return failure;
  }

  let ipv4 = numbers.pop();
  let counter = 0;

  for (const n of numbers) {
    ipv4 += n * Math.pow(256, 3 - counter);
    ++counter;
  }

  return ipv4;
}

function serializeIPv4(address) {
  let output = "";
  let n = address;

  for (let i = 1; i <= 4; ++i) {
    output = String(n % 256) + output;
    if (i !== 4) {
      output = "." + output;
    }
    n = Math.floor(n / 256);
  }

  return output;
}

function parseIPv6(input) {
  const address = [0, 0, 0, 0, 0, 0, 0, 0];
  let pieceIndex = 0;
  let compress = null;
  let pointer = 0;

  input = punycode.ucs2.decode(input);

  if (input[pointer] === 58) {
    if (input[pointer + 1] !== 58) {
      return failure;
    }

    pointer += 2;
    ++pieceIndex;
    compress = pieceIndex;
  }

  while (pointer < input.length) {
    if (pieceIndex === 8) {
      return failure;
    }

    if (input[pointer] === 58) {
      if (compress !== null) {
        return failure;
      }
      ++pointer;
      ++pieceIndex;
      compress = pieceIndex;
      continue;
    }

    let value = 0;
    let length = 0;

    while (length < 4 && isASCIIHex(input[pointer])) {
      value = value * 0x10 + parseInt(at(input, pointer), 16);
      ++pointer;
      ++length;
    }

    if (input[pointer] === 46) {
      if (length === 0) {
        return failure;
      }

      pointer -= length;

      if (pieceIndex > 6) {
        return failure;
      }

      let numbersSeen = 0;

      while (input[pointer] !== undefined) {
        let ipv4Piece = null;

        if (numbersSeen > 0) {
          if (input[pointer] === 46 && numbersSeen < 4) {
            ++pointer;
          } else {
            return failure;
          }
        }

        if (!isASCIIDigit(input[pointer])) {
          return failure;
        }

        while (isASCIIDigit(input[pointer])) {
          const number = parseInt(at(input, pointer));
          if (ipv4Piece === null) {
            ipv4Piece = number;
          } else if (ipv4Piece === 0) {
            return failure;
          } else {
            ipv4Piece = ipv4Piece * 10 + number;
          }
          if (ipv4Piece > 255) {
            return failure;
          }
          ++pointer;
        }

        address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;

        ++numbersSeen;

        if (numbersSeen === 2 || numbersSeen === 4) {
          ++pieceIndex;
        }
      }

      if (numbersSeen !== 4) {
        return failure;
      }

      break;
    } else if (input[pointer] === 58) {
      ++pointer;
      if (input[pointer] === undefined) {
        return failure;
      }
    } else if (input[pointer] !== undefined) {
      return failure;
    }

    address[pieceIndex] = value;
    ++pieceIndex;
  }

  if (compress !== null) {
    let swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex !== 0 && swaps > 0) {
      const temp = address[compress + swaps - 1];
      address[compress + swaps - 1] = address[pieceIndex];
      address[pieceIndex] = temp;
      --pieceIndex;
      --swaps;
    }
  } else if (compress === null && pieceIndex !== 8) {
    return failure;
  }

  return address;
}

function serializeIPv6(address) {
  let output = "";
  const seqResult = findLongestZeroSequence(address);
  const compress = seqResult.idx;
  let ignore0 = false;

  for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
    if (ignore0 && address[pieceIndex] === 0) {
      continue;
    } else if (ignore0) {
      ignore0 = false;
    }

    if (compress === pieceIndex) {
      const separator = pieceIndex === 0 ? "::" : ":";
      output += separator;
      ignore0 = true;
      continue;
    }

    output += address[pieceIndex].toString(16);

    if (pieceIndex !== 7) {
      output += ":";
    }
  }

  return output;
}

function parseHost(input, isSpecialArg) {
  if (input[0] === "[") {
    if (input[input.length - 1] !== "]") {
      return failure;
    }

    return parseIPv6(input.substring(1, input.length - 1));
  }

  if (!isSpecialArg) {
    return parseOpaqueHost(input);
  }

  const domain = utf8PercentDecode(input);
  const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
  if (asciiDomain === null) {
    return failure;
  }

  if (containsForbiddenHostCodePoint(asciiDomain)) {
    return failure;
  }

  const ipv4Host = parseIPv4(asciiDomain);
  if (typeof ipv4Host === "number" || ipv4Host === failure) {
    return ipv4Host;
  }

  return asciiDomain;
}

function parseOpaqueHost(input) {
  if (containsForbiddenHostCodePointExcludingPercent(input)) {
    return failure;
  }

  let output = "";
  const decoded = punycode.ucs2.decode(input);
  for (let i = 0; i < decoded.length; ++i) {
    output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
  }
  return output;
}

function findLongestZeroSequence(arr) {
  let maxIdx = null;
  let maxLen = 1; // only find elements > 1
  let currStart = null;
  let currLen = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 0) {
      if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
      }

      currStart = null;
      currLen = 0;
    } else {
      if (currStart === null) {
        currStart = i;
      }
      ++currLen;
    }
  }

  // if trailing zeros
  if (currLen > maxLen) {
    maxIdx = currStart;
    maxLen = currLen;
  }

  return {
    idx: maxIdx,
    len: maxLen
  };
}

function serializeHost(host) {
  if (typeof host === "number") {
    return serializeIPv4(host);
  }

  // IPv6 serializer
  if (host instanceof Array) {
    return "[" + serializeIPv6(host) + "]";
  }

  return host;
}

function trimControlChars(url) {
  return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
}

function trimTabAndNewline(url) {
  return url.replace(/\u0009|\u000A|\u000D/g, "");
}

function shortenPath(url) {
  const path = url.path;
  if (path.length === 0) {
    return;
  }
  if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
    return;
  }

  path.pop();
}

function includesCredentials(url) {
  return url.username !== "" || url.password !== "";
}

function cannotHaveAUsernamePasswordPort(url) {
  return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
}

function isNormalizedWindowsDriveLetter(string) {
  return /^[A-Za-z]:$/.test(string);
}

function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
  this.pointer = 0;
  this.input = input;
  this.base = base || null;
  this.encodingOverride = encodingOverride || "utf-8";
  this.stateOverride = stateOverride;
  this.url = url;
  this.failure = false;
  this.parseError = false;

  if (!this.url) {
    this.url = {
      scheme: "",
      username: "",
      password: "",
      host: null,
      port: null,
      path: [],
      query: null,
      fragment: null,

      cannotBeABaseURL: false
    };

    const res = trimControlChars(this.input);
    if (res !== this.input) {
      this.parseError = true;
    }
    this.input = res;
  }

  const res = trimTabAndNewline(this.input);
  if (res !== this.input) {
    this.parseError = true;
  }
  this.input = res;

  this.state = stateOverride || "scheme start";

  this.buffer = "";
  this.atFlag = false;
  this.arrFlag = false;
  this.passwordTokenSeenFlag = false;

  this.input = punycode.ucs2.decode(this.input);

  for (; this.pointer <= this.input.length; ++this.pointer) {
    const c = this.input[this.pointer];
    const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);

    // exec state machine
    const ret = this["parse " + this.state](c, cStr);
    if (!ret) {
      break; // terminate algorithm
    } else if (ret === failure) {
      this.failure = true;
      break;
    }
  }
}

URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
  if (isASCIIAlpha(c)) {
    this.buffer += cStr.toLowerCase();
    this.state = "scheme";
  } else if (!this.stateOverride) {
    this.state = "no scheme";
    --this.pointer;
  } else {
    this.parseError = true;
    return failure;
  }

  return true;
};

URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
  if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
    this.buffer += cStr.toLowerCase();
  } else if (c === 58) {
    if (this.stateOverride) {
      if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
        return false;
      }

      if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
        return false;
      }

      if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
        return false;
      }

      if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
        return false;
      }
    }
    this.url.scheme = this.buffer;
    this.buffer = "";
    if (this.stateOverride) {
      return false;
    }
    if (this.url.scheme === "file") {
      if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
        this.parseError = true;
      }
      this.state = "file";
    } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
      this.state = "special relative or authority";
    } else if (isSpecial(this.url)) {
      this.state = "special authority slashes";
    } else if (this.input[this.pointer + 1] === 47) {
      this.state = "path or authority";
      ++this.pointer;
    } else {
      this.url.cannotBeABaseURL = true;
      this.url.path.push("");
      this.state = "cannot-be-a-base-URL path";
    }
  } else if (!this.stateOverride) {
    this.buffer = "";
    this.state = "no scheme";
    this.pointer = -1;
  } else {
    this.parseError = true;
    return failure;
  }

  return true;
};

URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
  if (this.base === null || (this.base.cannotBeABaseURL && c !== 35)) {
    return failure;
  } else if (this.base.cannotBeABaseURL && c === 35) {
    this.url.scheme = this.base.scheme;
    this.url.path = this.base.path.slice();
    this.url.query = this.base.query;
    this.url.fragment = "";
    this.url.cannotBeABaseURL = true;
    this.state = "fragment";
  } else if (this.base.scheme === "file") {
    this.state = "file";
    --this.pointer;
  } else {
    this.state = "relative";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
  if (c === 47 && this.input[this.pointer + 1] === 47) {
    this.state = "special authority ignore slashes";
    ++this.pointer;
  } else {
    this.parseError = true;
    this.state = "relative";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
  if (c === 47) {
    this.state = "authority";
  } else {
    this.state = "path";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
  this.url.scheme = this.base.scheme;
  if (isNaN(c)) {
    this.url.username = this.base.username;
    this.url.password = this.base.password;
    this.url.host = this.base.host;
    this.url.port = this.base.port;
    this.url.path = this.base.path.slice();
    this.url.query = this.base.query;
  } else if (c === 47) {
    this.state = "relative slash";
  } else if (c === 63) {
    this.url.username = this.base.username;
    this.url.password = this.base.password;
    this.url.host = this.base.host;
    this.url.port = this.base.port;
    this.url.path = this.base.path.slice();
    this.url.query = "";
    this.state = "query";
  } else if (c === 35) {
    this.url.username = this.base.username;
    this.url.password = this.base.password;
    this.url.host = this.base.host;
    this.url.port = this.base.port;
    this.url.path = this.base.path.slice();
    this.url.query = this.base.query;
    this.url.fragment = "";
    this.state = "fragment";
  } else if (isSpecial(this.url) && c === 92) {
    this.parseError = true;
    this.state = "relative slash";
  } else {
    this.url.username = this.base.username;
    this.url.password = this.base.password;
    this.url.host = this.base.host;
    this.url.port = this.base.port;
    this.url.path = this.base.path.slice(0, this.base.path.length - 1);

    this.state = "path";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
  if (isSpecial(this.url) && (c === 47 || c === 92)) {
    if (c === 92) {
      this.parseError = true;
    }
    this.state = "special authority ignore slashes";
  } else if (c === 47) {
    this.state = "authority";
  } else {
    this.url.username = this.base.username;
    this.url.password = this.base.password;
    this.url.host = this.base.host;
    this.url.port = this.base.port;
    this.state = "path";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
  if (c === 47 && this.input[this.pointer + 1] === 47) {
    this.state = "special authority ignore slashes";
    ++this.pointer;
  } else {
    this.parseError = true;
    this.state = "special authority ignore slashes";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
  if (c !== 47 && c !== 92) {
    this.state = "authority";
    --this.pointer;
  } else {
    this.parseError = true;
  }

  return true;
};

URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
  if (c === 64) {
    this.parseError = true;
    if (this.atFlag) {
      this.buffer = "%40" + this.buffer;
    }
    this.atFlag = true;

    // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
    const len = countSymbols(this.buffer);
    for (let pointer = 0; pointer < len; ++pointer) {
      const codePoint = this.buffer.codePointAt(pointer);

      if (codePoint === 58 && !this.passwordTokenSeenFlag) {
        this.passwordTokenSeenFlag = true;
        continue;
      }
      const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
      if (this.passwordTokenSeenFlag) {
        this.url.password += encodedCodePoints;
      } else {
        this.url.username += encodedCodePoints;
      }
    }
    this.buffer = "";
  } else if (isNaN(c) || c === 47 || c === 63 || c === 35 ||
             (isSpecial(this.url) && c === 92)) {
    if (this.atFlag && this.buffer === "") {
      this.parseError = true;
      return failure;
    }
    this.pointer -= countSymbols(this.buffer) + 1;
    this.buffer = "";
    this.state = "host";
  } else {
    this.buffer += cStr;
  }

  return true;
};

URLStateMachine.prototype["parse hostname"] =
URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
  if (this.stateOverride && this.url.scheme === "file") {
    --this.pointer;
    this.state = "file host";
  } else if (c === 58 && !this.arrFlag) {
    if (this.buffer === "") {
      this.parseError = true;
      return failure;
    }

    const host = parseHost(this.buffer, isSpecial(this.url));
    if (host === failure) {
      return failure;
    }

    this.url.host = host;
    this.buffer = "";
    this.state = "port";
    if (this.stateOverride === "hostname") {
      return false;
    }
  } else if (isNaN(c) || c === 47 || c === 63 || c === 35 ||
             (isSpecial(this.url) && c === 92)) {
    --this.pointer;
    if (isSpecial(this.url) && this.buffer === "") {
      this.parseError = true;
      return failure;
    } else if (this.stateOverride && this.buffer === "" &&
               (includesCredentials(this.url) || this.url.port !== null)) {
      this.parseError = true;
      return false;
    }

    const host = parseHost(this.buffer, isSpecial(this.url));
    if (host === failure) {
      return failure;
    }

    this.url.host = host;
    this.buffer = "";
    this.state = "path start";
    if (this.stateOverride) {
      return false;
    }
  } else {
    if (c === 91) {
      this.arrFlag = true;
    } else if (c === 93) {
      this.arrFlag = false;
    }
    this.buffer += cStr;
  }

  return true;
};

URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
  if (isASCIIDigit(c)) {
    this.buffer += cStr;
  } else if (isNaN(c) || c === 47 || c === 63 || c === 35 ||
             (isSpecial(this.url) && c === 92) ||
             this.stateOverride) {
    if (this.buffer !== "") {
      const port = parseInt(this.buffer);
      if (port > Math.pow(2, 16) - 1) {
        this.parseError = true;
        return failure;
      }
      this.url.port = port === defaultPort(this.url.scheme) ? null : port;
      this.buffer = "";
    }
    if (this.stateOverride) {
      return false;
    }
    this.state = "path start";
    --this.pointer;
  } else {
    this.parseError = true;
    return failure;
  }

  return true;
};

const fileOtherwiseCodePoints = new Set([47, 92, 63, 35]);

URLStateMachine.prototype["parse file"] = function parseFile(c) {
  this.url.scheme = "file";

  if (c === 47 || c === 92) {
    if (c === 92) {
      this.parseError = true;
    }
    this.state = "file slash";
  } else if (this.base !== null && this.base.scheme === "file") {
    if (isNaN(c)) {
      this.url.host = this.base.host;
      this.url.path = this.base.path.slice();
      this.url.query = this.base.query;
    } else if (c === 63) {
      this.url.host = this.base.host;
      this.url.path = this.base.path.slice();
      this.url.query = "";
      this.state = "query";
    } else if (c === 35) {
      this.url.host = this.base.host;
      this.url.path = this.base.path.slice();
      this.url.query = this.base.query;
      this.url.fragment = "";
      this.state = "fragment";
    } else {
      if (this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
          !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) ||
          (this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
           !fileOtherwiseCodePoints.has(this.input[this.pointer + 2]))) {
        this.url.host = this.base.host;
        this.url.path = this.base.path.slice();
        shortenPath(this.url);
      } else {
        this.parseError = true;
      }

      this.state = "path";
      --this.pointer;
    }
  } else {
    this.state = "path";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
  if (c === 47 || c === 92) {
    if (c === 92) {
      this.parseError = true;
    }
    this.state = "file host";
  } else {
    if (this.base !== null && this.base.scheme === "file") {
      if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
        this.url.path.push(this.base.path[0]);
      } else {
        this.url.host = this.base.host;
      }
    }
    this.state = "path";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
  if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
    --this.pointer;
    if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
      this.parseError = true;
      this.state = "path";
    } else if (this.buffer === "") {
      this.url.host = "";
      if (this.stateOverride) {
        return false;
      }
      this.state = "path start";
    } else {
      let host = parseHost(this.buffer, isSpecial(this.url));
      if (host === failure) {
        return failure;
      }
      if (host === "localhost") {
        host = "";
      }
      this.url.host = host;

      if (this.stateOverride) {
        return false;
      }

      this.buffer = "";
      this.state = "path start";
    }
  } else {
    this.buffer += cStr;
  }

  return true;
};

URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
  if (isSpecial(this.url)) {
    if (c === 92) {
      this.parseError = true;
    }
    this.state = "path";

    if (c !== 47 && c !== 92) {
      --this.pointer;
    }
  } else if (!this.stateOverride && c === 63) {
    this.url.query = "";
    this.state = "query";
  } else if (!this.stateOverride && c === 35) {
    this.url.fragment = "";
    this.state = "fragment";
  } else if (c !== undefined) {
    this.state = "path";
    if (c !== 47) {
      --this.pointer;
    }
  }

  return true;
};

URLStateMachine.prototype["parse path"] = function parsePath(c) {
  if (isNaN(c) || c === 47 || (isSpecial(this.url) && c === 92) ||
      (!this.stateOverride && (c === 63 || c === 35))) {
    if (isSpecial(this.url) && c === 92) {
      this.parseError = true;
    }

    if (isDoubleDot(this.buffer)) {
      shortenPath(this.url);
      if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
        this.url.path.push("");
      }
    } else if (isSingleDot(this.buffer) && c !== 47 &&
               !(isSpecial(this.url) && c === 92)) {
      this.url.path.push("");
    } else if (!isSingleDot(this.buffer)) {
      if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
        if (this.url.host !== "" && this.url.host !== null) {
          this.parseError = true;
          this.url.host = "";
        }
        this.buffer = this.buffer[0] + ":";
      }
      this.url.path.push(this.buffer);
    }
    this.buffer = "";
    if (this.url.scheme === "file" && (c === undefined || c === 63 || c === 35)) {
      while (this.url.path.length > 1 && this.url.path[0] === "") {
        this.parseError = true;
        this.url.path.shift();
      }
    }
    if (c === 63) {
      this.url.query = "";
      this.state = "query";
    }
    if (c === 35) {
      this.url.fragment = "";
      this.state = "fragment";
    }
  } else {
    // TODO: If c is not a URL code point and not "%", parse error.

    if (c === 37 &&
      (!isASCIIHex(this.input[this.pointer + 1]) ||
        !isASCIIHex(this.input[this.pointer + 2]))) {
      this.parseError = true;
    }

    this.buffer += percentEncodeChar(c, isPathPercentEncode);
  }

  return true;
};

URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
  if (c === 63) {
    this.url.query = "";
    this.state = "query";
  } else if (c === 35) {
    this.url.fragment = "";
    this.state = "fragment";
  } else {
    // TODO: Add: not a URL code point
    if (!isNaN(c) && c !== 37) {
      this.parseError = true;
    }

    if (c === 37 &&
        (!isASCIIHex(this.input[this.pointer + 1]) ||
         !isASCIIHex(this.input[this.pointer + 2]))) {
      this.parseError = true;
    }

    if (!isNaN(c)) {
      this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
    }
  }

  return true;
};

URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
  if (isNaN(c) || (!this.stateOverride && c === 35)) {
    if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
      this.encodingOverride = "utf-8";
    }

    const buffer = new Buffer(this.buffer); // TODO: Use encoding override instead
    for (let i = 0; i < buffer.length; ++i) {
      if (buffer[i] < 0x21 || buffer[i] > 0x7E || buffer[i] === 0x22 || buffer[i] === 0x23 ||
          buffer[i] === 0x3C || buffer[i] === 0x3E) {
        this.url.query += percentEncode(buffer[i]);
      } else {
        this.url.query += String.fromCodePoint(buffer[i]);
      }
    }

    this.buffer = "";
    if (c === 35) {
      this.url.fragment = "";
      this.state = "fragment";
    }
  } else {
    // TODO: If c is not a URL code point and not "%", parse error.
    if (c === 37 &&
      (!isASCIIHex(this.input[this.pointer + 1]) ||
        !isASCIIHex(this.input[this.pointer + 2]))) {
      this.parseError = true;
    }

    this.buffer += cStr;
  }

  return true;
};

URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
  if (isNaN(c)) { // do nothing
  } else if (c === 0x0) {
    this.parseError = true;
  } else {
    // TODO: If c is not a URL code point and not "%", parse error.
    if (c === 37 &&
      (!isASCIIHex(this.input[this.pointer + 1]) ||
        !isASCIIHex(this.input[this.pointer + 2]))) {
      this.parseError = true;
    }

    this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
  }

  return true;
};

function serializeURL(url, excludeFragment) {
  let output = url.scheme + ":";
  if (url.host !== null) {
    output += "//";

    if (url.username !== "" || url.password !== "") {
      output += url.username;
      if (url.password !== "") {
        output += ":" + url.password;
      }
      output += "@";
    }

    output += serializeHost(url.host);

    if (url.port !== null) {
      output += ":" + url.port;
    }
  } else if (url.host === null && url.scheme === "file") {
    output += "//";
  }

  if (url.cannotBeABaseURL) {
    output += url.path[0];
  } else {
    for (const string of url.path) {
      output += "/" + string;
    }
  }

  if (url.query !== null) {
    output += "?" + url.query;
  }

  if (!excludeFragment && url.fragment !== null) {
    output += "#" + url.fragment;
  }

  return output;
}

function serializeOrigin(tuple) {
  let result = tuple.scheme + "://";
  result += serializeHost(tuple.host);

  if (tuple.port !== null) {
    result += ":" + tuple.port;
  }

  return result;
}

module.exports.serializeURL = serializeURL;

module.exports.serializeURLOrigin = function (url) {
  // https://url.spec.whatwg.org/#concept-url-origin
  switch (url.scheme) {
    case "blob":
      try {
        return module.exports.serializeURLOrigin(module.exports.parseURL(url.path[0]));
      } catch (e) {
        // serializing an opaque origin returns "null"
        return "null";
      }
    case "ftp":
    case "gopher":
    case "http":
    case "https":
    case "ws":
    case "wss":
      return serializeOrigin({
        scheme: url.scheme,
        host: url.host,
        port: url.port
      });
    case "file":
      // spec says "exercise to the reader", chrome says "file://"
      return "file://";
    default:
      // serializing an opaque origin returns "null"
      return "null";
  }
};

module.exports.basicURLParse = function (input, options) {
  if (options === undefined) {
    options = {};
  }

  const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
  if (usm.failure) {
    return "failure";
  }

  return usm.url;
};

module.exports.setTheUsername = function (url, username) {
  url.username = "";
  const decoded = punycode.ucs2.decode(username);
  for (let i = 0; i < decoded.length; ++i) {
    url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
  }
};

module.exports.setThePassword = function (url, password) {
  url.password = "";
  const decoded = punycode.ucs2.decode(password);
  for (let i = 0; i < decoded.length; ++i) {
    url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
  }
};

module.exports.serializeHost = serializeHost;

module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;

module.exports.serializeInteger = function (integer) {
  return String(integer);
};

module.exports.parseURL = function (input, options) {
  if (options === undefined) {
    options = {};
  }

  // We don't handle blobs, so this just delegates:
  return module.exports.basicURLParse(input, { baseURL: options.baseURL, encodingOverride: options.encodingOverride });
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-no-ssr v1.1.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = {
  name: 'NoSsr',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;

    var ref$1 = slots();
    var defaultSlot = ref$1.default; if ( defaultSlot === void 0 ) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;

    if (parent._isMounted) {
      return defaultSlot
    }

    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });

    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(
        props.placeholderTag,
        {
          class: ['no-ssr-placeholder']
        },
        props.placeholder || placeholderSlot
      )
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(function () { return h(false); }) : h(false)
  }
};

module.exports = index;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules_dev/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules_dev/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-client-only v0.0.0-semantic-release
 * (c) 2021-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = {
  name: 'ClientOnly',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;

    var ref$1 = slots();
    var defaultSlot = ref$1.default; if ( defaultSlot === void 0 ) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;

    if (parent._isMounted) {
      return defaultSlot
    }

    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });

    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(
        props.placeholderTag,
        {
          class: ['client-only-placeholder']
        },
        props.placeholder || placeholderSlot
      )
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(function () { return h(false); }) : h(false)
  }
};

module.exports = index;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
  * vue-router v3.5.4
  * (c) 2022 Evan You
  * @license MIT
  */


/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
    .replace(encodeReserveRE, encodeReserveReplacer)
    .replace(commaRE, ','); };

function decode (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    if (false) {}
  }
  return str
}

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     false && false;
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var value = extraQuery[key];
    parsedQuery[key] = Array.isArray(value)
      ? value.map(castQueryParamValue)
      : castQueryParamValue(value);
  }
  return parsedQuery
}

var castQueryParamValue = function (value) { return (value == null || typeof value === 'object' ? value : String(value)); };

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj
    ? Object.keys(obj)
      .map(function (key) {
        var val = obj[key];

        if (val === undefined) {
          return ''
        }

        if (val === null) {
          return encode(key)
        }

        if (Array.isArray(val)) {
          var result = [];
          val.forEach(function (val2) {
            if (val2 === undefined) {
              return
            }
            if (val2 === null) {
              result.push(encode(key));
            } else {
              result.push(encode(key) + '=' + encode(val2));
            }
          });
          return result.join('&')
        }

        return encode(key) + '=' + encode(val)
      })
      .filter(function (x) { return x.length > 0; })
      .join('&')
    : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b, onlyPath) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && (onlyPath ||
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query))
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      (onlyPath || (
        a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params))
      )
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key, i) {
    var aVal = a[key];
    var bKey = bKeys[i];
    if (bKey !== key) { return false }
    var bVal = b[key];
    // query values can be null and undefined
    if (aVal == null || bVal == null) { return aVal === bVal }
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

function handleRouteEntered (route) {
  for (var i = 0; i < route.matched.length; i++) {
    var record = route.matched[i];
    for (var name in record.instances) {
      var instance = record.instances[name];
      var cbs = record.enteredCbs[name];
      if (!instance || !cbs) { continue }
      delete record.enteredCbs[name];
      for (var i$1 = 0; i$1 < cbs.length; i$1++) {
        if (!instance._isBeingDestroyed) { cbs[i$1](instance); }
      }
    }
  }
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }

      // if the route transition has already been confirmed then we weren't
      // able to call the cbs during confirmation as the component was not
      // registered yet, so we call it here.
      handleRouteEntered(route);
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cache
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {}
  }
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/(?:\s*\/)+/g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (false) {}
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (false) {}
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var warnedCustomSlot;
var warnedTagProp;
var warnedEventProp;

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    custom: Boolean,
    exact: Boolean,
    exactPath: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
    classes[activeClass] = this.exact || this.exactPath
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (false) {}
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (false) {}
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (false) {}

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href, 'aria-current': ariaCurrentValue };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap,
  parentRoute
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (false) { var pathNames, found; }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {}

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    alias: route.alias
      ? typeof route.alias === 'string'
        ? [route.alias]
        : route.alias
      : [],
    instances: {},
    enteredCbs: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {}
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if (false) {}

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {}
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) { var keys; }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function addRoute (parentOrRoute, route) {
    var parent = (typeof parentOrRoute !== 'object') ? nameMap[parentOrRoute] : undefined;
    // $flow-disable-line
    createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent);

    // add aliases of parent
    if (parent && parent.alias.length) {
      createRouteMap(
        // $flow-disable-line route is defined if parent is
        parent.alias.map(function (alias) { return ({ path: alias, children: [route] }); }),
        pathList,
        pathMap,
        nameMap,
        parent
      );
    }
  }

  function getRoutes () {
    return pathList.map(function (path) { return pathMap[path]; })
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {}
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {}
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {}
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {}
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoute: addRoute,
    getRoutes: getRoutes,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = typeof m[i] === 'string' ? decode(m[i]) : m[i];
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Prevent browser scroll behavior on History popstate
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', handlePopState);
  return function () {
    window.removeEventListener('popstate', handlePopState);
  }
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {}

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (false) {}
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function handlePopState (e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    // $flow-disable-line
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        left: position.x,
        top: position.y,
        // $flow-disable-line
        behavior: shouldScroll.behavior
      });
    } else {
      window.scrollTo(position.x, position.y);
    }
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && typeof window.history.pushState === 'function'
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

// When changing thing, also edit router.d.ts
var NavigationFailureType = {
  redirected: 2,
  aborted: 4,
  cancelled: 8,
  duplicated: 16
};

function createNavigationRedirectedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.redirected,
    ("Redirected when going from \"" + (from.fullPath) + "\" to \"" + (stringifyRoute(
      to
    )) + "\" via a navigation guard.")
  )
}

function createNavigationDuplicatedError (from, to) {
  var error = createRouterError(
    from,
    to,
    NavigationFailureType.duplicated,
    ("Avoided redundant navigation to current location: \"" + (from.fullPath) + "\".")
  );
  // backwards compatible with the first introduction of Errors
  error.name = 'NavigationDuplicated';
  return error
}

function createNavigationCancelledError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.cancelled,
    ("Navigation cancelled from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" with a new navigation.")
  )
}

function createNavigationAbortedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.aborted,
    ("Navigation aborted from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" via a navigation guard.")
  )
}

function createRouterError (from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;

  return error
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute (to) {
  if (typeof to === 'string') { return to }
  if ('path' in to) { return to.path }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) { location[key] = to[key]; }
  });
  return JSON.stringify(location, null, 2)
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isNavigationFailure (err, errorType) {
  return (
    isError(err) &&
    err._isRouter &&
    (errorType == null || err.type === errorType)
  )
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           false && false;
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route;
  // catch redirect option https://github.com/vuejs/vue-router/issues/3201
  try {
    route = this.router.match(location, this.current);
  } catch (e) {
    this.errorCbs.forEach(function (cb) {
      cb(e);
    });
    // Exception should still be thrown
    throw e
  }
  var prev = this.current;
  this.confirmTransition(
    route,
    function () {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();
      this$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        // Initial redirection should not mark the history as ready yet
        // because it's triggered by the redirection instead
        // https://github.com/vuejs/vue-router/issues/3225
        // https://github.com/vuejs/vue-router/issues/3331
        if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
          this$1.ready = true;
          this$1.readyErrorCbs.forEach(function (cb) {
            cb(err);
          });
        }
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  this.pending = route;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isNavigationFailure(err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        if (false) {}
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    lastRouteIndex === lastCurrentIndex &&
    route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]
  ) {
    this.ensureURL();
    if (route.hash) {
      handleScroll(this.router, current, route, false);
    }
    return abort(createNavigationDuplicatedError(current, route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route))
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          handleRouteEntered(route);
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  this.current = route;
  this.cb && this.cb(route);
};

History.prototype.setupListeners = function setupListeners () {
  // Default implementation is empty
};

History.prototype.teardown = function teardown () {
  // clean up event listeners
  // https://github.com/vuejs/vue-router/issues/2341
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];

  // reset current history route
  // https://github.com/vuejs/vue-router/issues/3294
  this.current = START;
  this.pending = null;
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        if (!match.enteredCbs[key]) {
          match.enteredCbs[key] = [];
        }
        match.enteredCbs[key].push(cb);
      }
      next(cb);
    })
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    History.call(this, router, base);

    this._startLocation = getLocation(this.base);
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === this$1._startLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  var pathLowerCase = path.toLowerCase();
  var baseLowerCase = base.toLowerCase();
  // base="/a" shouldn't turn path="/app" into "/a/pp"
  // https://github.com/vuejs/vue-router/issues/3555
  // so we ensure the trailing slash in the base
  if (base && ((pathLowerCase === baseLowerCase) ||
    (pathLowerCase.indexOf(cleanPath(baseLowerCase + '/')) === 0))) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(
      eventType,
      handleRoutingEvent
    );
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        var prev = this$1.current;
        this$1.index = targetIndex;
        this$1.updateRoute(route);
        this$1.router.afterHooks.forEach(function (hook) {
          hook && hook(route, prev);
        });
      },
      function (err) {
        if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  if (false) {}
  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback =
    mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {}
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   false &&
    false;

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }

    if (!this$1.app) { this$1.history.teardown(); }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History || history instanceof HashHistory) {
    var handleInitialScroll = function (routeOrError) {
      var from = history.current;
      var expectScroll = this$1.options.scrollBehavior;
      var supportsScroll = supportsPushState && expectScroll;

      if (supportsScroll && 'fullPath' in routeOrError) {
        handleScroll(this$1, routeOrError, from, false);
      }
    };
    var setupListeners = function (routeOrError) {
      history.setupListeners();
      handleInitialScroll(routeOrError);
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupListeners,
      setupListeners
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply(
    [],
    route.matched.map(function (m) {
      return Object.keys(m.components).map(function (key) {
        return m.components[key]
      })
    })
  )
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(to, current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.getRoutes = function getRoutes () {
  return this.matcher.getRoutes()
};

VueRouter.prototype.addRoute = function addRoute (parentOrRoute, route) {
  this.matcher.addRoute(parentOrRoute, route);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  if (false) {}
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.5.4';
VueRouter.isNavigationFailure = isNavigationFailure;
VueRouter.NavigationFailureType = NavigationFailureType;
VueRouter.START_LOCATION = START;

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

module.exports = VueRouter;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = val.concat(obj[key]);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function createDefu(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const defuFn = createDefu((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
const defuArrayFn = createDefu((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});

exports.createDefu = createDefu;
exports["default"] = defu;
exports.defu = defu;
exports.defuArrayFn = defuArrayFn;
exports.defuFn = defuFn;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("punycode");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("464037bf", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("277b12ee", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Stream = _interopDefault(__webpack_require__(20));
var http = _interopDefault(__webpack_require__(21));
var Url = _interopDefault(__webpack_require__(9));
var whatwgUrl = _interopDefault(__webpack_require__(22));
var https = _interopDefault(__webpack_require__(29));
var zlib = _interopDefault(__webpack_require__(30));

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'encoding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');
const URL = Url.URL || whatwgUrl.URL;

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

/**
 * Wrapper around `new URL` to handle arbitrary URLs
 *
 * @param  {string} urlStr
 * @return {void}
 */
function parseURL(urlStr) {
	/*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */
	if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
		urlStr = new URL(urlStr).toString();
	}

	// Fallback to old implementation for arbitrary URLs
	return parse_url(urlStr);
}

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parseURL(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parseURL(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parseURL(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

const URL$1 = Url.URL || whatwgUrl.URL;

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;

const isDomainOrSubdomain = function isDomainOrSubdomain(destination, original) {
	const orig = new URL$1(original).hostname;
	const dest = new URL$1(destination).hostname;

	return orig === dest || orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest);
};

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				let locationURL = null;
				try {
					locationURL = location === null ? null : new URL$1(location, request.url).toString();
				} catch (err) {
					// error here can only be invalid URL in Location: header
					// do not throw when options.redirect == manual
					// let the user extract the errorneous redirect URL
					if (request.redirect !== 'manual') {
						reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
						finalize();
						return;
					}
				}

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						if (!isDomainOrSubdomain(request.url, locationURL)) {
							for (const name of ['authorization', 'www-authenticate', 'cookie', 'cookie2']) {
								requestOpts.headers.delete(name);
							}
						}

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * vue-meta v2.4.0
 * (c) 2020
 * - Declan de Wet
 * - Sébastien Chopin (@Atinux)
 * - Pim (@pimlie)
 * - All the amazing contributors
 * @license MIT
 */



function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deepmerge = _interopDefault(__webpack_require__(32));

var version = "2.4.0";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * checks if passed argument is an array
 * @param  {any}  arg - the object to check
 * @return {Boolean} - true if `arg` is an array
 */
function isArray(arg) {
  return Array.isArray(arg);
}
function isUndefined(arg) {
  return typeof arg === 'undefined';
}
function isObject(arg) {
  return _typeof(arg) === 'object';
}
function isPureObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isString(arg) {
  return typeof arg === 'string';
}

function hasGlobalWindowFn() {
  try {
    return !isUndefined(window);
  } catch (e) {
    return false;
  }
}
var hasGlobalWindow = hasGlobalWindowFn();

var _global = hasGlobalWindow ? window : global;

var console = _global.console || {};
function warn(str) {
  /* istanbul ignore next */
  if (!console || !console.warn) {
    return;
  }

  console.warn(str);
}
var showWarningNotSupported = function showWarningNotSupported() {
  return warn('This vue app/component has no vue-meta configuration');
};

/**
 * These are constant variables used throughout the application.
 */
// set some sane defaults
var defaultInfo = {
  title: undefined,
  titleChunk: '',
  titleTemplate: '%s',
  htmlAttrs: {},
  bodyAttrs: {},
  headAttrs: {},
  base: [],
  link: [],
  meta: [],
  style: [],
  script: [],
  noscript: [],
  __dangerouslyDisableSanitizers: [],
  __dangerouslyDisableSanitizersByTagID: {}
};
var rootConfigKey = '_vueMeta'; // This is the name of the component option that contains all the information that
// gets converted to the various meta tags & attributes for the page.

var keyName = 'metaInfo'; // This is the attribute vue-meta arguments on elements to know which it should
// manage and which it should ignore.

var attribute = 'data-vue-meta'; // This is the attribute that goes on the `html` tag to inform `vue-meta`
// that the server has already generated the meta tags for the initial render.

var ssrAttribute = 'data-vue-meta-server-rendered'; // This is the property that tells vue-meta to overwrite (instead of append)
// an item in a tag list. For example, if you have two `meta` tag list items
// that both have `vmid` of "description", then vue-meta will overwrite the
// shallowest one with the deepest one.

var tagIDKeyName = 'vmid'; // This is the key name for possible meta templates

var metaTemplateKeyName = 'template'; // This is the key name for the content-holding property

var contentKeyName = 'content'; // The id used for the ssr app

var ssrAppId = 'ssr'; // How long meta update

var debounceWait = 10; // How long meta update

var waitOnDestroyed = true;
var defaultOptions = {
  keyName: keyName,
  attribute: attribute,
  ssrAttribute: ssrAttribute,
  tagIDKeyName: tagIDKeyName,
  contentKeyName: contentKeyName,
  metaTemplateKeyName: metaTemplateKeyName,
  waitOnDestroyed: waitOnDestroyed,
  debounceWait: debounceWait,
  ssrAppId: ssrAppId
}; // might be a bit ugly, but minimizes the browser bundles a bit

var defaultInfoKeys = Object.keys(defaultInfo); // The metaInfo property keys which are used to disable escaping

var disableOptionKeys = [defaultInfoKeys[12], defaultInfoKeys[13]]; // List of metaInfo property keys which are configuration options (and dont generate html)

var metaInfoOptionKeys = [defaultInfoKeys[1], defaultInfoKeys[2], 'changed'].concat(disableOptionKeys); // List of metaInfo property keys which only generates attributes and no tags

var metaInfoAttributeKeys = [defaultInfoKeys[3], defaultInfoKeys[4], defaultInfoKeys[5]]; // HTML elements which support the onload event

var tagsSupportingOnload = ['link', 'style', 'script']; // HTML elements which dont have a head tag (shortened to our needs)
// see: https://www.w3.org/TR/html52/document-metadata.html

var tagsWithoutEndTag = ['base', 'meta', 'link']; // HTML elements which can have inner content (shortened to our needs)

var tagsWithInnerContent = ['noscript', 'script', 'style']; // Attributes which are inserted as childNodes instead of HTMLAttribute

var tagAttributeAsInnerContent = ['innerHTML', 'cssText', 'json'];
var tagProperties = ['once', 'skip', 'template']; // Attributes which should be added with data- prefix

var commonDataAttributes = ['body', 'pbody']; // from: https://github.com/kangax/html-minifier/blob/gh-pages/src/htmlminifier.js#L202

var booleanHtmlAttributes = ['allowfullscreen', 'amp', 'amp-boilerplate', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare', 'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nohref', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'truespeed', 'typemustmatch', 'visible'];

var batchId = null;
function triggerUpdate(_ref, rootVm, hookName) {
  var debounceWait = _ref.debounceWait;

  // if an update was triggered during initialization or when an update was triggered by the
  // metaInfo watcher, set initialized to null
  // then we keep falsy value but know we need to run a triggerUpdate after initialization
  if (!rootVm[rootConfigKey].initialized && (rootVm[rootConfigKey].initializing || hookName === 'watcher')) {
    rootVm[rootConfigKey].initialized = null;
  }

  if (rootVm[rootConfigKey].initialized && !rootVm[rootConfigKey].pausing) {
    // batch potential DOM updates to prevent extraneous re-rendering
    // eslint-disable-next-line no-void
    batchUpdate(function () {
      return void rootVm.$meta().refresh();
    }, debounceWait);
  }
}
/**
 * Performs a batched update.
 *
 * @param  {(null|Number)} id - the ID of this update
 * @param  {Function} callback - the update to perform
 * @return {Number} id - a new ID
 */

function batchUpdate(callback, timeout) {
  timeout = timeout === undefined ? 10 : timeout;

  if (!timeout) {
    callback();
    return;
  }

  clearTimeout(batchId);
  batchId = setTimeout(function () {
    callback();
  }, timeout);
  return batchId;
}

/*
 * To reduce build size, this file provides simple polyfills without
 * overly excessive type checking and without modifying
 * the global Array.prototype
 * The polyfills are automatically removed in the commonjs build
 * Also, only files in client/ & shared/ should use these functions
 * files in server/ still use normal js function
 */
function find(array, predicate, thisArg) {
  if ( !Array.prototype.find) {
    // idx needs to be a Number, for..in returns string
    for (var idx = 0; idx < array.length; idx++) {
      if (predicate.call(thisArg, array[idx], idx, array)) {
        return array[idx];
      }
    }

    return;
  }

  return array.find(predicate, thisArg);
}
function findIndex(array, predicate, thisArg) {
  if ( !Array.prototype.findIndex) {
    // idx needs to be a Number, for..in returns string
    for (var idx = 0; idx < array.length; idx++) {
      if (predicate.call(thisArg, array[idx], idx, array)) {
        return idx;
      }
    }

    return -1;
  }

  return array.findIndex(predicate, thisArg);
}
function toArray(arg) {
  if ( !Array.from) {
    return Array.prototype.slice.call(arg);
  }

  return Array.from(arg);
}
function includes(array, value) {
  if ( !Array.prototype.includes) {
    for (var idx in array) {
      if (array[idx] === value) {
        return true;
      }
    }

    return false;
  }

  return array.includes(value);
}

var querySelector = function querySelector(arg, el) {
  return (el || document).querySelectorAll(arg);
};
function getTag(tags, tag) {
  if (!tags[tag]) {
    tags[tag] = document.getElementsByTagName(tag)[0];
  }

  return tags[tag];
}
function getElementsKey(_ref) {
  var body = _ref.body,
      pbody = _ref.pbody;
  return body ? 'body' : pbody ? 'pbody' : 'head';
}
function queryElements(parentNode, _ref2, attributes) {
  var appId = _ref2.appId,
      attribute = _ref2.attribute,
      type = _ref2.type,
      tagIDKeyName = _ref2.tagIDKeyName;
  attributes = attributes || {};
  var queries = ["".concat(type, "[").concat(attribute, "=\"").concat(appId, "\"]"), "".concat(type, "[data-").concat(tagIDKeyName, "]")].map(function (query) {
    for (var key in attributes) {
      var val = attributes[key];
      var attributeValue = val && val !== true ? "=\"".concat(val, "\"") : '';
      query += "[data-".concat(key).concat(attributeValue, "]");
    }

    return query;
  });
  return toArray(querySelector(queries.join(', '), parentNode));
}
function removeElementsByAppId(_ref3, appId) {
  var attribute = _ref3.attribute;
  toArray(querySelector("[".concat(attribute, "=\"").concat(appId, "\"]"))).map(function (el) {
    return el.remove();
  });
}
function removeAttribute(el, attributeName) {
  el.removeAttribute(attributeName);
}

function hasMetaInfo(vm) {
  vm = vm || this;
  return vm && (vm[rootConfigKey] === true || isObject(vm[rootConfigKey]));
} // a component is in a metaInfo branch when itself has meta info or one of its (grand-)children has

function inMetaInfoBranch(vm) {
  vm = vm || this;
  return vm && !isUndefined(vm[rootConfigKey]);
}

function pause(rootVm, refresh) {
  rootVm[rootConfigKey].pausing = true;
  return function () {
    return resume(rootVm, refresh);
  };
}
function resume(rootVm, refresh) {
  rootVm[rootConfigKey].pausing = false;

  if (refresh || refresh === undefined) {
    return rootVm.$meta().refresh();
  }
}

function addNavGuards(rootVm) {
  var router = rootVm.$router; // return when nav guards already added or no router exists

  if (rootVm[rootConfigKey].navGuards || !router) {
    /* istanbul ignore next */
    return;
  }

  rootVm[rootConfigKey].navGuards = true;
  router.beforeEach(function (to, from, next) {
    pause(rootVm);
    next();
  });
  router.afterEach(function () {
    rootVm.$nextTick(function () {
      var _resume = resume(rootVm),
          metaInfo = _resume.metaInfo;

      if (metaInfo && isFunction(metaInfo.afterNavigation)) {
        metaInfo.afterNavigation(metaInfo);
      }
    });
  });
}

var appId = 1;
function createMixin(Vue, options) {
  // for which Vue lifecycle hooks should the metaInfo be refreshed
  var updateOnLifecycleHook = ['activated', 'deactivated', 'beforeMount'];
  var wasServerRendered = false; // watch for client side component updates

  return {
    beforeCreate: function beforeCreate() {
      var _this2 = this;

      var rootKey = '$root';
      var $root = this[rootKey];
      var $options = this.$options;
      var devtoolsEnabled = Vue.config.devtools;
      Object.defineProperty(this, '_hasMetaInfo', {
        configurable: true,
        get: function get() {
          // Show deprecation warning once when devtools enabled
          if (devtoolsEnabled && !$root[rootConfigKey].deprecationWarningShown) {
            warn('VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead');
            $root[rootConfigKey].deprecationWarningShown = true;
          }

          return hasMetaInfo(this);
        }
      });

      if (this === $root) {
        $root.$once('hook:beforeMount', function () {
          wasServerRendered = this.$el && this.$el.nodeType === 1 && this.$el.hasAttribute('data-server-rendered'); // In most cases when you have a SSR app it will be the first app thats gonna be
          // initiated, if we cant detect the data-server-rendered attribute from Vue but we
          // do see our own ssrAttribute then _assume_ the Vue app with appId 1 is the ssr app
          // attempted fix for #404 & #562, but we rly need to refactor how we pass appIds from
          // ssr to the client

          if (!wasServerRendered && $root[rootConfigKey] && $root[rootConfigKey].appId === 1) {
            var htmlTag = getTag({}, 'html');
            wasServerRendered = htmlTag && htmlTag.hasAttribute(options.ssrAttribute);
          }
        });
      } // Add a marker to know if it uses metaInfo
      // _vnode is used to know that it's attached to a real component
      // useful if we use some mixin to add some meta tags (like nuxt-i18n)


      if (isUndefined($options[options.keyName]) || $options[options.keyName] === null) {
        return;
      }

      if (!$root[rootConfigKey]) {
        $root[rootConfigKey] = {
          appId: appId
        };
        appId++;

        if (devtoolsEnabled && $root.$options[options.keyName]) {
          // use nextTick so the children should be added to $root
          this.$nextTick(function () {
            // find the first child that lists fnOptions
            var child = find($root.$children, function (c) {
              return c.$vnode && c.$vnode.fnOptions;
            });

            if (child && child.$vnode.fnOptions[options.keyName]) {
              warn("VueMeta has detected a possible global mixin which adds a ".concat(options.keyName, " property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead"));
            }
          });
        }
      } // to speed up updates we keep track of branches which have a component with vue-meta info defined
      // if _vueMeta = true it has info, if _vueMeta = false a child has info


      if (!this[rootConfigKey]) {
        this[rootConfigKey] = true;
        var parent = this.$parent;

        while (parent && parent !== $root) {
          if (isUndefined(parent[rootConfigKey])) {
            parent[rootConfigKey] = false;
          }

          parent = parent.$parent;
        }
      } // coerce function-style metaInfo to a computed prop so we can observe
      // it on creation


      if (isFunction($options[options.keyName])) {
        $options.computed = $options.computed || {};
        $options.computed.$metaInfo = $options[options.keyName];

        if (!this.$isServer) {
          // if computed $metaInfo exists, watch it for updates & trigger a refresh
          // when it changes (i.e. automatically handle async actions that affect metaInfo)
          // credit for this suggestion goes to [Sébastien Chopin](https://github.com/Atinux)
          this.$on('hook:created', function () {
            this.$watch('$metaInfo', function () {
              triggerUpdate(options, this[rootKey], 'watcher');
            });
          });
        }
      } // force an initial refresh on page load and prevent other lifecycleHooks
      // to triggerUpdate until this initial refresh is finished
      // this is to make sure that when a page is opened in an inactive tab which
      // has throttled rAF/timers we still immediately set the page title


      if (isUndefined($root[rootConfigKey].initialized)) {
        $root[rootConfigKey].initialized = this.$isServer;

        if (!$root[rootConfigKey].initialized) {
          if (!$root[rootConfigKey].initializedSsr) {
            $root[rootConfigKey].initializedSsr = true;
            this.$on('hook:beforeMount', function () {
              var $root = this[rootKey]; // if this Vue-app was server rendered, set the appId to 'ssr'
              // only one SSR app per page is supported

              if (wasServerRendered) {
                $root[rootConfigKey].appId = options.ssrAppId;
              }
            });
          } // we use the mounted hook here as on page load


          this.$on('hook:mounted', function () {
            var $root = this[rootKey];

            if ($root[rootConfigKey].initialized) {
              return;
            } // used in triggerUpdate to check if a change was triggered
            // during initialization


            $root[rootConfigKey].initializing = true; // refresh meta in nextTick so all child components have loaded

            this.$nextTick(function () {
              var _$root$$meta$refresh = $root.$meta().refresh(),
                  tags = _$root$$meta$refresh.tags,
                  metaInfo = _$root$$meta$refresh.metaInfo; // After ssr hydration (identifier by tags === false) check
              // if initialized was set to null in triggerUpdate. That'd mean
              // that during initilazation changes where triggered which need
              // to be applied OR a metaInfo watcher was triggered before the
              // current hook was called
              // (during initialization all changes are blocked)


              if (tags === false && $root[rootConfigKey].initialized === null) {
                this.$nextTick(function () {
                  return triggerUpdate(options, $root, 'init');
                });
              }

              $root[rootConfigKey].initialized = true;
              delete $root[rootConfigKey].initializing; // add the navigation guards if they havent been added yet
              // they are needed for the afterNavigation callback

              if (!options.refreshOnceOnNavigation && metaInfo.afterNavigation) {
                addNavGuards($root);
              }
            });
          }); // add the navigation guards if requested

          if (options.refreshOnceOnNavigation) {
            addNavGuards($root);
          }
        }
      }

      this.$on('hook:destroyed', function () {
        var _this = this;

        // do not trigger refresh:
        // - when user configured to not wait for transitions on destroyed
        // - when the component doesnt have a parent
        // - doesnt have metaInfo defined
        if (!this.$parent || !hasMetaInfo(this)) {
          return;
        }

        delete this._hasMetaInfo;
        this.$nextTick(function () {
          if (!options.waitOnDestroyed || !_this.$el || !_this.$el.offsetParent) {
            triggerUpdate(options, _this.$root, 'destroyed');
            return;
          } // Wait that element is hidden before refreshing meta tags (to support animations)


          var interval = setInterval(function () {
            if (_this.$el && _this.$el.offsetParent !== null) {
              /* istanbul ignore next line */
              return;
            }

            clearInterval(interval);
            triggerUpdate(options, _this.$root, 'destroyed');
          }, 50);
        });
      }); // do not trigger refresh on the server side

      if (this.$isServer) {
        /* istanbul ignore next */
        return;
      } // no need to add this hooks on server side


      updateOnLifecycleHook.forEach(function (lifecycleHook) {
        _this2.$on("hook:".concat(lifecycleHook), function () {
          triggerUpdate(options, this[rootKey], lifecycleHook);
        });
      });
    }
  };
}

function setOptions(options) {
  // combine options
  options = isObject(options) ? options : {}; // The options are set like this so they can
  // be minified by terser while keeping the
  // user api intact
  // terser --mangle-properties keep_quoted=strict

  /* eslint-disable dot-notation */

  return {
    keyName: options['keyName'] || defaultOptions.keyName,
    attribute: options['attribute'] || defaultOptions.attribute,
    ssrAttribute: options['ssrAttribute'] || defaultOptions.ssrAttribute,
    tagIDKeyName: options['tagIDKeyName'] || defaultOptions.tagIDKeyName,
    contentKeyName: options['contentKeyName'] || defaultOptions.contentKeyName,
    metaTemplateKeyName: options['metaTemplateKeyName'] || defaultOptions.metaTemplateKeyName,
    debounceWait: isUndefined(options['debounceWait']) ? defaultOptions.debounceWait : options['debounceWait'],
    waitOnDestroyed: isUndefined(options['waitOnDestroyed']) ? defaultOptions.waitOnDestroyed : options['waitOnDestroyed'],
    ssrAppId: options['ssrAppId'] || defaultOptions.ssrAppId,
    refreshOnceOnNavigation: !!options['refreshOnceOnNavigation']
  };
  /* eslint-enable dot-notation */
}
function getOptions(options) {
  var optionsCopy = {};

  for (var key in options) {
    optionsCopy[key] = options[key];
  }

  return optionsCopy;
}

function ensureIsArray(arg, key) {
  if (!key || !isObject(arg)) {
    return isArray(arg) ? arg : [];
  }

  if (!isArray(arg[key])) {
    arg[key] = [];
  }

  return arg;
}

var serverSequences = [[/&/g, '&amp;'], [/</g, '&lt;'], [/>/g, '&gt;'], [/"/g, '&quot;'], [/'/g, '&#x27;']];
var clientSequences = [[/&/g, "&"], [/</g, "<"], [/>/g, ">"], [/"/g, "\""], [/'/g, "'"]]; // sanitizes potentially dangerous characters

function escape(info, options, escapeOptions, escapeKeys) {
  var tagIDKeyName = options.tagIDKeyName;
  var _escapeOptions$doEsca = escapeOptions.doEscape,
      doEscape = _escapeOptions$doEsca === void 0 ? function (v) {
    return v;
  } : _escapeOptions$doEsca;
  var escaped = {};

  for (var key in info) {
    var value = info[key]; // no need to escape configuration options

    if (includes(metaInfoOptionKeys, key)) {
      escaped[key] = value;
      continue;
    } // do not use destructuring for disableOptionKeys, it increases transpiled size
    // due to var checks while we are guaranteed the structure of the cb


    var disableKey = disableOptionKeys[0];

    if (escapeOptions[disableKey] && includes(escapeOptions[disableKey], key)) {
      // this info[key] doesnt need to escaped if the option is listed in __dangerouslyDisableSanitizers
      escaped[key] = value;
      continue;
    }

    var tagId = info[tagIDKeyName];

    if (tagId) {
      disableKey = disableOptionKeys[1]; // keys which are listed in __dangerouslyDisableSanitizersByTagID for the current vmid do not need to be escaped

      if (escapeOptions[disableKey] && escapeOptions[disableKey][tagId] && includes(escapeOptions[disableKey][tagId], key)) {
        escaped[key] = value;
        continue;
      }
    }

    if (isString(value)) {
      escaped[key] = doEscape(value);
    } else if (isArray(value)) {
      escaped[key] = value.map(function (v) {
        if (isPureObject(v)) {
          return escape(v, options, escapeOptions, true);
        }

        return doEscape(v);
      });
    } else if (isPureObject(value)) {
      escaped[key] = escape(value, options, escapeOptions, true);
    } else {
      escaped[key] = value;
    }

    if (escapeKeys) {
      var escapedKey = doEscape(key);

      if (key !== escapedKey) {
        escaped[escapedKey] = escaped[key];
        delete escaped[key];
      }
    }
  }

  return escaped;
}
function escapeMetaInfo(options, info, escapeSequences) {
  escapeSequences = escapeSequences || []; // do not use destructuring for seq, it increases transpiled size
  // due to var checks while we are guaranteed the structure of the cb

  var escapeOptions = {
    doEscape: function doEscape(value) {
      return escapeSequences.reduce(function (val, seq) {
        return val.replace(seq[0], seq[1]);
      }, value);
    }
  };
  disableOptionKeys.forEach(function (disableKey, index) {
    if (index === 0) {
      ensureIsArray(info, disableKey);
    } else if (index === 1) {
      for (var key in info[disableKey]) {
        ensureIsArray(info[disableKey], key);
      }
    }

    escapeOptions[disableKey] = info[disableKey];
  }); // begin sanitization

  return escape(info, options, escapeOptions);
}

function applyTemplate(_ref, headObject, template, chunk) {
  var component = _ref.component,
      metaTemplateKeyName = _ref.metaTemplateKeyName,
      contentKeyName = _ref.contentKeyName;

  if (template === true || headObject[metaTemplateKeyName] === true) {
    // abort, template was already applied
    return false;
  }

  if (isUndefined(template) && headObject[metaTemplateKeyName]) {
    template = headObject[metaTemplateKeyName];
    headObject[metaTemplateKeyName] = true;
  } // return early if no template defined


  if (!template) {
    // cleanup faulty template properties
    delete headObject[metaTemplateKeyName];
    return false;
  }

  if (isUndefined(chunk)) {
    chunk = headObject[contentKeyName];
  }

  headObject[contentKeyName] = isFunction(template) ? template.call(component, chunk) : template.replace(/%s/g, chunk);
  return true;
}

function _arrayMerge(_ref, target, source) {
  var component = _ref.component,
      tagIDKeyName = _ref.tagIDKeyName,
      metaTemplateKeyName = _ref.metaTemplateKeyName,
      contentKeyName = _ref.contentKeyName;
  // we concat the arrays without merging objects contained in,
  // but we check for a `vmid` property on each object in the array
  // using an O(1) lookup associative array exploit
  var destination = [];

  if (!target.length && !source.length) {
    return destination;
  }

  target.forEach(function (targetItem, targetIndex) {
    // no tagID so no need to check for duplicity
    if (!targetItem[tagIDKeyName]) {
      destination.push(targetItem);
      return;
    }

    var sourceIndex = findIndex(source, function (item) {
      return item[tagIDKeyName] === targetItem[tagIDKeyName];
    });
    var sourceItem = source[sourceIndex]; // source doesnt contain any duplicate vmid's, we can keep targetItem

    if (sourceIndex === -1) {
      destination.push(targetItem);
      return;
    } // when sourceItem explictly defines contentKeyName or innerHTML as undefined, its
    // an indication that we need to skip the default behaviour or child has preference over parent
    // which means we keep the targetItem and ignore/remove the sourceItem


    if (contentKeyName in sourceItem && sourceItem[contentKeyName] === undefined || 'innerHTML' in sourceItem && sourceItem.innerHTML === undefined) {
      destination.push(targetItem); // remove current index from source array so its not concatenated to destination below

      source.splice(sourceIndex, 1);
      return;
    } // we now know that targetItem is a duplicate and we should ignore it in favor of sourceItem
    // if source specifies null as content then ignore both the target as the source


    if (sourceItem[contentKeyName] === null || sourceItem.innerHTML === null) {
      // remove current index from source array so its not concatenated to destination below
      source.splice(sourceIndex, 1);
      return;
    } // now we only need to check if the target has a template to combine it with the source


    var targetTemplate = targetItem[metaTemplateKeyName];

    if (!targetTemplate) {
      return;
    }

    var sourceTemplate = sourceItem[metaTemplateKeyName];

    if (!sourceTemplate) {
      // use parent template and child content
      applyTemplate({
        component: component,
        metaTemplateKeyName: metaTemplateKeyName,
        contentKeyName: contentKeyName
      }, sourceItem, targetTemplate); // set template to true to indicate template was already applied

      sourceItem.template = true;
      return;
    }

    if (!sourceItem[contentKeyName]) {
      // use parent content and child template
      applyTemplate({
        component: component,
        metaTemplateKeyName: metaTemplateKeyName,
        contentKeyName: contentKeyName
      }, sourceItem, undefined, targetItem[contentKeyName]);
    }
  });
  return destination.concat(source);
}
var warningShown = false;
function merge(target, source, options) {
  options = options || {}; // remove properties explicitly set to false so child components can
  // optionally _not_ overwrite the parents content
  // (for array properties this is checked in arrayMerge)

  if (source.title === undefined) {
    delete source.title;
  }

  metaInfoAttributeKeys.forEach(function (attrKey) {
    if (!source[attrKey]) {
      return;
    }

    for (var key in source[attrKey]) {
      if (key in source[attrKey] && source[attrKey][key] === undefined) {
        if (includes(booleanHtmlAttributes, key) && !warningShown) {
          warn('VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details');
          warningShown = true;
        }

        delete source[attrKey][key];
      }
    }
  });
  return deepmerge(target, source, {
    arrayMerge: function arrayMerge(t, s) {
      return _arrayMerge(options, t, s);
    }
  });
}

function getComponentMetaInfo(options, component) {
  return getComponentOption(options || {}, component, defaultInfo);
}
/**
 * Returns the `opts.option` $option value of the given `opts.component`.
 * If methods are encountered, they will be bound to the component context.
 * If `opts.deep` is true, will recursively merge all child component
 * `opts.option` $option values into the returned result.
 *
 * @param  {Object} opts - options
 * @param  {Object} opts.component - Vue component to fetch option data from
 * @param  {Boolean} opts.deep - look for data in child components as well?
 * @param  {Function} opts.arrayMerge - how should arrays be merged?
 * @param  {String} opts.keyName - the name of the option to look for
 * @param  {Object} [result={}] - result so far
 * @return {Object} result - final aggregated result
 */

function getComponentOption(options, component, result) {
  result = result || {};

  if (component._inactive) {
    return result;
  }

  options = options || {};
  var _options = options,
      keyName = _options.keyName;
  var $metaInfo = component.$metaInfo,
      $options = component.$options,
      $children = component.$children; // only collect option data if it exists

  if ($options[keyName]) {
    // if $metaInfo exists then [keyName] was defined as a function
    // and set to the computed prop $metaInfo in the mixin
    // using the computed prop should be a small performance increase
    // because Vue caches those internally
    var data = $metaInfo || $options[keyName]; // only merge data with result when its an object
    // eg it could be a function when metaInfo() returns undefined
    // dueo to the or statement above

    if (isObject(data)) {
      result = merge(result, data, options);
    }
  } // collect & aggregate child options if deep = true


  if ($children.length) {
    $children.forEach(function (childComponent) {
      // check if the childComponent is in a branch
      // return otherwise so we dont walk all component branches unnecessarily
      if (!inMetaInfoBranch(childComponent)) {
        return;
      }

      result = getComponentOption(options, childComponent, result);
    });
  }

  return result;
}

var callbacks = [];
function isDOMComplete(d) {
  return (d || document).readyState === 'complete';
}
function addCallback(query, callback) {
  if (arguments.length === 1) {
    callback = query;
    query = '';
  }

  callbacks.push([query, callback]);
}
function addCallbacks(_ref, type, tags, autoAddListeners) {
  var tagIDKeyName = _ref.tagIDKeyName;
  var hasAsyncCallback = false;
  tags.forEach(function (tag) {
    if (!tag[tagIDKeyName] || !tag.callback) {
      return;
    }

    hasAsyncCallback = true;
    addCallback("".concat(type, "[data-").concat(tagIDKeyName, "=\"").concat(tag[tagIDKeyName], "\"]"), tag.callback);
  });

  if (!autoAddListeners || !hasAsyncCallback) {
    return hasAsyncCallback;
  }

  return addListeners();
}
function addListeners() {
  if (isDOMComplete()) {
    applyCallbacks();
    return;
  } // Instead of using a MutationObserver, we just apply

  /* istanbul ignore next */


  document.onreadystatechange = function () {
    applyCallbacks();
  };
}
function applyCallbacks(matchElement) {
  callbacks.forEach(function (args) {
    // do not use destructuring for args, it increases transpiled size
    // due to var checks while we are guaranteed the structure of the cb
    var query = args[0];
    var callback = args[1];
    var selector = "".concat(query, "[onload=\"this.__vm_l=1\"]");
    var elements = [];

    if (!matchElement) {
      elements = toArray(querySelector(selector));
    }

    if (matchElement && matchElement.matches(selector)) {
      elements = [matchElement];
    }

    elements.forEach(function (element) {
      /* __vm_cb: whether the load callback has been called
       * __vm_l: set by onload attribute, whether the element was loaded
       * __vm_ev: whether the event listener was added or not
       */
      if (element.__vm_cb) {
        return;
      }

      var onload = function onload() {
        /* Mark that the callback for this element has already been called,
         * this prevents the callback to run twice in some (rare) conditions
         */
        element.__vm_cb = true;
        /* onload needs to be removed because we only need the
         * attribute after ssr and if we dont remove it the node
         * will fail isEqualNode on the client
         */

        removeAttribute(element, 'onload');
        callback(element);
      };
      /* IE9 doesnt seem to load scripts synchronously,
       * causing a script sometimes/often already to be loaded
       * when we add the event listener below (thus adding an onload event
       * listener has no use because it will never be triggered).
       * Therefore we add the onload attribute during ssr, and
       * check here if it was already loaded or not
       */


      if (element.__vm_l) {
        onload();
        return;
      }

      if (!element.__vm_ev) {
        element.__vm_ev = true;
        element.addEventListener('load', onload);
      }
    });
  });
}

// instead of adding it to the html

var attributeMap = {};
/**
 * Updates the document's html tag attributes
 *
 * @param  {Object} attrs - the new document html attributes
 * @param  {HTMLElement} tag - the HTMLElement tag to update with new attrs
 */

function updateAttribute(appId, options, type, attrs, tag) {
  var _ref = options || {},
      attribute = _ref.attribute;

  var vueMetaAttrString = tag.getAttribute(attribute);

  if (vueMetaAttrString) {
    attributeMap[type] = JSON.parse(decodeURI(vueMetaAttrString));
    removeAttribute(tag, attribute);
  }

  var data = attributeMap[type] || {};
  var toUpdate = []; // remove attributes from the map
  // which have been removed for this appId

  for (var attr in data) {
    if (data[attr] !== undefined && appId in data[attr]) {
      toUpdate.push(attr);

      if (!attrs[attr]) {
        delete data[attr][appId];
      }
    }
  }

  for (var _attr in attrs) {
    var attrData = data[_attr];

    if (!attrData || attrData[appId] !== attrs[_attr]) {
      toUpdate.push(_attr);

      if (attrs[_attr] !== undefined) {
        data[_attr] = data[_attr] || {};
        data[_attr][appId] = attrs[_attr];
      }
    }
  }

  for (var _i = 0, _toUpdate = toUpdate; _i < _toUpdate.length; _i++) {
    var _attr2 = _toUpdate[_i];
    var _attrData = data[_attr2];
    var attrValues = [];

    for (var _appId in _attrData) {
      Array.prototype.push.apply(attrValues, [].concat(_attrData[_appId]));
    }

    if (attrValues.length) {
      var attrValue = includes(booleanHtmlAttributes, _attr2) && attrValues.some(Boolean) ? '' : attrValues.filter(function (v) {
        return v !== undefined;
      }).join(' ');
      tag.setAttribute(_attr2, attrValue);
    } else {
      removeAttribute(tag, _attr2);
    }
  }

  attributeMap[type] = data;
}

/**
 * Updates the document title
 *
 * @param  {String} title - the new title of the document
 */
function updateTitle(title) {
  if (!title && title !== '') {
    return;
  }

  document.title = title;
}

/**
 * Updates meta tags inside <head> and <body> on the client. Borrowed from `react-helmet`:
 * https://github.com/nfl/react-helmet/blob/004d448f8de5f823d10f838b02317521180f34da/src/Helmet.js#L195-L245
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} type - the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - a representation of what tags changed
 */

function updateTag(appId, options, type, tags, head, body) {
  var _ref = options || {},
      attribute = _ref.attribute,
      tagIDKeyName = _ref.tagIDKeyName;

  var dataAttributes = commonDataAttributes.slice();
  dataAttributes.push(tagIDKeyName);
  var newElements = [];
  var queryOptions = {
    appId: appId,
    attribute: attribute,
    type: type,
    tagIDKeyName: tagIDKeyName
  };
  var currentElements = {
    head: queryElements(head, queryOptions),
    pbody: queryElements(body, queryOptions, {
      pbody: true
    }),
    body: queryElements(body, queryOptions, {
      body: true
    })
  };

  if (tags.length > 1) {
    // remove duplicates that could have been found by merging tags
    // which include a mixin with metaInfo and that mixin is used
    // by multiple components on the same page
    var found = [];
    tags = tags.filter(function (x) {
      var k = JSON.stringify(x);
      var res = !includes(found, k);
      found.push(k);
      return res;
    });
  }

  tags.forEach(function (tag) {
    if (tag.skip) {
      return;
    }

    var newElement = document.createElement(type);

    if (!tag.once) {
      newElement.setAttribute(attribute, appId);
    }

    Object.keys(tag).forEach(function (attr) {
      /* istanbul ignore next */
      if (includes(tagProperties, attr)) {
        return;
      }

      if (attr === 'innerHTML') {
        newElement.innerHTML = tag.innerHTML;
        return;
      }

      if (attr === 'json') {
        newElement.innerHTML = JSON.stringify(tag.json);
        return;
      }

      if (attr === 'cssText') {
        if (newElement.styleSheet) {
          /* istanbul ignore next */
          newElement.styleSheet.cssText = tag.cssText;
        } else {
          newElement.appendChild(document.createTextNode(tag.cssText));
        }

        return;
      }

      if (attr === 'callback') {
        newElement.onload = function () {
          return tag[attr](newElement);
        };

        return;
      }

      var _attr = includes(dataAttributes, attr) ? "data-".concat(attr) : attr;

      var isBooleanAttribute = includes(booleanHtmlAttributes, attr);

      if (isBooleanAttribute && !tag[attr]) {
        return;
      }

      var value = isBooleanAttribute ? '' : tag[attr];
      newElement.setAttribute(_attr, value);
    });
    var oldElements = currentElements[getElementsKey(tag)]; // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

    var indexToDelete;
    var hasEqualElement = oldElements.some(function (existingTag, index) {
      indexToDelete = index;
      return newElement.isEqualNode(existingTag);
    });

    if (hasEqualElement && (indexToDelete || indexToDelete === 0)) {
      oldElements.splice(indexToDelete, 1);
    } else {
      newElements.push(newElement);
    }
  });
  var oldElements = [];

  for (var _type in currentElements) {
    Array.prototype.push.apply(oldElements, currentElements[_type]);
  } // remove old elements


  oldElements.forEach(function (element) {
    element.parentNode.removeChild(element);
  }); // insert new elements

  newElements.forEach(function (element) {
    if (element.hasAttribute('data-body')) {
      body.appendChild(element);
      return;
    }

    if (element.hasAttribute('data-pbody')) {
      body.insertBefore(element, body.firstChild);
      return;
    }

    head.appendChild(element);
  });
  return {
    oldTags: oldElements,
    newTags: newElements
  };
}

/**
 * Performs client-side updates when new meta info is received
 *
 * @param  {Object} newInfo - the meta info to update to
 */

function updateClientMetaInfo(appId, options, newInfo) {
  options = options || {};
  var _options = options,
      ssrAttribute = _options.ssrAttribute,
      ssrAppId = _options.ssrAppId; // only cache tags for current update

  var tags = {};
  var htmlTag = getTag(tags, 'html'); // if this is a server render, then dont update

  if (appId === ssrAppId && htmlTag.hasAttribute(ssrAttribute)) {
    // remove the server render attribute so we can update on (next) changes
    removeAttribute(htmlTag, ssrAttribute); // add load callbacks if the

    var addLoadListeners = false;
    tagsSupportingOnload.forEach(function (type) {
      if (newInfo[type] && addCallbacks(options, type, newInfo[type])) {
        addLoadListeners = true;
      }
    });

    if (addLoadListeners) {
      addListeners();
    }

    return false;
  } // initialize tracked changes


  var tagsAdded = {};
  var tagsRemoved = {};

  for (var type in newInfo) {
    // ignore these
    if (includes(metaInfoOptionKeys, type)) {
      continue;
    }

    if (type === 'title') {
      // update the title
      updateTitle(newInfo.title);
      continue;
    }

    if (includes(metaInfoAttributeKeys, type)) {
      var tagName = type.substr(0, 4);
      updateAttribute(appId, options, type, newInfo[type], getTag(tags, tagName));
      continue;
    } // tags should always be an array, ignore if it isnt


    if (!isArray(newInfo[type])) {
      continue;
    }

    var _updateTag = updateTag(appId, options, type, newInfo[type], getTag(tags, 'head'), getTag(tags, 'body')),
        oldTags = _updateTag.oldTags,
        newTags = _updateTag.newTags;

    if (newTags.length) {
      tagsAdded[type] = newTags;
      tagsRemoved[type] = oldTags;
    }
  }

  return {
    tagsAdded: tagsAdded,
    tagsRemoved: tagsRemoved
  };
}

var appsMetaInfo;
function addApp(rootVm, appId, options) {
  return {
    set: function set(metaInfo) {
      return setMetaInfo(rootVm, appId, options, metaInfo);
    },
    remove: function remove() {
      return removeMetaInfo(rootVm, appId, options);
    }
  };
}
function setMetaInfo(rootVm, appId, options, metaInfo) {
  // if a vm exists _and_ its mounted then immediately update
  if (rootVm && rootVm.$el) {
    return updateClientMetaInfo(appId, options, metaInfo);
  } // store for later, the info
  // will be set on the first refresh


  appsMetaInfo = appsMetaInfo || {};
  appsMetaInfo[appId] = metaInfo;
}
function removeMetaInfo(rootVm, appId, options) {
  if (rootVm && rootVm.$el) {
    var tags = {};

    var _iterator = _createForOfIteratorHelper(metaInfoAttributeKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        var tagName = type.substr(0, 4);
        updateAttribute(appId, options, type, {}, getTag(tags, tagName));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return removeElementsByAppId(options, appId);
  }

  if (appsMetaInfo[appId]) {
    delete appsMetaInfo[appId];
    clearAppsMetaInfo();
  }
}
function getAppsMetaInfo() {
  return appsMetaInfo;
}
function clearAppsMetaInfo(force) {
  if (force || !Object.keys(appsMetaInfo).length) {
    appsMetaInfo = undefined;
  }
}

/**
 * Returns the correct meta info for the given component
 * (child components will overwrite parent meta info)
 *
 * @param  {Object} component - the Vue instance to get meta info from
 * @return {Object} - returned meta info
 */

function getMetaInfo(options, info, escapeSequences, component) {
  options = options || {};
  escapeSequences = escapeSequences || [];
  var _options = options,
      tagIDKeyName = _options.tagIDKeyName; // Remove all "template" tags from meta
  // backup the title chunk in case user wants access to it

  if (info.title) {
    info.titleChunk = info.title;
  } // replace title with populated template


  if (info.titleTemplate && info.titleTemplate !== '%s') {
    applyTemplate({
      component: component,
      contentKeyName: 'title'
    }, info, info.titleTemplate, info.titleChunk || '');
  } // convert base tag to an array so it can be handled the same way
  // as the other tags


  if (info.base) {
    info.base = Object.keys(info.base).length ? [info.base] : [];
  }

  if (info.meta) {
    // remove meta items with duplicate vmid's
    info.meta = info.meta.filter(function (metaItem, index, arr) {
      var hasVmid = !!metaItem[tagIDKeyName];

      if (!hasVmid) {
        return true;
      }

      var isFirstItemForVmid = index === findIndex(arr, function (item) {
        return item[tagIDKeyName] === metaItem[tagIDKeyName];
      });
      return isFirstItemForVmid;
    }); // apply templates if needed

    info.meta.forEach(function (metaObject) {
      return applyTemplate(options, metaObject);
    });
  }

  return escapeMetaInfo(options, info, escapeSequences);
}

/**
 * When called, will update the current meta info with new meta info.
 * Useful when updating meta info as the result of an asynchronous
 * action that resolves after the initial render takes place.
 *
 * Credit to [Sébastien Chopin](https://github.com/Atinux) for the suggestion
 * to implement this method.
 *
 * @return {Object} - new meta info
 */

function refresh(rootVm, options) {
  options = options || {}; // make sure vue-meta was initiated

  if (!rootVm[rootConfigKey]) {
    showWarningNotSupported();
    return {};
  } // collect & aggregate all metaInfo $options


  var rawInfo = getComponentMetaInfo(options, rootVm);
  var metaInfo = getMetaInfo(options, rawInfo, clientSequences, rootVm);
  var appId = rootVm[rootConfigKey].appId;
  var tags = updateClientMetaInfo(appId, options, metaInfo); // emit "event" with new info

  if (tags && isFunction(metaInfo.changed)) {
    metaInfo.changed(metaInfo, tags.tagsAdded, tags.tagsRemoved);
    tags = {
      addedTags: tags.tagsAdded,
      removedTags: tags.tagsRemoved
    };
  }

  var appsMetaInfo = getAppsMetaInfo();

  if (appsMetaInfo) {
    for (var additionalAppId in appsMetaInfo) {
      updateClientMetaInfo(additionalAppId, options, appsMetaInfo[additionalAppId]);
      delete appsMetaInfo[additionalAppId];
    }

    clearAppsMetaInfo(true);
  }

  return {
    vm: rootVm,
    metaInfo: metaInfo,
    // eslint-disable-line object-shorthand
    tags: tags
  };
}

/**
 * Generates tag attributes for use on the server.
 *
 * @param  {('bodyAttrs'|'htmlAttrs'|'headAttrs')} type - the type of attributes to generate
 * @param  {Object} data - the attributes to generate
 * @return {Object} - the attribute generator
 */

function attributeGenerator(options, type, data, _ref) {
  var addSsrAttribute = _ref.addSsrAttribute;

  var _ref2 = options || {},
      attribute = _ref2.attribute,
      ssrAttribute = _ref2.ssrAttribute;

  var attributeStr = '';

  for (var attr in data) {
    var attrData = data[attr];
    var attrValues = [];

    for (var appId in attrData) {
      attrValues.push.apply(attrValues, _toConsumableArray([].concat(attrData[appId])));
    }

    if (attrValues.length) {
      attributeStr += booleanHtmlAttributes.includes(attr) && attrValues.some(Boolean) ? "".concat(attr) : "".concat(attr, "=\"").concat(attrValues.join(' '), "\"");
      attributeStr += ' ';
    }
  }

  if (attributeStr) {
    attributeStr += "".concat(attribute, "=\"").concat(encodeURI(JSON.stringify(data)), "\"");
  }

  if (type === 'htmlAttrs' && addSsrAttribute) {
    return "".concat(ssrAttribute).concat(attributeStr ? ' ' : '').concat(attributeStr);
  }

  return attributeStr;
}

/**
 * Generates title output for the server
 *
 * @param  {'title'} type - the string "title"
 * @param  {String} data - the title text
 * @return {Object} - the title generator
 */
function titleGenerator(options, type, data, generatorOptions) {
  var _ref = generatorOptions || {},
      ln = _ref.ln;

  if (!data) {
    return '';
  }

  return "<".concat(type, ">").concat(data, "</").concat(type, ">").concat(ln ? '\n' : '');
}

/**
 * Generates meta, base, link, style, script, noscript tags for use on the server
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - the tag generator
 */

function tagGenerator(options, type, tags, generatorOptions) {
  var _ref = options || {},
      ssrAppId = _ref.ssrAppId,
      attribute = _ref.attribute,
      tagIDKeyName = _ref.tagIDKeyName;

  var _ref2 = generatorOptions || {},
      appId = _ref2.appId,
      _ref2$isSSR = _ref2.isSSR,
      isSSR = _ref2$isSSR === void 0 ? true : _ref2$isSSR,
      _ref2$body = _ref2.body,
      body = _ref2$body === void 0 ? false : _ref2$body,
      _ref2$pbody = _ref2.pbody,
      pbody = _ref2$pbody === void 0 ? false : _ref2$pbody,
      _ref2$ln = _ref2.ln,
      ln = _ref2$ln === void 0 ? false : _ref2$ln;

  var dataAttributes = [tagIDKeyName].concat(_toConsumableArray(commonDataAttributes));

  if (!tags || !tags.length) {
    return '';
  } // build a string containing all tags of this type


  return tags.reduce(function (tagsStr, tag) {
    if (tag.skip) {
      return tagsStr;
    }

    var tagKeys = Object.keys(tag);

    if (tagKeys.length === 0) {
      return tagsStr; // Bail on empty tag object
    }

    if (Boolean(tag.body) !== body || Boolean(tag.pbody) !== pbody) {
      return tagsStr;
    }

    var attrs = tag.once ? '' : " ".concat(attribute, "=\"").concat(appId || (isSSR === false ? '1' : ssrAppId), "\""); // build a string containing all attributes of this tag

    for (var attr in tag) {
      // these attributes are treated as children on the tag
      if (tagAttributeAsInnerContent.includes(attr) || tagProperties.includes(attr)) {
        continue;
      }

      if (attr === 'callback') {
        attrs += ' onload="this.__vm_l=1"';
        continue;
      } // these form the attribute list for this tag


      var prefix = '';

      if (dataAttributes.includes(attr)) {
        prefix = 'data-';
      }

      var isBooleanAttr = !prefix && booleanHtmlAttributes.includes(attr);

      if (isBooleanAttr && !tag[attr]) {
        continue;
      }

      attrs += " ".concat(prefix).concat(attr) + (isBooleanAttr ? '' : "=\"".concat(tag[attr], "\""));
    }

    var json = '';

    if (tag.json) {
      json = JSON.stringify(tag.json);
    } // grab child content from one of these attributes, if possible


    var content = tag.innerHTML || tag.cssText || json; // generate tag exactly without any other redundant attribute
    // these tags have no end tag

    var hasEndTag = !tagsWithoutEndTag.includes(type); // these tag types will have content inserted

    var hasContent = hasEndTag && tagsWithInnerContent.includes(type); // the final string for this specific tag

    return "".concat(tagsStr, "<").concat(type).concat(attrs).concat(!hasContent && hasEndTag ? '/' : '', ">") + (hasContent ? "".concat(content, "</").concat(type, ">") : '') + (ln ? '\n' : '');
  }, '');
}

/**
 * Converts a meta info property to one that can be stringified on the server
 *
 * @param  {String} type - the type of data to convert
 * @param  {(String|Object|Array<Object>)} data - the data value
 * @return {Object} - the new injector
 */

function generateServerInjector(options, metaInfo, globalInjectOptions) {
  var serverInjector = {
    data: metaInfo,
    extraData: undefined,
    addInfo: function addInfo(appId, metaInfo) {
      this.extraData = this.extraData || {};
      this.extraData[appId] = metaInfo;
    },
    callInjectors: function callInjectors(opts) {
      var m = this.injectors; // only call title for the head

      return (opts.body || opts.pbody ? '' : m.title.text(opts)) + m.meta.text(opts) + m.base.text(opts) + m.link.text(opts) + m.style.text(opts) + m.script.text(opts) + m.noscript.text(opts);
    },
    injectors: {
      head: function head(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln
        }));
      },
      bodyPrepend: function bodyPrepend(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln,
          pbody: true
        }));
      },
      bodyAppend: function bodyAppend(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln,
          body: true
        }));
      }
    }
  };

  var _loop = function _loop(type) {
    if (metaInfoOptionKeys.includes(type)) {
      return "continue";
    }

    serverInjector.injectors[type] = {
      text: function text(injectOptions) {
        var addSsrAttribute = injectOptions === true;
        injectOptions = _objectSpread2(_objectSpread2({
          addSsrAttribute: addSsrAttribute
        }, globalInjectOptions), injectOptions);

        if (type === 'title') {
          return titleGenerator(options, type, serverInjector.data[type], injectOptions);
        }

        if (metaInfoAttributeKeys.includes(type)) {
          var attributeData = {};
          var data = serverInjector.data[type];

          if (data) {
            var appId = injectOptions.isSSR === false ? '1' : options.ssrAppId;

            for (var attr in data) {
              attributeData[attr] = _defineProperty({}, appId, data[attr]);
            }
          }

          if (serverInjector.extraData) {
            for (var _appId in serverInjector.extraData) {
              var _data = serverInjector.extraData[_appId][type];

              if (_data) {
                for (var _attr in _data) {
                  attributeData[_attr] = _objectSpread2(_objectSpread2({}, attributeData[_attr]), {}, _defineProperty({}, _appId, _data[_attr]));
                }
              }
            }
          }

          return attributeGenerator(options, type, attributeData, injectOptions);
        }

        var str = tagGenerator(options, type, serverInjector.data[type], injectOptions);

        if (serverInjector.extraData) {
          for (var _appId2 in serverInjector.extraData) {
            var _data2 = serverInjector.extraData[_appId2][type];
            var extraStr = tagGenerator(options, type, _data2, _objectSpread2({
              appId: _appId2
            }, injectOptions));
            str = "".concat(str).concat(extraStr);
          }
        }

        return str;
      }
    };
  };

  for (var type in defaultInfo) {
    var _ret = _loop(type);

    if (_ret === "continue") continue;
  }

  return serverInjector;
}

/**
 * Converts the state of the meta info object such that each item
 * can be compiled to a tag string on the server
 *
 * @vm {Object} - Vue instance - ideally the root component
 * @return {Object} - server meta info with `toString` methods
 */

function inject(rootVm, options, injectOptions) {
  // make sure vue-meta was initiated
  if (!rootVm[rootConfigKey]) {
    showWarningNotSupported();
    return {};
  } // collect & aggregate all metaInfo $options


  var rawInfo = getComponentMetaInfo(options, rootVm);
  var metaInfo = getMetaInfo(options, rawInfo, serverSequences, rootVm); // generate server injector

  var serverInjector = generateServerInjector(options, metaInfo, injectOptions); // add meta info from additional apps

  var appsMetaInfo = getAppsMetaInfo();

  if (appsMetaInfo) {
    for (var additionalAppId in appsMetaInfo) {
      serverInjector.addInfo(additionalAppId, appsMetaInfo[additionalAppId]);
      delete appsMetaInfo[additionalAppId];
    }

    clearAppsMetaInfo(true);
  }

  return serverInjector.injectors;
}

function $meta(options) {
  options = options || {};
  /**
   * Returns an injector for server-side rendering.
   * @this {Object} - the Vue instance (a root component)
   * @return {Object} - injector
   */

  var $root = this.$root;
  return {
    getOptions: function getOptions$1() {
      return getOptions(options);
    },
    setOptions: function setOptions(newOptions) {
      var refreshNavKey = 'refreshOnceOnNavigation';

      if (newOptions && newOptions[refreshNavKey]) {
        options.refreshOnceOnNavigation = !!newOptions[refreshNavKey];
        addNavGuards($root);
      }

      var debounceWaitKey = 'debounceWait';

      if (newOptions && debounceWaitKey in newOptions) {
        var debounceWait = parseInt(newOptions[debounceWaitKey]);

        if (!isNaN(debounceWait)) {
          options.debounceWait = debounceWait;
        }
      }

      var waitOnDestroyedKey = 'waitOnDestroyed';

      if (newOptions && waitOnDestroyedKey in newOptions) {
        options.waitOnDestroyed = !!newOptions[waitOnDestroyedKey];
      }
    },
    refresh: function refresh$1() {
      return refresh($root, options);
    },
    inject: function inject$1(injectOptions) {
      return  inject($root, options, injectOptions) ;
    },
    pause: function pause$1() {
      return pause($root);
    },
    resume: function resume$1() {
      return resume($root);
    },
    addApp: function addApp$1(appId) {
      return addApp($root, appId, options);
    }
  };
}

function generate(rawInfo, options) {
  options = setOptions(options);
  var metaInfo = getMetaInfo(options, rawInfo, serverSequences);
  var serverInjector = generateServerInjector(options, metaInfo);
  return serverInjector.injectors;
}

/**
 * Plugin install function.
 * @param {Function} Vue - the Vue constructor.
 */

function install(Vue, options) {
  if (Vue.__vuemeta_installed) {
    return;
  }

  Vue.__vuemeta_installed = true;
  options = setOptions(options);

  Vue.prototype.$meta = function () {
    return $meta.call(this, options);
  };

  Vue.mixin(createMixin(Vue, options));
}

var index = {
  version: version,
  install: install,
  generate: function generate$1(metaInfo, options) {
    return  generate(metaInfo, options) ;
  },
  hasMetaInfo: hasMetaInfo
};

module.exports = index;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(39);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.URL = __webpack_require__(23).interface;
exports.serializeURL = __webpack_require__(4).serializeURL;
exports.serializeURLOrigin = __webpack_require__(4).serializeURLOrigin;
exports.basicURLParse = __webpack_require__(4).basicURLParse;
exports.setTheUsername = __webpack_require__(4).setTheUsername;
exports.setThePassword = __webpack_require__(4).setThePassword;
exports.serializeHost = __webpack_require__(4).serializeHost;
exports.serializeInteger = __webpack_require__(4).serializeInteger;
exports.parseURL = __webpack_require__(4).parseURL;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const conversions = __webpack_require__(24);
const utils = __webpack_require__(25);
const Impl = __webpack_require__(26);

const impl = utils.implSymbol;

function URL(url) {
  if (!this || this[impl] || !(this instanceof URL)) {
    throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
  }
  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["USVString"](args[0]);
  if (args[1] !== undefined) {
  args[1] = conversions["USVString"](args[1]);
  }

  module.exports.setup(this, args);
}

URL.prototype.toJSON = function toJSON() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  for (let i = 0; i < arguments.length && i < 0; ++i) {
    args[i] = arguments[i];
  }
  return this[impl].toJSON.apply(this[impl], args);
};
Object.defineProperty(URL.prototype, "href", {
  get() {
    return this[impl].href;
  },
  set(V) {
    V = conversions["USVString"](V);
    this[impl].href = V;
  },
  enumerable: true,
  configurable: true
});

URL.prototype.toString = function () {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this.href;
};

Object.defineProperty(URL.prototype, "origin", {
  get() {
    return this[impl].origin;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "protocol", {
  get() {
    return this[impl].protocol;
  },
  set(V) {
    V = conversions["USVString"](V);
    this[impl].protocol = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "username", {
  get() {
    return this[impl].username;
  },
  set(V) {
    V = conversions["USVString"](V);
    this[impl].username = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "password", {
  get() {
    return this[impl].password;
  },
  set(V) {
    V = conversions["USVString"](V);
    this[impl].password = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "host", {
  get() {
    return this[impl].host;
  },
  set(V) {
    V = conversions["USVString"](V);
    this[impl].host = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "hostname", {
  get() {
    return this[impl].hostname;
  },
  set(V) {
    V = conversions["USVString"](V);
    this[impl].hostname = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "port", {
  get() {
    return this[impl].port;
  },
  set(V) {
    V = conversions["USVString"](V);
    this[impl].port = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "pathname", {
  get() {
    return this[impl].pathname;
  },
  set(V) {
    V = conversions["USVString"](V);
    this[impl].pathname = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "search", {
  get() {
    return this[impl].search;
  },
  set(V) {
    V = conversions["USVString"](V);
    this[impl].search = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "hash", {
  get() {
    return this[impl].hash;
  },
  set(V) {
    V = conversions["USVString"](V);
    this[impl].hash = V;
  },
  enumerable: true,
  configurable: true
});


module.exports = {
  is(obj) {
    return !!obj && obj[impl] instanceof Impl.implementation;
  },
  create(constructorArgs, privateData) {
    let obj = Object.create(URL.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};
    privateData.wrapper = obj;

    obj[impl] = new Impl.implementation(constructorArgs, privateData);
    obj[impl][utils.wrapperSymbol] = obj;
  },
  interface: URL,
  expose: {
    Window: { URL: URL },
    Worker: { URL: URL }
  }
};



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var conversions = {};
module.exports = conversions;

function sign(x) {
    return x < 0 ? -1 : 1;
}

function evenRound(x) {
    // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
    if ((x % 1) === 0.5 && (x & 1) === 0) { // [even number].5; round down (i.e. floor)
        return Math.floor(x);
    } else {
        return Math.round(x);
    }
}

function createNumberConversion(bitLength, typeOpts) {
    if (!typeOpts.unsigned) {
        --bitLength;
    }
    const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
    const upperBound = Math.pow(2, bitLength) - 1;

    const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
    const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);

    return function(V, opts) {
        if (!opts) opts = {};

        let x = +V;

        if (opts.enforceRange) {
            if (!Number.isFinite(x)) {
                throw new TypeError("Argument is not a finite number");
            }

            x = sign(x) * Math.floor(Math.abs(x));
            if (x < lowerBound || x > upperBound) {
                throw new TypeError("Argument is not in byte range");
            }

            return x;
        }

        if (!isNaN(x) && opts.clamp) {
            x = evenRound(x);

            if (x < lowerBound) x = lowerBound;
            if (x > upperBound) x = upperBound;
            return x;
        }

        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }

        x = sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;

        if (!typeOpts.unsigned && x >= moduloBound) {
            return x - moduloVal;
        } else if (typeOpts.unsigned) {
            if (x < 0) {
              x += moduloVal;
            } else if (x === -0) { // don't return negative zero
              return 0;
            }
        }

        return x;
    }
}

conversions["void"] = function () {
    return undefined;
};

conversions["boolean"] = function (val) {
    return !!val;
};

conversions["byte"] = createNumberConversion(8, { unsigned: false });
conversions["octet"] = createNumberConversion(8, { unsigned: true });

conversions["short"] = createNumberConversion(16, { unsigned: false });
conversions["unsigned short"] = createNumberConversion(16, { unsigned: true });

conversions["long"] = createNumberConversion(32, { unsigned: false });
conversions["unsigned long"] = createNumberConversion(32, { unsigned: true });

conversions["long long"] = createNumberConversion(32, { unsigned: false, moduloBitLength: 64 });
conversions["unsigned long long"] = createNumberConversion(32, { unsigned: true, moduloBitLength: 64 });

conversions["double"] = function (V) {
    const x = +V;

    if (!Number.isFinite(x)) {
        throw new TypeError("Argument is not a finite floating-point value");
    }

    return x;
};

conversions["unrestricted double"] = function (V) {
    const x = +V;

    if (isNaN(x)) {
        throw new TypeError("Argument is NaN");
    }

    return x;
};

// not quite valid, but good enough for JS
conversions["float"] = conversions["double"];
conversions["unrestricted float"] = conversions["unrestricted double"];

conversions["DOMString"] = function (V, opts) {
    if (!opts) opts = {};

    if (opts.treatNullAsEmptyString && V === null) {
        return "";
    }

    return String(V);
};

conversions["ByteString"] = function (V, opts) {
    const x = String(V);
    let c = undefined;
    for (let i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
        if (c > 255) {
            throw new TypeError("Argument is not a valid bytestring");
        }
    }

    return x;
};

conversions["USVString"] = function (V) {
    const S = String(V);
    const n = S.length;
    const U = [];
    for (let i = 0; i < n; ++i) {
        const c = S.charCodeAt(i);
        if (c < 0xD800 || c > 0xDFFF) {
            U.push(String.fromCodePoint(c));
        } else if (0xDC00 <= c && c <= 0xDFFF) {
            U.push(String.fromCodePoint(0xFFFD));
        } else {
            if (i === n - 1) {
                U.push(String.fromCodePoint(0xFFFD));
            } else {
                const d = S.charCodeAt(i + 1);
                if (0xDC00 <= d && d <= 0xDFFF) {
                    const a = c & 0x3FF;
                    const b = d & 0x3FF;
                    U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                    ++i;
                } else {
                    U.push(String.fromCodePoint(0xFFFD));
                }
            }
        }
    }

    return U.join('');
};

conversions["Date"] = function (V, opts) {
    if (!(V instanceof Date)) {
        throw new TypeError("Argument is not a Date object");
    }
    if (isNaN(V)) {
        return undefined;
    }

    return V;
};

conversions["RegExp"] = function (V, opts) {
    if (!(V instanceof RegExp)) {
        V = new RegExp(V);
    }

    return V;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.mixin = function mixin(target, source) {
  const keys = Object.getOwnPropertyNames(source);
  for (let i = 0; i < keys.length; ++i) {
    Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
  }
};

module.exports.wrapperSymbol = Symbol("wrapper");
module.exports.implSymbol = Symbol("impl");

module.exports.wrapperForImpl = function (impl) {
  return impl[module.exports.wrapperSymbol];
};

module.exports.implForWrapper = function (wrapper) {
  return wrapper[module.exports.implSymbol];
};



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const usm = __webpack_require__(4);

exports.implementation = class URLImpl {
  constructor(constructorArgs) {
    const url = constructorArgs[0];
    const base = constructorArgs[1];

    let parsedBase = null;
    if (base !== undefined) {
      parsedBase = usm.basicURLParse(base);
      if (parsedBase === "failure") {
        throw new TypeError("Invalid base URL");
      }
    }

    const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase });
    if (parsedURL === "failure") {
      throw new TypeError("Invalid URL");
    }

    this._url = parsedURL;

    // TODO: query stuff
  }

  get href() {
    return usm.serializeURL(this._url);
  }

  set href(v) {
    const parsedURL = usm.basicURLParse(v);
    if (parsedURL === "failure") {
      throw new TypeError("Invalid URL");
    }

    this._url = parsedURL;
  }

  get origin() {
    return usm.serializeURLOrigin(this._url);
  }

  get protocol() {
    return this._url.scheme + ":";
  }

  set protocol(v) {
    usm.basicURLParse(v + ":", { url: this._url, stateOverride: "scheme start" });
  }

  get username() {
    return this._url.username;
  }

  set username(v) {
    if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
      return;
    }

    usm.setTheUsername(this._url, v);
  }

  get password() {
    return this._url.password;
  }

  set password(v) {
    if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
      return;
    }

    usm.setThePassword(this._url, v);
  }

  get host() {
    const url = this._url;

    if (url.host === null) {
      return "";
    }

    if (url.port === null) {
      return usm.serializeHost(url.host);
    }

    return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
  }

  set host(v) {
    if (this._url.cannotBeABaseURL) {
      return;
    }

    usm.basicURLParse(v, { url: this._url, stateOverride: "host" });
  }

  get hostname() {
    if (this._url.host === null) {
      return "";
    }

    return usm.serializeHost(this._url.host);
  }

  set hostname(v) {
    if (this._url.cannotBeABaseURL) {
      return;
    }

    usm.basicURLParse(v, { url: this._url, stateOverride: "hostname" });
  }

  get port() {
    if (this._url.port === null) {
      return "";
    }

    return usm.serializeInteger(this._url.port);
  }

  set port(v) {
    if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
      return;
    }

    if (v === "") {
      this._url.port = null;
    } else {
      usm.basicURLParse(v, { url: this._url, stateOverride: "port" });
    }
  }

  get pathname() {
    if (this._url.cannotBeABaseURL) {
      return this._url.path[0];
    }

    if (this._url.path.length === 0) {
      return "";
    }

    return "/" + this._url.path.join("/");
  }

  set pathname(v) {
    if (this._url.cannotBeABaseURL) {
      return;
    }

    this._url.path = [];
    usm.basicURLParse(v, { url: this._url, stateOverride: "path start" });
  }

  get search() {
    if (this._url.query === null || this._url.query === "") {
      return "";
    }

    return "?" + this._url.query;
  }

  set search(v) {
    // TODO: query stuff

    const url = this._url;

    if (v === "") {
      url.query = null;
      return;
    }

    const input = v[0] === "?" ? v.substring(1) : v;
    url.query = "";
    usm.basicURLParse(input, { url, stateOverride: "query" });
  }

  get hash() {
    if (this._url.fragment === null || this._url.fragment === "") {
      return "";
    }

    return "#" + this._url.fragment;
  }

  set hash(v) {
    if (v === "") {
      this._url.fragment = null;
      return;
    }

    const input = v[0] === "#" ? v.substring(1) : v;
    this._url.fragment = "";
    usm.basicURLParse(input, { url: this._url, stateOverride: "fragment" });
  }

  toJSON() {
    return this.href;
  }
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var punycode = __webpack_require__(13);
var mappingTable = __webpack_require__(28);

var PROCESSING_OPTIONS = {
  TRANSITIONAL: 0,
  NONTRANSITIONAL: 1
};

function normalize(str) { // fix bug in v8
  return str.split('\u0000').map(function (s) { return s.normalize('NFC'); }).join('\u0000');
}

function findStatus(val) {
  var start = 0;
  var end = mappingTable.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    var target = mappingTable[mid];
    if (target[0][0] <= val && target[0][1] >= val) {
      return target;
    } else if (target[0][0] > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
}

var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

function countSymbols(string) {
  return string
    // replace every surrogate pair with a BMP symbol
    .replace(regexAstralSymbols, '_')
    // then get the length
    .length;
}

function mapChars(domain_name, useSTD3, processing_option) {
  var hasError = false;
  var processed = "";

  var len = countSymbols(domain_name);
  for (var i = 0; i < len; ++i) {
    var codePoint = domain_name.codePointAt(i);
    var status = findStatus(codePoint);

    switch (status[1]) {
      case "disallowed":
        hasError = true;
        processed += String.fromCodePoint(codePoint);
        break;
      case "ignored":
        break;
      case "mapped":
        processed += String.fromCodePoint.apply(String, status[2]);
        break;
      case "deviation":
        if (processing_option === PROCESSING_OPTIONS.TRANSITIONAL) {
          processed += String.fromCodePoint.apply(String, status[2]);
        } else {
          processed += String.fromCodePoint(codePoint);
        }
        break;
      case "valid":
        processed += String.fromCodePoint(codePoint);
        break;
      case "disallowed_STD3_mapped":
        if (useSTD3) {
          hasError = true;
          processed += String.fromCodePoint(codePoint);
        } else {
          processed += String.fromCodePoint.apply(String, status[2]);
        }
        break;
      case "disallowed_STD3_valid":
        if (useSTD3) {
          hasError = true;
        }

        processed += String.fromCodePoint(codePoint);
        break;
    }
  }

  return {
    string: processed,
    error: hasError
  };
}

var combiningMarksRegex = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;

function validateLabel(label, processing_option) {
  if (label.substr(0, 4) === "xn--") {
    label = punycode.toUnicode(label);
    processing_option = PROCESSING_OPTIONS.NONTRANSITIONAL;
  }

  var error = false;

  if (normalize(label) !== label ||
      (label[3] === "-" && label[4] === "-") ||
      label[0] === "-" || label[label.length - 1] === "-" ||
      label.indexOf(".") !== -1 ||
      label.search(combiningMarksRegex) === 0) {
    error = true;
  }

  var len = countSymbols(label);
  for (var i = 0; i < len; ++i) {
    var status = findStatus(label.codePointAt(i));
    if ((processing === PROCESSING_OPTIONS.TRANSITIONAL && status[1] !== "valid") ||
        (processing === PROCESSING_OPTIONS.NONTRANSITIONAL &&
         status[1] !== "valid" && status[1] !== "deviation")) {
      error = true;
      break;
    }
  }

  return {
    label: label,
    error: error
  };
}

function processing(domain_name, useSTD3, processing_option) {
  var result = mapChars(domain_name, useSTD3, processing_option);
  result.string = normalize(result.string);

  var labels = result.string.split(".");
  for (var i = 0; i < labels.length; ++i) {
    try {
      var validation = validateLabel(labels[i]);
      labels[i] = validation.label;
      result.error = result.error || validation.error;
    } catch(e) {
      result.error = true;
    }
  }

  return {
    string: labels.join("."),
    error: result.error
  };
}

module.exports.toASCII = function(domain_name, useSTD3, processing_option, verifyDnsLength) {
  var result = processing(domain_name, useSTD3, processing_option);
  var labels = result.string.split(".");
  labels = labels.map(function(l) {
    try {
      return punycode.toASCII(l);
    } catch(e) {
      result.error = true;
      return l;
    }
  });

  if (verifyDnsLength) {
    var total = labels.slice(0, labels.length - 1).join(".").length;
    if (total.length > 253 || total.length === 0) {
      result.error = true;
    }

    for (var i=0; i < labels.length; ++i) {
      if (labels.length > 63 || labels.length === 0) {
        result.error = true;
        break;
      }
    }
  }

  if (result.error) return null;
  return labels.join(".");
};

module.exports.toUnicode = function(domain_name, useSTD3) {
  var result = processing(domain_name, useSTD3, PROCESSING_OPTIONS.NONTRANSITIONAL);

  return {
    domain: result.string,
    error: result.error
  };
};

module.exports.PROCESSING_OPTIONS = PROCESSING_OPTIONS;


/***/ }),
/* 28 */
/***/ (function(module) {

module.exports = JSON.parse("[[[0,44],\"disallowed_STD3_valid\"],[[45,46],\"valid\"],[[47,47],\"disallowed_STD3_valid\"],[[48,57],\"valid\"],[[58,64],\"disallowed_STD3_valid\"],[[65,65],\"mapped\",[97]],[[66,66],\"mapped\",[98]],[[67,67],\"mapped\",[99]],[[68,68],\"mapped\",[100]],[[69,69],\"mapped\",[101]],[[70,70],\"mapped\",[102]],[[71,71],\"mapped\",[103]],[[72,72],\"mapped\",[104]],[[73,73],\"mapped\",[105]],[[74,74],\"mapped\",[106]],[[75,75],\"mapped\",[107]],[[76,76],\"mapped\",[108]],[[77,77],\"mapped\",[109]],[[78,78],\"mapped\",[110]],[[79,79],\"mapped\",[111]],[[80,80],\"mapped\",[112]],[[81,81],\"mapped\",[113]],[[82,82],\"mapped\",[114]],[[83,83],\"mapped\",[115]],[[84,84],\"mapped\",[116]],[[85,85],\"mapped\",[117]],[[86,86],\"mapped\",[118]],[[87,87],\"mapped\",[119]],[[88,88],\"mapped\",[120]],[[89,89],\"mapped\",[121]],[[90,90],\"mapped\",[122]],[[91,96],\"disallowed_STD3_valid\"],[[97,122],\"valid\"],[[123,127],\"disallowed_STD3_valid\"],[[128,159],\"disallowed\"],[[160,160],\"disallowed_STD3_mapped\",[32]],[[161,167],\"valid\",[],\"NV8\"],[[168,168],\"disallowed_STD3_mapped\",[32,776]],[[169,169],\"valid\",[],\"NV8\"],[[170,170],\"mapped\",[97]],[[171,172],\"valid\",[],\"NV8\"],[[173,173],\"ignored\"],[[174,174],\"valid\",[],\"NV8\"],[[175,175],\"disallowed_STD3_mapped\",[32,772]],[[176,177],\"valid\",[],\"NV8\"],[[178,178],\"mapped\",[50]],[[179,179],\"mapped\",[51]],[[180,180],\"disallowed_STD3_mapped\",[32,769]],[[181,181],\"mapped\",[956]],[[182,182],\"valid\",[],\"NV8\"],[[183,183],\"valid\"],[[184,184],\"disallowed_STD3_mapped\",[32,807]],[[185,185],\"mapped\",[49]],[[186,186],\"mapped\",[111]],[[187,187],\"valid\",[],\"NV8\"],[[188,188],\"mapped\",[49,8260,52]],[[189,189],\"mapped\",[49,8260,50]],[[190,190],\"mapped\",[51,8260,52]],[[191,191],\"valid\",[],\"NV8\"],[[192,192],\"mapped\",[224]],[[193,193],\"mapped\",[225]],[[194,194],\"mapped\",[226]],[[195,195],\"mapped\",[227]],[[196,196],\"mapped\",[228]],[[197,197],\"mapped\",[229]],[[198,198],\"mapped\",[230]],[[199,199],\"mapped\",[231]],[[200,200],\"mapped\",[232]],[[201,201],\"mapped\",[233]],[[202,202],\"mapped\",[234]],[[203,203],\"mapped\",[235]],[[204,204],\"mapped\",[236]],[[205,205],\"mapped\",[237]],[[206,206],\"mapped\",[238]],[[207,207],\"mapped\",[239]],[[208,208],\"mapped\",[240]],[[209,209],\"mapped\",[241]],[[210,210],\"mapped\",[242]],[[211,211],\"mapped\",[243]],[[212,212],\"mapped\",[244]],[[213,213],\"mapped\",[245]],[[214,214],\"mapped\",[246]],[[215,215],\"valid\",[],\"NV8\"],[[216,216],\"mapped\",[248]],[[217,217],\"mapped\",[249]],[[218,218],\"mapped\",[250]],[[219,219],\"mapped\",[251]],[[220,220],\"mapped\",[252]],[[221,221],\"mapped\",[253]],[[222,222],\"mapped\",[254]],[[223,223],\"deviation\",[115,115]],[[224,246],\"valid\"],[[247,247],\"valid\",[],\"NV8\"],[[248,255],\"valid\"],[[256,256],\"mapped\",[257]],[[257,257],\"valid\"],[[258,258],\"mapped\",[259]],[[259,259],\"valid\"],[[260,260],\"mapped\",[261]],[[261,261],\"valid\"],[[262,262],\"mapped\",[263]],[[263,263],\"valid\"],[[264,264],\"mapped\",[265]],[[265,265],\"valid\"],[[266,266],\"mapped\",[267]],[[267,267],\"valid\"],[[268,268],\"mapped\",[269]],[[269,269],\"valid\"],[[270,270],\"mapped\",[271]],[[271,271],\"valid\"],[[272,272],\"mapped\",[273]],[[273,273],\"valid\"],[[274,274],\"mapped\",[275]],[[275,275],\"valid\"],[[276,276],\"mapped\",[277]],[[277,277],\"valid\"],[[278,278],\"mapped\",[279]],[[279,279],\"valid\"],[[280,280],\"mapped\",[281]],[[281,281],\"valid\"],[[282,282],\"mapped\",[283]],[[283,283],\"valid\"],[[284,284],\"mapped\",[285]],[[285,285],\"valid\"],[[286,286],\"mapped\",[287]],[[287,287],\"valid\"],[[288,288],\"mapped\",[289]],[[289,289],\"valid\"],[[290,290],\"mapped\",[291]],[[291,291],\"valid\"],[[292,292],\"mapped\",[293]],[[293,293],\"valid\"],[[294,294],\"mapped\",[295]],[[295,295],\"valid\"],[[296,296],\"mapped\",[297]],[[297,297],\"valid\"],[[298,298],\"mapped\",[299]],[[299,299],\"valid\"],[[300,300],\"mapped\",[301]],[[301,301],\"valid\"],[[302,302],\"mapped\",[303]],[[303,303],\"valid\"],[[304,304],\"mapped\",[105,775]],[[305,305],\"valid\"],[[306,307],\"mapped\",[105,106]],[[308,308],\"mapped\",[309]],[[309,309],\"valid\"],[[310,310],\"mapped\",[311]],[[311,312],\"valid\"],[[313,313],\"mapped\",[314]],[[314,314],\"valid\"],[[315,315],\"mapped\",[316]],[[316,316],\"valid\"],[[317,317],\"mapped\",[318]],[[318,318],\"valid\"],[[319,320],\"mapped\",[108,183]],[[321,321],\"mapped\",[322]],[[322,322],\"valid\"],[[323,323],\"mapped\",[324]],[[324,324],\"valid\"],[[325,325],\"mapped\",[326]],[[326,326],\"valid\"],[[327,327],\"mapped\",[328]],[[328,328],\"valid\"],[[329,329],\"mapped\",[700,110]],[[330,330],\"mapped\",[331]],[[331,331],\"valid\"],[[332,332],\"mapped\",[333]],[[333,333],\"valid\"],[[334,334],\"mapped\",[335]],[[335,335],\"valid\"],[[336,336],\"mapped\",[337]],[[337,337],\"valid\"],[[338,338],\"mapped\",[339]],[[339,339],\"valid\"],[[340,340],\"mapped\",[341]],[[341,341],\"valid\"],[[342,342],\"mapped\",[343]],[[343,343],\"valid\"],[[344,344],\"mapped\",[345]],[[345,345],\"valid\"],[[346,346],\"mapped\",[347]],[[347,347],\"valid\"],[[348,348],\"mapped\",[349]],[[349,349],\"valid\"],[[350,350],\"mapped\",[351]],[[351,351],\"valid\"],[[352,352],\"mapped\",[353]],[[353,353],\"valid\"],[[354,354],\"mapped\",[355]],[[355,355],\"valid\"],[[356,356],\"mapped\",[357]],[[357,357],\"valid\"],[[358,358],\"mapped\",[359]],[[359,359],\"valid\"],[[360,360],\"mapped\",[361]],[[361,361],\"valid\"],[[362,362],\"mapped\",[363]],[[363,363],\"valid\"],[[364,364],\"mapped\",[365]],[[365,365],\"valid\"],[[366,366],\"mapped\",[367]],[[367,367],\"valid\"],[[368,368],\"mapped\",[369]],[[369,369],\"valid\"],[[370,370],\"mapped\",[371]],[[371,371],\"valid\"],[[372,372],\"mapped\",[373]],[[373,373],\"valid\"],[[374,374],\"mapped\",[375]],[[375,375],\"valid\"],[[376,376],\"mapped\",[255]],[[377,377],\"mapped\",[378]],[[378,378],\"valid\"],[[379,379],\"mapped\",[380]],[[380,380],\"valid\"],[[381,381],\"mapped\",[382]],[[382,382],\"valid\"],[[383,383],\"mapped\",[115]],[[384,384],\"valid\"],[[385,385],\"mapped\",[595]],[[386,386],\"mapped\",[387]],[[387,387],\"valid\"],[[388,388],\"mapped\",[389]],[[389,389],\"valid\"],[[390,390],\"mapped\",[596]],[[391,391],\"mapped\",[392]],[[392,392],\"valid\"],[[393,393],\"mapped\",[598]],[[394,394],\"mapped\",[599]],[[395,395],\"mapped\",[396]],[[396,397],\"valid\"],[[398,398],\"mapped\",[477]],[[399,399],\"mapped\",[601]],[[400,400],\"mapped\",[603]],[[401,401],\"mapped\",[402]],[[402,402],\"valid\"],[[403,403],\"mapped\",[608]],[[404,404],\"mapped\",[611]],[[405,405],\"valid\"],[[406,406],\"mapped\",[617]],[[407,407],\"mapped\",[616]],[[408,408],\"mapped\",[409]],[[409,411],\"valid\"],[[412,412],\"mapped\",[623]],[[413,413],\"mapped\",[626]],[[414,414],\"valid\"],[[415,415],\"mapped\",[629]],[[416,416],\"mapped\",[417]],[[417,417],\"valid\"],[[418,418],\"mapped\",[419]],[[419,419],\"valid\"],[[420,420],\"mapped\",[421]],[[421,421],\"valid\"],[[422,422],\"mapped\",[640]],[[423,423],\"mapped\",[424]],[[424,424],\"valid\"],[[425,425],\"mapped\",[643]],[[426,427],\"valid\"],[[428,428],\"mapped\",[429]],[[429,429],\"valid\"],[[430,430],\"mapped\",[648]],[[431,431],\"mapped\",[432]],[[432,432],\"valid\"],[[433,433],\"mapped\",[650]],[[434,434],\"mapped\",[651]],[[435,435],\"mapped\",[436]],[[436,436],\"valid\"],[[437,437],\"mapped\",[438]],[[438,438],\"valid\"],[[439,439],\"mapped\",[658]],[[440,440],\"mapped\",[441]],[[441,443],\"valid\"],[[444,444],\"mapped\",[445]],[[445,451],\"valid\"],[[452,454],\"mapped\",[100,382]],[[455,457],\"mapped\",[108,106]],[[458,460],\"mapped\",[110,106]],[[461,461],\"mapped\",[462]],[[462,462],\"valid\"],[[463,463],\"mapped\",[464]],[[464,464],\"valid\"],[[465,465],\"mapped\",[466]],[[466,466],\"valid\"],[[467,467],\"mapped\",[468]],[[468,468],\"valid\"],[[469,469],\"mapped\",[470]],[[470,470],\"valid\"],[[471,471],\"mapped\",[472]],[[472,472],\"valid\"],[[473,473],\"mapped\",[474]],[[474,474],\"valid\"],[[475,475],\"mapped\",[476]],[[476,477],\"valid\"],[[478,478],\"mapped\",[479]],[[479,479],\"valid\"],[[480,480],\"mapped\",[481]],[[481,481],\"valid\"],[[482,482],\"mapped\",[483]],[[483,483],\"valid\"],[[484,484],\"mapped\",[485]],[[485,485],\"valid\"],[[486,486],\"mapped\",[487]],[[487,487],\"valid\"],[[488,488],\"mapped\",[489]],[[489,489],\"valid\"],[[490,490],\"mapped\",[491]],[[491,491],\"valid\"],[[492,492],\"mapped\",[493]],[[493,493],\"valid\"],[[494,494],\"mapped\",[495]],[[495,496],\"valid\"],[[497,499],\"mapped\",[100,122]],[[500,500],\"mapped\",[501]],[[501,501],\"valid\"],[[502,502],\"mapped\",[405]],[[503,503],\"mapped\",[447]],[[504,504],\"mapped\",[505]],[[505,505],\"valid\"],[[506,506],\"mapped\",[507]],[[507,507],\"valid\"],[[508,508],\"mapped\",[509]],[[509,509],\"valid\"],[[510,510],\"mapped\",[511]],[[511,511],\"valid\"],[[512,512],\"mapped\",[513]],[[513,513],\"valid\"],[[514,514],\"mapped\",[515]],[[515,515],\"valid\"],[[516,516],\"mapped\",[517]],[[517,517],\"valid\"],[[518,518],\"mapped\",[519]],[[519,519],\"valid\"],[[520,520],\"mapped\",[521]],[[521,521],\"valid\"],[[522,522],\"mapped\",[523]],[[523,523],\"valid\"],[[524,524],\"mapped\",[525]],[[525,525],\"valid\"],[[526,526],\"mapped\",[527]],[[527,527],\"valid\"],[[528,528],\"mapped\",[529]],[[529,529],\"valid\"],[[530,530],\"mapped\",[531]],[[531,531],\"valid\"],[[532,532],\"mapped\",[533]],[[533,533],\"valid\"],[[534,534],\"mapped\",[535]],[[535,535],\"valid\"],[[536,536],\"mapped\",[537]],[[537,537],\"valid\"],[[538,538],\"mapped\",[539]],[[539,539],\"valid\"],[[540,540],\"mapped\",[541]],[[541,541],\"valid\"],[[542,542],\"mapped\",[543]],[[543,543],\"valid\"],[[544,544],\"mapped\",[414]],[[545,545],\"valid\"],[[546,546],\"mapped\",[547]],[[547,547],\"valid\"],[[548,548],\"mapped\",[549]],[[549,549],\"valid\"],[[550,550],\"mapped\",[551]],[[551,551],\"valid\"],[[552,552],\"mapped\",[553]],[[553,553],\"valid\"],[[554,554],\"mapped\",[555]],[[555,555],\"valid\"],[[556,556],\"mapped\",[557]],[[557,557],\"valid\"],[[558,558],\"mapped\",[559]],[[559,559],\"valid\"],[[560,560],\"mapped\",[561]],[[561,561],\"valid\"],[[562,562],\"mapped\",[563]],[[563,563],\"valid\"],[[564,566],\"valid\"],[[567,569],\"valid\"],[[570,570],\"mapped\",[11365]],[[571,571],\"mapped\",[572]],[[572,572],\"valid\"],[[573,573],\"mapped\",[410]],[[574,574],\"mapped\",[11366]],[[575,576],\"valid\"],[[577,577],\"mapped\",[578]],[[578,578],\"valid\"],[[579,579],\"mapped\",[384]],[[580,580],\"mapped\",[649]],[[581,581],\"mapped\",[652]],[[582,582],\"mapped\",[583]],[[583,583],\"valid\"],[[584,584],\"mapped\",[585]],[[585,585],\"valid\"],[[586,586],\"mapped\",[587]],[[587,587],\"valid\"],[[588,588],\"mapped\",[589]],[[589,589],\"valid\"],[[590,590],\"mapped\",[591]],[[591,591],\"valid\"],[[592,680],\"valid\"],[[681,685],\"valid\"],[[686,687],\"valid\"],[[688,688],\"mapped\",[104]],[[689,689],\"mapped\",[614]],[[690,690],\"mapped\",[106]],[[691,691],\"mapped\",[114]],[[692,692],\"mapped\",[633]],[[693,693],\"mapped\",[635]],[[694,694],\"mapped\",[641]],[[695,695],\"mapped\",[119]],[[696,696],\"mapped\",[121]],[[697,705],\"valid\"],[[706,709],\"valid\",[],\"NV8\"],[[710,721],\"valid\"],[[722,727],\"valid\",[],\"NV8\"],[[728,728],\"disallowed_STD3_mapped\",[32,774]],[[729,729],\"disallowed_STD3_mapped\",[32,775]],[[730,730],\"disallowed_STD3_mapped\",[32,778]],[[731,731],\"disallowed_STD3_mapped\",[32,808]],[[732,732],\"disallowed_STD3_mapped\",[32,771]],[[733,733],\"disallowed_STD3_mapped\",[32,779]],[[734,734],\"valid\",[],\"NV8\"],[[735,735],\"valid\",[],\"NV8\"],[[736,736],\"mapped\",[611]],[[737,737],\"mapped\",[108]],[[738,738],\"mapped\",[115]],[[739,739],\"mapped\",[120]],[[740,740],\"mapped\",[661]],[[741,745],\"valid\",[],\"NV8\"],[[746,747],\"valid\",[],\"NV8\"],[[748,748],\"valid\"],[[749,749],\"valid\",[],\"NV8\"],[[750,750],\"valid\"],[[751,767],\"valid\",[],\"NV8\"],[[768,831],\"valid\"],[[832,832],\"mapped\",[768]],[[833,833],\"mapped\",[769]],[[834,834],\"valid\"],[[835,835],\"mapped\",[787]],[[836,836],\"mapped\",[776,769]],[[837,837],\"mapped\",[953]],[[838,846],\"valid\"],[[847,847],\"ignored\"],[[848,855],\"valid\"],[[856,860],\"valid\"],[[861,863],\"valid\"],[[864,865],\"valid\"],[[866,866],\"valid\"],[[867,879],\"valid\"],[[880,880],\"mapped\",[881]],[[881,881],\"valid\"],[[882,882],\"mapped\",[883]],[[883,883],\"valid\"],[[884,884],\"mapped\",[697]],[[885,885],\"valid\"],[[886,886],\"mapped\",[887]],[[887,887],\"valid\"],[[888,889],\"disallowed\"],[[890,890],\"disallowed_STD3_mapped\",[32,953]],[[891,893],\"valid\"],[[894,894],\"disallowed_STD3_mapped\",[59]],[[895,895],\"mapped\",[1011]],[[896,899],\"disallowed\"],[[900,900],\"disallowed_STD3_mapped\",[32,769]],[[901,901],\"disallowed_STD3_mapped\",[32,776,769]],[[902,902],\"mapped\",[940]],[[903,903],\"mapped\",[183]],[[904,904],\"mapped\",[941]],[[905,905],\"mapped\",[942]],[[906,906],\"mapped\",[943]],[[907,907],\"disallowed\"],[[908,908],\"mapped\",[972]],[[909,909],\"disallowed\"],[[910,910],\"mapped\",[973]],[[911,911],\"mapped\",[974]],[[912,912],\"valid\"],[[913,913],\"mapped\",[945]],[[914,914],\"mapped\",[946]],[[915,915],\"mapped\",[947]],[[916,916],\"mapped\",[948]],[[917,917],\"mapped\",[949]],[[918,918],\"mapped\",[950]],[[919,919],\"mapped\",[951]],[[920,920],\"mapped\",[952]],[[921,921],\"mapped\",[953]],[[922,922],\"mapped\",[954]],[[923,923],\"mapped\",[955]],[[924,924],\"mapped\",[956]],[[925,925],\"mapped\",[957]],[[926,926],\"mapped\",[958]],[[927,927],\"mapped\",[959]],[[928,928],\"mapped\",[960]],[[929,929],\"mapped\",[961]],[[930,930],\"disallowed\"],[[931,931],\"mapped\",[963]],[[932,932],\"mapped\",[964]],[[933,933],\"mapped\",[965]],[[934,934],\"mapped\",[966]],[[935,935],\"mapped\",[967]],[[936,936],\"mapped\",[968]],[[937,937],\"mapped\",[969]],[[938,938],\"mapped\",[970]],[[939,939],\"mapped\",[971]],[[940,961],\"valid\"],[[962,962],\"deviation\",[963]],[[963,974],\"valid\"],[[975,975],\"mapped\",[983]],[[976,976],\"mapped\",[946]],[[977,977],\"mapped\",[952]],[[978,978],\"mapped\",[965]],[[979,979],\"mapped\",[973]],[[980,980],\"mapped\",[971]],[[981,981],\"mapped\",[966]],[[982,982],\"mapped\",[960]],[[983,983],\"valid\"],[[984,984],\"mapped\",[985]],[[985,985],\"valid\"],[[986,986],\"mapped\",[987]],[[987,987],\"valid\"],[[988,988],\"mapped\",[989]],[[989,989],\"valid\"],[[990,990],\"mapped\",[991]],[[991,991],\"valid\"],[[992,992],\"mapped\",[993]],[[993,993],\"valid\"],[[994,994],\"mapped\",[995]],[[995,995],\"valid\"],[[996,996],\"mapped\",[997]],[[997,997],\"valid\"],[[998,998],\"mapped\",[999]],[[999,999],\"valid\"],[[1000,1000],\"mapped\",[1001]],[[1001,1001],\"valid\"],[[1002,1002],\"mapped\",[1003]],[[1003,1003],\"valid\"],[[1004,1004],\"mapped\",[1005]],[[1005,1005],\"valid\"],[[1006,1006],\"mapped\",[1007]],[[1007,1007],\"valid\"],[[1008,1008],\"mapped\",[954]],[[1009,1009],\"mapped\",[961]],[[1010,1010],\"mapped\",[963]],[[1011,1011],\"valid\"],[[1012,1012],\"mapped\",[952]],[[1013,1013],\"mapped\",[949]],[[1014,1014],\"valid\",[],\"NV8\"],[[1015,1015],\"mapped\",[1016]],[[1016,1016],\"valid\"],[[1017,1017],\"mapped\",[963]],[[1018,1018],\"mapped\",[1019]],[[1019,1019],\"valid\"],[[1020,1020],\"valid\"],[[1021,1021],\"mapped\",[891]],[[1022,1022],\"mapped\",[892]],[[1023,1023],\"mapped\",[893]],[[1024,1024],\"mapped\",[1104]],[[1025,1025],\"mapped\",[1105]],[[1026,1026],\"mapped\",[1106]],[[1027,1027],\"mapped\",[1107]],[[1028,1028],\"mapped\",[1108]],[[1029,1029],\"mapped\",[1109]],[[1030,1030],\"mapped\",[1110]],[[1031,1031],\"mapped\",[1111]],[[1032,1032],\"mapped\",[1112]],[[1033,1033],\"mapped\",[1113]],[[1034,1034],\"mapped\",[1114]],[[1035,1035],\"mapped\",[1115]],[[1036,1036],\"mapped\",[1116]],[[1037,1037],\"mapped\",[1117]],[[1038,1038],\"mapped\",[1118]],[[1039,1039],\"mapped\",[1119]],[[1040,1040],\"mapped\",[1072]],[[1041,1041],\"mapped\",[1073]],[[1042,1042],\"mapped\",[1074]],[[1043,1043],\"mapped\",[1075]],[[1044,1044],\"mapped\",[1076]],[[1045,1045],\"mapped\",[1077]],[[1046,1046],\"mapped\",[1078]],[[1047,1047],\"mapped\",[1079]],[[1048,1048],\"mapped\",[1080]],[[1049,1049],\"mapped\",[1081]],[[1050,1050],\"mapped\",[1082]],[[1051,1051],\"mapped\",[1083]],[[1052,1052],\"mapped\",[1084]],[[1053,1053],\"mapped\",[1085]],[[1054,1054],\"mapped\",[1086]],[[1055,1055],\"mapped\",[1087]],[[1056,1056],\"mapped\",[1088]],[[1057,1057],\"mapped\",[1089]],[[1058,1058],\"mapped\",[1090]],[[1059,1059],\"mapped\",[1091]],[[1060,1060],\"mapped\",[1092]],[[1061,1061],\"mapped\",[1093]],[[1062,1062],\"mapped\",[1094]],[[1063,1063],\"mapped\",[1095]],[[1064,1064],\"mapped\",[1096]],[[1065,1065],\"mapped\",[1097]],[[1066,1066],\"mapped\",[1098]],[[1067,1067],\"mapped\",[1099]],[[1068,1068],\"mapped\",[1100]],[[1069,1069],\"mapped\",[1101]],[[1070,1070],\"mapped\",[1102]],[[1071,1071],\"mapped\",[1103]],[[1072,1103],\"valid\"],[[1104,1104],\"valid\"],[[1105,1116],\"valid\"],[[1117,1117],\"valid\"],[[1118,1119],\"valid\"],[[1120,1120],\"mapped\",[1121]],[[1121,1121],\"valid\"],[[1122,1122],\"mapped\",[1123]],[[1123,1123],\"valid\"],[[1124,1124],\"mapped\",[1125]],[[1125,1125],\"valid\"],[[1126,1126],\"mapped\",[1127]],[[1127,1127],\"valid\"],[[1128,1128],\"mapped\",[1129]],[[1129,1129],\"valid\"],[[1130,1130],\"mapped\",[1131]],[[1131,1131],\"valid\"],[[1132,1132],\"mapped\",[1133]],[[1133,1133],\"valid\"],[[1134,1134],\"mapped\",[1135]],[[1135,1135],\"valid\"],[[1136,1136],\"mapped\",[1137]],[[1137,1137],\"valid\"],[[1138,1138],\"mapped\",[1139]],[[1139,1139],\"valid\"],[[1140,1140],\"mapped\",[1141]],[[1141,1141],\"valid\"],[[1142,1142],\"mapped\",[1143]],[[1143,1143],\"valid\"],[[1144,1144],\"mapped\",[1145]],[[1145,1145],\"valid\"],[[1146,1146],\"mapped\",[1147]],[[1147,1147],\"valid\"],[[1148,1148],\"mapped\",[1149]],[[1149,1149],\"valid\"],[[1150,1150],\"mapped\",[1151]],[[1151,1151],\"valid\"],[[1152,1152],\"mapped\",[1153]],[[1153,1153],\"valid\"],[[1154,1154],\"valid\",[],\"NV8\"],[[1155,1158],\"valid\"],[[1159,1159],\"valid\"],[[1160,1161],\"valid\",[],\"NV8\"],[[1162,1162],\"mapped\",[1163]],[[1163,1163],\"valid\"],[[1164,1164],\"mapped\",[1165]],[[1165,1165],\"valid\"],[[1166,1166],\"mapped\",[1167]],[[1167,1167],\"valid\"],[[1168,1168],\"mapped\",[1169]],[[1169,1169],\"valid\"],[[1170,1170],\"mapped\",[1171]],[[1171,1171],\"valid\"],[[1172,1172],\"mapped\",[1173]],[[1173,1173],\"valid\"],[[1174,1174],\"mapped\",[1175]],[[1175,1175],\"valid\"],[[1176,1176],\"mapped\",[1177]],[[1177,1177],\"valid\"],[[1178,1178],\"mapped\",[1179]],[[1179,1179],\"valid\"],[[1180,1180],\"mapped\",[1181]],[[1181,1181],\"valid\"],[[1182,1182],\"mapped\",[1183]],[[1183,1183],\"valid\"],[[1184,1184],\"mapped\",[1185]],[[1185,1185],\"valid\"],[[1186,1186],\"mapped\",[1187]],[[1187,1187],\"valid\"],[[1188,1188],\"mapped\",[1189]],[[1189,1189],\"valid\"],[[1190,1190],\"mapped\",[1191]],[[1191,1191],\"valid\"],[[1192,1192],\"mapped\",[1193]],[[1193,1193],\"valid\"],[[1194,1194],\"mapped\",[1195]],[[1195,1195],\"valid\"],[[1196,1196],\"mapped\",[1197]],[[1197,1197],\"valid\"],[[1198,1198],\"mapped\",[1199]],[[1199,1199],\"valid\"],[[1200,1200],\"mapped\",[1201]],[[1201,1201],\"valid\"],[[1202,1202],\"mapped\",[1203]],[[1203,1203],\"valid\"],[[1204,1204],\"mapped\",[1205]],[[1205,1205],\"valid\"],[[1206,1206],\"mapped\",[1207]],[[1207,1207],\"valid\"],[[1208,1208],\"mapped\",[1209]],[[1209,1209],\"valid\"],[[1210,1210],\"mapped\",[1211]],[[1211,1211],\"valid\"],[[1212,1212],\"mapped\",[1213]],[[1213,1213],\"valid\"],[[1214,1214],\"mapped\",[1215]],[[1215,1215],\"valid\"],[[1216,1216],\"disallowed\"],[[1217,1217],\"mapped\",[1218]],[[1218,1218],\"valid\"],[[1219,1219],\"mapped\",[1220]],[[1220,1220],\"valid\"],[[1221,1221],\"mapped\",[1222]],[[1222,1222],\"valid\"],[[1223,1223],\"mapped\",[1224]],[[1224,1224],\"valid\"],[[1225,1225],\"mapped\",[1226]],[[1226,1226],\"valid\"],[[1227,1227],\"mapped\",[1228]],[[1228,1228],\"valid\"],[[1229,1229],\"mapped\",[1230]],[[1230,1230],\"valid\"],[[1231,1231],\"valid\"],[[1232,1232],\"mapped\",[1233]],[[1233,1233],\"valid\"],[[1234,1234],\"mapped\",[1235]],[[1235,1235],\"valid\"],[[1236,1236],\"mapped\",[1237]],[[1237,1237],\"valid\"],[[1238,1238],\"mapped\",[1239]],[[1239,1239],\"valid\"],[[1240,1240],\"mapped\",[1241]],[[1241,1241],\"valid\"],[[1242,1242],\"mapped\",[1243]],[[1243,1243],\"valid\"],[[1244,1244],\"mapped\",[1245]],[[1245,1245],\"valid\"],[[1246,1246],\"mapped\",[1247]],[[1247,1247],\"valid\"],[[1248,1248],\"mapped\",[1249]],[[1249,1249],\"valid\"],[[1250,1250],\"mapped\",[1251]],[[1251,1251],\"valid\"],[[1252,1252],\"mapped\",[1253]],[[1253,1253],\"valid\"],[[1254,1254],\"mapped\",[1255]],[[1255,1255],\"valid\"],[[1256,1256],\"mapped\",[1257]],[[1257,1257],\"valid\"],[[1258,1258],\"mapped\",[1259]],[[1259,1259],\"valid\"],[[1260,1260],\"mapped\",[1261]],[[1261,1261],\"valid\"],[[1262,1262],\"mapped\",[1263]],[[1263,1263],\"valid\"],[[1264,1264],\"mapped\",[1265]],[[1265,1265],\"valid\"],[[1266,1266],\"mapped\",[1267]],[[1267,1267],\"valid\"],[[1268,1268],\"mapped\",[1269]],[[1269,1269],\"valid\"],[[1270,1270],\"mapped\",[1271]],[[1271,1271],\"valid\"],[[1272,1272],\"mapped\",[1273]],[[1273,1273],\"valid\"],[[1274,1274],\"mapped\",[1275]],[[1275,1275],\"valid\"],[[1276,1276],\"mapped\",[1277]],[[1277,1277],\"valid\"],[[1278,1278],\"mapped\",[1279]],[[1279,1279],\"valid\"],[[1280,1280],\"mapped\",[1281]],[[1281,1281],\"valid\"],[[1282,1282],\"mapped\",[1283]],[[1283,1283],\"valid\"],[[1284,1284],\"mapped\",[1285]],[[1285,1285],\"valid\"],[[1286,1286],\"mapped\",[1287]],[[1287,1287],\"valid\"],[[1288,1288],\"mapped\",[1289]],[[1289,1289],\"valid\"],[[1290,1290],\"mapped\",[1291]],[[1291,1291],\"valid\"],[[1292,1292],\"mapped\",[1293]],[[1293,1293],\"valid\"],[[1294,1294],\"mapped\",[1295]],[[1295,1295],\"valid\"],[[1296,1296],\"mapped\",[1297]],[[1297,1297],\"valid\"],[[1298,1298],\"mapped\",[1299]],[[1299,1299],\"valid\"],[[1300,1300],\"mapped\",[1301]],[[1301,1301],\"valid\"],[[1302,1302],\"mapped\",[1303]],[[1303,1303],\"valid\"],[[1304,1304],\"mapped\",[1305]],[[1305,1305],\"valid\"],[[1306,1306],\"mapped\",[1307]],[[1307,1307],\"valid\"],[[1308,1308],\"mapped\",[1309]],[[1309,1309],\"valid\"],[[1310,1310],\"mapped\",[1311]],[[1311,1311],\"valid\"],[[1312,1312],\"mapped\",[1313]],[[1313,1313],\"valid\"],[[1314,1314],\"mapped\",[1315]],[[1315,1315],\"valid\"],[[1316,1316],\"mapped\",[1317]],[[1317,1317],\"valid\"],[[1318,1318],\"mapped\",[1319]],[[1319,1319],\"valid\"],[[1320,1320],\"mapped\",[1321]],[[1321,1321],\"valid\"],[[1322,1322],\"mapped\",[1323]],[[1323,1323],\"valid\"],[[1324,1324],\"mapped\",[1325]],[[1325,1325],\"valid\"],[[1326,1326],\"mapped\",[1327]],[[1327,1327],\"valid\"],[[1328,1328],\"disallowed\"],[[1329,1329],\"mapped\",[1377]],[[1330,1330],\"mapped\",[1378]],[[1331,1331],\"mapped\",[1379]],[[1332,1332],\"mapped\",[1380]],[[1333,1333],\"mapped\",[1381]],[[1334,1334],\"mapped\",[1382]],[[1335,1335],\"mapped\",[1383]],[[1336,1336],\"mapped\",[1384]],[[1337,1337],\"mapped\",[1385]],[[1338,1338],\"mapped\",[1386]],[[1339,1339],\"mapped\",[1387]],[[1340,1340],\"mapped\",[1388]],[[1341,1341],\"mapped\",[1389]],[[1342,1342],\"mapped\",[1390]],[[1343,1343],\"mapped\",[1391]],[[1344,1344],\"mapped\",[1392]],[[1345,1345],\"mapped\",[1393]],[[1346,1346],\"mapped\",[1394]],[[1347,1347],\"mapped\",[1395]],[[1348,1348],\"mapped\",[1396]],[[1349,1349],\"mapped\",[1397]],[[1350,1350],\"mapped\",[1398]],[[1351,1351],\"mapped\",[1399]],[[1352,1352],\"mapped\",[1400]],[[1353,1353],\"mapped\",[1401]],[[1354,1354],\"mapped\",[1402]],[[1355,1355],\"mapped\",[1403]],[[1356,1356],\"mapped\",[1404]],[[1357,1357],\"mapped\",[1405]],[[1358,1358],\"mapped\",[1406]],[[1359,1359],\"mapped\",[1407]],[[1360,1360],\"mapped\",[1408]],[[1361,1361],\"mapped\",[1409]],[[1362,1362],\"mapped\",[1410]],[[1363,1363],\"mapped\",[1411]],[[1364,1364],\"mapped\",[1412]],[[1365,1365],\"mapped\",[1413]],[[1366,1366],\"mapped\",[1414]],[[1367,1368],\"disallowed\"],[[1369,1369],\"valid\"],[[1370,1375],\"valid\",[],\"NV8\"],[[1376,1376],\"disallowed\"],[[1377,1414],\"valid\"],[[1415,1415],\"mapped\",[1381,1410]],[[1416,1416],\"disallowed\"],[[1417,1417],\"valid\",[],\"NV8\"],[[1418,1418],\"valid\",[],\"NV8\"],[[1419,1420],\"disallowed\"],[[1421,1422],\"valid\",[],\"NV8\"],[[1423,1423],\"valid\",[],\"NV8\"],[[1424,1424],\"disallowed\"],[[1425,1441],\"valid\"],[[1442,1442],\"valid\"],[[1443,1455],\"valid\"],[[1456,1465],\"valid\"],[[1466,1466],\"valid\"],[[1467,1469],\"valid\"],[[1470,1470],\"valid\",[],\"NV8\"],[[1471,1471],\"valid\"],[[1472,1472],\"valid\",[],\"NV8\"],[[1473,1474],\"valid\"],[[1475,1475],\"valid\",[],\"NV8\"],[[1476,1476],\"valid\"],[[1477,1477],\"valid\"],[[1478,1478],\"valid\",[],\"NV8\"],[[1479,1479],\"valid\"],[[1480,1487],\"disallowed\"],[[1488,1514],\"valid\"],[[1515,1519],\"disallowed\"],[[1520,1524],\"valid\"],[[1525,1535],\"disallowed\"],[[1536,1539],\"disallowed\"],[[1540,1540],\"disallowed\"],[[1541,1541],\"disallowed\"],[[1542,1546],\"valid\",[],\"NV8\"],[[1547,1547],\"valid\",[],\"NV8\"],[[1548,1548],\"valid\",[],\"NV8\"],[[1549,1551],\"valid\",[],\"NV8\"],[[1552,1557],\"valid\"],[[1558,1562],\"valid\"],[[1563,1563],\"valid\",[],\"NV8\"],[[1564,1564],\"disallowed\"],[[1565,1565],\"disallowed\"],[[1566,1566],\"valid\",[],\"NV8\"],[[1567,1567],\"valid\",[],\"NV8\"],[[1568,1568],\"valid\"],[[1569,1594],\"valid\"],[[1595,1599],\"valid\"],[[1600,1600],\"valid\",[],\"NV8\"],[[1601,1618],\"valid\"],[[1619,1621],\"valid\"],[[1622,1624],\"valid\"],[[1625,1630],\"valid\"],[[1631,1631],\"valid\"],[[1632,1641],\"valid\"],[[1642,1645],\"valid\",[],\"NV8\"],[[1646,1647],\"valid\"],[[1648,1652],\"valid\"],[[1653,1653],\"mapped\",[1575,1652]],[[1654,1654],\"mapped\",[1608,1652]],[[1655,1655],\"mapped\",[1735,1652]],[[1656,1656],\"mapped\",[1610,1652]],[[1657,1719],\"valid\"],[[1720,1721],\"valid\"],[[1722,1726],\"valid\"],[[1727,1727],\"valid\"],[[1728,1742],\"valid\"],[[1743,1743],\"valid\"],[[1744,1747],\"valid\"],[[1748,1748],\"valid\",[],\"NV8\"],[[1749,1756],\"valid\"],[[1757,1757],\"disallowed\"],[[1758,1758],\"valid\",[],\"NV8\"],[[1759,1768],\"valid\"],[[1769,1769],\"valid\",[],\"NV8\"],[[1770,1773],\"valid\"],[[1774,1775],\"valid\"],[[1776,1785],\"valid\"],[[1786,1790],\"valid\"],[[1791,1791],\"valid\"],[[1792,1805],\"valid\",[],\"NV8\"],[[1806,1806],\"disallowed\"],[[1807,1807],\"disallowed\"],[[1808,1836],\"valid\"],[[1837,1839],\"valid\"],[[1840,1866],\"valid\"],[[1867,1868],\"disallowed\"],[[1869,1871],\"valid\"],[[1872,1901],\"valid\"],[[1902,1919],\"valid\"],[[1920,1968],\"valid\"],[[1969,1969],\"valid\"],[[1970,1983],\"disallowed\"],[[1984,2037],\"valid\"],[[2038,2042],\"valid\",[],\"NV8\"],[[2043,2047],\"disallowed\"],[[2048,2093],\"valid\"],[[2094,2095],\"disallowed\"],[[2096,2110],\"valid\",[],\"NV8\"],[[2111,2111],\"disallowed\"],[[2112,2139],\"valid\"],[[2140,2141],\"disallowed\"],[[2142,2142],\"valid\",[],\"NV8\"],[[2143,2207],\"disallowed\"],[[2208,2208],\"valid\"],[[2209,2209],\"valid\"],[[2210,2220],\"valid\"],[[2221,2226],\"valid\"],[[2227,2228],\"valid\"],[[2229,2274],\"disallowed\"],[[2275,2275],\"valid\"],[[2276,2302],\"valid\"],[[2303,2303],\"valid\"],[[2304,2304],\"valid\"],[[2305,2307],\"valid\"],[[2308,2308],\"valid\"],[[2309,2361],\"valid\"],[[2362,2363],\"valid\"],[[2364,2381],\"valid\"],[[2382,2382],\"valid\"],[[2383,2383],\"valid\"],[[2384,2388],\"valid\"],[[2389,2389],\"valid\"],[[2390,2391],\"valid\"],[[2392,2392],\"mapped\",[2325,2364]],[[2393,2393],\"mapped\",[2326,2364]],[[2394,2394],\"mapped\",[2327,2364]],[[2395,2395],\"mapped\",[2332,2364]],[[2396,2396],\"mapped\",[2337,2364]],[[2397,2397],\"mapped\",[2338,2364]],[[2398,2398],\"mapped\",[2347,2364]],[[2399,2399],\"mapped\",[2351,2364]],[[2400,2403],\"valid\"],[[2404,2405],\"valid\",[],\"NV8\"],[[2406,2415],\"valid\"],[[2416,2416],\"valid\",[],\"NV8\"],[[2417,2418],\"valid\"],[[2419,2423],\"valid\"],[[2424,2424],\"valid\"],[[2425,2426],\"valid\"],[[2427,2428],\"valid\"],[[2429,2429],\"valid\"],[[2430,2431],\"valid\"],[[2432,2432],\"valid\"],[[2433,2435],\"valid\"],[[2436,2436],\"disallowed\"],[[2437,2444],\"valid\"],[[2445,2446],\"disallowed\"],[[2447,2448],\"valid\"],[[2449,2450],\"disallowed\"],[[2451,2472],\"valid\"],[[2473,2473],\"disallowed\"],[[2474,2480],\"valid\"],[[2481,2481],\"disallowed\"],[[2482,2482],\"valid\"],[[2483,2485],\"disallowed\"],[[2486,2489],\"valid\"],[[2490,2491],\"disallowed\"],[[2492,2492],\"valid\"],[[2493,2493],\"valid\"],[[2494,2500],\"valid\"],[[2501,2502],\"disallowed\"],[[2503,2504],\"valid\"],[[2505,2506],\"disallowed\"],[[2507,2509],\"valid\"],[[2510,2510],\"valid\"],[[2511,2518],\"disallowed\"],[[2519,2519],\"valid\"],[[2520,2523],\"disallowed\"],[[2524,2524],\"mapped\",[2465,2492]],[[2525,2525],\"mapped\",[2466,2492]],[[2526,2526],\"disallowed\"],[[2527,2527],\"mapped\",[2479,2492]],[[2528,2531],\"valid\"],[[2532,2533],\"disallowed\"],[[2534,2545],\"valid\"],[[2546,2554],\"valid\",[],\"NV8\"],[[2555,2555],\"valid\",[],\"NV8\"],[[2556,2560],\"disallowed\"],[[2561,2561],\"valid\"],[[2562,2562],\"valid\"],[[2563,2563],\"valid\"],[[2564,2564],\"disallowed\"],[[2565,2570],\"valid\"],[[2571,2574],\"disallowed\"],[[2575,2576],\"valid\"],[[2577,2578],\"disallowed\"],[[2579,2600],\"valid\"],[[2601,2601],\"disallowed\"],[[2602,2608],\"valid\"],[[2609,2609],\"disallowed\"],[[2610,2610],\"valid\"],[[2611,2611],\"mapped\",[2610,2620]],[[2612,2612],\"disallowed\"],[[2613,2613],\"valid\"],[[2614,2614],\"mapped\",[2616,2620]],[[2615,2615],\"disallowed\"],[[2616,2617],\"valid\"],[[2618,2619],\"disallowed\"],[[2620,2620],\"valid\"],[[2621,2621],\"disallowed\"],[[2622,2626],\"valid\"],[[2627,2630],\"disallowed\"],[[2631,2632],\"valid\"],[[2633,2634],\"disallowed\"],[[2635,2637],\"valid\"],[[2638,2640],\"disallowed\"],[[2641,2641],\"valid\"],[[2642,2648],\"disallowed\"],[[2649,2649],\"mapped\",[2582,2620]],[[2650,2650],\"mapped\",[2583,2620]],[[2651,2651],\"mapped\",[2588,2620]],[[2652,2652],\"valid\"],[[2653,2653],\"disallowed\"],[[2654,2654],\"mapped\",[2603,2620]],[[2655,2661],\"disallowed\"],[[2662,2676],\"valid\"],[[2677,2677],\"valid\"],[[2678,2688],\"disallowed\"],[[2689,2691],\"valid\"],[[2692,2692],\"disallowed\"],[[2693,2699],\"valid\"],[[2700,2700],\"valid\"],[[2701,2701],\"valid\"],[[2702,2702],\"disallowed\"],[[2703,2705],\"valid\"],[[2706,2706],\"disallowed\"],[[2707,2728],\"valid\"],[[2729,2729],\"disallowed\"],[[2730,2736],\"valid\"],[[2737,2737],\"disallowed\"],[[2738,2739],\"valid\"],[[2740,2740],\"disallowed\"],[[2741,2745],\"valid\"],[[2746,2747],\"disallowed\"],[[2748,2757],\"valid\"],[[2758,2758],\"disallowed\"],[[2759,2761],\"valid\"],[[2762,2762],\"disallowed\"],[[2763,2765],\"valid\"],[[2766,2767],\"disallowed\"],[[2768,2768],\"valid\"],[[2769,2783],\"disallowed\"],[[2784,2784],\"valid\"],[[2785,2787],\"valid\"],[[2788,2789],\"disallowed\"],[[2790,2799],\"valid\"],[[2800,2800],\"valid\",[],\"NV8\"],[[2801,2801],\"valid\",[],\"NV8\"],[[2802,2808],\"disallowed\"],[[2809,2809],\"valid\"],[[2810,2816],\"disallowed\"],[[2817,2819],\"valid\"],[[2820,2820],\"disallowed\"],[[2821,2828],\"valid\"],[[2829,2830],\"disallowed\"],[[2831,2832],\"valid\"],[[2833,2834],\"disallowed\"],[[2835,2856],\"valid\"],[[2857,2857],\"disallowed\"],[[2858,2864],\"valid\"],[[2865,2865],\"disallowed\"],[[2866,2867],\"valid\"],[[2868,2868],\"disallowed\"],[[2869,2869],\"valid\"],[[2870,2873],\"valid\"],[[2874,2875],\"disallowed\"],[[2876,2883],\"valid\"],[[2884,2884],\"valid\"],[[2885,2886],\"disallowed\"],[[2887,2888],\"valid\"],[[2889,2890],\"disallowed\"],[[2891,2893],\"valid\"],[[2894,2901],\"disallowed\"],[[2902,2903],\"valid\"],[[2904,2907],\"disallowed\"],[[2908,2908],\"mapped\",[2849,2876]],[[2909,2909],\"mapped\",[2850,2876]],[[2910,2910],\"disallowed\"],[[2911,2913],\"valid\"],[[2914,2915],\"valid\"],[[2916,2917],\"disallowed\"],[[2918,2927],\"valid\"],[[2928,2928],\"valid\",[],\"NV8\"],[[2929,2929],\"valid\"],[[2930,2935],\"valid\",[],\"NV8\"],[[2936,2945],\"disallowed\"],[[2946,2947],\"valid\"],[[2948,2948],\"disallowed\"],[[2949,2954],\"valid\"],[[2955,2957],\"disallowed\"],[[2958,2960],\"valid\"],[[2961,2961],\"disallowed\"],[[2962,2965],\"valid\"],[[2966,2968],\"disallowed\"],[[2969,2970],\"valid\"],[[2971,2971],\"disallowed\"],[[2972,2972],\"valid\"],[[2973,2973],\"disallowed\"],[[2974,2975],\"valid\"],[[2976,2978],\"disallowed\"],[[2979,2980],\"valid\"],[[2981,2983],\"disallowed\"],[[2984,2986],\"valid\"],[[2987,2989],\"disallowed\"],[[2990,2997],\"valid\"],[[2998,2998],\"valid\"],[[2999,3001],\"valid\"],[[3002,3005],\"disallowed\"],[[3006,3010],\"valid\"],[[3011,3013],\"disallowed\"],[[3014,3016],\"valid\"],[[3017,3017],\"disallowed\"],[[3018,3021],\"valid\"],[[3022,3023],\"disallowed\"],[[3024,3024],\"valid\"],[[3025,3030],\"disallowed\"],[[3031,3031],\"valid\"],[[3032,3045],\"disallowed\"],[[3046,3046],\"valid\"],[[3047,3055],\"valid\"],[[3056,3058],\"valid\",[],\"NV8\"],[[3059,3066],\"valid\",[],\"NV8\"],[[3067,3071],\"disallowed\"],[[3072,3072],\"valid\"],[[3073,3075],\"valid\"],[[3076,3076],\"disallowed\"],[[3077,3084],\"valid\"],[[3085,3085],\"disallowed\"],[[3086,3088],\"valid\"],[[3089,3089],\"disallowed\"],[[3090,3112],\"valid\"],[[3113,3113],\"disallowed\"],[[3114,3123],\"valid\"],[[3124,3124],\"valid\"],[[3125,3129],\"valid\"],[[3130,3132],\"disallowed\"],[[3133,3133],\"valid\"],[[3134,3140],\"valid\"],[[3141,3141],\"disallowed\"],[[3142,3144],\"valid\"],[[3145,3145],\"disallowed\"],[[3146,3149],\"valid\"],[[3150,3156],\"disallowed\"],[[3157,3158],\"valid\"],[[3159,3159],\"disallowed\"],[[3160,3161],\"valid\"],[[3162,3162],\"valid\"],[[3163,3167],\"disallowed\"],[[3168,3169],\"valid\"],[[3170,3171],\"valid\"],[[3172,3173],\"disallowed\"],[[3174,3183],\"valid\"],[[3184,3191],\"disallowed\"],[[3192,3199],\"valid\",[],\"NV8\"],[[3200,3200],\"disallowed\"],[[3201,3201],\"valid\"],[[3202,3203],\"valid\"],[[3204,3204],\"disallowed\"],[[3205,3212],\"valid\"],[[3213,3213],\"disallowed\"],[[3214,3216],\"valid\"],[[3217,3217],\"disallowed\"],[[3218,3240],\"valid\"],[[3241,3241],\"disallowed\"],[[3242,3251],\"valid\"],[[3252,3252],\"disallowed\"],[[3253,3257],\"valid\"],[[3258,3259],\"disallowed\"],[[3260,3261],\"valid\"],[[3262,3268],\"valid\"],[[3269,3269],\"disallowed\"],[[3270,3272],\"valid\"],[[3273,3273],\"disallowed\"],[[3274,3277],\"valid\"],[[3278,3284],\"disallowed\"],[[3285,3286],\"valid\"],[[3287,3293],\"disallowed\"],[[3294,3294],\"valid\"],[[3295,3295],\"disallowed\"],[[3296,3297],\"valid\"],[[3298,3299],\"valid\"],[[3300,3301],\"disallowed\"],[[3302,3311],\"valid\"],[[3312,3312],\"disallowed\"],[[3313,3314],\"valid\"],[[3315,3328],\"disallowed\"],[[3329,3329],\"valid\"],[[3330,3331],\"valid\"],[[3332,3332],\"disallowed\"],[[3333,3340],\"valid\"],[[3341,3341],\"disallowed\"],[[3342,3344],\"valid\"],[[3345,3345],\"disallowed\"],[[3346,3368],\"valid\"],[[3369,3369],\"valid\"],[[3370,3385],\"valid\"],[[3386,3386],\"valid\"],[[3387,3388],\"disallowed\"],[[3389,3389],\"valid\"],[[3390,3395],\"valid\"],[[3396,3396],\"valid\"],[[3397,3397],\"disallowed\"],[[3398,3400],\"valid\"],[[3401,3401],\"disallowed\"],[[3402,3405],\"valid\"],[[3406,3406],\"valid\"],[[3407,3414],\"disallowed\"],[[3415,3415],\"valid\"],[[3416,3422],\"disallowed\"],[[3423,3423],\"valid\"],[[3424,3425],\"valid\"],[[3426,3427],\"valid\"],[[3428,3429],\"disallowed\"],[[3430,3439],\"valid\"],[[3440,3445],\"valid\",[],\"NV8\"],[[3446,3448],\"disallowed\"],[[3449,3449],\"valid\",[],\"NV8\"],[[3450,3455],\"valid\"],[[3456,3457],\"disallowed\"],[[3458,3459],\"valid\"],[[3460,3460],\"disallowed\"],[[3461,3478],\"valid\"],[[3479,3481],\"disallowed\"],[[3482,3505],\"valid\"],[[3506,3506],\"disallowed\"],[[3507,3515],\"valid\"],[[3516,3516],\"disallowed\"],[[3517,3517],\"valid\"],[[3518,3519],\"disallowed\"],[[3520,3526],\"valid\"],[[3527,3529],\"disallowed\"],[[3530,3530],\"valid\"],[[3531,3534],\"disallowed\"],[[3535,3540],\"valid\"],[[3541,3541],\"disallowed\"],[[3542,3542],\"valid\"],[[3543,3543],\"disallowed\"],[[3544,3551],\"valid\"],[[3552,3557],\"disallowed\"],[[3558,3567],\"valid\"],[[3568,3569],\"disallowed\"],[[3570,3571],\"valid\"],[[3572,3572],\"valid\",[],\"NV8\"],[[3573,3584],\"disallowed\"],[[3585,3634],\"valid\"],[[3635,3635],\"mapped\",[3661,3634]],[[3636,3642],\"valid\"],[[3643,3646],\"disallowed\"],[[3647,3647],\"valid\",[],\"NV8\"],[[3648,3662],\"valid\"],[[3663,3663],\"valid\",[],\"NV8\"],[[3664,3673],\"valid\"],[[3674,3675],\"valid\",[],\"NV8\"],[[3676,3712],\"disallowed\"],[[3713,3714],\"valid\"],[[3715,3715],\"disallowed\"],[[3716,3716],\"valid\"],[[3717,3718],\"disallowed\"],[[3719,3720],\"valid\"],[[3721,3721],\"disallowed\"],[[3722,3722],\"valid\"],[[3723,3724],\"disallowed\"],[[3725,3725],\"valid\"],[[3726,3731],\"disallowed\"],[[3732,3735],\"valid\"],[[3736,3736],\"disallowed\"],[[3737,3743],\"valid\"],[[3744,3744],\"disallowed\"],[[3745,3747],\"valid\"],[[3748,3748],\"disallowed\"],[[3749,3749],\"valid\"],[[3750,3750],\"disallowed\"],[[3751,3751],\"valid\"],[[3752,3753],\"disallowed\"],[[3754,3755],\"valid\"],[[3756,3756],\"disallowed\"],[[3757,3762],\"valid\"],[[3763,3763],\"mapped\",[3789,3762]],[[3764,3769],\"valid\"],[[3770,3770],\"disallowed\"],[[3771,3773],\"valid\"],[[3774,3775],\"disallowed\"],[[3776,3780],\"valid\"],[[3781,3781],\"disallowed\"],[[3782,3782],\"valid\"],[[3783,3783],\"disallowed\"],[[3784,3789],\"valid\"],[[3790,3791],\"disallowed\"],[[3792,3801],\"valid\"],[[3802,3803],\"disallowed\"],[[3804,3804],\"mapped\",[3755,3737]],[[3805,3805],\"mapped\",[3755,3745]],[[3806,3807],\"valid\"],[[3808,3839],\"disallowed\"],[[3840,3840],\"valid\"],[[3841,3850],\"valid\",[],\"NV8\"],[[3851,3851],\"valid\"],[[3852,3852],\"mapped\",[3851]],[[3853,3863],\"valid\",[],\"NV8\"],[[3864,3865],\"valid\"],[[3866,3871],\"valid\",[],\"NV8\"],[[3872,3881],\"valid\"],[[3882,3892],\"valid\",[],\"NV8\"],[[3893,3893],\"valid\"],[[3894,3894],\"valid\",[],\"NV8\"],[[3895,3895],\"valid\"],[[3896,3896],\"valid\",[],\"NV8\"],[[3897,3897],\"valid\"],[[3898,3901],\"valid\",[],\"NV8\"],[[3902,3906],\"valid\"],[[3907,3907],\"mapped\",[3906,4023]],[[3908,3911],\"valid\"],[[3912,3912],\"disallowed\"],[[3913,3916],\"valid\"],[[3917,3917],\"mapped\",[3916,4023]],[[3918,3921],\"valid\"],[[3922,3922],\"mapped\",[3921,4023]],[[3923,3926],\"valid\"],[[3927,3927],\"mapped\",[3926,4023]],[[3928,3931],\"valid\"],[[3932,3932],\"mapped\",[3931,4023]],[[3933,3944],\"valid\"],[[3945,3945],\"mapped\",[3904,4021]],[[3946,3946],\"valid\"],[[3947,3948],\"valid\"],[[3949,3952],\"disallowed\"],[[3953,3954],\"valid\"],[[3955,3955],\"mapped\",[3953,3954]],[[3956,3956],\"valid\"],[[3957,3957],\"mapped\",[3953,3956]],[[3958,3958],\"mapped\",[4018,3968]],[[3959,3959],\"mapped\",[4018,3953,3968]],[[3960,3960],\"mapped\",[4019,3968]],[[3961,3961],\"mapped\",[4019,3953,3968]],[[3962,3968],\"valid\"],[[3969,3969],\"mapped\",[3953,3968]],[[3970,3972],\"valid\"],[[3973,3973],\"valid\",[],\"NV8\"],[[3974,3979],\"valid\"],[[3980,3983],\"valid\"],[[3984,3986],\"valid\"],[[3987,3987],\"mapped\",[3986,4023]],[[3988,3989],\"valid\"],[[3990,3990],\"valid\"],[[3991,3991],\"valid\"],[[3992,3992],\"disallowed\"],[[3993,3996],\"valid\"],[[3997,3997],\"mapped\",[3996,4023]],[[3998,4001],\"valid\"],[[4002,4002],\"mapped\",[4001,4023]],[[4003,4006],\"valid\"],[[4007,4007],\"mapped\",[4006,4023]],[[4008,4011],\"valid\"],[[4012,4012],\"mapped\",[4011,4023]],[[4013,4013],\"valid\"],[[4014,4016],\"valid\"],[[4017,4023],\"valid\"],[[4024,4024],\"valid\"],[[4025,4025],\"mapped\",[3984,4021]],[[4026,4028],\"valid\"],[[4029,4029],\"disallowed\"],[[4030,4037],\"valid\",[],\"NV8\"],[[4038,4038],\"valid\"],[[4039,4044],\"valid\",[],\"NV8\"],[[4045,4045],\"disallowed\"],[[4046,4046],\"valid\",[],\"NV8\"],[[4047,4047],\"valid\",[],\"NV8\"],[[4048,4049],\"valid\",[],\"NV8\"],[[4050,4052],\"valid\",[],\"NV8\"],[[4053,4056],\"valid\",[],\"NV8\"],[[4057,4058],\"valid\",[],\"NV8\"],[[4059,4095],\"disallowed\"],[[4096,4129],\"valid\"],[[4130,4130],\"valid\"],[[4131,4135],\"valid\"],[[4136,4136],\"valid\"],[[4137,4138],\"valid\"],[[4139,4139],\"valid\"],[[4140,4146],\"valid\"],[[4147,4149],\"valid\"],[[4150,4153],\"valid\"],[[4154,4159],\"valid\"],[[4160,4169],\"valid\"],[[4170,4175],\"valid\",[],\"NV8\"],[[4176,4185],\"valid\"],[[4186,4249],\"valid\"],[[4250,4253],\"valid\"],[[4254,4255],\"valid\",[],\"NV8\"],[[4256,4293],\"disallowed\"],[[4294,4294],\"disallowed\"],[[4295,4295],\"mapped\",[11559]],[[4296,4300],\"disallowed\"],[[4301,4301],\"mapped\",[11565]],[[4302,4303],\"disallowed\"],[[4304,4342],\"valid\"],[[4343,4344],\"valid\"],[[4345,4346],\"valid\"],[[4347,4347],\"valid\",[],\"NV8\"],[[4348,4348],\"mapped\",[4316]],[[4349,4351],\"valid\"],[[4352,4441],\"valid\",[],\"NV8\"],[[4442,4446],\"valid\",[],\"NV8\"],[[4447,4448],\"disallowed\"],[[4449,4514],\"valid\",[],\"NV8\"],[[4515,4519],\"valid\",[],\"NV8\"],[[4520,4601],\"valid\",[],\"NV8\"],[[4602,4607],\"valid\",[],\"NV8\"],[[4608,4614],\"valid\"],[[4615,4615],\"valid\"],[[4616,4678],\"valid\"],[[4679,4679],\"valid\"],[[4680,4680],\"valid\"],[[4681,4681],\"disallowed\"],[[4682,4685],\"valid\"],[[4686,4687],\"disallowed\"],[[4688,4694],\"valid\"],[[4695,4695],\"disallowed\"],[[4696,4696],\"valid\"],[[4697,4697],\"disallowed\"],[[4698,4701],\"valid\"],[[4702,4703],\"disallowed\"],[[4704,4742],\"valid\"],[[4743,4743],\"valid\"],[[4744,4744],\"valid\"],[[4745,4745],\"disallowed\"],[[4746,4749],\"valid\"],[[4750,4751],\"disallowed\"],[[4752,4782],\"valid\"],[[4783,4783],\"valid\"],[[4784,4784],\"valid\"],[[4785,4785],\"disallowed\"],[[4786,4789],\"valid\"],[[4790,4791],\"disallowed\"],[[4792,4798],\"valid\"],[[4799,4799],\"disallowed\"],[[4800,4800],\"valid\"],[[4801,4801],\"disallowed\"],[[4802,4805],\"valid\"],[[4806,4807],\"disallowed\"],[[4808,4814],\"valid\"],[[4815,4815],\"valid\"],[[4816,4822],\"valid\"],[[4823,4823],\"disallowed\"],[[4824,4846],\"valid\"],[[4847,4847],\"valid\"],[[4848,4878],\"valid\"],[[4879,4879],\"valid\"],[[4880,4880],\"valid\"],[[4881,4881],\"disallowed\"],[[4882,4885],\"valid\"],[[4886,4887],\"disallowed\"],[[4888,4894],\"valid\"],[[4895,4895],\"valid\"],[[4896,4934],\"valid\"],[[4935,4935],\"valid\"],[[4936,4954],\"valid\"],[[4955,4956],\"disallowed\"],[[4957,4958],\"valid\"],[[4959,4959],\"valid\"],[[4960,4960],\"valid\",[],\"NV8\"],[[4961,4988],\"valid\",[],\"NV8\"],[[4989,4991],\"disallowed\"],[[4992,5007],\"valid\"],[[5008,5017],\"valid\",[],\"NV8\"],[[5018,5023],\"disallowed\"],[[5024,5108],\"valid\"],[[5109,5109],\"valid\"],[[5110,5111],\"disallowed\"],[[5112,5112],\"mapped\",[5104]],[[5113,5113],\"mapped\",[5105]],[[5114,5114],\"mapped\",[5106]],[[5115,5115],\"mapped\",[5107]],[[5116,5116],\"mapped\",[5108]],[[5117,5117],\"mapped\",[5109]],[[5118,5119],\"disallowed\"],[[5120,5120],\"valid\",[],\"NV8\"],[[5121,5740],\"valid\"],[[5741,5742],\"valid\",[],\"NV8\"],[[5743,5750],\"valid\"],[[5751,5759],\"valid\"],[[5760,5760],\"disallowed\"],[[5761,5786],\"valid\"],[[5787,5788],\"valid\",[],\"NV8\"],[[5789,5791],\"disallowed\"],[[5792,5866],\"valid\"],[[5867,5872],\"valid\",[],\"NV8\"],[[5873,5880],\"valid\"],[[5881,5887],\"disallowed\"],[[5888,5900],\"valid\"],[[5901,5901],\"disallowed\"],[[5902,5908],\"valid\"],[[5909,5919],\"disallowed\"],[[5920,5940],\"valid\"],[[5941,5942],\"valid\",[],\"NV8\"],[[5943,5951],\"disallowed\"],[[5952,5971],\"valid\"],[[5972,5983],\"disallowed\"],[[5984,5996],\"valid\"],[[5997,5997],\"disallowed\"],[[5998,6000],\"valid\"],[[6001,6001],\"disallowed\"],[[6002,6003],\"valid\"],[[6004,6015],\"disallowed\"],[[6016,6067],\"valid\"],[[6068,6069],\"disallowed\"],[[6070,6099],\"valid\"],[[6100,6102],\"valid\",[],\"NV8\"],[[6103,6103],\"valid\"],[[6104,6107],\"valid\",[],\"NV8\"],[[6108,6108],\"valid\"],[[6109,6109],\"valid\"],[[6110,6111],\"disallowed\"],[[6112,6121],\"valid\"],[[6122,6127],\"disallowed\"],[[6128,6137],\"valid\",[],\"NV8\"],[[6138,6143],\"disallowed\"],[[6144,6149],\"valid\",[],\"NV8\"],[[6150,6150],\"disallowed\"],[[6151,6154],\"valid\",[],\"NV8\"],[[6155,6157],\"ignored\"],[[6158,6158],\"disallowed\"],[[6159,6159],\"disallowed\"],[[6160,6169],\"valid\"],[[6170,6175],\"disallowed\"],[[6176,6263],\"valid\"],[[6264,6271],\"disallowed\"],[[6272,6313],\"valid\"],[[6314,6314],\"valid\"],[[6315,6319],\"disallowed\"],[[6320,6389],\"valid\"],[[6390,6399],\"disallowed\"],[[6400,6428],\"valid\"],[[6429,6430],\"valid\"],[[6431,6431],\"disallowed\"],[[6432,6443],\"valid\"],[[6444,6447],\"disallowed\"],[[6448,6459],\"valid\"],[[6460,6463],\"disallowed\"],[[6464,6464],\"valid\",[],\"NV8\"],[[6465,6467],\"disallowed\"],[[6468,6469],\"valid\",[],\"NV8\"],[[6470,6509],\"valid\"],[[6510,6511],\"disallowed\"],[[6512,6516],\"valid\"],[[6517,6527],\"disallowed\"],[[6528,6569],\"valid\"],[[6570,6571],\"valid\"],[[6572,6575],\"disallowed\"],[[6576,6601],\"valid\"],[[6602,6607],\"disallowed\"],[[6608,6617],\"valid\"],[[6618,6618],\"valid\",[],\"XV8\"],[[6619,6621],\"disallowed\"],[[6622,6623],\"valid\",[],\"NV8\"],[[6624,6655],\"valid\",[],\"NV8\"],[[6656,6683],\"valid\"],[[6684,6685],\"disallowed\"],[[6686,6687],\"valid\",[],\"NV8\"],[[6688,6750],\"valid\"],[[6751,6751],\"disallowed\"],[[6752,6780],\"valid\"],[[6781,6782],\"disallowed\"],[[6783,6793],\"valid\"],[[6794,6799],\"disallowed\"],[[6800,6809],\"valid\"],[[6810,6815],\"disallowed\"],[[6816,6822],\"valid\",[],\"NV8\"],[[6823,6823],\"valid\"],[[6824,6829],\"valid\",[],\"NV8\"],[[6830,6831],\"disallowed\"],[[6832,6845],\"valid\"],[[6846,6846],\"valid\",[],\"NV8\"],[[6847,6911],\"disallowed\"],[[6912,6987],\"valid\"],[[6988,6991],\"disallowed\"],[[6992,7001],\"valid\"],[[7002,7018],\"valid\",[],\"NV8\"],[[7019,7027],\"valid\"],[[7028,7036],\"valid\",[],\"NV8\"],[[7037,7039],\"disallowed\"],[[7040,7082],\"valid\"],[[7083,7085],\"valid\"],[[7086,7097],\"valid\"],[[7098,7103],\"valid\"],[[7104,7155],\"valid\"],[[7156,7163],\"disallowed\"],[[7164,7167],\"valid\",[],\"NV8\"],[[7168,7223],\"valid\"],[[7224,7226],\"disallowed\"],[[7227,7231],\"valid\",[],\"NV8\"],[[7232,7241],\"valid\"],[[7242,7244],\"disallowed\"],[[7245,7293],\"valid\"],[[7294,7295],\"valid\",[],\"NV8\"],[[7296,7359],\"disallowed\"],[[7360,7367],\"valid\",[],\"NV8\"],[[7368,7375],\"disallowed\"],[[7376,7378],\"valid\"],[[7379,7379],\"valid\",[],\"NV8\"],[[7380,7410],\"valid\"],[[7411,7414],\"valid\"],[[7415,7415],\"disallowed\"],[[7416,7417],\"valid\"],[[7418,7423],\"disallowed\"],[[7424,7467],\"valid\"],[[7468,7468],\"mapped\",[97]],[[7469,7469],\"mapped\",[230]],[[7470,7470],\"mapped\",[98]],[[7471,7471],\"valid\"],[[7472,7472],\"mapped\",[100]],[[7473,7473],\"mapped\",[101]],[[7474,7474],\"mapped\",[477]],[[7475,7475],\"mapped\",[103]],[[7476,7476],\"mapped\",[104]],[[7477,7477],\"mapped\",[105]],[[7478,7478],\"mapped\",[106]],[[7479,7479],\"mapped\",[107]],[[7480,7480],\"mapped\",[108]],[[7481,7481],\"mapped\",[109]],[[7482,7482],\"mapped\",[110]],[[7483,7483],\"valid\"],[[7484,7484],\"mapped\",[111]],[[7485,7485],\"mapped\",[547]],[[7486,7486],\"mapped\",[112]],[[7487,7487],\"mapped\",[114]],[[7488,7488],\"mapped\",[116]],[[7489,7489],\"mapped\",[117]],[[7490,7490],\"mapped\",[119]],[[7491,7491],\"mapped\",[97]],[[7492,7492],\"mapped\",[592]],[[7493,7493],\"mapped\",[593]],[[7494,7494],\"mapped\",[7426]],[[7495,7495],\"mapped\",[98]],[[7496,7496],\"mapped\",[100]],[[7497,7497],\"mapped\",[101]],[[7498,7498],\"mapped\",[601]],[[7499,7499],\"mapped\",[603]],[[7500,7500],\"mapped\",[604]],[[7501,7501],\"mapped\",[103]],[[7502,7502],\"valid\"],[[7503,7503],\"mapped\",[107]],[[7504,7504],\"mapped\",[109]],[[7505,7505],\"mapped\",[331]],[[7506,7506],\"mapped\",[111]],[[7507,7507],\"mapped\",[596]],[[7508,7508],\"mapped\",[7446]],[[7509,7509],\"mapped\",[7447]],[[7510,7510],\"mapped\",[112]],[[7511,7511],\"mapped\",[116]],[[7512,7512],\"mapped\",[117]],[[7513,7513],\"mapped\",[7453]],[[7514,7514],\"mapped\",[623]],[[7515,7515],\"mapped\",[118]],[[7516,7516],\"mapped\",[7461]],[[7517,7517],\"mapped\",[946]],[[7518,7518],\"mapped\",[947]],[[7519,7519],\"mapped\",[948]],[[7520,7520],\"mapped\",[966]],[[7521,7521],\"mapped\",[967]],[[7522,7522],\"mapped\",[105]],[[7523,7523],\"mapped\",[114]],[[7524,7524],\"mapped\",[117]],[[7525,7525],\"mapped\",[118]],[[7526,7526],\"mapped\",[946]],[[7527,7527],\"mapped\",[947]],[[7528,7528],\"mapped\",[961]],[[7529,7529],\"mapped\",[966]],[[7530,7530],\"mapped\",[967]],[[7531,7531],\"valid\"],[[7532,7543],\"valid\"],[[7544,7544],\"mapped\",[1085]],[[7545,7578],\"valid\"],[[7579,7579],\"mapped\",[594]],[[7580,7580],\"mapped\",[99]],[[7581,7581],\"mapped\",[597]],[[7582,7582],\"mapped\",[240]],[[7583,7583],\"mapped\",[604]],[[7584,7584],\"mapped\",[102]],[[7585,7585],\"mapped\",[607]],[[7586,7586],\"mapped\",[609]],[[7587,7587],\"mapped\",[613]],[[7588,7588],\"mapped\",[616]],[[7589,7589],\"mapped\",[617]],[[7590,7590],\"mapped\",[618]],[[7591,7591],\"mapped\",[7547]],[[7592,7592],\"mapped\",[669]],[[7593,7593],\"mapped\",[621]],[[7594,7594],\"mapped\",[7557]],[[7595,7595],\"mapped\",[671]],[[7596,7596],\"mapped\",[625]],[[7597,7597],\"mapped\",[624]],[[7598,7598],\"mapped\",[626]],[[7599,7599],\"mapped\",[627]],[[7600,7600],\"mapped\",[628]],[[7601,7601],\"mapped\",[629]],[[7602,7602],\"mapped\",[632]],[[7603,7603],\"mapped\",[642]],[[7604,7604],\"mapped\",[643]],[[7605,7605],\"mapped\",[427]],[[7606,7606],\"mapped\",[649]],[[7607,7607],\"mapped\",[650]],[[7608,7608],\"mapped\",[7452]],[[7609,7609],\"mapped\",[651]],[[7610,7610],\"mapped\",[652]],[[7611,7611],\"mapped\",[122]],[[7612,7612],\"mapped\",[656]],[[7613,7613],\"mapped\",[657]],[[7614,7614],\"mapped\",[658]],[[7615,7615],\"mapped\",[952]],[[7616,7619],\"valid\"],[[7620,7626],\"valid\"],[[7627,7654],\"valid\"],[[7655,7669],\"valid\"],[[7670,7675],\"disallowed\"],[[7676,7676],\"valid\"],[[7677,7677],\"valid\"],[[7678,7679],\"valid\"],[[7680,7680],\"mapped\",[7681]],[[7681,7681],\"valid\"],[[7682,7682],\"mapped\",[7683]],[[7683,7683],\"valid\"],[[7684,7684],\"mapped\",[7685]],[[7685,7685],\"valid\"],[[7686,7686],\"mapped\",[7687]],[[7687,7687],\"valid\"],[[7688,7688],\"mapped\",[7689]],[[7689,7689],\"valid\"],[[7690,7690],\"mapped\",[7691]],[[7691,7691],\"valid\"],[[7692,7692],\"mapped\",[7693]],[[7693,7693],\"valid\"],[[7694,7694],\"mapped\",[7695]],[[7695,7695],\"valid\"],[[7696,7696],\"mapped\",[7697]],[[7697,7697],\"valid\"],[[7698,7698],\"mapped\",[7699]],[[7699,7699],\"valid\"],[[7700,7700],\"mapped\",[7701]],[[7701,7701],\"valid\"],[[7702,7702],\"mapped\",[7703]],[[7703,7703],\"valid\"],[[7704,7704],\"mapped\",[7705]],[[7705,7705],\"valid\"],[[7706,7706],\"mapped\",[7707]],[[7707,7707],\"valid\"],[[7708,7708],\"mapped\",[7709]],[[7709,7709],\"valid\"],[[7710,7710],\"mapped\",[7711]],[[7711,7711],\"valid\"],[[7712,7712],\"mapped\",[7713]],[[7713,7713],\"valid\"],[[7714,7714],\"mapped\",[7715]],[[7715,7715],\"valid\"],[[7716,7716],\"mapped\",[7717]],[[7717,7717],\"valid\"],[[7718,7718],\"mapped\",[7719]],[[7719,7719],\"valid\"],[[7720,7720],\"mapped\",[7721]],[[7721,7721],\"valid\"],[[7722,7722],\"mapped\",[7723]],[[7723,7723],\"valid\"],[[7724,7724],\"mapped\",[7725]],[[7725,7725],\"valid\"],[[7726,7726],\"mapped\",[7727]],[[7727,7727],\"valid\"],[[7728,7728],\"mapped\",[7729]],[[7729,7729],\"valid\"],[[7730,7730],\"mapped\",[7731]],[[7731,7731],\"valid\"],[[7732,7732],\"mapped\",[7733]],[[7733,7733],\"valid\"],[[7734,7734],\"mapped\",[7735]],[[7735,7735],\"valid\"],[[7736,7736],\"mapped\",[7737]],[[7737,7737],\"valid\"],[[7738,7738],\"mapped\",[7739]],[[7739,7739],\"valid\"],[[7740,7740],\"mapped\",[7741]],[[7741,7741],\"valid\"],[[7742,7742],\"mapped\",[7743]],[[7743,7743],\"valid\"],[[7744,7744],\"mapped\",[7745]],[[7745,7745],\"valid\"],[[7746,7746],\"mapped\",[7747]],[[7747,7747],\"valid\"],[[7748,7748],\"mapped\",[7749]],[[7749,7749],\"valid\"],[[7750,7750],\"mapped\",[7751]],[[7751,7751],\"valid\"],[[7752,7752],\"mapped\",[7753]],[[7753,7753],\"valid\"],[[7754,7754],\"mapped\",[7755]],[[7755,7755],\"valid\"],[[7756,7756],\"mapped\",[7757]],[[7757,7757],\"valid\"],[[7758,7758],\"mapped\",[7759]],[[7759,7759],\"valid\"],[[7760,7760],\"mapped\",[7761]],[[7761,7761],\"valid\"],[[7762,7762],\"mapped\",[7763]],[[7763,7763],\"valid\"],[[7764,7764],\"mapped\",[7765]],[[7765,7765],\"valid\"],[[7766,7766],\"mapped\",[7767]],[[7767,7767],\"valid\"],[[7768,7768],\"mapped\",[7769]],[[7769,7769],\"valid\"],[[7770,7770],\"mapped\",[7771]],[[7771,7771],\"valid\"],[[7772,7772],\"mapped\",[7773]],[[7773,7773],\"valid\"],[[7774,7774],\"mapped\",[7775]],[[7775,7775],\"valid\"],[[7776,7776],\"mapped\",[7777]],[[7777,7777],\"valid\"],[[7778,7778],\"mapped\",[7779]],[[7779,7779],\"valid\"],[[7780,7780],\"mapped\",[7781]],[[7781,7781],\"valid\"],[[7782,7782],\"mapped\",[7783]],[[7783,7783],\"valid\"],[[7784,7784],\"mapped\",[7785]],[[7785,7785],\"valid\"],[[7786,7786],\"mapped\",[7787]],[[7787,7787],\"valid\"],[[7788,7788],\"mapped\",[7789]],[[7789,7789],\"valid\"],[[7790,7790],\"mapped\",[7791]],[[7791,7791],\"valid\"],[[7792,7792],\"mapped\",[7793]],[[7793,7793],\"valid\"],[[7794,7794],\"mapped\",[7795]],[[7795,7795],\"valid\"],[[7796,7796],\"mapped\",[7797]],[[7797,7797],\"valid\"],[[7798,7798],\"mapped\",[7799]],[[7799,7799],\"valid\"],[[7800,7800],\"mapped\",[7801]],[[7801,7801],\"valid\"],[[7802,7802],\"mapped\",[7803]],[[7803,7803],\"valid\"],[[7804,7804],\"mapped\",[7805]],[[7805,7805],\"valid\"],[[7806,7806],\"mapped\",[7807]],[[7807,7807],\"valid\"],[[7808,7808],\"mapped\",[7809]],[[7809,7809],\"valid\"],[[7810,7810],\"mapped\",[7811]],[[7811,7811],\"valid\"],[[7812,7812],\"mapped\",[7813]],[[7813,7813],\"valid\"],[[7814,7814],\"mapped\",[7815]],[[7815,7815],\"valid\"],[[7816,7816],\"mapped\",[7817]],[[7817,7817],\"valid\"],[[7818,7818],\"mapped\",[7819]],[[7819,7819],\"valid\"],[[7820,7820],\"mapped\",[7821]],[[7821,7821],\"valid\"],[[7822,7822],\"mapped\",[7823]],[[7823,7823],\"valid\"],[[7824,7824],\"mapped\",[7825]],[[7825,7825],\"valid\"],[[7826,7826],\"mapped\",[7827]],[[7827,7827],\"valid\"],[[7828,7828],\"mapped\",[7829]],[[7829,7833],\"valid\"],[[7834,7834],\"mapped\",[97,702]],[[7835,7835],\"mapped\",[7777]],[[7836,7837],\"valid\"],[[7838,7838],\"mapped\",[115,115]],[[7839,7839],\"valid\"],[[7840,7840],\"mapped\",[7841]],[[7841,7841],\"valid\"],[[7842,7842],\"mapped\",[7843]],[[7843,7843],\"valid\"],[[7844,7844],\"mapped\",[7845]],[[7845,7845],\"valid\"],[[7846,7846],\"mapped\",[7847]],[[7847,7847],\"valid\"],[[7848,7848],\"mapped\",[7849]],[[7849,7849],\"valid\"],[[7850,7850],\"mapped\",[7851]],[[7851,7851],\"valid\"],[[7852,7852],\"mapped\",[7853]],[[7853,7853],\"valid\"],[[7854,7854],\"mapped\",[7855]],[[7855,7855],\"valid\"],[[7856,7856],\"mapped\",[7857]],[[7857,7857],\"valid\"],[[7858,7858],\"mapped\",[7859]],[[7859,7859],\"valid\"],[[7860,7860],\"mapped\",[7861]],[[7861,7861],\"valid\"],[[7862,7862],\"mapped\",[7863]],[[7863,7863],\"valid\"],[[7864,7864],\"mapped\",[7865]],[[7865,7865],\"valid\"],[[7866,7866],\"mapped\",[7867]],[[7867,7867],\"valid\"],[[7868,7868],\"mapped\",[7869]],[[7869,7869],\"valid\"],[[7870,7870],\"mapped\",[7871]],[[7871,7871],\"valid\"],[[7872,7872],\"mapped\",[7873]],[[7873,7873],\"valid\"],[[7874,7874],\"mapped\",[7875]],[[7875,7875],\"valid\"],[[7876,7876],\"mapped\",[7877]],[[7877,7877],\"valid\"],[[7878,7878],\"mapped\",[7879]],[[7879,7879],\"valid\"],[[7880,7880],\"mapped\",[7881]],[[7881,7881],\"valid\"],[[7882,7882],\"mapped\",[7883]],[[7883,7883],\"valid\"],[[7884,7884],\"mapped\",[7885]],[[7885,7885],\"valid\"],[[7886,7886],\"mapped\",[7887]],[[7887,7887],\"valid\"],[[7888,7888],\"mapped\",[7889]],[[7889,7889],\"valid\"],[[7890,7890],\"mapped\",[7891]],[[7891,7891],\"valid\"],[[7892,7892],\"mapped\",[7893]],[[7893,7893],\"valid\"],[[7894,7894],\"mapped\",[7895]],[[7895,7895],\"valid\"],[[7896,7896],\"mapped\",[7897]],[[7897,7897],\"valid\"],[[7898,7898],\"mapped\",[7899]],[[7899,7899],\"valid\"],[[7900,7900],\"mapped\",[7901]],[[7901,7901],\"valid\"],[[7902,7902],\"mapped\",[7903]],[[7903,7903],\"valid\"],[[7904,7904],\"mapped\",[7905]],[[7905,7905],\"valid\"],[[7906,7906],\"mapped\",[7907]],[[7907,7907],\"valid\"],[[7908,7908],\"mapped\",[7909]],[[7909,7909],\"valid\"],[[7910,7910],\"mapped\",[7911]],[[7911,7911],\"valid\"],[[7912,7912],\"mapped\",[7913]],[[7913,7913],\"valid\"],[[7914,7914],\"mapped\",[7915]],[[7915,7915],\"valid\"],[[7916,7916],\"mapped\",[7917]],[[7917,7917],\"valid\"],[[7918,7918],\"mapped\",[7919]],[[7919,7919],\"valid\"],[[7920,7920],\"mapped\",[7921]],[[7921,7921],\"valid\"],[[7922,7922],\"mapped\",[7923]],[[7923,7923],\"valid\"],[[7924,7924],\"mapped\",[7925]],[[7925,7925],\"valid\"],[[7926,7926],\"mapped\",[7927]],[[7927,7927],\"valid\"],[[7928,7928],\"mapped\",[7929]],[[7929,7929],\"valid\"],[[7930,7930],\"mapped\",[7931]],[[7931,7931],\"valid\"],[[7932,7932],\"mapped\",[7933]],[[7933,7933],\"valid\"],[[7934,7934],\"mapped\",[7935]],[[7935,7935],\"valid\"],[[7936,7943],\"valid\"],[[7944,7944],\"mapped\",[7936]],[[7945,7945],\"mapped\",[7937]],[[7946,7946],\"mapped\",[7938]],[[7947,7947],\"mapped\",[7939]],[[7948,7948],\"mapped\",[7940]],[[7949,7949],\"mapped\",[7941]],[[7950,7950],\"mapped\",[7942]],[[7951,7951],\"mapped\",[7943]],[[7952,7957],\"valid\"],[[7958,7959],\"disallowed\"],[[7960,7960],\"mapped\",[7952]],[[7961,7961],\"mapped\",[7953]],[[7962,7962],\"mapped\",[7954]],[[7963,7963],\"mapped\",[7955]],[[7964,7964],\"mapped\",[7956]],[[7965,7965],\"mapped\",[7957]],[[7966,7967],\"disallowed\"],[[7968,7975],\"valid\"],[[7976,7976],\"mapped\",[7968]],[[7977,7977],\"mapped\",[7969]],[[7978,7978],\"mapped\",[7970]],[[7979,7979],\"mapped\",[7971]],[[7980,7980],\"mapped\",[7972]],[[7981,7981],\"mapped\",[7973]],[[7982,7982],\"mapped\",[7974]],[[7983,7983],\"mapped\",[7975]],[[7984,7991],\"valid\"],[[7992,7992],\"mapped\",[7984]],[[7993,7993],\"mapped\",[7985]],[[7994,7994],\"mapped\",[7986]],[[7995,7995],\"mapped\",[7987]],[[7996,7996],\"mapped\",[7988]],[[7997,7997],\"mapped\",[7989]],[[7998,7998],\"mapped\",[7990]],[[7999,7999],\"mapped\",[7991]],[[8000,8005],\"valid\"],[[8006,8007],\"disallowed\"],[[8008,8008],\"mapped\",[8000]],[[8009,8009],\"mapped\",[8001]],[[8010,8010],\"mapped\",[8002]],[[8011,8011],\"mapped\",[8003]],[[8012,8012],\"mapped\",[8004]],[[8013,8013],\"mapped\",[8005]],[[8014,8015],\"disallowed\"],[[8016,8023],\"valid\"],[[8024,8024],\"disallowed\"],[[8025,8025],\"mapped\",[8017]],[[8026,8026],\"disallowed\"],[[8027,8027],\"mapped\",[8019]],[[8028,8028],\"disallowed\"],[[8029,8029],\"mapped\",[8021]],[[8030,8030],\"disallowed\"],[[8031,8031],\"mapped\",[8023]],[[8032,8039],\"valid\"],[[8040,8040],\"mapped\",[8032]],[[8041,8041],\"mapped\",[8033]],[[8042,8042],\"mapped\",[8034]],[[8043,8043],\"mapped\",[8035]],[[8044,8044],\"mapped\",[8036]],[[8045,8045],\"mapped\",[8037]],[[8046,8046],\"mapped\",[8038]],[[8047,8047],\"mapped\",[8039]],[[8048,8048],\"valid\"],[[8049,8049],\"mapped\",[940]],[[8050,8050],\"valid\"],[[8051,8051],\"mapped\",[941]],[[8052,8052],\"valid\"],[[8053,8053],\"mapped\",[942]],[[8054,8054],\"valid\"],[[8055,8055],\"mapped\",[943]],[[8056,8056],\"valid\"],[[8057,8057],\"mapped\",[972]],[[8058,8058],\"valid\"],[[8059,8059],\"mapped\",[973]],[[8060,8060],\"valid\"],[[8061,8061],\"mapped\",[974]],[[8062,8063],\"disallowed\"],[[8064,8064],\"mapped\",[7936,953]],[[8065,8065],\"mapped\",[7937,953]],[[8066,8066],\"mapped\",[7938,953]],[[8067,8067],\"mapped\",[7939,953]],[[8068,8068],\"mapped\",[7940,953]],[[8069,8069],\"mapped\",[7941,953]],[[8070,8070],\"mapped\",[7942,953]],[[8071,8071],\"mapped\",[7943,953]],[[8072,8072],\"mapped\",[7936,953]],[[8073,8073],\"mapped\",[7937,953]],[[8074,8074],\"mapped\",[7938,953]],[[8075,8075],\"mapped\",[7939,953]],[[8076,8076],\"mapped\",[7940,953]],[[8077,8077],\"mapped\",[7941,953]],[[8078,8078],\"mapped\",[7942,953]],[[8079,8079],\"mapped\",[7943,953]],[[8080,8080],\"mapped\",[7968,953]],[[8081,8081],\"mapped\",[7969,953]],[[8082,8082],\"mapped\",[7970,953]],[[8083,8083],\"mapped\",[7971,953]],[[8084,8084],\"mapped\",[7972,953]],[[8085,8085],\"mapped\",[7973,953]],[[8086,8086],\"mapped\",[7974,953]],[[8087,8087],\"mapped\",[7975,953]],[[8088,8088],\"mapped\",[7968,953]],[[8089,8089],\"mapped\",[7969,953]],[[8090,8090],\"mapped\",[7970,953]],[[8091,8091],\"mapped\",[7971,953]],[[8092,8092],\"mapped\",[7972,953]],[[8093,8093],\"mapped\",[7973,953]],[[8094,8094],\"mapped\",[7974,953]],[[8095,8095],\"mapped\",[7975,953]],[[8096,8096],\"mapped\",[8032,953]],[[8097,8097],\"mapped\",[8033,953]],[[8098,8098],\"mapped\",[8034,953]],[[8099,8099],\"mapped\",[8035,953]],[[8100,8100],\"mapped\",[8036,953]],[[8101,8101],\"mapped\",[8037,953]],[[8102,8102],\"mapped\",[8038,953]],[[8103,8103],\"mapped\",[8039,953]],[[8104,8104],\"mapped\",[8032,953]],[[8105,8105],\"mapped\",[8033,953]],[[8106,8106],\"mapped\",[8034,953]],[[8107,8107],\"mapped\",[8035,953]],[[8108,8108],\"mapped\",[8036,953]],[[8109,8109],\"mapped\",[8037,953]],[[8110,8110],\"mapped\",[8038,953]],[[8111,8111],\"mapped\",[8039,953]],[[8112,8113],\"valid\"],[[8114,8114],\"mapped\",[8048,953]],[[8115,8115],\"mapped\",[945,953]],[[8116,8116],\"mapped\",[940,953]],[[8117,8117],\"disallowed\"],[[8118,8118],\"valid\"],[[8119,8119],\"mapped\",[8118,953]],[[8120,8120],\"mapped\",[8112]],[[8121,8121],\"mapped\",[8113]],[[8122,8122],\"mapped\",[8048]],[[8123,8123],\"mapped\",[940]],[[8124,8124],\"mapped\",[945,953]],[[8125,8125],\"disallowed_STD3_mapped\",[32,787]],[[8126,8126],\"mapped\",[953]],[[8127,8127],\"disallowed_STD3_mapped\",[32,787]],[[8128,8128],\"disallowed_STD3_mapped\",[32,834]],[[8129,8129],\"disallowed_STD3_mapped\",[32,776,834]],[[8130,8130],\"mapped\",[8052,953]],[[8131,8131],\"mapped\",[951,953]],[[8132,8132],\"mapped\",[942,953]],[[8133,8133],\"disallowed\"],[[8134,8134],\"valid\"],[[8135,8135],\"mapped\",[8134,953]],[[8136,8136],\"mapped\",[8050]],[[8137,8137],\"mapped\",[941]],[[8138,8138],\"mapped\",[8052]],[[8139,8139],\"mapped\",[942]],[[8140,8140],\"mapped\",[951,953]],[[8141,8141],\"disallowed_STD3_mapped\",[32,787,768]],[[8142,8142],\"disallowed_STD3_mapped\",[32,787,769]],[[8143,8143],\"disallowed_STD3_mapped\",[32,787,834]],[[8144,8146],\"valid\"],[[8147,8147],\"mapped\",[912]],[[8148,8149],\"disallowed\"],[[8150,8151],\"valid\"],[[8152,8152],\"mapped\",[8144]],[[8153,8153],\"mapped\",[8145]],[[8154,8154],\"mapped\",[8054]],[[8155,8155],\"mapped\",[943]],[[8156,8156],\"disallowed\"],[[8157,8157],\"disallowed_STD3_mapped\",[32,788,768]],[[8158,8158],\"disallowed_STD3_mapped\",[32,788,769]],[[8159,8159],\"disallowed_STD3_mapped\",[32,788,834]],[[8160,8162],\"valid\"],[[8163,8163],\"mapped\",[944]],[[8164,8167],\"valid\"],[[8168,8168],\"mapped\",[8160]],[[8169,8169],\"mapped\",[8161]],[[8170,8170],\"mapped\",[8058]],[[8171,8171],\"mapped\",[973]],[[8172,8172],\"mapped\",[8165]],[[8173,8173],\"disallowed_STD3_mapped\",[32,776,768]],[[8174,8174],\"disallowed_STD3_mapped\",[32,776,769]],[[8175,8175],\"disallowed_STD3_mapped\",[96]],[[8176,8177],\"disallowed\"],[[8178,8178],\"mapped\",[8060,953]],[[8179,8179],\"mapped\",[969,953]],[[8180,8180],\"mapped\",[974,953]],[[8181,8181],\"disallowed\"],[[8182,8182],\"valid\"],[[8183,8183],\"mapped\",[8182,953]],[[8184,8184],\"mapped\",[8056]],[[8185,8185],\"mapped\",[972]],[[8186,8186],\"mapped\",[8060]],[[8187,8187],\"mapped\",[974]],[[8188,8188],\"mapped\",[969,953]],[[8189,8189],\"disallowed_STD3_mapped\",[32,769]],[[8190,8190],\"disallowed_STD3_mapped\",[32,788]],[[8191,8191],\"disallowed\"],[[8192,8202],\"disallowed_STD3_mapped\",[32]],[[8203,8203],\"ignored\"],[[8204,8205],\"deviation\",[]],[[8206,8207],\"disallowed\"],[[8208,8208],\"valid\",[],\"NV8\"],[[8209,8209],\"mapped\",[8208]],[[8210,8214],\"valid\",[],\"NV8\"],[[8215,8215],\"disallowed_STD3_mapped\",[32,819]],[[8216,8227],\"valid\",[],\"NV8\"],[[8228,8230],\"disallowed\"],[[8231,8231],\"valid\",[],\"NV8\"],[[8232,8238],\"disallowed\"],[[8239,8239],\"disallowed_STD3_mapped\",[32]],[[8240,8242],\"valid\",[],\"NV8\"],[[8243,8243],\"mapped\",[8242,8242]],[[8244,8244],\"mapped\",[8242,8242,8242]],[[8245,8245],\"valid\",[],\"NV8\"],[[8246,8246],\"mapped\",[8245,8245]],[[8247,8247],\"mapped\",[8245,8245,8245]],[[8248,8251],\"valid\",[],\"NV8\"],[[8252,8252],\"disallowed_STD3_mapped\",[33,33]],[[8253,8253],\"valid\",[],\"NV8\"],[[8254,8254],\"disallowed_STD3_mapped\",[32,773]],[[8255,8262],\"valid\",[],\"NV8\"],[[8263,8263],\"disallowed_STD3_mapped\",[63,63]],[[8264,8264],\"disallowed_STD3_mapped\",[63,33]],[[8265,8265],\"disallowed_STD3_mapped\",[33,63]],[[8266,8269],\"valid\",[],\"NV8\"],[[8270,8274],\"valid\",[],\"NV8\"],[[8275,8276],\"valid\",[],\"NV8\"],[[8277,8278],\"valid\",[],\"NV8\"],[[8279,8279],\"mapped\",[8242,8242,8242,8242]],[[8280,8286],\"valid\",[],\"NV8\"],[[8287,8287],\"disallowed_STD3_mapped\",[32]],[[8288,8288],\"ignored\"],[[8289,8291],\"disallowed\"],[[8292,8292],\"ignored\"],[[8293,8293],\"disallowed\"],[[8294,8297],\"disallowed\"],[[8298,8303],\"disallowed\"],[[8304,8304],\"mapped\",[48]],[[8305,8305],\"mapped\",[105]],[[8306,8307],\"disallowed\"],[[8308,8308],\"mapped\",[52]],[[8309,8309],\"mapped\",[53]],[[8310,8310],\"mapped\",[54]],[[8311,8311],\"mapped\",[55]],[[8312,8312],\"mapped\",[56]],[[8313,8313],\"mapped\",[57]],[[8314,8314],\"disallowed_STD3_mapped\",[43]],[[8315,8315],\"mapped\",[8722]],[[8316,8316],\"disallowed_STD3_mapped\",[61]],[[8317,8317],\"disallowed_STD3_mapped\",[40]],[[8318,8318],\"disallowed_STD3_mapped\",[41]],[[8319,8319],\"mapped\",[110]],[[8320,8320],\"mapped\",[48]],[[8321,8321],\"mapped\",[49]],[[8322,8322],\"mapped\",[50]],[[8323,8323],\"mapped\",[51]],[[8324,8324],\"mapped\",[52]],[[8325,8325],\"mapped\",[53]],[[8326,8326],\"mapped\",[54]],[[8327,8327],\"mapped\",[55]],[[8328,8328],\"mapped\",[56]],[[8329,8329],\"mapped\",[57]],[[8330,8330],\"disallowed_STD3_mapped\",[43]],[[8331,8331],\"mapped\",[8722]],[[8332,8332],\"disallowed_STD3_mapped\",[61]],[[8333,8333],\"disallowed_STD3_mapped\",[40]],[[8334,8334],\"disallowed_STD3_mapped\",[41]],[[8335,8335],\"disallowed\"],[[8336,8336],\"mapped\",[97]],[[8337,8337],\"mapped\",[101]],[[8338,8338],\"mapped\",[111]],[[8339,8339],\"mapped\",[120]],[[8340,8340],\"mapped\",[601]],[[8341,8341],\"mapped\",[104]],[[8342,8342],\"mapped\",[107]],[[8343,8343],\"mapped\",[108]],[[8344,8344],\"mapped\",[109]],[[8345,8345],\"mapped\",[110]],[[8346,8346],\"mapped\",[112]],[[8347,8347],\"mapped\",[115]],[[8348,8348],\"mapped\",[116]],[[8349,8351],\"disallowed\"],[[8352,8359],\"valid\",[],\"NV8\"],[[8360,8360],\"mapped\",[114,115]],[[8361,8362],\"valid\",[],\"NV8\"],[[8363,8363],\"valid\",[],\"NV8\"],[[8364,8364],\"valid\",[],\"NV8\"],[[8365,8367],\"valid\",[],\"NV8\"],[[8368,8369],\"valid\",[],\"NV8\"],[[8370,8373],\"valid\",[],\"NV8\"],[[8374,8376],\"valid\",[],\"NV8\"],[[8377,8377],\"valid\",[],\"NV8\"],[[8378,8378],\"valid\",[],\"NV8\"],[[8379,8381],\"valid\",[],\"NV8\"],[[8382,8382],\"valid\",[],\"NV8\"],[[8383,8399],\"disallowed\"],[[8400,8417],\"valid\",[],\"NV8\"],[[8418,8419],\"valid\",[],\"NV8\"],[[8420,8426],\"valid\",[],\"NV8\"],[[8427,8427],\"valid\",[],\"NV8\"],[[8428,8431],\"valid\",[],\"NV8\"],[[8432,8432],\"valid\",[],\"NV8\"],[[8433,8447],\"disallowed\"],[[8448,8448],\"disallowed_STD3_mapped\",[97,47,99]],[[8449,8449],\"disallowed_STD3_mapped\",[97,47,115]],[[8450,8450],\"mapped\",[99]],[[8451,8451],\"mapped\",[176,99]],[[8452,8452],\"valid\",[],\"NV8\"],[[8453,8453],\"disallowed_STD3_mapped\",[99,47,111]],[[8454,8454],\"disallowed_STD3_mapped\",[99,47,117]],[[8455,8455],\"mapped\",[603]],[[8456,8456],\"valid\",[],\"NV8\"],[[8457,8457],\"mapped\",[176,102]],[[8458,8458],\"mapped\",[103]],[[8459,8462],\"mapped\",[104]],[[8463,8463],\"mapped\",[295]],[[8464,8465],\"mapped\",[105]],[[8466,8467],\"mapped\",[108]],[[8468,8468],\"valid\",[],\"NV8\"],[[8469,8469],\"mapped\",[110]],[[8470,8470],\"mapped\",[110,111]],[[8471,8472],\"valid\",[],\"NV8\"],[[8473,8473],\"mapped\",[112]],[[8474,8474],\"mapped\",[113]],[[8475,8477],\"mapped\",[114]],[[8478,8479],\"valid\",[],\"NV8\"],[[8480,8480],\"mapped\",[115,109]],[[8481,8481],\"mapped\",[116,101,108]],[[8482,8482],\"mapped\",[116,109]],[[8483,8483],\"valid\",[],\"NV8\"],[[8484,8484],\"mapped\",[122]],[[8485,8485],\"valid\",[],\"NV8\"],[[8486,8486],\"mapped\",[969]],[[8487,8487],\"valid\",[],\"NV8\"],[[8488,8488],\"mapped\",[122]],[[8489,8489],\"valid\",[],\"NV8\"],[[8490,8490],\"mapped\",[107]],[[8491,8491],\"mapped\",[229]],[[8492,8492],\"mapped\",[98]],[[8493,8493],\"mapped\",[99]],[[8494,8494],\"valid\",[],\"NV8\"],[[8495,8496],\"mapped\",[101]],[[8497,8497],\"mapped\",[102]],[[8498,8498],\"disallowed\"],[[8499,8499],\"mapped\",[109]],[[8500,8500],\"mapped\",[111]],[[8501,8501],\"mapped\",[1488]],[[8502,8502],\"mapped\",[1489]],[[8503,8503],\"mapped\",[1490]],[[8504,8504],\"mapped\",[1491]],[[8505,8505],\"mapped\",[105]],[[8506,8506],\"valid\",[],\"NV8\"],[[8507,8507],\"mapped\",[102,97,120]],[[8508,8508],\"mapped\",[960]],[[8509,8510],\"mapped\",[947]],[[8511,8511],\"mapped\",[960]],[[8512,8512],\"mapped\",[8721]],[[8513,8516],\"valid\",[],\"NV8\"],[[8517,8518],\"mapped\",[100]],[[8519,8519],\"mapped\",[101]],[[8520,8520],\"mapped\",[105]],[[8521,8521],\"mapped\",[106]],[[8522,8523],\"valid\",[],\"NV8\"],[[8524,8524],\"valid\",[],\"NV8\"],[[8525,8525],\"valid\",[],\"NV8\"],[[8526,8526],\"valid\"],[[8527,8527],\"valid\",[],\"NV8\"],[[8528,8528],\"mapped\",[49,8260,55]],[[8529,8529],\"mapped\",[49,8260,57]],[[8530,8530],\"mapped\",[49,8260,49,48]],[[8531,8531],\"mapped\",[49,8260,51]],[[8532,8532],\"mapped\",[50,8260,51]],[[8533,8533],\"mapped\",[49,8260,53]],[[8534,8534],\"mapped\",[50,8260,53]],[[8535,8535],\"mapped\",[51,8260,53]],[[8536,8536],\"mapped\",[52,8260,53]],[[8537,8537],\"mapped\",[49,8260,54]],[[8538,8538],\"mapped\",[53,8260,54]],[[8539,8539],\"mapped\",[49,8260,56]],[[8540,8540],\"mapped\",[51,8260,56]],[[8541,8541],\"mapped\",[53,8260,56]],[[8542,8542],\"mapped\",[55,8260,56]],[[8543,8543],\"mapped\",[49,8260]],[[8544,8544],\"mapped\",[105]],[[8545,8545],\"mapped\",[105,105]],[[8546,8546],\"mapped\",[105,105,105]],[[8547,8547],\"mapped\",[105,118]],[[8548,8548],\"mapped\",[118]],[[8549,8549],\"mapped\",[118,105]],[[8550,8550],\"mapped\",[118,105,105]],[[8551,8551],\"mapped\",[118,105,105,105]],[[8552,8552],\"mapped\",[105,120]],[[8553,8553],\"mapped\",[120]],[[8554,8554],\"mapped\",[120,105]],[[8555,8555],\"mapped\",[120,105,105]],[[8556,8556],\"mapped\",[108]],[[8557,8557],\"mapped\",[99]],[[8558,8558],\"mapped\",[100]],[[8559,8559],\"mapped\",[109]],[[8560,8560],\"mapped\",[105]],[[8561,8561],\"mapped\",[105,105]],[[8562,8562],\"mapped\",[105,105,105]],[[8563,8563],\"mapped\",[105,118]],[[8564,8564],\"mapped\",[118]],[[8565,8565],\"mapped\",[118,105]],[[8566,8566],\"mapped\",[118,105,105]],[[8567,8567],\"mapped\",[118,105,105,105]],[[8568,8568],\"mapped\",[105,120]],[[8569,8569],\"mapped\",[120]],[[8570,8570],\"mapped\",[120,105]],[[8571,8571],\"mapped\",[120,105,105]],[[8572,8572],\"mapped\",[108]],[[8573,8573],\"mapped\",[99]],[[8574,8574],\"mapped\",[100]],[[8575,8575],\"mapped\",[109]],[[8576,8578],\"valid\",[],\"NV8\"],[[8579,8579],\"disallowed\"],[[8580,8580],\"valid\"],[[8581,8584],\"valid\",[],\"NV8\"],[[8585,8585],\"mapped\",[48,8260,51]],[[8586,8587],\"valid\",[],\"NV8\"],[[8588,8591],\"disallowed\"],[[8592,8682],\"valid\",[],\"NV8\"],[[8683,8691],\"valid\",[],\"NV8\"],[[8692,8703],\"valid\",[],\"NV8\"],[[8704,8747],\"valid\",[],\"NV8\"],[[8748,8748],\"mapped\",[8747,8747]],[[8749,8749],\"mapped\",[8747,8747,8747]],[[8750,8750],\"valid\",[],\"NV8\"],[[8751,8751],\"mapped\",[8750,8750]],[[8752,8752],\"mapped\",[8750,8750,8750]],[[8753,8799],\"valid\",[],\"NV8\"],[[8800,8800],\"disallowed_STD3_valid\"],[[8801,8813],\"valid\",[],\"NV8\"],[[8814,8815],\"disallowed_STD3_valid\"],[[8816,8945],\"valid\",[],\"NV8\"],[[8946,8959],\"valid\",[],\"NV8\"],[[8960,8960],\"valid\",[],\"NV8\"],[[8961,8961],\"valid\",[],\"NV8\"],[[8962,9000],\"valid\",[],\"NV8\"],[[9001,9001],\"mapped\",[12296]],[[9002,9002],\"mapped\",[12297]],[[9003,9082],\"valid\",[],\"NV8\"],[[9083,9083],\"valid\",[],\"NV8\"],[[9084,9084],\"valid\",[],\"NV8\"],[[9085,9114],\"valid\",[],\"NV8\"],[[9115,9166],\"valid\",[],\"NV8\"],[[9167,9168],\"valid\",[],\"NV8\"],[[9169,9179],\"valid\",[],\"NV8\"],[[9180,9191],\"valid\",[],\"NV8\"],[[9192,9192],\"valid\",[],\"NV8\"],[[9193,9203],\"valid\",[],\"NV8\"],[[9204,9210],\"valid\",[],\"NV8\"],[[9211,9215],\"disallowed\"],[[9216,9252],\"valid\",[],\"NV8\"],[[9253,9254],\"valid\",[],\"NV8\"],[[9255,9279],\"disallowed\"],[[9280,9290],\"valid\",[],\"NV8\"],[[9291,9311],\"disallowed\"],[[9312,9312],\"mapped\",[49]],[[9313,9313],\"mapped\",[50]],[[9314,9314],\"mapped\",[51]],[[9315,9315],\"mapped\",[52]],[[9316,9316],\"mapped\",[53]],[[9317,9317],\"mapped\",[54]],[[9318,9318],\"mapped\",[55]],[[9319,9319],\"mapped\",[56]],[[9320,9320],\"mapped\",[57]],[[9321,9321],\"mapped\",[49,48]],[[9322,9322],\"mapped\",[49,49]],[[9323,9323],\"mapped\",[49,50]],[[9324,9324],\"mapped\",[49,51]],[[9325,9325],\"mapped\",[49,52]],[[9326,9326],\"mapped\",[49,53]],[[9327,9327],\"mapped\",[49,54]],[[9328,9328],\"mapped\",[49,55]],[[9329,9329],\"mapped\",[49,56]],[[9330,9330],\"mapped\",[49,57]],[[9331,9331],\"mapped\",[50,48]],[[9332,9332],\"disallowed_STD3_mapped\",[40,49,41]],[[9333,9333],\"disallowed_STD3_mapped\",[40,50,41]],[[9334,9334],\"disallowed_STD3_mapped\",[40,51,41]],[[9335,9335],\"disallowed_STD3_mapped\",[40,52,41]],[[9336,9336],\"disallowed_STD3_mapped\",[40,53,41]],[[9337,9337],\"disallowed_STD3_mapped\",[40,54,41]],[[9338,9338],\"disallowed_STD3_mapped\",[40,55,41]],[[9339,9339],\"disallowed_STD3_mapped\",[40,56,41]],[[9340,9340],\"disallowed_STD3_mapped\",[40,57,41]],[[9341,9341],\"disallowed_STD3_mapped\",[40,49,48,41]],[[9342,9342],\"disallowed_STD3_mapped\",[40,49,49,41]],[[9343,9343],\"disallowed_STD3_mapped\",[40,49,50,41]],[[9344,9344],\"disallowed_STD3_mapped\",[40,49,51,41]],[[9345,9345],\"disallowed_STD3_mapped\",[40,49,52,41]],[[9346,9346],\"disallowed_STD3_mapped\",[40,49,53,41]],[[9347,9347],\"disallowed_STD3_mapped\",[40,49,54,41]],[[9348,9348],\"disallowed_STD3_mapped\",[40,49,55,41]],[[9349,9349],\"disallowed_STD3_mapped\",[40,49,56,41]],[[9350,9350],\"disallowed_STD3_mapped\",[40,49,57,41]],[[9351,9351],\"disallowed_STD3_mapped\",[40,50,48,41]],[[9352,9371],\"disallowed\"],[[9372,9372],\"disallowed_STD3_mapped\",[40,97,41]],[[9373,9373],\"disallowed_STD3_mapped\",[40,98,41]],[[9374,9374],\"disallowed_STD3_mapped\",[40,99,41]],[[9375,9375],\"disallowed_STD3_mapped\",[40,100,41]],[[9376,9376],\"disallowed_STD3_mapped\",[40,101,41]],[[9377,9377],\"disallowed_STD3_mapped\",[40,102,41]],[[9378,9378],\"disallowed_STD3_mapped\",[40,103,41]],[[9379,9379],\"disallowed_STD3_mapped\",[40,104,41]],[[9380,9380],\"disallowed_STD3_mapped\",[40,105,41]],[[9381,9381],\"disallowed_STD3_mapped\",[40,106,41]],[[9382,9382],\"disallowed_STD3_mapped\",[40,107,41]],[[9383,9383],\"disallowed_STD3_mapped\",[40,108,41]],[[9384,9384],\"disallowed_STD3_mapped\",[40,109,41]],[[9385,9385],\"disallowed_STD3_mapped\",[40,110,41]],[[9386,9386],\"disallowed_STD3_mapped\",[40,111,41]],[[9387,9387],\"disallowed_STD3_mapped\",[40,112,41]],[[9388,9388],\"disallowed_STD3_mapped\",[40,113,41]],[[9389,9389],\"disallowed_STD3_mapped\",[40,114,41]],[[9390,9390],\"disallowed_STD3_mapped\",[40,115,41]],[[9391,9391],\"disallowed_STD3_mapped\",[40,116,41]],[[9392,9392],\"disallowed_STD3_mapped\",[40,117,41]],[[9393,9393],\"disallowed_STD3_mapped\",[40,118,41]],[[9394,9394],\"disallowed_STD3_mapped\",[40,119,41]],[[9395,9395],\"disallowed_STD3_mapped\",[40,120,41]],[[9396,9396],\"disallowed_STD3_mapped\",[40,121,41]],[[9397,9397],\"disallowed_STD3_mapped\",[40,122,41]],[[9398,9398],\"mapped\",[97]],[[9399,9399],\"mapped\",[98]],[[9400,9400],\"mapped\",[99]],[[9401,9401],\"mapped\",[100]],[[9402,9402],\"mapped\",[101]],[[9403,9403],\"mapped\",[102]],[[9404,9404],\"mapped\",[103]],[[9405,9405],\"mapped\",[104]],[[9406,9406],\"mapped\",[105]],[[9407,9407],\"mapped\",[106]],[[9408,9408],\"mapped\",[107]],[[9409,9409],\"mapped\",[108]],[[9410,9410],\"mapped\",[109]],[[9411,9411],\"mapped\",[110]],[[9412,9412],\"mapped\",[111]],[[9413,9413],\"mapped\",[112]],[[9414,9414],\"mapped\",[113]],[[9415,9415],\"mapped\",[114]],[[9416,9416],\"mapped\",[115]],[[9417,9417],\"mapped\",[116]],[[9418,9418],\"mapped\",[117]],[[9419,9419],\"mapped\",[118]],[[9420,9420],\"mapped\",[119]],[[9421,9421],\"mapped\",[120]],[[9422,9422],\"mapped\",[121]],[[9423,9423],\"mapped\",[122]],[[9424,9424],\"mapped\",[97]],[[9425,9425],\"mapped\",[98]],[[9426,9426],\"mapped\",[99]],[[9427,9427],\"mapped\",[100]],[[9428,9428],\"mapped\",[101]],[[9429,9429],\"mapped\",[102]],[[9430,9430],\"mapped\",[103]],[[9431,9431],\"mapped\",[104]],[[9432,9432],\"mapped\",[105]],[[9433,9433],\"mapped\",[106]],[[9434,9434],\"mapped\",[107]],[[9435,9435],\"mapped\",[108]],[[9436,9436],\"mapped\",[109]],[[9437,9437],\"mapped\",[110]],[[9438,9438],\"mapped\",[111]],[[9439,9439],\"mapped\",[112]],[[9440,9440],\"mapped\",[113]],[[9441,9441],\"mapped\",[114]],[[9442,9442],\"mapped\",[115]],[[9443,9443],\"mapped\",[116]],[[9444,9444],\"mapped\",[117]],[[9445,9445],\"mapped\",[118]],[[9446,9446],\"mapped\",[119]],[[9447,9447],\"mapped\",[120]],[[9448,9448],\"mapped\",[121]],[[9449,9449],\"mapped\",[122]],[[9450,9450],\"mapped\",[48]],[[9451,9470],\"valid\",[],\"NV8\"],[[9471,9471],\"valid\",[],\"NV8\"],[[9472,9621],\"valid\",[],\"NV8\"],[[9622,9631],\"valid\",[],\"NV8\"],[[9632,9711],\"valid\",[],\"NV8\"],[[9712,9719],\"valid\",[],\"NV8\"],[[9720,9727],\"valid\",[],\"NV8\"],[[9728,9747],\"valid\",[],\"NV8\"],[[9748,9749],\"valid\",[],\"NV8\"],[[9750,9751],\"valid\",[],\"NV8\"],[[9752,9752],\"valid\",[],\"NV8\"],[[9753,9753],\"valid\",[],\"NV8\"],[[9754,9839],\"valid\",[],\"NV8\"],[[9840,9841],\"valid\",[],\"NV8\"],[[9842,9853],\"valid\",[],\"NV8\"],[[9854,9855],\"valid\",[],\"NV8\"],[[9856,9865],\"valid\",[],\"NV8\"],[[9866,9873],\"valid\",[],\"NV8\"],[[9874,9884],\"valid\",[],\"NV8\"],[[9885,9885],\"valid\",[],\"NV8\"],[[9886,9887],\"valid\",[],\"NV8\"],[[9888,9889],\"valid\",[],\"NV8\"],[[9890,9905],\"valid\",[],\"NV8\"],[[9906,9906],\"valid\",[],\"NV8\"],[[9907,9916],\"valid\",[],\"NV8\"],[[9917,9919],\"valid\",[],\"NV8\"],[[9920,9923],\"valid\",[],\"NV8\"],[[9924,9933],\"valid\",[],\"NV8\"],[[9934,9934],\"valid\",[],\"NV8\"],[[9935,9953],\"valid\",[],\"NV8\"],[[9954,9954],\"valid\",[],\"NV8\"],[[9955,9955],\"valid\",[],\"NV8\"],[[9956,9959],\"valid\",[],\"NV8\"],[[9960,9983],\"valid\",[],\"NV8\"],[[9984,9984],\"valid\",[],\"NV8\"],[[9985,9988],\"valid\",[],\"NV8\"],[[9989,9989],\"valid\",[],\"NV8\"],[[9990,9993],\"valid\",[],\"NV8\"],[[9994,9995],\"valid\",[],\"NV8\"],[[9996,10023],\"valid\",[],\"NV8\"],[[10024,10024],\"valid\",[],\"NV8\"],[[10025,10059],\"valid\",[],\"NV8\"],[[10060,10060],\"valid\",[],\"NV8\"],[[10061,10061],\"valid\",[],\"NV8\"],[[10062,10062],\"valid\",[],\"NV8\"],[[10063,10066],\"valid\",[],\"NV8\"],[[10067,10069],\"valid\",[],\"NV8\"],[[10070,10070],\"valid\",[],\"NV8\"],[[10071,10071],\"valid\",[],\"NV8\"],[[10072,10078],\"valid\",[],\"NV8\"],[[10079,10080],\"valid\",[],\"NV8\"],[[10081,10087],\"valid\",[],\"NV8\"],[[10088,10101],\"valid\",[],\"NV8\"],[[10102,10132],\"valid\",[],\"NV8\"],[[10133,10135],\"valid\",[],\"NV8\"],[[10136,10159],\"valid\",[],\"NV8\"],[[10160,10160],\"valid\",[],\"NV8\"],[[10161,10174],\"valid\",[],\"NV8\"],[[10175,10175],\"valid\",[],\"NV8\"],[[10176,10182],\"valid\",[],\"NV8\"],[[10183,10186],\"valid\",[],\"NV8\"],[[10187,10187],\"valid\",[],\"NV8\"],[[10188,10188],\"valid\",[],\"NV8\"],[[10189,10189],\"valid\",[],\"NV8\"],[[10190,10191],\"valid\",[],\"NV8\"],[[10192,10219],\"valid\",[],\"NV8\"],[[10220,10223],\"valid\",[],\"NV8\"],[[10224,10239],\"valid\",[],\"NV8\"],[[10240,10495],\"valid\",[],\"NV8\"],[[10496,10763],\"valid\",[],\"NV8\"],[[10764,10764],\"mapped\",[8747,8747,8747,8747]],[[10765,10867],\"valid\",[],\"NV8\"],[[10868,10868],\"disallowed_STD3_mapped\",[58,58,61]],[[10869,10869],\"disallowed_STD3_mapped\",[61,61]],[[10870,10870],\"disallowed_STD3_mapped\",[61,61,61]],[[10871,10971],\"valid\",[],\"NV8\"],[[10972,10972],\"mapped\",[10973,824]],[[10973,11007],\"valid\",[],\"NV8\"],[[11008,11021],\"valid\",[],\"NV8\"],[[11022,11027],\"valid\",[],\"NV8\"],[[11028,11034],\"valid\",[],\"NV8\"],[[11035,11039],\"valid\",[],\"NV8\"],[[11040,11043],\"valid\",[],\"NV8\"],[[11044,11084],\"valid\",[],\"NV8\"],[[11085,11087],\"valid\",[],\"NV8\"],[[11088,11092],\"valid\",[],\"NV8\"],[[11093,11097],\"valid\",[],\"NV8\"],[[11098,11123],\"valid\",[],\"NV8\"],[[11124,11125],\"disallowed\"],[[11126,11157],\"valid\",[],\"NV8\"],[[11158,11159],\"disallowed\"],[[11160,11193],\"valid\",[],\"NV8\"],[[11194,11196],\"disallowed\"],[[11197,11208],\"valid\",[],\"NV8\"],[[11209,11209],\"disallowed\"],[[11210,11217],\"valid\",[],\"NV8\"],[[11218,11243],\"disallowed\"],[[11244,11247],\"valid\",[],\"NV8\"],[[11248,11263],\"disallowed\"],[[11264,11264],\"mapped\",[11312]],[[11265,11265],\"mapped\",[11313]],[[11266,11266],\"mapped\",[11314]],[[11267,11267],\"mapped\",[11315]],[[11268,11268],\"mapped\",[11316]],[[11269,11269],\"mapped\",[11317]],[[11270,11270],\"mapped\",[11318]],[[11271,11271],\"mapped\",[11319]],[[11272,11272],\"mapped\",[11320]],[[11273,11273],\"mapped\",[11321]],[[11274,11274],\"mapped\",[11322]],[[11275,11275],\"mapped\",[11323]],[[11276,11276],\"mapped\",[11324]],[[11277,11277],\"mapped\",[11325]],[[11278,11278],\"mapped\",[11326]],[[11279,11279],\"mapped\",[11327]],[[11280,11280],\"mapped\",[11328]],[[11281,11281],\"mapped\",[11329]],[[11282,11282],\"mapped\",[11330]],[[11283,11283],\"mapped\",[11331]],[[11284,11284],\"mapped\",[11332]],[[11285,11285],\"mapped\",[11333]],[[11286,11286],\"mapped\",[11334]],[[11287,11287],\"mapped\",[11335]],[[11288,11288],\"mapped\",[11336]],[[11289,11289],\"mapped\",[11337]],[[11290,11290],\"mapped\",[11338]],[[11291,11291],\"mapped\",[11339]],[[11292,11292],\"mapped\",[11340]],[[11293,11293],\"mapped\",[11341]],[[11294,11294],\"mapped\",[11342]],[[11295,11295],\"mapped\",[11343]],[[11296,11296],\"mapped\",[11344]],[[11297,11297],\"mapped\",[11345]],[[11298,11298],\"mapped\",[11346]],[[11299,11299],\"mapped\",[11347]],[[11300,11300],\"mapped\",[11348]],[[11301,11301],\"mapped\",[11349]],[[11302,11302],\"mapped\",[11350]],[[11303,11303],\"mapped\",[11351]],[[11304,11304],\"mapped\",[11352]],[[11305,11305],\"mapped\",[11353]],[[11306,11306],\"mapped\",[11354]],[[11307,11307],\"mapped\",[11355]],[[11308,11308],\"mapped\",[11356]],[[11309,11309],\"mapped\",[11357]],[[11310,11310],\"mapped\",[11358]],[[11311,11311],\"disallowed\"],[[11312,11358],\"valid\"],[[11359,11359],\"disallowed\"],[[11360,11360],\"mapped\",[11361]],[[11361,11361],\"valid\"],[[11362,11362],\"mapped\",[619]],[[11363,11363],\"mapped\",[7549]],[[11364,11364],\"mapped\",[637]],[[11365,11366],\"valid\"],[[11367,11367],\"mapped\",[11368]],[[11368,11368],\"valid\"],[[11369,11369],\"mapped\",[11370]],[[11370,11370],\"valid\"],[[11371,11371],\"mapped\",[11372]],[[11372,11372],\"valid\"],[[11373,11373],\"mapped\",[593]],[[11374,11374],\"mapped\",[625]],[[11375,11375],\"mapped\",[592]],[[11376,11376],\"mapped\",[594]],[[11377,11377],\"valid\"],[[11378,11378],\"mapped\",[11379]],[[11379,11379],\"valid\"],[[11380,11380],\"valid\"],[[11381,11381],\"mapped\",[11382]],[[11382,11383],\"valid\"],[[11384,11387],\"valid\"],[[11388,11388],\"mapped\",[106]],[[11389,11389],\"mapped\",[118]],[[11390,11390],\"mapped\",[575]],[[11391,11391],\"mapped\",[576]],[[11392,11392],\"mapped\",[11393]],[[11393,11393],\"valid\"],[[11394,11394],\"mapped\",[11395]],[[11395,11395],\"valid\"],[[11396,11396],\"mapped\",[11397]],[[11397,11397],\"valid\"],[[11398,11398],\"mapped\",[11399]],[[11399,11399],\"valid\"],[[11400,11400],\"mapped\",[11401]],[[11401,11401],\"valid\"],[[11402,11402],\"mapped\",[11403]],[[11403,11403],\"valid\"],[[11404,11404],\"mapped\",[11405]],[[11405,11405],\"valid\"],[[11406,11406],\"mapped\",[11407]],[[11407,11407],\"valid\"],[[11408,11408],\"mapped\",[11409]],[[11409,11409],\"valid\"],[[11410,11410],\"mapped\",[11411]],[[11411,11411],\"valid\"],[[11412,11412],\"mapped\",[11413]],[[11413,11413],\"valid\"],[[11414,11414],\"mapped\",[11415]],[[11415,11415],\"valid\"],[[11416,11416],\"mapped\",[11417]],[[11417,11417],\"valid\"],[[11418,11418],\"mapped\",[11419]],[[11419,11419],\"valid\"],[[11420,11420],\"mapped\",[11421]],[[11421,11421],\"valid\"],[[11422,11422],\"mapped\",[11423]],[[11423,11423],\"valid\"],[[11424,11424],\"mapped\",[11425]],[[11425,11425],\"valid\"],[[11426,11426],\"mapped\",[11427]],[[11427,11427],\"valid\"],[[11428,11428],\"mapped\",[11429]],[[11429,11429],\"valid\"],[[11430,11430],\"mapped\",[11431]],[[11431,11431],\"valid\"],[[11432,11432],\"mapped\",[11433]],[[11433,11433],\"valid\"],[[11434,11434],\"mapped\",[11435]],[[11435,11435],\"valid\"],[[11436,11436],\"mapped\",[11437]],[[11437,11437],\"valid\"],[[11438,11438],\"mapped\",[11439]],[[11439,11439],\"valid\"],[[11440,11440],\"mapped\",[11441]],[[11441,11441],\"valid\"],[[11442,11442],\"mapped\",[11443]],[[11443,11443],\"valid\"],[[11444,11444],\"mapped\",[11445]],[[11445,11445],\"valid\"],[[11446,11446],\"mapped\",[11447]],[[11447,11447],\"valid\"],[[11448,11448],\"mapped\",[11449]],[[11449,11449],\"valid\"],[[11450,11450],\"mapped\",[11451]],[[11451,11451],\"valid\"],[[11452,11452],\"mapped\",[11453]],[[11453,11453],\"valid\"],[[11454,11454],\"mapped\",[11455]],[[11455,11455],\"valid\"],[[11456,11456],\"mapped\",[11457]],[[11457,11457],\"valid\"],[[11458,11458],\"mapped\",[11459]],[[11459,11459],\"valid\"],[[11460,11460],\"mapped\",[11461]],[[11461,11461],\"valid\"],[[11462,11462],\"mapped\",[11463]],[[11463,11463],\"valid\"],[[11464,11464],\"mapped\",[11465]],[[11465,11465],\"valid\"],[[11466,11466],\"mapped\",[11467]],[[11467,11467],\"valid\"],[[11468,11468],\"mapped\",[11469]],[[11469,11469],\"valid\"],[[11470,11470],\"mapped\",[11471]],[[11471,11471],\"valid\"],[[11472,11472],\"mapped\",[11473]],[[11473,11473],\"valid\"],[[11474,11474],\"mapped\",[11475]],[[11475,11475],\"valid\"],[[11476,11476],\"mapped\",[11477]],[[11477,11477],\"valid\"],[[11478,11478],\"mapped\",[11479]],[[11479,11479],\"valid\"],[[11480,11480],\"mapped\",[11481]],[[11481,11481],\"valid\"],[[11482,11482],\"mapped\",[11483]],[[11483,11483],\"valid\"],[[11484,11484],\"mapped\",[11485]],[[11485,11485],\"valid\"],[[11486,11486],\"mapped\",[11487]],[[11487,11487],\"valid\"],[[11488,11488],\"mapped\",[11489]],[[11489,11489],\"valid\"],[[11490,11490],\"mapped\",[11491]],[[11491,11492],\"valid\"],[[11493,11498],\"valid\",[],\"NV8\"],[[11499,11499],\"mapped\",[11500]],[[11500,11500],\"valid\"],[[11501,11501],\"mapped\",[11502]],[[11502,11505],\"valid\"],[[11506,11506],\"mapped\",[11507]],[[11507,11507],\"valid\"],[[11508,11512],\"disallowed\"],[[11513,11519],\"valid\",[],\"NV8\"],[[11520,11557],\"valid\"],[[11558,11558],\"disallowed\"],[[11559,11559],\"valid\"],[[11560,11564],\"disallowed\"],[[11565,11565],\"valid\"],[[11566,11567],\"disallowed\"],[[11568,11621],\"valid\"],[[11622,11623],\"valid\"],[[11624,11630],\"disallowed\"],[[11631,11631],\"mapped\",[11617]],[[11632,11632],\"valid\",[],\"NV8\"],[[11633,11646],\"disallowed\"],[[11647,11647],\"valid\"],[[11648,11670],\"valid\"],[[11671,11679],\"disallowed\"],[[11680,11686],\"valid\"],[[11687,11687],\"disallowed\"],[[11688,11694],\"valid\"],[[11695,11695],\"disallowed\"],[[11696,11702],\"valid\"],[[11703,11703],\"disallowed\"],[[11704,11710],\"valid\"],[[11711,11711],\"disallowed\"],[[11712,11718],\"valid\"],[[11719,11719],\"disallowed\"],[[11720,11726],\"valid\"],[[11727,11727],\"disallowed\"],[[11728,11734],\"valid\"],[[11735,11735],\"disallowed\"],[[11736,11742],\"valid\"],[[11743,11743],\"disallowed\"],[[11744,11775],\"valid\"],[[11776,11799],\"valid\",[],\"NV8\"],[[11800,11803],\"valid\",[],\"NV8\"],[[11804,11805],\"valid\",[],\"NV8\"],[[11806,11822],\"valid\",[],\"NV8\"],[[11823,11823],\"valid\"],[[11824,11824],\"valid\",[],\"NV8\"],[[11825,11825],\"valid\",[],\"NV8\"],[[11826,11835],\"valid\",[],\"NV8\"],[[11836,11842],\"valid\",[],\"NV8\"],[[11843,11903],\"disallowed\"],[[11904,11929],\"valid\",[],\"NV8\"],[[11930,11930],\"disallowed\"],[[11931,11934],\"valid\",[],\"NV8\"],[[11935,11935],\"mapped\",[27597]],[[11936,12018],\"valid\",[],\"NV8\"],[[12019,12019],\"mapped\",[40863]],[[12020,12031],\"disallowed\"],[[12032,12032],\"mapped\",[19968]],[[12033,12033],\"mapped\",[20008]],[[12034,12034],\"mapped\",[20022]],[[12035,12035],\"mapped\",[20031]],[[12036,12036],\"mapped\",[20057]],[[12037,12037],\"mapped\",[20101]],[[12038,12038],\"mapped\",[20108]],[[12039,12039],\"mapped\",[20128]],[[12040,12040],\"mapped\",[20154]],[[12041,12041],\"mapped\",[20799]],[[12042,12042],\"mapped\",[20837]],[[12043,12043],\"mapped\",[20843]],[[12044,12044],\"mapped\",[20866]],[[12045,12045],\"mapped\",[20886]],[[12046,12046],\"mapped\",[20907]],[[12047,12047],\"mapped\",[20960]],[[12048,12048],\"mapped\",[20981]],[[12049,12049],\"mapped\",[20992]],[[12050,12050],\"mapped\",[21147]],[[12051,12051],\"mapped\",[21241]],[[12052,12052],\"mapped\",[21269]],[[12053,12053],\"mapped\",[21274]],[[12054,12054],\"mapped\",[21304]],[[12055,12055],\"mapped\",[21313]],[[12056,12056],\"mapped\",[21340]],[[12057,12057],\"mapped\",[21353]],[[12058,12058],\"mapped\",[21378]],[[12059,12059],\"mapped\",[21430]],[[12060,12060],\"mapped\",[21448]],[[12061,12061],\"mapped\",[21475]],[[12062,12062],\"mapped\",[22231]],[[12063,12063],\"mapped\",[22303]],[[12064,12064],\"mapped\",[22763]],[[12065,12065],\"mapped\",[22786]],[[12066,12066],\"mapped\",[22794]],[[12067,12067],\"mapped\",[22805]],[[12068,12068],\"mapped\",[22823]],[[12069,12069],\"mapped\",[22899]],[[12070,12070],\"mapped\",[23376]],[[12071,12071],\"mapped\",[23424]],[[12072,12072],\"mapped\",[23544]],[[12073,12073],\"mapped\",[23567]],[[12074,12074],\"mapped\",[23586]],[[12075,12075],\"mapped\",[23608]],[[12076,12076],\"mapped\",[23662]],[[12077,12077],\"mapped\",[23665]],[[12078,12078],\"mapped\",[24027]],[[12079,12079],\"mapped\",[24037]],[[12080,12080],\"mapped\",[24049]],[[12081,12081],\"mapped\",[24062]],[[12082,12082],\"mapped\",[24178]],[[12083,12083],\"mapped\",[24186]],[[12084,12084],\"mapped\",[24191]],[[12085,12085],\"mapped\",[24308]],[[12086,12086],\"mapped\",[24318]],[[12087,12087],\"mapped\",[24331]],[[12088,12088],\"mapped\",[24339]],[[12089,12089],\"mapped\",[24400]],[[12090,12090],\"mapped\",[24417]],[[12091,12091],\"mapped\",[24435]],[[12092,12092],\"mapped\",[24515]],[[12093,12093],\"mapped\",[25096]],[[12094,12094],\"mapped\",[25142]],[[12095,12095],\"mapped\",[25163]],[[12096,12096],\"mapped\",[25903]],[[12097,12097],\"mapped\",[25908]],[[12098,12098],\"mapped\",[25991]],[[12099,12099],\"mapped\",[26007]],[[12100,12100],\"mapped\",[26020]],[[12101,12101],\"mapped\",[26041]],[[12102,12102],\"mapped\",[26080]],[[12103,12103],\"mapped\",[26085]],[[12104,12104],\"mapped\",[26352]],[[12105,12105],\"mapped\",[26376]],[[12106,12106],\"mapped\",[26408]],[[12107,12107],\"mapped\",[27424]],[[12108,12108],\"mapped\",[27490]],[[12109,12109],\"mapped\",[27513]],[[12110,12110],\"mapped\",[27571]],[[12111,12111],\"mapped\",[27595]],[[12112,12112],\"mapped\",[27604]],[[12113,12113],\"mapped\",[27611]],[[12114,12114],\"mapped\",[27663]],[[12115,12115],\"mapped\",[27668]],[[12116,12116],\"mapped\",[27700]],[[12117,12117],\"mapped\",[28779]],[[12118,12118],\"mapped\",[29226]],[[12119,12119],\"mapped\",[29238]],[[12120,12120],\"mapped\",[29243]],[[12121,12121],\"mapped\",[29247]],[[12122,12122],\"mapped\",[29255]],[[12123,12123],\"mapped\",[29273]],[[12124,12124],\"mapped\",[29275]],[[12125,12125],\"mapped\",[29356]],[[12126,12126],\"mapped\",[29572]],[[12127,12127],\"mapped\",[29577]],[[12128,12128],\"mapped\",[29916]],[[12129,12129],\"mapped\",[29926]],[[12130,12130],\"mapped\",[29976]],[[12131,12131],\"mapped\",[29983]],[[12132,12132],\"mapped\",[29992]],[[12133,12133],\"mapped\",[30000]],[[12134,12134],\"mapped\",[30091]],[[12135,12135],\"mapped\",[30098]],[[12136,12136],\"mapped\",[30326]],[[12137,12137],\"mapped\",[30333]],[[12138,12138],\"mapped\",[30382]],[[12139,12139],\"mapped\",[30399]],[[12140,12140],\"mapped\",[30446]],[[12141,12141],\"mapped\",[30683]],[[12142,12142],\"mapped\",[30690]],[[12143,12143],\"mapped\",[30707]],[[12144,12144],\"mapped\",[31034]],[[12145,12145],\"mapped\",[31160]],[[12146,12146],\"mapped\",[31166]],[[12147,12147],\"mapped\",[31348]],[[12148,12148],\"mapped\",[31435]],[[12149,12149],\"mapped\",[31481]],[[12150,12150],\"mapped\",[31859]],[[12151,12151],\"mapped\",[31992]],[[12152,12152],\"mapped\",[32566]],[[12153,12153],\"mapped\",[32593]],[[12154,12154],\"mapped\",[32650]],[[12155,12155],\"mapped\",[32701]],[[12156,12156],\"mapped\",[32769]],[[12157,12157],\"mapped\",[32780]],[[12158,12158],\"mapped\",[32786]],[[12159,12159],\"mapped\",[32819]],[[12160,12160],\"mapped\",[32895]],[[12161,12161],\"mapped\",[32905]],[[12162,12162],\"mapped\",[33251]],[[12163,12163],\"mapped\",[33258]],[[12164,12164],\"mapped\",[33267]],[[12165,12165],\"mapped\",[33276]],[[12166,12166],\"mapped\",[33292]],[[12167,12167],\"mapped\",[33307]],[[12168,12168],\"mapped\",[33311]],[[12169,12169],\"mapped\",[33390]],[[12170,12170],\"mapped\",[33394]],[[12171,12171],\"mapped\",[33400]],[[12172,12172],\"mapped\",[34381]],[[12173,12173],\"mapped\",[34411]],[[12174,12174],\"mapped\",[34880]],[[12175,12175],\"mapped\",[34892]],[[12176,12176],\"mapped\",[34915]],[[12177,12177],\"mapped\",[35198]],[[12178,12178],\"mapped\",[35211]],[[12179,12179],\"mapped\",[35282]],[[12180,12180],\"mapped\",[35328]],[[12181,12181],\"mapped\",[35895]],[[12182,12182],\"mapped\",[35910]],[[12183,12183],\"mapped\",[35925]],[[12184,12184],\"mapped\",[35960]],[[12185,12185],\"mapped\",[35997]],[[12186,12186],\"mapped\",[36196]],[[12187,12187],\"mapped\",[36208]],[[12188,12188],\"mapped\",[36275]],[[12189,12189],\"mapped\",[36523]],[[12190,12190],\"mapped\",[36554]],[[12191,12191],\"mapped\",[36763]],[[12192,12192],\"mapped\",[36784]],[[12193,12193],\"mapped\",[36789]],[[12194,12194],\"mapped\",[37009]],[[12195,12195],\"mapped\",[37193]],[[12196,12196],\"mapped\",[37318]],[[12197,12197],\"mapped\",[37324]],[[12198,12198],\"mapped\",[37329]],[[12199,12199],\"mapped\",[38263]],[[12200,12200],\"mapped\",[38272]],[[12201,12201],\"mapped\",[38428]],[[12202,12202],\"mapped\",[38582]],[[12203,12203],\"mapped\",[38585]],[[12204,12204],\"mapped\",[38632]],[[12205,12205],\"mapped\",[38737]],[[12206,12206],\"mapped\",[38750]],[[12207,12207],\"mapped\",[38754]],[[12208,12208],\"mapped\",[38761]],[[12209,12209],\"mapped\",[38859]],[[12210,12210],\"mapped\",[38893]],[[12211,12211],\"mapped\",[38899]],[[12212,12212],\"mapped\",[38913]],[[12213,12213],\"mapped\",[39080]],[[12214,12214],\"mapped\",[39131]],[[12215,12215],\"mapped\",[39135]],[[12216,12216],\"mapped\",[39318]],[[12217,12217],\"mapped\",[39321]],[[12218,12218],\"mapped\",[39340]],[[12219,12219],\"mapped\",[39592]],[[12220,12220],\"mapped\",[39640]],[[12221,12221],\"mapped\",[39647]],[[12222,12222],\"mapped\",[39717]],[[12223,12223],\"mapped\",[39727]],[[12224,12224],\"mapped\",[39730]],[[12225,12225],\"mapped\",[39740]],[[12226,12226],\"mapped\",[39770]],[[12227,12227],\"mapped\",[40165]],[[12228,12228],\"mapped\",[40565]],[[12229,12229],\"mapped\",[40575]],[[12230,12230],\"mapped\",[40613]],[[12231,12231],\"mapped\",[40635]],[[12232,12232],\"mapped\",[40643]],[[12233,12233],\"mapped\",[40653]],[[12234,12234],\"mapped\",[40657]],[[12235,12235],\"mapped\",[40697]],[[12236,12236],\"mapped\",[40701]],[[12237,12237],\"mapped\",[40718]],[[12238,12238],\"mapped\",[40723]],[[12239,12239],\"mapped\",[40736]],[[12240,12240],\"mapped\",[40763]],[[12241,12241],\"mapped\",[40778]],[[12242,12242],\"mapped\",[40786]],[[12243,12243],\"mapped\",[40845]],[[12244,12244],\"mapped\",[40860]],[[12245,12245],\"mapped\",[40864]],[[12246,12271],\"disallowed\"],[[12272,12283],\"disallowed\"],[[12284,12287],\"disallowed\"],[[12288,12288],\"disallowed_STD3_mapped\",[32]],[[12289,12289],\"valid\",[],\"NV8\"],[[12290,12290],\"mapped\",[46]],[[12291,12292],\"valid\",[],\"NV8\"],[[12293,12295],\"valid\"],[[12296,12329],\"valid\",[],\"NV8\"],[[12330,12333],\"valid\"],[[12334,12341],\"valid\",[],\"NV8\"],[[12342,12342],\"mapped\",[12306]],[[12343,12343],\"valid\",[],\"NV8\"],[[12344,12344],\"mapped\",[21313]],[[12345,12345],\"mapped\",[21316]],[[12346,12346],\"mapped\",[21317]],[[12347,12347],\"valid\",[],\"NV8\"],[[12348,12348],\"valid\"],[[12349,12349],\"valid\",[],\"NV8\"],[[12350,12350],\"valid\",[],\"NV8\"],[[12351,12351],\"valid\",[],\"NV8\"],[[12352,12352],\"disallowed\"],[[12353,12436],\"valid\"],[[12437,12438],\"valid\"],[[12439,12440],\"disallowed\"],[[12441,12442],\"valid\"],[[12443,12443],\"disallowed_STD3_mapped\",[32,12441]],[[12444,12444],\"disallowed_STD3_mapped\",[32,12442]],[[12445,12446],\"valid\"],[[12447,12447],\"mapped\",[12424,12426]],[[12448,12448],\"valid\",[],\"NV8\"],[[12449,12542],\"valid\"],[[12543,12543],\"mapped\",[12467,12488]],[[12544,12548],\"disallowed\"],[[12549,12588],\"valid\"],[[12589,12589],\"valid\"],[[12590,12592],\"disallowed\"],[[12593,12593],\"mapped\",[4352]],[[12594,12594],\"mapped\",[4353]],[[12595,12595],\"mapped\",[4522]],[[12596,12596],\"mapped\",[4354]],[[12597,12597],\"mapped\",[4524]],[[12598,12598],\"mapped\",[4525]],[[12599,12599],\"mapped\",[4355]],[[12600,12600],\"mapped\",[4356]],[[12601,12601],\"mapped\",[4357]],[[12602,12602],\"mapped\",[4528]],[[12603,12603],\"mapped\",[4529]],[[12604,12604],\"mapped\",[4530]],[[12605,12605],\"mapped\",[4531]],[[12606,12606],\"mapped\",[4532]],[[12607,12607],\"mapped\",[4533]],[[12608,12608],\"mapped\",[4378]],[[12609,12609],\"mapped\",[4358]],[[12610,12610],\"mapped\",[4359]],[[12611,12611],\"mapped\",[4360]],[[12612,12612],\"mapped\",[4385]],[[12613,12613],\"mapped\",[4361]],[[12614,12614],\"mapped\",[4362]],[[12615,12615],\"mapped\",[4363]],[[12616,12616],\"mapped\",[4364]],[[12617,12617],\"mapped\",[4365]],[[12618,12618],\"mapped\",[4366]],[[12619,12619],\"mapped\",[4367]],[[12620,12620],\"mapped\",[4368]],[[12621,12621],\"mapped\",[4369]],[[12622,12622],\"mapped\",[4370]],[[12623,12623],\"mapped\",[4449]],[[12624,12624],\"mapped\",[4450]],[[12625,12625],\"mapped\",[4451]],[[12626,12626],\"mapped\",[4452]],[[12627,12627],\"mapped\",[4453]],[[12628,12628],\"mapped\",[4454]],[[12629,12629],\"mapped\",[4455]],[[12630,12630],\"mapped\",[4456]],[[12631,12631],\"mapped\",[4457]],[[12632,12632],\"mapped\",[4458]],[[12633,12633],\"mapped\",[4459]],[[12634,12634],\"mapped\",[4460]],[[12635,12635],\"mapped\",[4461]],[[12636,12636],\"mapped\",[4462]],[[12637,12637],\"mapped\",[4463]],[[12638,12638],\"mapped\",[4464]],[[12639,12639],\"mapped\",[4465]],[[12640,12640],\"mapped\",[4466]],[[12641,12641],\"mapped\",[4467]],[[12642,12642],\"mapped\",[4468]],[[12643,12643],\"mapped\",[4469]],[[12644,12644],\"disallowed\"],[[12645,12645],\"mapped\",[4372]],[[12646,12646],\"mapped\",[4373]],[[12647,12647],\"mapped\",[4551]],[[12648,12648],\"mapped\",[4552]],[[12649,12649],\"mapped\",[4556]],[[12650,12650],\"mapped\",[4558]],[[12651,12651],\"mapped\",[4563]],[[12652,12652],\"mapped\",[4567]],[[12653,12653],\"mapped\",[4569]],[[12654,12654],\"mapped\",[4380]],[[12655,12655],\"mapped\",[4573]],[[12656,12656],\"mapped\",[4575]],[[12657,12657],\"mapped\",[4381]],[[12658,12658],\"mapped\",[4382]],[[12659,12659],\"mapped\",[4384]],[[12660,12660],\"mapped\",[4386]],[[12661,12661],\"mapped\",[4387]],[[12662,12662],\"mapped\",[4391]],[[12663,12663],\"mapped\",[4393]],[[12664,12664],\"mapped\",[4395]],[[12665,12665],\"mapped\",[4396]],[[12666,12666],\"mapped\",[4397]],[[12667,12667],\"mapped\",[4398]],[[12668,12668],\"mapped\",[4399]],[[12669,12669],\"mapped\",[4402]],[[12670,12670],\"mapped\",[4406]],[[12671,12671],\"mapped\",[4416]],[[12672,12672],\"mapped\",[4423]],[[12673,12673],\"mapped\",[4428]],[[12674,12674],\"mapped\",[4593]],[[12675,12675],\"mapped\",[4594]],[[12676,12676],\"mapped\",[4439]],[[12677,12677],\"mapped\",[4440]],[[12678,12678],\"mapped\",[4441]],[[12679,12679],\"mapped\",[4484]],[[12680,12680],\"mapped\",[4485]],[[12681,12681],\"mapped\",[4488]],[[12682,12682],\"mapped\",[4497]],[[12683,12683],\"mapped\",[4498]],[[12684,12684],\"mapped\",[4500]],[[12685,12685],\"mapped\",[4510]],[[12686,12686],\"mapped\",[4513]],[[12687,12687],\"disallowed\"],[[12688,12689],\"valid\",[],\"NV8\"],[[12690,12690],\"mapped\",[19968]],[[12691,12691],\"mapped\",[20108]],[[12692,12692],\"mapped\",[19977]],[[12693,12693],\"mapped\",[22235]],[[12694,12694],\"mapped\",[19978]],[[12695,12695],\"mapped\",[20013]],[[12696,12696],\"mapped\",[19979]],[[12697,12697],\"mapped\",[30002]],[[12698,12698],\"mapped\",[20057]],[[12699,12699],\"mapped\",[19993]],[[12700,12700],\"mapped\",[19969]],[[12701,12701],\"mapped\",[22825]],[[12702,12702],\"mapped\",[22320]],[[12703,12703],\"mapped\",[20154]],[[12704,12727],\"valid\"],[[12728,12730],\"valid\"],[[12731,12735],\"disallowed\"],[[12736,12751],\"valid\",[],\"NV8\"],[[12752,12771],\"valid\",[],\"NV8\"],[[12772,12783],\"disallowed\"],[[12784,12799],\"valid\"],[[12800,12800],\"disallowed_STD3_mapped\",[40,4352,41]],[[12801,12801],\"disallowed_STD3_mapped\",[40,4354,41]],[[12802,12802],\"disallowed_STD3_mapped\",[40,4355,41]],[[12803,12803],\"disallowed_STD3_mapped\",[40,4357,41]],[[12804,12804],\"disallowed_STD3_mapped\",[40,4358,41]],[[12805,12805],\"disallowed_STD3_mapped\",[40,4359,41]],[[12806,12806],\"disallowed_STD3_mapped\",[40,4361,41]],[[12807,12807],\"disallowed_STD3_mapped\",[40,4363,41]],[[12808,12808],\"disallowed_STD3_mapped\",[40,4364,41]],[[12809,12809],\"disallowed_STD3_mapped\",[40,4366,41]],[[12810,12810],\"disallowed_STD3_mapped\",[40,4367,41]],[[12811,12811],\"disallowed_STD3_mapped\",[40,4368,41]],[[12812,12812],\"disallowed_STD3_mapped\",[40,4369,41]],[[12813,12813],\"disallowed_STD3_mapped\",[40,4370,41]],[[12814,12814],\"disallowed_STD3_mapped\",[40,44032,41]],[[12815,12815],\"disallowed_STD3_mapped\",[40,45208,41]],[[12816,12816],\"disallowed_STD3_mapped\",[40,45796,41]],[[12817,12817],\"disallowed_STD3_mapped\",[40,46972,41]],[[12818,12818],\"disallowed_STD3_mapped\",[40,47560,41]],[[12819,12819],\"disallowed_STD3_mapped\",[40,48148,41]],[[12820,12820],\"disallowed_STD3_mapped\",[40,49324,41]],[[12821,12821],\"disallowed_STD3_mapped\",[40,50500,41]],[[12822,12822],\"disallowed_STD3_mapped\",[40,51088,41]],[[12823,12823],\"disallowed_STD3_mapped\",[40,52264,41]],[[12824,12824],\"disallowed_STD3_mapped\",[40,52852,41]],[[12825,12825],\"disallowed_STD3_mapped\",[40,53440,41]],[[12826,12826],\"disallowed_STD3_mapped\",[40,54028,41]],[[12827,12827],\"disallowed_STD3_mapped\",[40,54616,41]],[[12828,12828],\"disallowed_STD3_mapped\",[40,51452,41]],[[12829,12829],\"disallowed_STD3_mapped\",[40,50724,51204,41]],[[12830,12830],\"disallowed_STD3_mapped\",[40,50724,54980,41]],[[12831,12831],\"disallowed\"],[[12832,12832],\"disallowed_STD3_mapped\",[40,19968,41]],[[12833,12833],\"disallowed_STD3_mapped\",[40,20108,41]],[[12834,12834],\"disallowed_STD3_mapped\",[40,19977,41]],[[12835,12835],\"disallowed_STD3_mapped\",[40,22235,41]],[[12836,12836],\"disallowed_STD3_mapped\",[40,20116,41]],[[12837,12837],\"disallowed_STD3_mapped\",[40,20845,41]],[[12838,12838],\"disallowed_STD3_mapped\",[40,19971,41]],[[12839,12839],\"disallowed_STD3_mapped\",[40,20843,41]],[[12840,12840],\"disallowed_STD3_mapped\",[40,20061,41]],[[12841,12841],\"disallowed_STD3_mapped\",[40,21313,41]],[[12842,12842],\"disallowed_STD3_mapped\",[40,26376,41]],[[12843,12843],\"disallowed_STD3_mapped\",[40,28779,41]],[[12844,12844],\"disallowed_STD3_mapped\",[40,27700,41]],[[12845,12845],\"disallowed_STD3_mapped\",[40,26408,41]],[[12846,12846],\"disallowed_STD3_mapped\",[40,37329,41]],[[12847,12847],\"disallowed_STD3_mapped\",[40,22303,41]],[[12848,12848],\"disallowed_STD3_mapped\",[40,26085,41]],[[12849,12849],\"disallowed_STD3_mapped\",[40,26666,41]],[[12850,12850],\"disallowed_STD3_mapped\",[40,26377,41]],[[12851,12851],\"disallowed_STD3_mapped\",[40,31038,41]],[[12852,12852],\"disallowed_STD3_mapped\",[40,21517,41]],[[12853,12853],\"disallowed_STD3_mapped\",[40,29305,41]],[[12854,12854],\"disallowed_STD3_mapped\",[40,36001,41]],[[12855,12855],\"disallowed_STD3_mapped\",[40,31069,41]],[[12856,12856],\"disallowed_STD3_mapped\",[40,21172,41]],[[12857,12857],\"disallowed_STD3_mapped\",[40,20195,41]],[[12858,12858],\"disallowed_STD3_mapped\",[40,21628,41]],[[12859,12859],\"disallowed_STD3_mapped\",[40,23398,41]],[[12860,12860],\"disallowed_STD3_mapped\",[40,30435,41]],[[12861,12861],\"disallowed_STD3_mapped\",[40,20225,41]],[[12862,12862],\"disallowed_STD3_mapped\",[40,36039,41]],[[12863,12863],\"disallowed_STD3_mapped\",[40,21332,41]],[[12864,12864],\"disallowed_STD3_mapped\",[40,31085,41]],[[12865,12865],\"disallowed_STD3_mapped\",[40,20241,41]],[[12866,12866],\"disallowed_STD3_mapped\",[40,33258,41]],[[12867,12867],\"disallowed_STD3_mapped\",[40,33267,41]],[[12868,12868],\"mapped\",[21839]],[[12869,12869],\"mapped\",[24188]],[[12870,12870],\"mapped\",[25991]],[[12871,12871],\"mapped\",[31631]],[[12872,12879],\"valid\",[],\"NV8\"],[[12880,12880],\"mapped\",[112,116,101]],[[12881,12881],\"mapped\",[50,49]],[[12882,12882],\"mapped\",[50,50]],[[12883,12883],\"mapped\",[50,51]],[[12884,12884],\"mapped\",[50,52]],[[12885,12885],\"mapped\",[50,53]],[[12886,12886],\"mapped\",[50,54]],[[12887,12887],\"mapped\",[50,55]],[[12888,12888],\"mapped\",[50,56]],[[12889,12889],\"mapped\",[50,57]],[[12890,12890],\"mapped\",[51,48]],[[12891,12891],\"mapped\",[51,49]],[[12892,12892],\"mapped\",[51,50]],[[12893,12893],\"mapped\",[51,51]],[[12894,12894],\"mapped\",[51,52]],[[12895,12895],\"mapped\",[51,53]],[[12896,12896],\"mapped\",[4352]],[[12897,12897],\"mapped\",[4354]],[[12898,12898],\"mapped\",[4355]],[[12899,12899],\"mapped\",[4357]],[[12900,12900],\"mapped\",[4358]],[[12901,12901],\"mapped\",[4359]],[[12902,12902],\"mapped\",[4361]],[[12903,12903],\"mapped\",[4363]],[[12904,12904],\"mapped\",[4364]],[[12905,12905],\"mapped\",[4366]],[[12906,12906],\"mapped\",[4367]],[[12907,12907],\"mapped\",[4368]],[[12908,12908],\"mapped\",[4369]],[[12909,12909],\"mapped\",[4370]],[[12910,12910],\"mapped\",[44032]],[[12911,12911],\"mapped\",[45208]],[[12912,12912],\"mapped\",[45796]],[[12913,12913],\"mapped\",[46972]],[[12914,12914],\"mapped\",[47560]],[[12915,12915],\"mapped\",[48148]],[[12916,12916],\"mapped\",[49324]],[[12917,12917],\"mapped\",[50500]],[[12918,12918],\"mapped\",[51088]],[[12919,12919],\"mapped\",[52264]],[[12920,12920],\"mapped\",[52852]],[[12921,12921],\"mapped\",[53440]],[[12922,12922],\"mapped\",[54028]],[[12923,12923],\"mapped\",[54616]],[[12924,12924],\"mapped\",[52280,44256]],[[12925,12925],\"mapped\",[51452,51032]],[[12926,12926],\"mapped\",[50864]],[[12927,12927],\"valid\",[],\"NV8\"],[[12928,12928],\"mapped\",[19968]],[[12929,12929],\"mapped\",[20108]],[[12930,12930],\"mapped\",[19977]],[[12931,12931],\"mapped\",[22235]],[[12932,12932],\"mapped\",[20116]],[[12933,12933],\"mapped\",[20845]],[[12934,12934],\"mapped\",[19971]],[[12935,12935],\"mapped\",[20843]],[[12936,12936],\"mapped\",[20061]],[[12937,12937],\"mapped\",[21313]],[[12938,12938],\"mapped\",[26376]],[[12939,12939],\"mapped\",[28779]],[[12940,12940],\"mapped\",[27700]],[[12941,12941],\"mapped\",[26408]],[[12942,12942],\"mapped\",[37329]],[[12943,12943],\"mapped\",[22303]],[[12944,12944],\"mapped\",[26085]],[[12945,12945],\"mapped\",[26666]],[[12946,12946],\"mapped\",[26377]],[[12947,12947],\"mapped\",[31038]],[[12948,12948],\"mapped\",[21517]],[[12949,12949],\"mapped\",[29305]],[[12950,12950],\"mapped\",[36001]],[[12951,12951],\"mapped\",[31069]],[[12952,12952],\"mapped\",[21172]],[[12953,12953],\"mapped\",[31192]],[[12954,12954],\"mapped\",[30007]],[[12955,12955],\"mapped\",[22899]],[[12956,12956],\"mapped\",[36969]],[[12957,12957],\"mapped\",[20778]],[[12958,12958],\"mapped\",[21360]],[[12959,12959],\"mapped\",[27880]],[[12960,12960],\"mapped\",[38917]],[[12961,12961],\"mapped\",[20241]],[[12962,12962],\"mapped\",[20889]],[[12963,12963],\"mapped\",[27491]],[[12964,12964],\"mapped\",[19978]],[[12965,12965],\"mapped\",[20013]],[[12966,12966],\"mapped\",[19979]],[[12967,12967],\"mapped\",[24038]],[[12968,12968],\"mapped\",[21491]],[[12969,12969],\"mapped\",[21307]],[[12970,12970],\"mapped\",[23447]],[[12971,12971],\"mapped\",[23398]],[[12972,12972],\"mapped\",[30435]],[[12973,12973],\"mapped\",[20225]],[[12974,12974],\"mapped\",[36039]],[[12975,12975],\"mapped\",[21332]],[[12976,12976],\"mapped\",[22812]],[[12977,12977],\"mapped\",[51,54]],[[12978,12978],\"mapped\",[51,55]],[[12979,12979],\"mapped\",[51,56]],[[12980,12980],\"mapped\",[51,57]],[[12981,12981],\"mapped\",[52,48]],[[12982,12982],\"mapped\",[52,49]],[[12983,12983],\"mapped\",[52,50]],[[12984,12984],\"mapped\",[52,51]],[[12985,12985],\"mapped\",[52,52]],[[12986,12986],\"mapped\",[52,53]],[[12987,12987],\"mapped\",[52,54]],[[12988,12988],\"mapped\",[52,55]],[[12989,12989],\"mapped\",[52,56]],[[12990,12990],\"mapped\",[52,57]],[[12991,12991],\"mapped\",[53,48]],[[12992,12992],\"mapped\",[49,26376]],[[12993,12993],\"mapped\",[50,26376]],[[12994,12994],\"mapped\",[51,26376]],[[12995,12995],\"mapped\",[52,26376]],[[12996,12996],\"mapped\",[53,26376]],[[12997,12997],\"mapped\",[54,26376]],[[12998,12998],\"mapped\",[55,26376]],[[12999,12999],\"mapped\",[56,26376]],[[13000,13000],\"mapped\",[57,26376]],[[13001,13001],\"mapped\",[49,48,26376]],[[13002,13002],\"mapped\",[49,49,26376]],[[13003,13003],\"mapped\",[49,50,26376]],[[13004,13004],\"mapped\",[104,103]],[[13005,13005],\"mapped\",[101,114,103]],[[13006,13006],\"mapped\",[101,118]],[[13007,13007],\"mapped\",[108,116,100]],[[13008,13008],\"mapped\",[12450]],[[13009,13009],\"mapped\",[12452]],[[13010,13010],\"mapped\",[12454]],[[13011,13011],\"mapped\",[12456]],[[13012,13012],\"mapped\",[12458]],[[13013,13013],\"mapped\",[12459]],[[13014,13014],\"mapped\",[12461]],[[13015,13015],\"mapped\",[12463]],[[13016,13016],\"mapped\",[12465]],[[13017,13017],\"mapped\",[12467]],[[13018,13018],\"mapped\",[12469]],[[13019,13019],\"mapped\",[12471]],[[13020,13020],\"mapped\",[12473]],[[13021,13021],\"mapped\",[12475]],[[13022,13022],\"mapped\",[12477]],[[13023,13023],\"mapped\",[12479]],[[13024,13024],\"mapped\",[12481]],[[13025,13025],\"mapped\",[12484]],[[13026,13026],\"mapped\",[12486]],[[13027,13027],\"mapped\",[12488]],[[13028,13028],\"mapped\",[12490]],[[13029,13029],\"mapped\",[12491]],[[13030,13030],\"mapped\",[12492]],[[13031,13031],\"mapped\",[12493]],[[13032,13032],\"mapped\",[12494]],[[13033,13033],\"mapped\",[12495]],[[13034,13034],\"mapped\",[12498]],[[13035,13035],\"mapped\",[12501]],[[13036,13036],\"mapped\",[12504]],[[13037,13037],\"mapped\",[12507]],[[13038,13038],\"mapped\",[12510]],[[13039,13039],\"mapped\",[12511]],[[13040,13040],\"mapped\",[12512]],[[13041,13041],\"mapped\",[12513]],[[13042,13042],\"mapped\",[12514]],[[13043,13043],\"mapped\",[12516]],[[13044,13044],\"mapped\",[12518]],[[13045,13045],\"mapped\",[12520]],[[13046,13046],\"mapped\",[12521]],[[13047,13047],\"mapped\",[12522]],[[13048,13048],\"mapped\",[12523]],[[13049,13049],\"mapped\",[12524]],[[13050,13050],\"mapped\",[12525]],[[13051,13051],\"mapped\",[12527]],[[13052,13052],\"mapped\",[12528]],[[13053,13053],\"mapped\",[12529]],[[13054,13054],\"mapped\",[12530]],[[13055,13055],\"disallowed\"],[[13056,13056],\"mapped\",[12450,12497,12540,12488]],[[13057,13057],\"mapped\",[12450,12523,12501,12449]],[[13058,13058],\"mapped\",[12450,12531,12506,12450]],[[13059,13059],\"mapped\",[12450,12540,12523]],[[13060,13060],\"mapped\",[12452,12491,12531,12464]],[[13061,13061],\"mapped\",[12452,12531,12481]],[[13062,13062],\"mapped\",[12454,12457,12531]],[[13063,13063],\"mapped\",[12456,12473,12463,12540,12489]],[[13064,13064],\"mapped\",[12456,12540,12459,12540]],[[13065,13065],\"mapped\",[12458,12531,12473]],[[13066,13066],\"mapped\",[12458,12540,12512]],[[13067,13067],\"mapped\",[12459,12452,12522]],[[13068,13068],\"mapped\",[12459,12521,12483,12488]],[[13069,13069],\"mapped\",[12459,12525,12522,12540]],[[13070,13070],\"mapped\",[12460,12525,12531]],[[13071,13071],\"mapped\",[12460,12531,12510]],[[13072,13072],\"mapped\",[12462,12460]],[[13073,13073],\"mapped\",[12462,12491,12540]],[[13074,13074],\"mapped\",[12461,12517,12522,12540]],[[13075,13075],\"mapped\",[12462,12523,12480,12540]],[[13076,13076],\"mapped\",[12461,12525]],[[13077,13077],\"mapped\",[12461,12525,12464,12521,12512]],[[13078,13078],\"mapped\",[12461,12525,12513,12540,12488,12523]],[[13079,13079],\"mapped\",[12461,12525,12527,12483,12488]],[[13080,13080],\"mapped\",[12464,12521,12512]],[[13081,13081],\"mapped\",[12464,12521,12512,12488,12531]],[[13082,13082],\"mapped\",[12463,12523,12476,12452,12525]],[[13083,13083],\"mapped\",[12463,12525,12540,12493]],[[13084,13084],\"mapped\",[12465,12540,12473]],[[13085,13085],\"mapped\",[12467,12523,12490]],[[13086,13086],\"mapped\",[12467,12540,12509]],[[13087,13087],\"mapped\",[12469,12452,12463,12523]],[[13088,13088],\"mapped\",[12469,12531,12481,12540,12512]],[[13089,13089],\"mapped\",[12471,12522,12531,12464]],[[13090,13090],\"mapped\",[12475,12531,12481]],[[13091,13091],\"mapped\",[12475,12531,12488]],[[13092,13092],\"mapped\",[12480,12540,12473]],[[13093,13093],\"mapped\",[12487,12471]],[[13094,13094],\"mapped\",[12489,12523]],[[13095,13095],\"mapped\",[12488,12531]],[[13096,13096],\"mapped\",[12490,12494]],[[13097,13097],\"mapped\",[12494,12483,12488]],[[13098,13098],\"mapped\",[12495,12452,12484]],[[13099,13099],\"mapped\",[12497,12540,12475,12531,12488]],[[13100,13100],\"mapped\",[12497,12540,12484]],[[13101,13101],\"mapped\",[12496,12540,12524,12523]],[[13102,13102],\"mapped\",[12500,12450,12473,12488,12523]],[[13103,13103],\"mapped\",[12500,12463,12523]],[[13104,13104],\"mapped\",[12500,12467]],[[13105,13105],\"mapped\",[12499,12523]],[[13106,13106],\"mapped\",[12501,12449,12521,12483,12489]],[[13107,13107],\"mapped\",[12501,12451,12540,12488]],[[13108,13108],\"mapped\",[12502,12483,12471,12455,12523]],[[13109,13109],\"mapped\",[12501,12521,12531]],[[13110,13110],\"mapped\",[12504,12463,12479,12540,12523]],[[13111,13111],\"mapped\",[12506,12477]],[[13112,13112],\"mapped\",[12506,12491,12498]],[[13113,13113],\"mapped\",[12504,12523,12484]],[[13114,13114],\"mapped\",[12506,12531,12473]],[[13115,13115],\"mapped\",[12506,12540,12472]],[[13116,13116],\"mapped\",[12505,12540,12479]],[[13117,13117],\"mapped\",[12509,12452,12531,12488]],[[13118,13118],\"mapped\",[12508,12523,12488]],[[13119,13119],\"mapped\",[12507,12531]],[[13120,13120],\"mapped\",[12509,12531,12489]],[[13121,13121],\"mapped\",[12507,12540,12523]],[[13122,13122],\"mapped\",[12507,12540,12531]],[[13123,13123],\"mapped\",[12510,12452,12463,12525]],[[13124,13124],\"mapped\",[12510,12452,12523]],[[13125,13125],\"mapped\",[12510,12483,12495]],[[13126,13126],\"mapped\",[12510,12523,12463]],[[13127,13127],\"mapped\",[12510,12531,12471,12519,12531]],[[13128,13128],\"mapped\",[12511,12463,12525,12531]],[[13129,13129],\"mapped\",[12511,12522]],[[13130,13130],\"mapped\",[12511,12522,12496,12540,12523]],[[13131,13131],\"mapped\",[12513,12460]],[[13132,13132],\"mapped\",[12513,12460,12488,12531]],[[13133,13133],\"mapped\",[12513,12540,12488,12523]],[[13134,13134],\"mapped\",[12516,12540,12489]],[[13135,13135],\"mapped\",[12516,12540,12523]],[[13136,13136],\"mapped\",[12518,12450,12531]],[[13137,13137],\"mapped\",[12522,12483,12488,12523]],[[13138,13138],\"mapped\",[12522,12521]],[[13139,13139],\"mapped\",[12523,12500,12540]],[[13140,13140],\"mapped\",[12523,12540,12502,12523]],[[13141,13141],\"mapped\",[12524,12512]],[[13142,13142],\"mapped\",[12524,12531,12488,12466,12531]],[[13143,13143],\"mapped\",[12527,12483,12488]],[[13144,13144],\"mapped\",[48,28857]],[[13145,13145],\"mapped\",[49,28857]],[[13146,13146],\"mapped\",[50,28857]],[[13147,13147],\"mapped\",[51,28857]],[[13148,13148],\"mapped\",[52,28857]],[[13149,13149],\"mapped\",[53,28857]],[[13150,13150],\"mapped\",[54,28857]],[[13151,13151],\"mapped\",[55,28857]],[[13152,13152],\"mapped\",[56,28857]],[[13153,13153],\"mapped\",[57,28857]],[[13154,13154],\"mapped\",[49,48,28857]],[[13155,13155],\"mapped\",[49,49,28857]],[[13156,13156],\"mapped\",[49,50,28857]],[[13157,13157],\"mapped\",[49,51,28857]],[[13158,13158],\"mapped\",[49,52,28857]],[[13159,13159],\"mapped\",[49,53,28857]],[[13160,13160],\"mapped\",[49,54,28857]],[[13161,13161],\"mapped\",[49,55,28857]],[[13162,13162],\"mapped\",[49,56,28857]],[[13163,13163],\"mapped\",[49,57,28857]],[[13164,13164],\"mapped\",[50,48,28857]],[[13165,13165],\"mapped\",[50,49,28857]],[[13166,13166],\"mapped\",[50,50,28857]],[[13167,13167],\"mapped\",[50,51,28857]],[[13168,13168],\"mapped\",[50,52,28857]],[[13169,13169],\"mapped\",[104,112,97]],[[13170,13170],\"mapped\",[100,97]],[[13171,13171],\"mapped\",[97,117]],[[13172,13172],\"mapped\",[98,97,114]],[[13173,13173],\"mapped\",[111,118]],[[13174,13174],\"mapped\",[112,99]],[[13175,13175],\"mapped\",[100,109]],[[13176,13176],\"mapped\",[100,109,50]],[[13177,13177],\"mapped\",[100,109,51]],[[13178,13178],\"mapped\",[105,117]],[[13179,13179],\"mapped\",[24179,25104]],[[13180,13180],\"mapped\",[26157,21644]],[[13181,13181],\"mapped\",[22823,27491]],[[13182,13182],\"mapped\",[26126,27835]],[[13183,13183],\"mapped\",[26666,24335,20250,31038]],[[13184,13184],\"mapped\",[112,97]],[[13185,13185],\"mapped\",[110,97]],[[13186,13186],\"mapped\",[956,97]],[[13187,13187],\"mapped\",[109,97]],[[13188,13188],\"mapped\",[107,97]],[[13189,13189],\"mapped\",[107,98]],[[13190,13190],\"mapped\",[109,98]],[[13191,13191],\"mapped\",[103,98]],[[13192,13192],\"mapped\",[99,97,108]],[[13193,13193],\"mapped\",[107,99,97,108]],[[13194,13194],\"mapped\",[112,102]],[[13195,13195],\"mapped\",[110,102]],[[13196,13196],\"mapped\",[956,102]],[[13197,13197],\"mapped\",[956,103]],[[13198,13198],\"mapped\",[109,103]],[[13199,13199],\"mapped\",[107,103]],[[13200,13200],\"mapped\",[104,122]],[[13201,13201],\"mapped\",[107,104,122]],[[13202,13202],\"mapped\",[109,104,122]],[[13203,13203],\"mapped\",[103,104,122]],[[13204,13204],\"mapped\",[116,104,122]],[[13205,13205],\"mapped\",[956,108]],[[13206,13206],\"mapped\",[109,108]],[[13207,13207],\"mapped\",[100,108]],[[13208,13208],\"mapped\",[107,108]],[[13209,13209],\"mapped\",[102,109]],[[13210,13210],\"mapped\",[110,109]],[[13211,13211],\"mapped\",[956,109]],[[13212,13212],\"mapped\",[109,109]],[[13213,13213],\"mapped\",[99,109]],[[13214,13214],\"mapped\",[107,109]],[[13215,13215],\"mapped\",[109,109,50]],[[13216,13216],\"mapped\",[99,109,50]],[[13217,13217],\"mapped\",[109,50]],[[13218,13218],\"mapped\",[107,109,50]],[[13219,13219],\"mapped\",[109,109,51]],[[13220,13220],\"mapped\",[99,109,51]],[[13221,13221],\"mapped\",[109,51]],[[13222,13222],\"mapped\",[107,109,51]],[[13223,13223],\"mapped\",[109,8725,115]],[[13224,13224],\"mapped\",[109,8725,115,50]],[[13225,13225],\"mapped\",[112,97]],[[13226,13226],\"mapped\",[107,112,97]],[[13227,13227],\"mapped\",[109,112,97]],[[13228,13228],\"mapped\",[103,112,97]],[[13229,13229],\"mapped\",[114,97,100]],[[13230,13230],\"mapped\",[114,97,100,8725,115]],[[13231,13231],\"mapped\",[114,97,100,8725,115,50]],[[13232,13232],\"mapped\",[112,115]],[[13233,13233],\"mapped\",[110,115]],[[13234,13234],\"mapped\",[956,115]],[[13235,13235],\"mapped\",[109,115]],[[13236,13236],\"mapped\",[112,118]],[[13237,13237],\"mapped\",[110,118]],[[13238,13238],\"mapped\",[956,118]],[[13239,13239],\"mapped\",[109,118]],[[13240,13240],\"mapped\",[107,118]],[[13241,13241],\"mapped\",[109,118]],[[13242,13242],\"mapped\",[112,119]],[[13243,13243],\"mapped\",[110,119]],[[13244,13244],\"mapped\",[956,119]],[[13245,13245],\"mapped\",[109,119]],[[13246,13246],\"mapped\",[107,119]],[[13247,13247],\"mapped\",[109,119]],[[13248,13248],\"mapped\",[107,969]],[[13249,13249],\"mapped\",[109,969]],[[13250,13250],\"disallowed\"],[[13251,13251],\"mapped\",[98,113]],[[13252,13252],\"mapped\",[99,99]],[[13253,13253],\"mapped\",[99,100]],[[13254,13254],\"mapped\",[99,8725,107,103]],[[13255,13255],\"disallowed\"],[[13256,13256],\"mapped\",[100,98]],[[13257,13257],\"mapped\",[103,121]],[[13258,13258],\"mapped\",[104,97]],[[13259,13259],\"mapped\",[104,112]],[[13260,13260],\"mapped\",[105,110]],[[13261,13261],\"mapped\",[107,107]],[[13262,13262],\"mapped\",[107,109]],[[13263,13263],\"mapped\",[107,116]],[[13264,13264],\"mapped\",[108,109]],[[13265,13265],\"mapped\",[108,110]],[[13266,13266],\"mapped\",[108,111,103]],[[13267,13267],\"mapped\",[108,120]],[[13268,13268],\"mapped\",[109,98]],[[13269,13269],\"mapped\",[109,105,108]],[[13270,13270],\"mapped\",[109,111,108]],[[13271,13271],\"mapped\",[112,104]],[[13272,13272],\"disallowed\"],[[13273,13273],\"mapped\",[112,112,109]],[[13274,13274],\"mapped\",[112,114]],[[13275,13275],\"mapped\",[115,114]],[[13276,13276],\"mapped\",[115,118]],[[13277,13277],\"mapped\",[119,98]],[[13278,13278],\"mapped\",[118,8725,109]],[[13279,13279],\"mapped\",[97,8725,109]],[[13280,13280],\"mapped\",[49,26085]],[[13281,13281],\"mapped\",[50,26085]],[[13282,13282],\"mapped\",[51,26085]],[[13283,13283],\"mapped\",[52,26085]],[[13284,13284],\"mapped\",[53,26085]],[[13285,13285],\"mapped\",[54,26085]],[[13286,13286],\"mapped\",[55,26085]],[[13287,13287],\"mapped\",[56,26085]],[[13288,13288],\"mapped\",[57,26085]],[[13289,13289],\"mapped\",[49,48,26085]],[[13290,13290],\"mapped\",[49,49,26085]],[[13291,13291],\"mapped\",[49,50,26085]],[[13292,13292],\"mapped\",[49,51,26085]],[[13293,13293],\"mapped\",[49,52,26085]],[[13294,13294],\"mapped\",[49,53,26085]],[[13295,13295],\"mapped\",[49,54,26085]],[[13296,13296],\"mapped\",[49,55,26085]],[[13297,13297],\"mapped\",[49,56,26085]],[[13298,13298],\"mapped\",[49,57,26085]],[[13299,13299],\"mapped\",[50,48,26085]],[[13300,13300],\"mapped\",[50,49,26085]],[[13301,13301],\"mapped\",[50,50,26085]],[[13302,13302],\"mapped\",[50,51,26085]],[[13303,13303],\"mapped\",[50,52,26085]],[[13304,13304],\"mapped\",[50,53,26085]],[[13305,13305],\"mapped\",[50,54,26085]],[[13306,13306],\"mapped\",[50,55,26085]],[[13307,13307],\"mapped\",[50,56,26085]],[[13308,13308],\"mapped\",[50,57,26085]],[[13309,13309],\"mapped\",[51,48,26085]],[[13310,13310],\"mapped\",[51,49,26085]],[[13311,13311],\"mapped\",[103,97,108]],[[13312,19893],\"valid\"],[[19894,19903],\"disallowed\"],[[19904,19967],\"valid\",[],\"NV8\"],[[19968,40869],\"valid\"],[[40870,40891],\"valid\"],[[40892,40899],\"valid\"],[[40900,40907],\"valid\"],[[40908,40908],\"valid\"],[[40909,40917],\"valid\"],[[40918,40959],\"disallowed\"],[[40960,42124],\"valid\"],[[42125,42127],\"disallowed\"],[[42128,42145],\"valid\",[],\"NV8\"],[[42146,42147],\"valid\",[],\"NV8\"],[[42148,42163],\"valid\",[],\"NV8\"],[[42164,42164],\"valid\",[],\"NV8\"],[[42165,42176],\"valid\",[],\"NV8\"],[[42177,42177],\"valid\",[],\"NV8\"],[[42178,42180],\"valid\",[],\"NV8\"],[[42181,42181],\"valid\",[],\"NV8\"],[[42182,42182],\"valid\",[],\"NV8\"],[[42183,42191],\"disallowed\"],[[42192,42237],\"valid\"],[[42238,42239],\"valid\",[],\"NV8\"],[[42240,42508],\"valid\"],[[42509,42511],\"valid\",[],\"NV8\"],[[42512,42539],\"valid\"],[[42540,42559],\"disallowed\"],[[42560,42560],\"mapped\",[42561]],[[42561,42561],\"valid\"],[[42562,42562],\"mapped\",[42563]],[[42563,42563],\"valid\"],[[42564,42564],\"mapped\",[42565]],[[42565,42565],\"valid\"],[[42566,42566],\"mapped\",[42567]],[[42567,42567],\"valid\"],[[42568,42568],\"mapped\",[42569]],[[42569,42569],\"valid\"],[[42570,42570],\"mapped\",[42571]],[[42571,42571],\"valid\"],[[42572,42572],\"mapped\",[42573]],[[42573,42573],\"valid\"],[[42574,42574],\"mapped\",[42575]],[[42575,42575],\"valid\"],[[42576,42576],\"mapped\",[42577]],[[42577,42577],\"valid\"],[[42578,42578],\"mapped\",[42579]],[[42579,42579],\"valid\"],[[42580,42580],\"mapped\",[42581]],[[42581,42581],\"valid\"],[[42582,42582],\"mapped\",[42583]],[[42583,42583],\"valid\"],[[42584,42584],\"mapped\",[42585]],[[42585,42585],\"valid\"],[[42586,42586],\"mapped\",[42587]],[[42587,42587],\"valid\"],[[42588,42588],\"mapped\",[42589]],[[42589,42589],\"valid\"],[[42590,42590],\"mapped\",[42591]],[[42591,42591],\"valid\"],[[42592,42592],\"mapped\",[42593]],[[42593,42593],\"valid\"],[[42594,42594],\"mapped\",[42595]],[[42595,42595],\"valid\"],[[42596,42596],\"mapped\",[42597]],[[42597,42597],\"valid\"],[[42598,42598],\"mapped\",[42599]],[[42599,42599],\"valid\"],[[42600,42600],\"mapped\",[42601]],[[42601,42601],\"valid\"],[[42602,42602],\"mapped\",[42603]],[[42603,42603],\"valid\"],[[42604,42604],\"mapped\",[42605]],[[42605,42607],\"valid\"],[[42608,42611],\"valid\",[],\"NV8\"],[[42612,42619],\"valid\"],[[42620,42621],\"valid\"],[[42622,42622],\"valid\",[],\"NV8\"],[[42623,42623],\"valid\"],[[42624,42624],\"mapped\",[42625]],[[42625,42625],\"valid\"],[[42626,42626],\"mapped\",[42627]],[[42627,42627],\"valid\"],[[42628,42628],\"mapped\",[42629]],[[42629,42629],\"valid\"],[[42630,42630],\"mapped\",[42631]],[[42631,42631],\"valid\"],[[42632,42632],\"mapped\",[42633]],[[42633,42633],\"valid\"],[[42634,42634],\"mapped\",[42635]],[[42635,42635],\"valid\"],[[42636,42636],\"mapped\",[42637]],[[42637,42637],\"valid\"],[[42638,42638],\"mapped\",[42639]],[[42639,42639],\"valid\"],[[42640,42640],\"mapped\",[42641]],[[42641,42641],\"valid\"],[[42642,42642],\"mapped\",[42643]],[[42643,42643],\"valid\"],[[42644,42644],\"mapped\",[42645]],[[42645,42645],\"valid\"],[[42646,42646],\"mapped\",[42647]],[[42647,42647],\"valid\"],[[42648,42648],\"mapped\",[42649]],[[42649,42649],\"valid\"],[[42650,42650],\"mapped\",[42651]],[[42651,42651],\"valid\"],[[42652,42652],\"mapped\",[1098]],[[42653,42653],\"mapped\",[1100]],[[42654,42654],\"valid\"],[[42655,42655],\"valid\"],[[42656,42725],\"valid\"],[[42726,42735],\"valid\",[],\"NV8\"],[[42736,42737],\"valid\"],[[42738,42743],\"valid\",[],\"NV8\"],[[42744,42751],\"disallowed\"],[[42752,42774],\"valid\",[],\"NV8\"],[[42775,42778],\"valid\"],[[42779,42783],\"valid\"],[[42784,42785],\"valid\",[],\"NV8\"],[[42786,42786],\"mapped\",[42787]],[[42787,42787],\"valid\"],[[42788,42788],\"mapped\",[42789]],[[42789,42789],\"valid\"],[[42790,42790],\"mapped\",[42791]],[[42791,42791],\"valid\"],[[42792,42792],\"mapped\",[42793]],[[42793,42793],\"valid\"],[[42794,42794],\"mapped\",[42795]],[[42795,42795],\"valid\"],[[42796,42796],\"mapped\",[42797]],[[42797,42797],\"valid\"],[[42798,42798],\"mapped\",[42799]],[[42799,42801],\"valid\"],[[42802,42802],\"mapped\",[42803]],[[42803,42803],\"valid\"],[[42804,42804],\"mapped\",[42805]],[[42805,42805],\"valid\"],[[42806,42806],\"mapped\",[42807]],[[42807,42807],\"valid\"],[[42808,42808],\"mapped\",[42809]],[[42809,42809],\"valid\"],[[42810,42810],\"mapped\",[42811]],[[42811,42811],\"valid\"],[[42812,42812],\"mapped\",[42813]],[[42813,42813],\"valid\"],[[42814,42814],\"mapped\",[42815]],[[42815,42815],\"valid\"],[[42816,42816],\"mapped\",[42817]],[[42817,42817],\"valid\"],[[42818,42818],\"mapped\",[42819]],[[42819,42819],\"valid\"],[[42820,42820],\"mapped\",[42821]],[[42821,42821],\"valid\"],[[42822,42822],\"mapped\",[42823]],[[42823,42823],\"valid\"],[[42824,42824],\"mapped\",[42825]],[[42825,42825],\"valid\"],[[42826,42826],\"mapped\",[42827]],[[42827,42827],\"valid\"],[[42828,42828],\"mapped\",[42829]],[[42829,42829],\"valid\"],[[42830,42830],\"mapped\",[42831]],[[42831,42831],\"valid\"],[[42832,42832],\"mapped\",[42833]],[[42833,42833],\"valid\"],[[42834,42834],\"mapped\",[42835]],[[42835,42835],\"valid\"],[[42836,42836],\"mapped\",[42837]],[[42837,42837],\"valid\"],[[42838,42838],\"mapped\",[42839]],[[42839,42839],\"valid\"],[[42840,42840],\"mapped\",[42841]],[[42841,42841],\"valid\"],[[42842,42842],\"mapped\",[42843]],[[42843,42843],\"valid\"],[[42844,42844],\"mapped\",[42845]],[[42845,42845],\"valid\"],[[42846,42846],\"mapped\",[42847]],[[42847,42847],\"valid\"],[[42848,42848],\"mapped\",[42849]],[[42849,42849],\"valid\"],[[42850,42850],\"mapped\",[42851]],[[42851,42851],\"valid\"],[[42852,42852],\"mapped\",[42853]],[[42853,42853],\"valid\"],[[42854,42854],\"mapped\",[42855]],[[42855,42855],\"valid\"],[[42856,42856],\"mapped\",[42857]],[[42857,42857],\"valid\"],[[42858,42858],\"mapped\",[42859]],[[42859,42859],\"valid\"],[[42860,42860],\"mapped\",[42861]],[[42861,42861],\"valid\"],[[42862,42862],\"mapped\",[42863]],[[42863,42863],\"valid\"],[[42864,42864],\"mapped\",[42863]],[[42865,42872],\"valid\"],[[42873,42873],\"mapped\",[42874]],[[42874,42874],\"valid\"],[[42875,42875],\"mapped\",[42876]],[[42876,42876],\"valid\"],[[42877,42877],\"mapped\",[7545]],[[42878,42878],\"mapped\",[42879]],[[42879,42879],\"valid\"],[[42880,42880],\"mapped\",[42881]],[[42881,42881],\"valid\"],[[42882,42882],\"mapped\",[42883]],[[42883,42883],\"valid\"],[[42884,42884],\"mapped\",[42885]],[[42885,42885],\"valid\"],[[42886,42886],\"mapped\",[42887]],[[42887,42888],\"valid\"],[[42889,42890],\"valid\",[],\"NV8\"],[[42891,42891],\"mapped\",[42892]],[[42892,42892],\"valid\"],[[42893,42893],\"mapped\",[613]],[[42894,42894],\"valid\"],[[42895,42895],\"valid\"],[[42896,42896],\"mapped\",[42897]],[[42897,42897],\"valid\"],[[42898,42898],\"mapped\",[42899]],[[42899,42899],\"valid\"],[[42900,42901],\"valid\"],[[42902,42902],\"mapped\",[42903]],[[42903,42903],\"valid\"],[[42904,42904],\"mapped\",[42905]],[[42905,42905],\"valid\"],[[42906,42906],\"mapped\",[42907]],[[42907,42907],\"valid\"],[[42908,42908],\"mapped\",[42909]],[[42909,42909],\"valid\"],[[42910,42910],\"mapped\",[42911]],[[42911,42911],\"valid\"],[[42912,42912],\"mapped\",[42913]],[[42913,42913],\"valid\"],[[42914,42914],\"mapped\",[42915]],[[42915,42915],\"valid\"],[[42916,42916],\"mapped\",[42917]],[[42917,42917],\"valid\"],[[42918,42918],\"mapped\",[42919]],[[42919,42919],\"valid\"],[[42920,42920],\"mapped\",[42921]],[[42921,42921],\"valid\"],[[42922,42922],\"mapped\",[614]],[[42923,42923],\"mapped\",[604]],[[42924,42924],\"mapped\",[609]],[[42925,42925],\"mapped\",[620]],[[42926,42927],\"disallowed\"],[[42928,42928],\"mapped\",[670]],[[42929,42929],\"mapped\",[647]],[[42930,42930],\"mapped\",[669]],[[42931,42931],\"mapped\",[43859]],[[42932,42932],\"mapped\",[42933]],[[42933,42933],\"valid\"],[[42934,42934],\"mapped\",[42935]],[[42935,42935],\"valid\"],[[42936,42998],\"disallowed\"],[[42999,42999],\"valid\"],[[43000,43000],\"mapped\",[295]],[[43001,43001],\"mapped\",[339]],[[43002,43002],\"valid\"],[[43003,43007],\"valid\"],[[43008,43047],\"valid\"],[[43048,43051],\"valid\",[],\"NV8\"],[[43052,43055],\"disallowed\"],[[43056,43065],\"valid\",[],\"NV8\"],[[43066,43071],\"disallowed\"],[[43072,43123],\"valid\"],[[43124,43127],\"valid\",[],\"NV8\"],[[43128,43135],\"disallowed\"],[[43136,43204],\"valid\"],[[43205,43213],\"disallowed\"],[[43214,43215],\"valid\",[],\"NV8\"],[[43216,43225],\"valid\"],[[43226,43231],\"disallowed\"],[[43232,43255],\"valid\"],[[43256,43258],\"valid\",[],\"NV8\"],[[43259,43259],\"valid\"],[[43260,43260],\"valid\",[],\"NV8\"],[[43261,43261],\"valid\"],[[43262,43263],\"disallowed\"],[[43264,43309],\"valid\"],[[43310,43311],\"valid\",[],\"NV8\"],[[43312,43347],\"valid\"],[[43348,43358],\"disallowed\"],[[43359,43359],\"valid\",[],\"NV8\"],[[43360,43388],\"valid\",[],\"NV8\"],[[43389,43391],\"disallowed\"],[[43392,43456],\"valid\"],[[43457,43469],\"valid\",[],\"NV8\"],[[43470,43470],\"disallowed\"],[[43471,43481],\"valid\"],[[43482,43485],\"disallowed\"],[[43486,43487],\"valid\",[],\"NV8\"],[[43488,43518],\"valid\"],[[43519,43519],\"disallowed\"],[[43520,43574],\"valid\"],[[43575,43583],\"disallowed\"],[[43584,43597],\"valid\"],[[43598,43599],\"disallowed\"],[[43600,43609],\"valid\"],[[43610,43611],\"disallowed\"],[[43612,43615],\"valid\",[],\"NV8\"],[[43616,43638],\"valid\"],[[43639,43641],\"valid\",[],\"NV8\"],[[43642,43643],\"valid\"],[[43644,43647],\"valid\"],[[43648,43714],\"valid\"],[[43715,43738],\"disallowed\"],[[43739,43741],\"valid\"],[[43742,43743],\"valid\",[],\"NV8\"],[[43744,43759],\"valid\"],[[43760,43761],\"valid\",[],\"NV8\"],[[43762,43766],\"valid\"],[[43767,43776],\"disallowed\"],[[43777,43782],\"valid\"],[[43783,43784],\"disallowed\"],[[43785,43790],\"valid\"],[[43791,43792],\"disallowed\"],[[43793,43798],\"valid\"],[[43799,43807],\"disallowed\"],[[43808,43814],\"valid\"],[[43815,43815],\"disallowed\"],[[43816,43822],\"valid\"],[[43823,43823],\"disallowed\"],[[43824,43866],\"valid\"],[[43867,43867],\"valid\",[],\"NV8\"],[[43868,43868],\"mapped\",[42791]],[[43869,43869],\"mapped\",[43831]],[[43870,43870],\"mapped\",[619]],[[43871,43871],\"mapped\",[43858]],[[43872,43875],\"valid\"],[[43876,43877],\"valid\"],[[43878,43887],\"disallowed\"],[[43888,43888],\"mapped\",[5024]],[[43889,43889],\"mapped\",[5025]],[[43890,43890],\"mapped\",[5026]],[[43891,43891],\"mapped\",[5027]],[[43892,43892],\"mapped\",[5028]],[[43893,43893],\"mapped\",[5029]],[[43894,43894],\"mapped\",[5030]],[[43895,43895],\"mapped\",[5031]],[[43896,43896],\"mapped\",[5032]],[[43897,43897],\"mapped\",[5033]],[[43898,43898],\"mapped\",[5034]],[[43899,43899],\"mapped\",[5035]],[[43900,43900],\"mapped\",[5036]],[[43901,43901],\"mapped\",[5037]],[[43902,43902],\"mapped\",[5038]],[[43903,43903],\"mapped\",[5039]],[[43904,43904],\"mapped\",[5040]],[[43905,43905],\"mapped\",[5041]],[[43906,43906],\"mapped\",[5042]],[[43907,43907],\"mapped\",[5043]],[[43908,43908],\"mapped\",[5044]],[[43909,43909],\"mapped\",[5045]],[[43910,43910],\"mapped\",[5046]],[[43911,43911],\"mapped\",[5047]],[[43912,43912],\"mapped\",[5048]],[[43913,43913],\"mapped\",[5049]],[[43914,43914],\"mapped\",[5050]],[[43915,43915],\"mapped\",[5051]],[[43916,43916],\"mapped\",[5052]],[[43917,43917],\"mapped\",[5053]],[[43918,43918],\"mapped\",[5054]],[[43919,43919],\"mapped\",[5055]],[[43920,43920],\"mapped\",[5056]],[[43921,43921],\"mapped\",[5057]],[[43922,43922],\"mapped\",[5058]],[[43923,43923],\"mapped\",[5059]],[[43924,43924],\"mapped\",[5060]],[[43925,43925],\"mapped\",[5061]],[[43926,43926],\"mapped\",[5062]],[[43927,43927],\"mapped\",[5063]],[[43928,43928],\"mapped\",[5064]],[[43929,43929],\"mapped\",[5065]],[[43930,43930],\"mapped\",[5066]],[[43931,43931],\"mapped\",[5067]],[[43932,43932],\"mapped\",[5068]],[[43933,43933],\"mapped\",[5069]],[[43934,43934],\"mapped\",[5070]],[[43935,43935],\"mapped\",[5071]],[[43936,43936],\"mapped\",[5072]],[[43937,43937],\"mapped\",[5073]],[[43938,43938],\"mapped\",[5074]],[[43939,43939],\"mapped\",[5075]],[[43940,43940],\"mapped\",[5076]],[[43941,43941],\"mapped\",[5077]],[[43942,43942],\"mapped\",[5078]],[[43943,43943],\"mapped\",[5079]],[[43944,43944],\"mapped\",[5080]],[[43945,43945],\"mapped\",[5081]],[[43946,43946],\"mapped\",[5082]],[[43947,43947],\"mapped\",[5083]],[[43948,43948],\"mapped\",[5084]],[[43949,43949],\"mapped\",[5085]],[[43950,43950],\"mapped\",[5086]],[[43951,43951],\"mapped\",[5087]],[[43952,43952],\"mapped\",[5088]],[[43953,43953],\"mapped\",[5089]],[[43954,43954],\"mapped\",[5090]],[[43955,43955],\"mapped\",[5091]],[[43956,43956],\"mapped\",[5092]],[[43957,43957],\"mapped\",[5093]],[[43958,43958],\"mapped\",[5094]],[[43959,43959],\"mapped\",[5095]],[[43960,43960],\"mapped\",[5096]],[[43961,43961],\"mapped\",[5097]],[[43962,43962],\"mapped\",[5098]],[[43963,43963],\"mapped\",[5099]],[[43964,43964],\"mapped\",[5100]],[[43965,43965],\"mapped\",[5101]],[[43966,43966],\"mapped\",[5102]],[[43967,43967],\"mapped\",[5103]],[[43968,44010],\"valid\"],[[44011,44011],\"valid\",[],\"NV8\"],[[44012,44013],\"valid\"],[[44014,44015],\"disallowed\"],[[44016,44025],\"valid\"],[[44026,44031],\"disallowed\"],[[44032,55203],\"valid\"],[[55204,55215],\"disallowed\"],[[55216,55238],\"valid\",[],\"NV8\"],[[55239,55242],\"disallowed\"],[[55243,55291],\"valid\",[],\"NV8\"],[[55292,55295],\"disallowed\"],[[55296,57343],\"disallowed\"],[[57344,63743],\"disallowed\"],[[63744,63744],\"mapped\",[35912]],[[63745,63745],\"mapped\",[26356]],[[63746,63746],\"mapped\",[36554]],[[63747,63747],\"mapped\",[36040]],[[63748,63748],\"mapped\",[28369]],[[63749,63749],\"mapped\",[20018]],[[63750,63750],\"mapped\",[21477]],[[63751,63752],\"mapped\",[40860]],[[63753,63753],\"mapped\",[22865]],[[63754,63754],\"mapped\",[37329]],[[63755,63755],\"mapped\",[21895]],[[63756,63756],\"mapped\",[22856]],[[63757,63757],\"mapped\",[25078]],[[63758,63758],\"mapped\",[30313]],[[63759,63759],\"mapped\",[32645]],[[63760,63760],\"mapped\",[34367]],[[63761,63761],\"mapped\",[34746]],[[63762,63762],\"mapped\",[35064]],[[63763,63763],\"mapped\",[37007]],[[63764,63764],\"mapped\",[27138]],[[63765,63765],\"mapped\",[27931]],[[63766,63766],\"mapped\",[28889]],[[63767,63767],\"mapped\",[29662]],[[63768,63768],\"mapped\",[33853]],[[63769,63769],\"mapped\",[37226]],[[63770,63770],\"mapped\",[39409]],[[63771,63771],\"mapped\",[20098]],[[63772,63772],\"mapped\",[21365]],[[63773,63773],\"mapped\",[27396]],[[63774,63774],\"mapped\",[29211]],[[63775,63775],\"mapped\",[34349]],[[63776,63776],\"mapped\",[40478]],[[63777,63777],\"mapped\",[23888]],[[63778,63778],\"mapped\",[28651]],[[63779,63779],\"mapped\",[34253]],[[63780,63780],\"mapped\",[35172]],[[63781,63781],\"mapped\",[25289]],[[63782,63782],\"mapped\",[33240]],[[63783,63783],\"mapped\",[34847]],[[63784,63784],\"mapped\",[24266]],[[63785,63785],\"mapped\",[26391]],[[63786,63786],\"mapped\",[28010]],[[63787,63787],\"mapped\",[29436]],[[63788,63788],\"mapped\",[37070]],[[63789,63789],\"mapped\",[20358]],[[63790,63790],\"mapped\",[20919]],[[63791,63791],\"mapped\",[21214]],[[63792,63792],\"mapped\",[25796]],[[63793,63793],\"mapped\",[27347]],[[63794,63794],\"mapped\",[29200]],[[63795,63795],\"mapped\",[30439]],[[63796,63796],\"mapped\",[32769]],[[63797,63797],\"mapped\",[34310]],[[63798,63798],\"mapped\",[34396]],[[63799,63799],\"mapped\",[36335]],[[63800,63800],\"mapped\",[38706]],[[63801,63801],\"mapped\",[39791]],[[63802,63802],\"mapped\",[40442]],[[63803,63803],\"mapped\",[30860]],[[63804,63804],\"mapped\",[31103]],[[63805,63805],\"mapped\",[32160]],[[63806,63806],\"mapped\",[33737]],[[63807,63807],\"mapped\",[37636]],[[63808,63808],\"mapped\",[40575]],[[63809,63809],\"mapped\",[35542]],[[63810,63810],\"mapped\",[22751]],[[63811,63811],\"mapped\",[24324]],[[63812,63812],\"mapped\",[31840]],[[63813,63813],\"mapped\",[32894]],[[63814,63814],\"mapped\",[29282]],[[63815,63815],\"mapped\",[30922]],[[63816,63816],\"mapped\",[36034]],[[63817,63817],\"mapped\",[38647]],[[63818,63818],\"mapped\",[22744]],[[63819,63819],\"mapped\",[23650]],[[63820,63820],\"mapped\",[27155]],[[63821,63821],\"mapped\",[28122]],[[63822,63822],\"mapped\",[28431]],[[63823,63823],\"mapped\",[32047]],[[63824,63824],\"mapped\",[32311]],[[63825,63825],\"mapped\",[38475]],[[63826,63826],\"mapped\",[21202]],[[63827,63827],\"mapped\",[32907]],[[63828,63828],\"mapped\",[20956]],[[63829,63829],\"mapped\",[20940]],[[63830,63830],\"mapped\",[31260]],[[63831,63831],\"mapped\",[32190]],[[63832,63832],\"mapped\",[33777]],[[63833,63833],\"mapped\",[38517]],[[63834,63834],\"mapped\",[35712]],[[63835,63835],\"mapped\",[25295]],[[63836,63836],\"mapped\",[27138]],[[63837,63837],\"mapped\",[35582]],[[63838,63838],\"mapped\",[20025]],[[63839,63839],\"mapped\",[23527]],[[63840,63840],\"mapped\",[24594]],[[63841,63841],\"mapped\",[29575]],[[63842,63842],\"mapped\",[30064]],[[63843,63843],\"mapped\",[21271]],[[63844,63844],\"mapped\",[30971]],[[63845,63845],\"mapped\",[20415]],[[63846,63846],\"mapped\",[24489]],[[63847,63847],\"mapped\",[19981]],[[63848,63848],\"mapped\",[27852]],[[63849,63849],\"mapped\",[25976]],[[63850,63850],\"mapped\",[32034]],[[63851,63851],\"mapped\",[21443]],[[63852,63852],\"mapped\",[22622]],[[63853,63853],\"mapped\",[30465]],[[63854,63854],\"mapped\",[33865]],[[63855,63855],\"mapped\",[35498]],[[63856,63856],\"mapped\",[27578]],[[63857,63857],\"mapped\",[36784]],[[63858,63858],\"mapped\",[27784]],[[63859,63859],\"mapped\",[25342]],[[63860,63860],\"mapped\",[33509]],[[63861,63861],\"mapped\",[25504]],[[63862,63862],\"mapped\",[30053]],[[63863,63863],\"mapped\",[20142]],[[63864,63864],\"mapped\",[20841]],[[63865,63865],\"mapped\",[20937]],[[63866,63866],\"mapped\",[26753]],[[63867,63867],\"mapped\",[31975]],[[63868,63868],\"mapped\",[33391]],[[63869,63869],\"mapped\",[35538]],[[63870,63870],\"mapped\",[37327]],[[63871,63871],\"mapped\",[21237]],[[63872,63872],\"mapped\",[21570]],[[63873,63873],\"mapped\",[22899]],[[63874,63874],\"mapped\",[24300]],[[63875,63875],\"mapped\",[26053]],[[63876,63876],\"mapped\",[28670]],[[63877,63877],\"mapped\",[31018]],[[63878,63878],\"mapped\",[38317]],[[63879,63879],\"mapped\",[39530]],[[63880,63880],\"mapped\",[40599]],[[63881,63881],\"mapped\",[40654]],[[63882,63882],\"mapped\",[21147]],[[63883,63883],\"mapped\",[26310]],[[63884,63884],\"mapped\",[27511]],[[63885,63885],\"mapped\",[36706]],[[63886,63886],\"mapped\",[24180]],[[63887,63887],\"mapped\",[24976]],[[63888,63888],\"mapped\",[25088]],[[63889,63889],\"mapped\",[25754]],[[63890,63890],\"mapped\",[28451]],[[63891,63891],\"mapped\",[29001]],[[63892,63892],\"mapped\",[29833]],[[63893,63893],\"mapped\",[31178]],[[63894,63894],\"mapped\",[32244]],[[63895,63895],\"mapped\",[32879]],[[63896,63896],\"mapped\",[36646]],[[63897,63897],\"mapped\",[34030]],[[63898,63898],\"mapped\",[36899]],[[63899,63899],\"mapped\",[37706]],[[63900,63900],\"mapped\",[21015]],[[63901,63901],\"mapped\",[21155]],[[63902,63902],\"mapped\",[21693]],[[63903,63903],\"mapped\",[28872]],[[63904,63904],\"mapped\",[35010]],[[63905,63905],\"mapped\",[35498]],[[63906,63906],\"mapped\",[24265]],[[63907,63907],\"mapped\",[24565]],[[63908,63908],\"mapped\",[25467]],[[63909,63909],\"mapped\",[27566]],[[63910,63910],\"mapped\",[31806]],[[63911,63911],\"mapped\",[29557]],[[63912,63912],\"mapped\",[20196]],[[63913,63913],\"mapped\",[22265]],[[63914,63914],\"mapped\",[23527]],[[63915,63915],\"mapped\",[23994]],[[63916,63916],\"mapped\",[24604]],[[63917,63917],\"mapped\",[29618]],[[63918,63918],\"mapped\",[29801]],[[63919,63919],\"mapped\",[32666]],[[63920,63920],\"mapped\",[32838]],[[63921,63921],\"mapped\",[37428]],[[63922,63922],\"mapped\",[38646]],[[63923,63923],\"mapped\",[38728]],[[63924,63924],\"mapped\",[38936]],[[63925,63925],\"mapped\",[20363]],[[63926,63926],\"mapped\",[31150]],[[63927,63927],\"mapped\",[37300]],[[63928,63928],\"mapped\",[38584]],[[63929,63929],\"mapped\",[24801]],[[63930,63930],\"mapped\",[20102]],[[63931,63931],\"mapped\",[20698]],[[63932,63932],\"mapped\",[23534]],[[63933,63933],\"mapped\",[23615]],[[63934,63934],\"mapped\",[26009]],[[63935,63935],\"mapped\",[27138]],[[63936,63936],\"mapped\",[29134]],[[63937,63937],\"mapped\",[30274]],[[63938,63938],\"mapped\",[34044]],[[63939,63939],\"mapped\",[36988]],[[63940,63940],\"mapped\",[40845]],[[63941,63941],\"mapped\",[26248]],[[63942,63942],\"mapped\",[38446]],[[63943,63943],\"mapped\",[21129]],[[63944,63944],\"mapped\",[26491]],[[63945,63945],\"mapped\",[26611]],[[63946,63946],\"mapped\",[27969]],[[63947,63947],\"mapped\",[28316]],[[63948,63948],\"mapped\",[29705]],[[63949,63949],\"mapped\",[30041]],[[63950,63950],\"mapped\",[30827]],[[63951,63951],\"mapped\",[32016]],[[63952,63952],\"mapped\",[39006]],[[63953,63953],\"mapped\",[20845]],[[63954,63954],\"mapped\",[25134]],[[63955,63955],\"mapped\",[38520]],[[63956,63956],\"mapped\",[20523]],[[63957,63957],\"mapped\",[23833]],[[63958,63958],\"mapped\",[28138]],[[63959,63959],\"mapped\",[36650]],[[63960,63960],\"mapped\",[24459]],[[63961,63961],\"mapped\",[24900]],[[63962,63962],\"mapped\",[26647]],[[63963,63963],\"mapped\",[29575]],[[63964,63964],\"mapped\",[38534]],[[63965,63965],\"mapped\",[21033]],[[63966,63966],\"mapped\",[21519]],[[63967,63967],\"mapped\",[23653]],[[63968,63968],\"mapped\",[26131]],[[63969,63969],\"mapped\",[26446]],[[63970,63970],\"mapped\",[26792]],[[63971,63971],\"mapped\",[27877]],[[63972,63972],\"mapped\",[29702]],[[63973,63973],\"mapped\",[30178]],[[63974,63974],\"mapped\",[32633]],[[63975,63975],\"mapped\",[35023]],[[63976,63976],\"mapped\",[35041]],[[63977,63977],\"mapped\",[37324]],[[63978,63978],\"mapped\",[38626]],[[63979,63979],\"mapped\",[21311]],[[63980,63980],\"mapped\",[28346]],[[63981,63981],\"mapped\",[21533]],[[63982,63982],\"mapped\",[29136]],[[63983,63983],\"mapped\",[29848]],[[63984,63984],\"mapped\",[34298]],[[63985,63985],\"mapped\",[38563]],[[63986,63986],\"mapped\",[40023]],[[63987,63987],\"mapped\",[40607]],[[63988,63988],\"mapped\",[26519]],[[63989,63989],\"mapped\",[28107]],[[63990,63990],\"mapped\",[33256]],[[63991,63991],\"mapped\",[31435]],[[63992,63992],\"mapped\",[31520]],[[63993,63993],\"mapped\",[31890]],[[63994,63994],\"mapped\",[29376]],[[63995,63995],\"mapped\",[28825]],[[63996,63996],\"mapped\",[35672]],[[63997,63997],\"mapped\",[20160]],[[63998,63998],\"mapped\",[33590]],[[63999,63999],\"mapped\",[21050]],[[64000,64000],\"mapped\",[20999]],[[64001,64001],\"mapped\",[24230]],[[64002,64002],\"mapped\",[25299]],[[64003,64003],\"mapped\",[31958]],[[64004,64004],\"mapped\",[23429]],[[64005,64005],\"mapped\",[27934]],[[64006,64006],\"mapped\",[26292]],[[64007,64007],\"mapped\",[36667]],[[64008,64008],\"mapped\",[34892]],[[64009,64009],\"mapped\",[38477]],[[64010,64010],\"mapped\",[35211]],[[64011,64011],\"mapped\",[24275]],[[64012,64012],\"mapped\",[20800]],[[64013,64013],\"mapped\",[21952]],[[64014,64015],\"valid\"],[[64016,64016],\"mapped\",[22618]],[[64017,64017],\"valid\"],[[64018,64018],\"mapped\",[26228]],[[64019,64020],\"valid\"],[[64021,64021],\"mapped\",[20958]],[[64022,64022],\"mapped\",[29482]],[[64023,64023],\"mapped\",[30410]],[[64024,64024],\"mapped\",[31036]],[[64025,64025],\"mapped\",[31070]],[[64026,64026],\"mapped\",[31077]],[[64027,64027],\"mapped\",[31119]],[[64028,64028],\"mapped\",[38742]],[[64029,64029],\"mapped\",[31934]],[[64030,64030],\"mapped\",[32701]],[[64031,64031],\"valid\"],[[64032,64032],\"mapped\",[34322]],[[64033,64033],\"valid\"],[[64034,64034],\"mapped\",[35576]],[[64035,64036],\"valid\"],[[64037,64037],\"mapped\",[36920]],[[64038,64038],\"mapped\",[37117]],[[64039,64041],\"valid\"],[[64042,64042],\"mapped\",[39151]],[[64043,64043],\"mapped\",[39164]],[[64044,64044],\"mapped\",[39208]],[[64045,64045],\"mapped\",[40372]],[[64046,64046],\"mapped\",[37086]],[[64047,64047],\"mapped\",[38583]],[[64048,64048],\"mapped\",[20398]],[[64049,64049],\"mapped\",[20711]],[[64050,64050],\"mapped\",[20813]],[[64051,64051],\"mapped\",[21193]],[[64052,64052],\"mapped\",[21220]],[[64053,64053],\"mapped\",[21329]],[[64054,64054],\"mapped\",[21917]],[[64055,64055],\"mapped\",[22022]],[[64056,64056],\"mapped\",[22120]],[[64057,64057],\"mapped\",[22592]],[[64058,64058],\"mapped\",[22696]],[[64059,64059],\"mapped\",[23652]],[[64060,64060],\"mapped\",[23662]],[[64061,64061],\"mapped\",[24724]],[[64062,64062],\"mapped\",[24936]],[[64063,64063],\"mapped\",[24974]],[[64064,64064],\"mapped\",[25074]],[[64065,64065],\"mapped\",[25935]],[[64066,64066],\"mapped\",[26082]],[[64067,64067],\"mapped\",[26257]],[[64068,64068],\"mapped\",[26757]],[[64069,64069],\"mapped\",[28023]],[[64070,64070],\"mapped\",[28186]],[[64071,64071],\"mapped\",[28450]],[[64072,64072],\"mapped\",[29038]],[[64073,64073],\"mapped\",[29227]],[[64074,64074],\"mapped\",[29730]],[[64075,64075],\"mapped\",[30865]],[[64076,64076],\"mapped\",[31038]],[[64077,64077],\"mapped\",[31049]],[[64078,64078],\"mapped\",[31048]],[[64079,64079],\"mapped\",[31056]],[[64080,64080],\"mapped\",[31062]],[[64081,64081],\"mapped\",[31069]],[[64082,64082],\"mapped\",[31117]],[[64083,64083],\"mapped\",[31118]],[[64084,64084],\"mapped\",[31296]],[[64085,64085],\"mapped\",[31361]],[[64086,64086],\"mapped\",[31680]],[[64087,64087],\"mapped\",[32244]],[[64088,64088],\"mapped\",[32265]],[[64089,64089],\"mapped\",[32321]],[[64090,64090],\"mapped\",[32626]],[[64091,64091],\"mapped\",[32773]],[[64092,64092],\"mapped\",[33261]],[[64093,64094],\"mapped\",[33401]],[[64095,64095],\"mapped\",[33879]],[[64096,64096],\"mapped\",[35088]],[[64097,64097],\"mapped\",[35222]],[[64098,64098],\"mapped\",[35585]],[[64099,64099],\"mapped\",[35641]],[[64100,64100],\"mapped\",[36051]],[[64101,64101],\"mapped\",[36104]],[[64102,64102],\"mapped\",[36790]],[[64103,64103],\"mapped\",[36920]],[[64104,64104],\"mapped\",[38627]],[[64105,64105],\"mapped\",[38911]],[[64106,64106],\"mapped\",[38971]],[[64107,64107],\"mapped\",[24693]],[[64108,64108],\"mapped\",[148206]],[[64109,64109],\"mapped\",[33304]],[[64110,64111],\"disallowed\"],[[64112,64112],\"mapped\",[20006]],[[64113,64113],\"mapped\",[20917]],[[64114,64114],\"mapped\",[20840]],[[64115,64115],\"mapped\",[20352]],[[64116,64116],\"mapped\",[20805]],[[64117,64117],\"mapped\",[20864]],[[64118,64118],\"mapped\",[21191]],[[64119,64119],\"mapped\",[21242]],[[64120,64120],\"mapped\",[21917]],[[64121,64121],\"mapped\",[21845]],[[64122,64122],\"mapped\",[21913]],[[64123,64123],\"mapped\",[21986]],[[64124,64124],\"mapped\",[22618]],[[64125,64125],\"mapped\",[22707]],[[64126,64126],\"mapped\",[22852]],[[64127,64127],\"mapped\",[22868]],[[64128,64128],\"mapped\",[23138]],[[64129,64129],\"mapped\",[23336]],[[64130,64130],\"mapped\",[24274]],[[64131,64131],\"mapped\",[24281]],[[64132,64132],\"mapped\",[24425]],[[64133,64133],\"mapped\",[24493]],[[64134,64134],\"mapped\",[24792]],[[64135,64135],\"mapped\",[24910]],[[64136,64136],\"mapped\",[24840]],[[64137,64137],\"mapped\",[24974]],[[64138,64138],\"mapped\",[24928]],[[64139,64139],\"mapped\",[25074]],[[64140,64140],\"mapped\",[25140]],[[64141,64141],\"mapped\",[25540]],[[64142,64142],\"mapped\",[25628]],[[64143,64143],\"mapped\",[25682]],[[64144,64144],\"mapped\",[25942]],[[64145,64145],\"mapped\",[26228]],[[64146,64146],\"mapped\",[26391]],[[64147,64147],\"mapped\",[26395]],[[64148,64148],\"mapped\",[26454]],[[64149,64149],\"mapped\",[27513]],[[64150,64150],\"mapped\",[27578]],[[64151,64151],\"mapped\",[27969]],[[64152,64152],\"mapped\",[28379]],[[64153,64153],\"mapped\",[28363]],[[64154,64154],\"mapped\",[28450]],[[64155,64155],\"mapped\",[28702]],[[64156,64156],\"mapped\",[29038]],[[64157,64157],\"mapped\",[30631]],[[64158,64158],\"mapped\",[29237]],[[64159,64159],\"mapped\",[29359]],[[64160,64160],\"mapped\",[29482]],[[64161,64161],\"mapped\",[29809]],[[64162,64162],\"mapped\",[29958]],[[64163,64163],\"mapped\",[30011]],[[64164,64164],\"mapped\",[30237]],[[64165,64165],\"mapped\",[30239]],[[64166,64166],\"mapped\",[30410]],[[64167,64167],\"mapped\",[30427]],[[64168,64168],\"mapped\",[30452]],[[64169,64169],\"mapped\",[30538]],[[64170,64170],\"mapped\",[30528]],[[64171,64171],\"mapped\",[30924]],[[64172,64172],\"mapped\",[31409]],[[64173,64173],\"mapped\",[31680]],[[64174,64174],\"mapped\",[31867]],[[64175,64175],\"mapped\",[32091]],[[64176,64176],\"mapped\",[32244]],[[64177,64177],\"mapped\",[32574]],[[64178,64178],\"mapped\",[32773]],[[64179,64179],\"mapped\",[33618]],[[64180,64180],\"mapped\",[33775]],[[64181,64181],\"mapped\",[34681]],[[64182,64182],\"mapped\",[35137]],[[64183,64183],\"mapped\",[35206]],[[64184,64184],\"mapped\",[35222]],[[64185,64185],\"mapped\",[35519]],[[64186,64186],\"mapped\",[35576]],[[64187,64187],\"mapped\",[35531]],[[64188,64188],\"mapped\",[35585]],[[64189,64189],\"mapped\",[35582]],[[64190,64190],\"mapped\",[35565]],[[64191,64191],\"mapped\",[35641]],[[64192,64192],\"mapped\",[35722]],[[64193,64193],\"mapped\",[36104]],[[64194,64194],\"mapped\",[36664]],[[64195,64195],\"mapped\",[36978]],[[64196,64196],\"mapped\",[37273]],[[64197,64197],\"mapped\",[37494]],[[64198,64198],\"mapped\",[38524]],[[64199,64199],\"mapped\",[38627]],[[64200,64200],\"mapped\",[38742]],[[64201,64201],\"mapped\",[38875]],[[64202,64202],\"mapped\",[38911]],[[64203,64203],\"mapped\",[38923]],[[64204,64204],\"mapped\",[38971]],[[64205,64205],\"mapped\",[39698]],[[64206,64206],\"mapped\",[40860]],[[64207,64207],\"mapped\",[141386]],[[64208,64208],\"mapped\",[141380]],[[64209,64209],\"mapped\",[144341]],[[64210,64210],\"mapped\",[15261]],[[64211,64211],\"mapped\",[16408]],[[64212,64212],\"mapped\",[16441]],[[64213,64213],\"mapped\",[152137]],[[64214,64214],\"mapped\",[154832]],[[64215,64215],\"mapped\",[163539]],[[64216,64216],\"mapped\",[40771]],[[64217,64217],\"mapped\",[40846]],[[64218,64255],\"disallowed\"],[[64256,64256],\"mapped\",[102,102]],[[64257,64257],\"mapped\",[102,105]],[[64258,64258],\"mapped\",[102,108]],[[64259,64259],\"mapped\",[102,102,105]],[[64260,64260],\"mapped\",[102,102,108]],[[64261,64262],\"mapped\",[115,116]],[[64263,64274],\"disallowed\"],[[64275,64275],\"mapped\",[1396,1398]],[[64276,64276],\"mapped\",[1396,1381]],[[64277,64277],\"mapped\",[1396,1387]],[[64278,64278],\"mapped\",[1406,1398]],[[64279,64279],\"mapped\",[1396,1389]],[[64280,64284],\"disallowed\"],[[64285,64285],\"mapped\",[1497,1460]],[[64286,64286],\"valid\"],[[64287,64287],\"mapped\",[1522,1463]],[[64288,64288],\"mapped\",[1506]],[[64289,64289],\"mapped\",[1488]],[[64290,64290],\"mapped\",[1491]],[[64291,64291],\"mapped\",[1492]],[[64292,64292],\"mapped\",[1499]],[[64293,64293],\"mapped\",[1500]],[[64294,64294],\"mapped\",[1501]],[[64295,64295],\"mapped\",[1512]],[[64296,64296],\"mapped\",[1514]],[[64297,64297],\"disallowed_STD3_mapped\",[43]],[[64298,64298],\"mapped\",[1513,1473]],[[64299,64299],\"mapped\",[1513,1474]],[[64300,64300],\"mapped\",[1513,1468,1473]],[[64301,64301],\"mapped\",[1513,1468,1474]],[[64302,64302],\"mapped\",[1488,1463]],[[64303,64303],\"mapped\",[1488,1464]],[[64304,64304],\"mapped\",[1488,1468]],[[64305,64305],\"mapped\",[1489,1468]],[[64306,64306],\"mapped\",[1490,1468]],[[64307,64307],\"mapped\",[1491,1468]],[[64308,64308],\"mapped\",[1492,1468]],[[64309,64309],\"mapped\",[1493,1468]],[[64310,64310],\"mapped\",[1494,1468]],[[64311,64311],\"disallowed\"],[[64312,64312],\"mapped\",[1496,1468]],[[64313,64313],\"mapped\",[1497,1468]],[[64314,64314],\"mapped\",[1498,1468]],[[64315,64315],\"mapped\",[1499,1468]],[[64316,64316],\"mapped\",[1500,1468]],[[64317,64317],\"disallowed\"],[[64318,64318],\"mapped\",[1502,1468]],[[64319,64319],\"disallowed\"],[[64320,64320],\"mapped\",[1504,1468]],[[64321,64321],\"mapped\",[1505,1468]],[[64322,64322],\"disallowed\"],[[64323,64323],\"mapped\",[1507,1468]],[[64324,64324],\"mapped\",[1508,1468]],[[64325,64325],\"disallowed\"],[[64326,64326],\"mapped\",[1510,1468]],[[64327,64327],\"mapped\",[1511,1468]],[[64328,64328],\"mapped\",[1512,1468]],[[64329,64329],\"mapped\",[1513,1468]],[[64330,64330],\"mapped\",[1514,1468]],[[64331,64331],\"mapped\",[1493,1465]],[[64332,64332],\"mapped\",[1489,1471]],[[64333,64333],\"mapped\",[1499,1471]],[[64334,64334],\"mapped\",[1508,1471]],[[64335,64335],\"mapped\",[1488,1500]],[[64336,64337],\"mapped\",[1649]],[[64338,64341],\"mapped\",[1659]],[[64342,64345],\"mapped\",[1662]],[[64346,64349],\"mapped\",[1664]],[[64350,64353],\"mapped\",[1658]],[[64354,64357],\"mapped\",[1663]],[[64358,64361],\"mapped\",[1657]],[[64362,64365],\"mapped\",[1700]],[[64366,64369],\"mapped\",[1702]],[[64370,64373],\"mapped\",[1668]],[[64374,64377],\"mapped\",[1667]],[[64378,64381],\"mapped\",[1670]],[[64382,64385],\"mapped\",[1671]],[[64386,64387],\"mapped\",[1677]],[[64388,64389],\"mapped\",[1676]],[[64390,64391],\"mapped\",[1678]],[[64392,64393],\"mapped\",[1672]],[[64394,64395],\"mapped\",[1688]],[[64396,64397],\"mapped\",[1681]],[[64398,64401],\"mapped\",[1705]],[[64402,64405],\"mapped\",[1711]],[[64406,64409],\"mapped\",[1715]],[[64410,64413],\"mapped\",[1713]],[[64414,64415],\"mapped\",[1722]],[[64416,64419],\"mapped\",[1723]],[[64420,64421],\"mapped\",[1728]],[[64422,64425],\"mapped\",[1729]],[[64426,64429],\"mapped\",[1726]],[[64430,64431],\"mapped\",[1746]],[[64432,64433],\"mapped\",[1747]],[[64434,64449],\"valid\",[],\"NV8\"],[[64450,64466],\"disallowed\"],[[64467,64470],\"mapped\",[1709]],[[64471,64472],\"mapped\",[1735]],[[64473,64474],\"mapped\",[1734]],[[64475,64476],\"mapped\",[1736]],[[64477,64477],\"mapped\",[1735,1652]],[[64478,64479],\"mapped\",[1739]],[[64480,64481],\"mapped\",[1733]],[[64482,64483],\"mapped\",[1737]],[[64484,64487],\"mapped\",[1744]],[[64488,64489],\"mapped\",[1609]],[[64490,64491],\"mapped\",[1574,1575]],[[64492,64493],\"mapped\",[1574,1749]],[[64494,64495],\"mapped\",[1574,1608]],[[64496,64497],\"mapped\",[1574,1735]],[[64498,64499],\"mapped\",[1574,1734]],[[64500,64501],\"mapped\",[1574,1736]],[[64502,64504],\"mapped\",[1574,1744]],[[64505,64507],\"mapped\",[1574,1609]],[[64508,64511],\"mapped\",[1740]],[[64512,64512],\"mapped\",[1574,1580]],[[64513,64513],\"mapped\",[1574,1581]],[[64514,64514],\"mapped\",[1574,1605]],[[64515,64515],\"mapped\",[1574,1609]],[[64516,64516],\"mapped\",[1574,1610]],[[64517,64517],\"mapped\",[1576,1580]],[[64518,64518],\"mapped\",[1576,1581]],[[64519,64519],\"mapped\",[1576,1582]],[[64520,64520],\"mapped\",[1576,1605]],[[64521,64521],\"mapped\",[1576,1609]],[[64522,64522],\"mapped\",[1576,1610]],[[64523,64523],\"mapped\",[1578,1580]],[[64524,64524],\"mapped\",[1578,1581]],[[64525,64525],\"mapped\",[1578,1582]],[[64526,64526],\"mapped\",[1578,1605]],[[64527,64527],\"mapped\",[1578,1609]],[[64528,64528],\"mapped\",[1578,1610]],[[64529,64529],\"mapped\",[1579,1580]],[[64530,64530],\"mapped\",[1579,1605]],[[64531,64531],\"mapped\",[1579,1609]],[[64532,64532],\"mapped\",[1579,1610]],[[64533,64533],\"mapped\",[1580,1581]],[[64534,64534],\"mapped\",[1580,1605]],[[64535,64535],\"mapped\",[1581,1580]],[[64536,64536],\"mapped\",[1581,1605]],[[64537,64537],\"mapped\",[1582,1580]],[[64538,64538],\"mapped\",[1582,1581]],[[64539,64539],\"mapped\",[1582,1605]],[[64540,64540],\"mapped\",[1587,1580]],[[64541,64541],\"mapped\",[1587,1581]],[[64542,64542],\"mapped\",[1587,1582]],[[64543,64543],\"mapped\",[1587,1605]],[[64544,64544],\"mapped\",[1589,1581]],[[64545,64545],\"mapped\",[1589,1605]],[[64546,64546],\"mapped\",[1590,1580]],[[64547,64547],\"mapped\",[1590,1581]],[[64548,64548],\"mapped\",[1590,1582]],[[64549,64549],\"mapped\",[1590,1605]],[[64550,64550],\"mapped\",[1591,1581]],[[64551,64551],\"mapped\",[1591,1605]],[[64552,64552],\"mapped\",[1592,1605]],[[64553,64553],\"mapped\",[1593,1580]],[[64554,64554],\"mapped\",[1593,1605]],[[64555,64555],\"mapped\",[1594,1580]],[[64556,64556],\"mapped\",[1594,1605]],[[64557,64557],\"mapped\",[1601,1580]],[[64558,64558],\"mapped\",[1601,1581]],[[64559,64559],\"mapped\",[1601,1582]],[[64560,64560],\"mapped\",[1601,1605]],[[64561,64561],\"mapped\",[1601,1609]],[[64562,64562],\"mapped\",[1601,1610]],[[64563,64563],\"mapped\",[1602,1581]],[[64564,64564],\"mapped\",[1602,1605]],[[64565,64565],\"mapped\",[1602,1609]],[[64566,64566],\"mapped\",[1602,1610]],[[64567,64567],\"mapped\",[1603,1575]],[[64568,64568],\"mapped\",[1603,1580]],[[64569,64569],\"mapped\",[1603,1581]],[[64570,64570],\"mapped\",[1603,1582]],[[64571,64571],\"mapped\",[1603,1604]],[[64572,64572],\"mapped\",[1603,1605]],[[64573,64573],\"mapped\",[1603,1609]],[[64574,64574],\"mapped\",[1603,1610]],[[64575,64575],\"mapped\",[1604,1580]],[[64576,64576],\"mapped\",[1604,1581]],[[64577,64577],\"mapped\",[1604,1582]],[[64578,64578],\"mapped\",[1604,1605]],[[64579,64579],\"mapped\",[1604,1609]],[[64580,64580],\"mapped\",[1604,1610]],[[64581,64581],\"mapped\",[1605,1580]],[[64582,64582],\"mapped\",[1605,1581]],[[64583,64583],\"mapped\",[1605,1582]],[[64584,64584],\"mapped\",[1605,1605]],[[64585,64585],\"mapped\",[1605,1609]],[[64586,64586],\"mapped\",[1605,1610]],[[64587,64587],\"mapped\",[1606,1580]],[[64588,64588],\"mapped\",[1606,1581]],[[64589,64589],\"mapped\",[1606,1582]],[[64590,64590],\"mapped\",[1606,1605]],[[64591,64591],\"mapped\",[1606,1609]],[[64592,64592],\"mapped\",[1606,1610]],[[64593,64593],\"mapped\",[1607,1580]],[[64594,64594],\"mapped\",[1607,1605]],[[64595,64595],\"mapped\",[1607,1609]],[[64596,64596],\"mapped\",[1607,1610]],[[64597,64597],\"mapped\",[1610,1580]],[[64598,64598],\"mapped\",[1610,1581]],[[64599,64599],\"mapped\",[1610,1582]],[[64600,64600],\"mapped\",[1610,1605]],[[64601,64601],\"mapped\",[1610,1609]],[[64602,64602],\"mapped\",[1610,1610]],[[64603,64603],\"mapped\",[1584,1648]],[[64604,64604],\"mapped\",[1585,1648]],[[64605,64605],\"mapped\",[1609,1648]],[[64606,64606],\"disallowed_STD3_mapped\",[32,1612,1617]],[[64607,64607],\"disallowed_STD3_mapped\",[32,1613,1617]],[[64608,64608],\"disallowed_STD3_mapped\",[32,1614,1617]],[[64609,64609],\"disallowed_STD3_mapped\",[32,1615,1617]],[[64610,64610],\"disallowed_STD3_mapped\",[32,1616,1617]],[[64611,64611],\"disallowed_STD3_mapped\",[32,1617,1648]],[[64612,64612],\"mapped\",[1574,1585]],[[64613,64613],\"mapped\",[1574,1586]],[[64614,64614],\"mapped\",[1574,1605]],[[64615,64615],\"mapped\",[1574,1606]],[[64616,64616],\"mapped\",[1574,1609]],[[64617,64617],\"mapped\",[1574,1610]],[[64618,64618],\"mapped\",[1576,1585]],[[64619,64619],\"mapped\",[1576,1586]],[[64620,64620],\"mapped\",[1576,1605]],[[64621,64621],\"mapped\",[1576,1606]],[[64622,64622],\"mapped\",[1576,1609]],[[64623,64623],\"mapped\",[1576,1610]],[[64624,64624],\"mapped\",[1578,1585]],[[64625,64625],\"mapped\",[1578,1586]],[[64626,64626],\"mapped\",[1578,1605]],[[64627,64627],\"mapped\",[1578,1606]],[[64628,64628],\"mapped\",[1578,1609]],[[64629,64629],\"mapped\",[1578,1610]],[[64630,64630],\"mapped\",[1579,1585]],[[64631,64631],\"mapped\",[1579,1586]],[[64632,64632],\"mapped\",[1579,1605]],[[64633,64633],\"mapped\",[1579,1606]],[[64634,64634],\"mapped\",[1579,1609]],[[64635,64635],\"mapped\",[1579,1610]],[[64636,64636],\"mapped\",[1601,1609]],[[64637,64637],\"mapped\",[1601,1610]],[[64638,64638],\"mapped\",[1602,1609]],[[64639,64639],\"mapped\",[1602,1610]],[[64640,64640],\"mapped\",[1603,1575]],[[64641,64641],\"mapped\",[1603,1604]],[[64642,64642],\"mapped\",[1603,1605]],[[64643,64643],\"mapped\",[1603,1609]],[[64644,64644],\"mapped\",[1603,1610]],[[64645,64645],\"mapped\",[1604,1605]],[[64646,64646],\"mapped\",[1604,1609]],[[64647,64647],\"mapped\",[1604,1610]],[[64648,64648],\"mapped\",[1605,1575]],[[64649,64649],\"mapped\",[1605,1605]],[[64650,64650],\"mapped\",[1606,1585]],[[64651,64651],\"mapped\",[1606,1586]],[[64652,64652],\"mapped\",[1606,1605]],[[64653,64653],\"mapped\",[1606,1606]],[[64654,64654],\"mapped\",[1606,1609]],[[64655,64655],\"mapped\",[1606,1610]],[[64656,64656],\"mapped\",[1609,1648]],[[64657,64657],\"mapped\",[1610,1585]],[[64658,64658],\"mapped\",[1610,1586]],[[64659,64659],\"mapped\",[1610,1605]],[[64660,64660],\"mapped\",[1610,1606]],[[64661,64661],\"mapped\",[1610,1609]],[[64662,64662],\"mapped\",[1610,1610]],[[64663,64663],\"mapped\",[1574,1580]],[[64664,64664],\"mapped\",[1574,1581]],[[64665,64665],\"mapped\",[1574,1582]],[[64666,64666],\"mapped\",[1574,1605]],[[64667,64667],\"mapped\",[1574,1607]],[[64668,64668],\"mapped\",[1576,1580]],[[64669,64669],\"mapped\",[1576,1581]],[[64670,64670],\"mapped\",[1576,1582]],[[64671,64671],\"mapped\",[1576,1605]],[[64672,64672],\"mapped\",[1576,1607]],[[64673,64673],\"mapped\",[1578,1580]],[[64674,64674],\"mapped\",[1578,1581]],[[64675,64675],\"mapped\",[1578,1582]],[[64676,64676],\"mapped\",[1578,1605]],[[64677,64677],\"mapped\",[1578,1607]],[[64678,64678],\"mapped\",[1579,1605]],[[64679,64679],\"mapped\",[1580,1581]],[[64680,64680],\"mapped\",[1580,1605]],[[64681,64681],\"mapped\",[1581,1580]],[[64682,64682],\"mapped\",[1581,1605]],[[64683,64683],\"mapped\",[1582,1580]],[[64684,64684],\"mapped\",[1582,1605]],[[64685,64685],\"mapped\",[1587,1580]],[[64686,64686],\"mapped\",[1587,1581]],[[64687,64687],\"mapped\",[1587,1582]],[[64688,64688],\"mapped\",[1587,1605]],[[64689,64689],\"mapped\",[1589,1581]],[[64690,64690],\"mapped\",[1589,1582]],[[64691,64691],\"mapped\",[1589,1605]],[[64692,64692],\"mapped\",[1590,1580]],[[64693,64693],\"mapped\",[1590,1581]],[[64694,64694],\"mapped\",[1590,1582]],[[64695,64695],\"mapped\",[1590,1605]],[[64696,64696],\"mapped\",[1591,1581]],[[64697,64697],\"mapped\",[1592,1605]],[[64698,64698],\"mapped\",[1593,1580]],[[64699,64699],\"mapped\",[1593,1605]],[[64700,64700],\"mapped\",[1594,1580]],[[64701,64701],\"mapped\",[1594,1605]],[[64702,64702],\"mapped\",[1601,1580]],[[64703,64703],\"mapped\",[1601,1581]],[[64704,64704],\"mapped\",[1601,1582]],[[64705,64705],\"mapped\",[1601,1605]],[[64706,64706],\"mapped\",[1602,1581]],[[64707,64707],\"mapped\",[1602,1605]],[[64708,64708],\"mapped\",[1603,1580]],[[64709,64709],\"mapped\",[1603,1581]],[[64710,64710],\"mapped\",[1603,1582]],[[64711,64711],\"mapped\",[1603,1604]],[[64712,64712],\"mapped\",[1603,1605]],[[64713,64713],\"mapped\",[1604,1580]],[[64714,64714],\"mapped\",[1604,1581]],[[64715,64715],\"mapped\",[1604,1582]],[[64716,64716],\"mapped\",[1604,1605]],[[64717,64717],\"mapped\",[1604,1607]],[[64718,64718],\"mapped\",[1605,1580]],[[64719,64719],\"mapped\",[1605,1581]],[[64720,64720],\"mapped\",[1605,1582]],[[64721,64721],\"mapped\",[1605,1605]],[[64722,64722],\"mapped\",[1606,1580]],[[64723,64723],\"mapped\",[1606,1581]],[[64724,64724],\"mapped\",[1606,1582]],[[64725,64725],\"mapped\",[1606,1605]],[[64726,64726],\"mapped\",[1606,1607]],[[64727,64727],\"mapped\",[1607,1580]],[[64728,64728],\"mapped\",[1607,1605]],[[64729,64729],\"mapped\",[1607,1648]],[[64730,64730],\"mapped\",[1610,1580]],[[64731,64731],\"mapped\",[1610,1581]],[[64732,64732],\"mapped\",[1610,1582]],[[64733,64733],\"mapped\",[1610,1605]],[[64734,64734],\"mapped\",[1610,1607]],[[64735,64735],\"mapped\",[1574,1605]],[[64736,64736],\"mapped\",[1574,1607]],[[64737,64737],\"mapped\",[1576,1605]],[[64738,64738],\"mapped\",[1576,1607]],[[64739,64739],\"mapped\",[1578,1605]],[[64740,64740],\"mapped\",[1578,1607]],[[64741,64741],\"mapped\",[1579,1605]],[[64742,64742],\"mapped\",[1579,1607]],[[64743,64743],\"mapped\",[1587,1605]],[[64744,64744],\"mapped\",[1587,1607]],[[64745,64745],\"mapped\",[1588,1605]],[[64746,64746],\"mapped\",[1588,1607]],[[64747,64747],\"mapped\",[1603,1604]],[[64748,64748],\"mapped\",[1603,1605]],[[64749,64749],\"mapped\",[1604,1605]],[[64750,64750],\"mapped\",[1606,1605]],[[64751,64751],\"mapped\",[1606,1607]],[[64752,64752],\"mapped\",[1610,1605]],[[64753,64753],\"mapped\",[1610,1607]],[[64754,64754],\"mapped\",[1600,1614,1617]],[[64755,64755],\"mapped\",[1600,1615,1617]],[[64756,64756],\"mapped\",[1600,1616,1617]],[[64757,64757],\"mapped\",[1591,1609]],[[64758,64758],\"mapped\",[1591,1610]],[[64759,64759],\"mapped\",[1593,1609]],[[64760,64760],\"mapped\",[1593,1610]],[[64761,64761],\"mapped\",[1594,1609]],[[64762,64762],\"mapped\",[1594,1610]],[[64763,64763],\"mapped\",[1587,1609]],[[64764,64764],\"mapped\",[1587,1610]],[[64765,64765],\"mapped\",[1588,1609]],[[64766,64766],\"mapped\",[1588,1610]],[[64767,64767],\"mapped\",[1581,1609]],[[64768,64768],\"mapped\",[1581,1610]],[[64769,64769],\"mapped\",[1580,1609]],[[64770,64770],\"mapped\",[1580,1610]],[[64771,64771],\"mapped\",[1582,1609]],[[64772,64772],\"mapped\",[1582,1610]],[[64773,64773],\"mapped\",[1589,1609]],[[64774,64774],\"mapped\",[1589,1610]],[[64775,64775],\"mapped\",[1590,1609]],[[64776,64776],\"mapped\",[1590,1610]],[[64777,64777],\"mapped\",[1588,1580]],[[64778,64778],\"mapped\",[1588,1581]],[[64779,64779],\"mapped\",[1588,1582]],[[64780,64780],\"mapped\",[1588,1605]],[[64781,64781],\"mapped\",[1588,1585]],[[64782,64782],\"mapped\",[1587,1585]],[[64783,64783],\"mapped\",[1589,1585]],[[64784,64784],\"mapped\",[1590,1585]],[[64785,64785],\"mapped\",[1591,1609]],[[64786,64786],\"mapped\",[1591,1610]],[[64787,64787],\"mapped\",[1593,1609]],[[64788,64788],\"mapped\",[1593,1610]],[[64789,64789],\"mapped\",[1594,1609]],[[64790,64790],\"mapped\",[1594,1610]],[[64791,64791],\"mapped\",[1587,1609]],[[64792,64792],\"mapped\",[1587,1610]],[[64793,64793],\"mapped\",[1588,1609]],[[64794,64794],\"mapped\",[1588,1610]],[[64795,64795],\"mapped\",[1581,1609]],[[64796,64796],\"mapped\",[1581,1610]],[[64797,64797],\"mapped\",[1580,1609]],[[64798,64798],\"mapped\",[1580,1610]],[[64799,64799],\"mapped\",[1582,1609]],[[64800,64800],\"mapped\",[1582,1610]],[[64801,64801],\"mapped\",[1589,1609]],[[64802,64802],\"mapped\",[1589,1610]],[[64803,64803],\"mapped\",[1590,1609]],[[64804,64804],\"mapped\",[1590,1610]],[[64805,64805],\"mapped\",[1588,1580]],[[64806,64806],\"mapped\",[1588,1581]],[[64807,64807],\"mapped\",[1588,1582]],[[64808,64808],\"mapped\",[1588,1605]],[[64809,64809],\"mapped\",[1588,1585]],[[64810,64810],\"mapped\",[1587,1585]],[[64811,64811],\"mapped\",[1589,1585]],[[64812,64812],\"mapped\",[1590,1585]],[[64813,64813],\"mapped\",[1588,1580]],[[64814,64814],\"mapped\",[1588,1581]],[[64815,64815],\"mapped\",[1588,1582]],[[64816,64816],\"mapped\",[1588,1605]],[[64817,64817],\"mapped\",[1587,1607]],[[64818,64818],\"mapped\",[1588,1607]],[[64819,64819],\"mapped\",[1591,1605]],[[64820,64820],\"mapped\",[1587,1580]],[[64821,64821],\"mapped\",[1587,1581]],[[64822,64822],\"mapped\",[1587,1582]],[[64823,64823],\"mapped\",[1588,1580]],[[64824,64824],\"mapped\",[1588,1581]],[[64825,64825],\"mapped\",[1588,1582]],[[64826,64826],\"mapped\",[1591,1605]],[[64827,64827],\"mapped\",[1592,1605]],[[64828,64829],\"mapped\",[1575,1611]],[[64830,64831],\"valid\",[],\"NV8\"],[[64832,64847],\"disallowed\"],[[64848,64848],\"mapped\",[1578,1580,1605]],[[64849,64850],\"mapped\",[1578,1581,1580]],[[64851,64851],\"mapped\",[1578,1581,1605]],[[64852,64852],\"mapped\",[1578,1582,1605]],[[64853,64853],\"mapped\",[1578,1605,1580]],[[64854,64854],\"mapped\",[1578,1605,1581]],[[64855,64855],\"mapped\",[1578,1605,1582]],[[64856,64857],\"mapped\",[1580,1605,1581]],[[64858,64858],\"mapped\",[1581,1605,1610]],[[64859,64859],\"mapped\",[1581,1605,1609]],[[64860,64860],\"mapped\",[1587,1581,1580]],[[64861,64861],\"mapped\",[1587,1580,1581]],[[64862,64862],\"mapped\",[1587,1580,1609]],[[64863,64864],\"mapped\",[1587,1605,1581]],[[64865,64865],\"mapped\",[1587,1605,1580]],[[64866,64867],\"mapped\",[1587,1605,1605]],[[64868,64869],\"mapped\",[1589,1581,1581]],[[64870,64870],\"mapped\",[1589,1605,1605]],[[64871,64872],\"mapped\",[1588,1581,1605]],[[64873,64873],\"mapped\",[1588,1580,1610]],[[64874,64875],\"mapped\",[1588,1605,1582]],[[64876,64877],\"mapped\",[1588,1605,1605]],[[64878,64878],\"mapped\",[1590,1581,1609]],[[64879,64880],\"mapped\",[1590,1582,1605]],[[64881,64882],\"mapped\",[1591,1605,1581]],[[64883,64883],\"mapped\",[1591,1605,1605]],[[64884,64884],\"mapped\",[1591,1605,1610]],[[64885,64885],\"mapped\",[1593,1580,1605]],[[64886,64887],\"mapped\",[1593,1605,1605]],[[64888,64888],\"mapped\",[1593,1605,1609]],[[64889,64889],\"mapped\",[1594,1605,1605]],[[64890,64890],\"mapped\",[1594,1605,1610]],[[64891,64891],\"mapped\",[1594,1605,1609]],[[64892,64893],\"mapped\",[1601,1582,1605]],[[64894,64894],\"mapped\",[1602,1605,1581]],[[64895,64895],\"mapped\",[1602,1605,1605]],[[64896,64896],\"mapped\",[1604,1581,1605]],[[64897,64897],\"mapped\",[1604,1581,1610]],[[64898,64898],\"mapped\",[1604,1581,1609]],[[64899,64900],\"mapped\",[1604,1580,1580]],[[64901,64902],\"mapped\",[1604,1582,1605]],[[64903,64904],\"mapped\",[1604,1605,1581]],[[64905,64905],\"mapped\",[1605,1581,1580]],[[64906,64906],\"mapped\",[1605,1581,1605]],[[64907,64907],\"mapped\",[1605,1581,1610]],[[64908,64908],\"mapped\",[1605,1580,1581]],[[64909,64909],\"mapped\",[1605,1580,1605]],[[64910,64910],\"mapped\",[1605,1582,1580]],[[64911,64911],\"mapped\",[1605,1582,1605]],[[64912,64913],\"disallowed\"],[[64914,64914],\"mapped\",[1605,1580,1582]],[[64915,64915],\"mapped\",[1607,1605,1580]],[[64916,64916],\"mapped\",[1607,1605,1605]],[[64917,64917],\"mapped\",[1606,1581,1605]],[[64918,64918],\"mapped\",[1606,1581,1609]],[[64919,64920],\"mapped\",[1606,1580,1605]],[[64921,64921],\"mapped\",[1606,1580,1609]],[[64922,64922],\"mapped\",[1606,1605,1610]],[[64923,64923],\"mapped\",[1606,1605,1609]],[[64924,64925],\"mapped\",[1610,1605,1605]],[[64926,64926],\"mapped\",[1576,1582,1610]],[[64927,64927],\"mapped\",[1578,1580,1610]],[[64928,64928],\"mapped\",[1578,1580,1609]],[[64929,64929],\"mapped\",[1578,1582,1610]],[[64930,64930],\"mapped\",[1578,1582,1609]],[[64931,64931],\"mapped\",[1578,1605,1610]],[[64932,64932],\"mapped\",[1578,1605,1609]],[[64933,64933],\"mapped\",[1580,1605,1610]],[[64934,64934],\"mapped\",[1580,1581,1609]],[[64935,64935],\"mapped\",[1580,1605,1609]],[[64936,64936],\"mapped\",[1587,1582,1609]],[[64937,64937],\"mapped\",[1589,1581,1610]],[[64938,64938],\"mapped\",[1588,1581,1610]],[[64939,64939],\"mapped\",[1590,1581,1610]],[[64940,64940],\"mapped\",[1604,1580,1610]],[[64941,64941],\"mapped\",[1604,1605,1610]],[[64942,64942],\"mapped\",[1610,1581,1610]],[[64943,64943],\"mapped\",[1610,1580,1610]],[[64944,64944],\"mapped\",[1610,1605,1610]],[[64945,64945],\"mapped\",[1605,1605,1610]],[[64946,64946],\"mapped\",[1602,1605,1610]],[[64947,64947],\"mapped\",[1606,1581,1610]],[[64948,64948],\"mapped\",[1602,1605,1581]],[[64949,64949],\"mapped\",[1604,1581,1605]],[[64950,64950],\"mapped\",[1593,1605,1610]],[[64951,64951],\"mapped\",[1603,1605,1610]],[[64952,64952],\"mapped\",[1606,1580,1581]],[[64953,64953],\"mapped\",[1605,1582,1610]],[[64954,64954],\"mapped\",[1604,1580,1605]],[[64955,64955],\"mapped\",[1603,1605,1605]],[[64956,64956],\"mapped\",[1604,1580,1605]],[[64957,64957],\"mapped\",[1606,1580,1581]],[[64958,64958],\"mapped\",[1580,1581,1610]],[[64959,64959],\"mapped\",[1581,1580,1610]],[[64960,64960],\"mapped\",[1605,1580,1610]],[[64961,64961],\"mapped\",[1601,1605,1610]],[[64962,64962],\"mapped\",[1576,1581,1610]],[[64963,64963],\"mapped\",[1603,1605,1605]],[[64964,64964],\"mapped\",[1593,1580,1605]],[[64965,64965],\"mapped\",[1589,1605,1605]],[[64966,64966],\"mapped\",[1587,1582,1610]],[[64967,64967],\"mapped\",[1606,1580,1610]],[[64968,64975],\"disallowed\"],[[64976,65007],\"disallowed\"],[[65008,65008],\"mapped\",[1589,1604,1746]],[[65009,65009],\"mapped\",[1602,1604,1746]],[[65010,65010],\"mapped\",[1575,1604,1604,1607]],[[65011,65011],\"mapped\",[1575,1603,1576,1585]],[[65012,65012],\"mapped\",[1605,1581,1605,1583]],[[65013,65013],\"mapped\",[1589,1604,1593,1605]],[[65014,65014],\"mapped\",[1585,1587,1608,1604]],[[65015,65015],\"mapped\",[1593,1604,1610,1607]],[[65016,65016],\"mapped\",[1608,1587,1604,1605]],[[65017,65017],\"mapped\",[1589,1604,1609]],[[65018,65018],\"disallowed_STD3_mapped\",[1589,1604,1609,32,1575,1604,1604,1607,32,1593,1604,1610,1607,32,1608,1587,1604,1605]],[[65019,65019],\"disallowed_STD3_mapped\",[1580,1604,32,1580,1604,1575,1604,1607]],[[65020,65020],\"mapped\",[1585,1740,1575,1604]],[[65021,65021],\"valid\",[],\"NV8\"],[[65022,65023],\"disallowed\"],[[65024,65039],\"ignored\"],[[65040,65040],\"disallowed_STD3_mapped\",[44]],[[65041,65041],\"mapped\",[12289]],[[65042,65042],\"disallowed\"],[[65043,65043],\"disallowed_STD3_mapped\",[58]],[[65044,65044],\"disallowed_STD3_mapped\",[59]],[[65045,65045],\"disallowed_STD3_mapped\",[33]],[[65046,65046],\"disallowed_STD3_mapped\",[63]],[[65047,65047],\"mapped\",[12310]],[[65048,65048],\"mapped\",[12311]],[[65049,65049],\"disallowed\"],[[65050,65055],\"disallowed\"],[[65056,65059],\"valid\"],[[65060,65062],\"valid\"],[[65063,65069],\"valid\"],[[65070,65071],\"valid\"],[[65072,65072],\"disallowed\"],[[65073,65073],\"mapped\",[8212]],[[65074,65074],\"mapped\",[8211]],[[65075,65076],\"disallowed_STD3_mapped\",[95]],[[65077,65077],\"disallowed_STD3_mapped\",[40]],[[65078,65078],\"disallowed_STD3_mapped\",[41]],[[65079,65079],\"disallowed_STD3_mapped\",[123]],[[65080,65080],\"disallowed_STD3_mapped\",[125]],[[65081,65081],\"mapped\",[12308]],[[65082,65082],\"mapped\",[12309]],[[65083,65083],\"mapped\",[12304]],[[65084,65084],\"mapped\",[12305]],[[65085,65085],\"mapped\",[12298]],[[65086,65086],\"mapped\",[12299]],[[65087,65087],\"mapped\",[12296]],[[65088,65088],\"mapped\",[12297]],[[65089,65089],\"mapped\",[12300]],[[65090,65090],\"mapped\",[12301]],[[65091,65091],\"mapped\",[12302]],[[65092,65092],\"mapped\",[12303]],[[65093,65094],\"valid\",[],\"NV8\"],[[65095,65095],\"disallowed_STD3_mapped\",[91]],[[65096,65096],\"disallowed_STD3_mapped\",[93]],[[65097,65100],\"disallowed_STD3_mapped\",[32,773]],[[65101,65103],\"disallowed_STD3_mapped\",[95]],[[65104,65104],\"disallowed_STD3_mapped\",[44]],[[65105,65105],\"mapped\",[12289]],[[65106,65106],\"disallowed\"],[[65107,65107],\"disallowed\"],[[65108,65108],\"disallowed_STD3_mapped\",[59]],[[65109,65109],\"disallowed_STD3_mapped\",[58]],[[65110,65110],\"disallowed_STD3_mapped\",[63]],[[65111,65111],\"disallowed_STD3_mapped\",[33]],[[65112,65112],\"mapped\",[8212]],[[65113,65113],\"disallowed_STD3_mapped\",[40]],[[65114,65114],\"disallowed_STD3_mapped\",[41]],[[65115,65115],\"disallowed_STD3_mapped\",[123]],[[65116,65116],\"disallowed_STD3_mapped\",[125]],[[65117,65117],\"mapped\",[12308]],[[65118,65118],\"mapped\",[12309]],[[65119,65119],\"disallowed_STD3_mapped\",[35]],[[65120,65120],\"disallowed_STD3_mapped\",[38]],[[65121,65121],\"disallowed_STD3_mapped\",[42]],[[65122,65122],\"disallowed_STD3_mapped\",[43]],[[65123,65123],\"mapped\",[45]],[[65124,65124],\"disallowed_STD3_mapped\",[60]],[[65125,65125],\"disallowed_STD3_mapped\",[62]],[[65126,65126],\"disallowed_STD3_mapped\",[61]],[[65127,65127],\"disallowed\"],[[65128,65128],\"disallowed_STD3_mapped\",[92]],[[65129,65129],\"disallowed_STD3_mapped\",[36]],[[65130,65130],\"disallowed_STD3_mapped\",[37]],[[65131,65131],\"disallowed_STD3_mapped\",[64]],[[65132,65135],\"disallowed\"],[[65136,65136],\"disallowed_STD3_mapped\",[32,1611]],[[65137,65137],\"mapped\",[1600,1611]],[[65138,65138],\"disallowed_STD3_mapped\",[32,1612]],[[65139,65139],\"valid\"],[[65140,65140],\"disallowed_STD3_mapped\",[32,1613]],[[65141,65141],\"disallowed\"],[[65142,65142],\"disallowed_STD3_mapped\",[32,1614]],[[65143,65143],\"mapped\",[1600,1614]],[[65144,65144],\"disallowed_STD3_mapped\",[32,1615]],[[65145,65145],\"mapped\",[1600,1615]],[[65146,65146],\"disallowed_STD3_mapped\",[32,1616]],[[65147,65147],\"mapped\",[1600,1616]],[[65148,65148],\"disallowed_STD3_mapped\",[32,1617]],[[65149,65149],\"mapped\",[1600,1617]],[[65150,65150],\"disallowed_STD3_mapped\",[32,1618]],[[65151,65151],\"mapped\",[1600,1618]],[[65152,65152],\"mapped\",[1569]],[[65153,65154],\"mapped\",[1570]],[[65155,65156],\"mapped\",[1571]],[[65157,65158],\"mapped\",[1572]],[[65159,65160],\"mapped\",[1573]],[[65161,65164],\"mapped\",[1574]],[[65165,65166],\"mapped\",[1575]],[[65167,65170],\"mapped\",[1576]],[[65171,65172],\"mapped\",[1577]],[[65173,65176],\"mapped\",[1578]],[[65177,65180],\"mapped\",[1579]],[[65181,65184],\"mapped\",[1580]],[[65185,65188],\"mapped\",[1581]],[[65189,65192],\"mapped\",[1582]],[[65193,65194],\"mapped\",[1583]],[[65195,65196],\"mapped\",[1584]],[[65197,65198],\"mapped\",[1585]],[[65199,65200],\"mapped\",[1586]],[[65201,65204],\"mapped\",[1587]],[[65205,65208],\"mapped\",[1588]],[[65209,65212],\"mapped\",[1589]],[[65213,65216],\"mapped\",[1590]],[[65217,65220],\"mapped\",[1591]],[[65221,65224],\"mapped\",[1592]],[[65225,65228],\"mapped\",[1593]],[[65229,65232],\"mapped\",[1594]],[[65233,65236],\"mapped\",[1601]],[[65237,65240],\"mapped\",[1602]],[[65241,65244],\"mapped\",[1603]],[[65245,65248],\"mapped\",[1604]],[[65249,65252],\"mapped\",[1605]],[[65253,65256],\"mapped\",[1606]],[[65257,65260],\"mapped\",[1607]],[[65261,65262],\"mapped\",[1608]],[[65263,65264],\"mapped\",[1609]],[[65265,65268],\"mapped\",[1610]],[[65269,65270],\"mapped\",[1604,1570]],[[65271,65272],\"mapped\",[1604,1571]],[[65273,65274],\"mapped\",[1604,1573]],[[65275,65276],\"mapped\",[1604,1575]],[[65277,65278],\"disallowed\"],[[65279,65279],\"ignored\"],[[65280,65280],\"disallowed\"],[[65281,65281],\"disallowed_STD3_mapped\",[33]],[[65282,65282],\"disallowed_STD3_mapped\",[34]],[[65283,65283],\"disallowed_STD3_mapped\",[35]],[[65284,65284],\"disallowed_STD3_mapped\",[36]],[[65285,65285],\"disallowed_STD3_mapped\",[37]],[[65286,65286],\"disallowed_STD3_mapped\",[38]],[[65287,65287],\"disallowed_STD3_mapped\",[39]],[[65288,65288],\"disallowed_STD3_mapped\",[40]],[[65289,65289],\"disallowed_STD3_mapped\",[41]],[[65290,65290],\"disallowed_STD3_mapped\",[42]],[[65291,65291],\"disallowed_STD3_mapped\",[43]],[[65292,65292],\"disallowed_STD3_mapped\",[44]],[[65293,65293],\"mapped\",[45]],[[65294,65294],\"mapped\",[46]],[[65295,65295],\"disallowed_STD3_mapped\",[47]],[[65296,65296],\"mapped\",[48]],[[65297,65297],\"mapped\",[49]],[[65298,65298],\"mapped\",[50]],[[65299,65299],\"mapped\",[51]],[[65300,65300],\"mapped\",[52]],[[65301,65301],\"mapped\",[53]],[[65302,65302],\"mapped\",[54]],[[65303,65303],\"mapped\",[55]],[[65304,65304],\"mapped\",[56]],[[65305,65305],\"mapped\",[57]],[[65306,65306],\"disallowed_STD3_mapped\",[58]],[[65307,65307],\"disallowed_STD3_mapped\",[59]],[[65308,65308],\"disallowed_STD3_mapped\",[60]],[[65309,65309],\"disallowed_STD3_mapped\",[61]],[[65310,65310],\"disallowed_STD3_mapped\",[62]],[[65311,65311],\"disallowed_STD3_mapped\",[63]],[[65312,65312],\"disallowed_STD3_mapped\",[64]],[[65313,65313],\"mapped\",[97]],[[65314,65314],\"mapped\",[98]],[[65315,65315],\"mapped\",[99]],[[65316,65316],\"mapped\",[100]],[[65317,65317],\"mapped\",[101]],[[65318,65318],\"mapped\",[102]],[[65319,65319],\"mapped\",[103]],[[65320,65320],\"mapped\",[104]],[[65321,65321],\"mapped\",[105]],[[65322,65322],\"mapped\",[106]],[[65323,65323],\"mapped\",[107]],[[65324,65324],\"mapped\",[108]],[[65325,65325],\"mapped\",[109]],[[65326,65326],\"mapped\",[110]],[[65327,65327],\"mapped\",[111]],[[65328,65328],\"mapped\",[112]],[[65329,65329],\"mapped\",[113]],[[65330,65330],\"mapped\",[114]],[[65331,65331],\"mapped\",[115]],[[65332,65332],\"mapped\",[116]],[[65333,65333],\"mapped\",[117]],[[65334,65334],\"mapped\",[118]],[[65335,65335],\"mapped\",[119]],[[65336,65336],\"mapped\",[120]],[[65337,65337],\"mapped\",[121]],[[65338,65338],\"mapped\",[122]],[[65339,65339],\"disallowed_STD3_mapped\",[91]],[[65340,65340],\"disallowed_STD3_mapped\",[92]],[[65341,65341],\"disallowed_STD3_mapped\",[93]],[[65342,65342],\"disallowed_STD3_mapped\",[94]],[[65343,65343],\"disallowed_STD3_mapped\",[95]],[[65344,65344],\"disallowed_STD3_mapped\",[96]],[[65345,65345],\"mapped\",[97]],[[65346,65346],\"mapped\",[98]],[[65347,65347],\"mapped\",[99]],[[65348,65348],\"mapped\",[100]],[[65349,65349],\"mapped\",[101]],[[65350,65350],\"mapped\",[102]],[[65351,65351],\"mapped\",[103]],[[65352,65352],\"mapped\",[104]],[[65353,65353],\"mapped\",[105]],[[65354,65354],\"mapped\",[106]],[[65355,65355],\"mapped\",[107]],[[65356,65356],\"mapped\",[108]],[[65357,65357],\"mapped\",[109]],[[65358,65358],\"mapped\",[110]],[[65359,65359],\"mapped\",[111]],[[65360,65360],\"mapped\",[112]],[[65361,65361],\"mapped\",[113]],[[65362,65362],\"mapped\",[114]],[[65363,65363],\"mapped\",[115]],[[65364,65364],\"mapped\",[116]],[[65365,65365],\"mapped\",[117]],[[65366,65366],\"mapped\",[118]],[[65367,65367],\"mapped\",[119]],[[65368,65368],\"mapped\",[120]],[[65369,65369],\"mapped\",[121]],[[65370,65370],\"mapped\",[122]],[[65371,65371],\"disallowed_STD3_mapped\",[123]],[[65372,65372],\"disallowed_STD3_mapped\",[124]],[[65373,65373],\"disallowed_STD3_mapped\",[125]],[[65374,65374],\"disallowed_STD3_mapped\",[126]],[[65375,65375],\"mapped\",[10629]],[[65376,65376],\"mapped\",[10630]],[[65377,65377],\"mapped\",[46]],[[65378,65378],\"mapped\",[12300]],[[65379,65379],\"mapped\",[12301]],[[65380,65380],\"mapped\",[12289]],[[65381,65381],\"mapped\",[12539]],[[65382,65382],\"mapped\",[12530]],[[65383,65383],\"mapped\",[12449]],[[65384,65384],\"mapped\",[12451]],[[65385,65385],\"mapped\",[12453]],[[65386,65386],\"mapped\",[12455]],[[65387,65387],\"mapped\",[12457]],[[65388,65388],\"mapped\",[12515]],[[65389,65389],\"mapped\",[12517]],[[65390,65390],\"mapped\",[12519]],[[65391,65391],\"mapped\",[12483]],[[65392,65392],\"mapped\",[12540]],[[65393,65393],\"mapped\",[12450]],[[65394,65394],\"mapped\",[12452]],[[65395,65395],\"mapped\",[12454]],[[65396,65396],\"mapped\",[12456]],[[65397,65397],\"mapped\",[12458]],[[65398,65398],\"mapped\",[12459]],[[65399,65399],\"mapped\",[12461]],[[65400,65400],\"mapped\",[12463]],[[65401,65401],\"mapped\",[12465]],[[65402,65402],\"mapped\",[12467]],[[65403,65403],\"mapped\",[12469]],[[65404,65404],\"mapped\",[12471]],[[65405,65405],\"mapped\",[12473]],[[65406,65406],\"mapped\",[12475]],[[65407,65407],\"mapped\",[12477]],[[65408,65408],\"mapped\",[12479]],[[65409,65409],\"mapped\",[12481]],[[65410,65410],\"mapped\",[12484]],[[65411,65411],\"mapped\",[12486]],[[65412,65412],\"mapped\",[12488]],[[65413,65413],\"mapped\",[12490]],[[65414,65414],\"mapped\",[12491]],[[65415,65415],\"mapped\",[12492]],[[65416,65416],\"mapped\",[12493]],[[65417,65417],\"mapped\",[12494]],[[65418,65418],\"mapped\",[12495]],[[65419,65419],\"mapped\",[12498]],[[65420,65420],\"mapped\",[12501]],[[65421,65421],\"mapped\",[12504]],[[65422,65422],\"mapped\",[12507]],[[65423,65423],\"mapped\",[12510]],[[65424,65424],\"mapped\",[12511]],[[65425,65425],\"mapped\",[12512]],[[65426,65426],\"mapped\",[12513]],[[65427,65427],\"mapped\",[12514]],[[65428,65428],\"mapped\",[12516]],[[65429,65429],\"mapped\",[12518]],[[65430,65430],\"mapped\",[12520]],[[65431,65431],\"mapped\",[12521]],[[65432,65432],\"mapped\",[12522]],[[65433,65433],\"mapped\",[12523]],[[65434,65434],\"mapped\",[12524]],[[65435,65435],\"mapped\",[12525]],[[65436,65436],\"mapped\",[12527]],[[65437,65437],\"mapped\",[12531]],[[65438,65438],\"mapped\",[12441]],[[65439,65439],\"mapped\",[12442]],[[65440,65440],\"disallowed\"],[[65441,65441],\"mapped\",[4352]],[[65442,65442],\"mapped\",[4353]],[[65443,65443],\"mapped\",[4522]],[[65444,65444],\"mapped\",[4354]],[[65445,65445],\"mapped\",[4524]],[[65446,65446],\"mapped\",[4525]],[[65447,65447],\"mapped\",[4355]],[[65448,65448],\"mapped\",[4356]],[[65449,65449],\"mapped\",[4357]],[[65450,65450],\"mapped\",[4528]],[[65451,65451],\"mapped\",[4529]],[[65452,65452],\"mapped\",[4530]],[[65453,65453],\"mapped\",[4531]],[[65454,65454],\"mapped\",[4532]],[[65455,65455],\"mapped\",[4533]],[[65456,65456],\"mapped\",[4378]],[[65457,65457],\"mapped\",[4358]],[[65458,65458],\"mapped\",[4359]],[[65459,65459],\"mapped\",[4360]],[[65460,65460],\"mapped\",[4385]],[[65461,65461],\"mapped\",[4361]],[[65462,65462],\"mapped\",[4362]],[[65463,65463],\"mapped\",[4363]],[[65464,65464],\"mapped\",[4364]],[[65465,65465],\"mapped\",[4365]],[[65466,65466],\"mapped\",[4366]],[[65467,65467],\"mapped\",[4367]],[[65468,65468],\"mapped\",[4368]],[[65469,65469],\"mapped\",[4369]],[[65470,65470],\"mapped\",[4370]],[[65471,65473],\"disallowed\"],[[65474,65474],\"mapped\",[4449]],[[65475,65475],\"mapped\",[4450]],[[65476,65476],\"mapped\",[4451]],[[65477,65477],\"mapped\",[4452]],[[65478,65478],\"mapped\",[4453]],[[65479,65479],\"mapped\",[4454]],[[65480,65481],\"disallowed\"],[[65482,65482],\"mapped\",[4455]],[[65483,65483],\"mapped\",[4456]],[[65484,65484],\"mapped\",[4457]],[[65485,65485],\"mapped\",[4458]],[[65486,65486],\"mapped\",[4459]],[[65487,65487],\"mapped\",[4460]],[[65488,65489],\"disallowed\"],[[65490,65490],\"mapped\",[4461]],[[65491,65491],\"mapped\",[4462]],[[65492,65492],\"mapped\",[4463]],[[65493,65493],\"mapped\",[4464]],[[65494,65494],\"mapped\",[4465]],[[65495,65495],\"mapped\",[4466]],[[65496,65497],\"disallowed\"],[[65498,65498],\"mapped\",[4467]],[[65499,65499],\"mapped\",[4468]],[[65500,65500],\"mapped\",[4469]],[[65501,65503],\"disallowed\"],[[65504,65504],\"mapped\",[162]],[[65505,65505],\"mapped\",[163]],[[65506,65506],\"mapped\",[172]],[[65507,65507],\"disallowed_STD3_mapped\",[32,772]],[[65508,65508],\"mapped\",[166]],[[65509,65509],\"mapped\",[165]],[[65510,65510],\"mapped\",[8361]],[[65511,65511],\"disallowed\"],[[65512,65512],\"mapped\",[9474]],[[65513,65513],\"mapped\",[8592]],[[65514,65514],\"mapped\",[8593]],[[65515,65515],\"mapped\",[8594]],[[65516,65516],\"mapped\",[8595]],[[65517,65517],\"mapped\",[9632]],[[65518,65518],\"mapped\",[9675]],[[65519,65528],\"disallowed\"],[[65529,65531],\"disallowed\"],[[65532,65532],\"disallowed\"],[[65533,65533],\"disallowed\"],[[65534,65535],\"disallowed\"],[[65536,65547],\"valid\"],[[65548,65548],\"disallowed\"],[[65549,65574],\"valid\"],[[65575,65575],\"disallowed\"],[[65576,65594],\"valid\"],[[65595,65595],\"disallowed\"],[[65596,65597],\"valid\"],[[65598,65598],\"disallowed\"],[[65599,65613],\"valid\"],[[65614,65615],\"disallowed\"],[[65616,65629],\"valid\"],[[65630,65663],\"disallowed\"],[[65664,65786],\"valid\"],[[65787,65791],\"disallowed\"],[[65792,65794],\"valid\",[],\"NV8\"],[[65795,65798],\"disallowed\"],[[65799,65843],\"valid\",[],\"NV8\"],[[65844,65846],\"disallowed\"],[[65847,65855],\"valid\",[],\"NV8\"],[[65856,65930],\"valid\",[],\"NV8\"],[[65931,65932],\"valid\",[],\"NV8\"],[[65933,65935],\"disallowed\"],[[65936,65947],\"valid\",[],\"NV8\"],[[65948,65951],\"disallowed\"],[[65952,65952],\"valid\",[],\"NV8\"],[[65953,65999],\"disallowed\"],[[66000,66044],\"valid\",[],\"NV8\"],[[66045,66045],\"valid\"],[[66046,66175],\"disallowed\"],[[66176,66204],\"valid\"],[[66205,66207],\"disallowed\"],[[66208,66256],\"valid\"],[[66257,66271],\"disallowed\"],[[66272,66272],\"valid\"],[[66273,66299],\"valid\",[],\"NV8\"],[[66300,66303],\"disallowed\"],[[66304,66334],\"valid\"],[[66335,66335],\"valid\"],[[66336,66339],\"valid\",[],\"NV8\"],[[66340,66351],\"disallowed\"],[[66352,66368],\"valid\"],[[66369,66369],\"valid\",[],\"NV8\"],[[66370,66377],\"valid\"],[[66378,66378],\"valid\",[],\"NV8\"],[[66379,66383],\"disallowed\"],[[66384,66426],\"valid\"],[[66427,66431],\"disallowed\"],[[66432,66461],\"valid\"],[[66462,66462],\"disallowed\"],[[66463,66463],\"valid\",[],\"NV8\"],[[66464,66499],\"valid\"],[[66500,66503],\"disallowed\"],[[66504,66511],\"valid\"],[[66512,66517],\"valid\",[],\"NV8\"],[[66518,66559],\"disallowed\"],[[66560,66560],\"mapped\",[66600]],[[66561,66561],\"mapped\",[66601]],[[66562,66562],\"mapped\",[66602]],[[66563,66563],\"mapped\",[66603]],[[66564,66564],\"mapped\",[66604]],[[66565,66565],\"mapped\",[66605]],[[66566,66566],\"mapped\",[66606]],[[66567,66567],\"mapped\",[66607]],[[66568,66568],\"mapped\",[66608]],[[66569,66569],\"mapped\",[66609]],[[66570,66570],\"mapped\",[66610]],[[66571,66571],\"mapped\",[66611]],[[66572,66572],\"mapped\",[66612]],[[66573,66573],\"mapped\",[66613]],[[66574,66574],\"mapped\",[66614]],[[66575,66575],\"mapped\",[66615]],[[66576,66576],\"mapped\",[66616]],[[66577,66577],\"mapped\",[66617]],[[66578,66578],\"mapped\",[66618]],[[66579,66579],\"mapped\",[66619]],[[66580,66580],\"mapped\",[66620]],[[66581,66581],\"mapped\",[66621]],[[66582,66582],\"mapped\",[66622]],[[66583,66583],\"mapped\",[66623]],[[66584,66584],\"mapped\",[66624]],[[66585,66585],\"mapped\",[66625]],[[66586,66586],\"mapped\",[66626]],[[66587,66587],\"mapped\",[66627]],[[66588,66588],\"mapped\",[66628]],[[66589,66589],\"mapped\",[66629]],[[66590,66590],\"mapped\",[66630]],[[66591,66591],\"mapped\",[66631]],[[66592,66592],\"mapped\",[66632]],[[66593,66593],\"mapped\",[66633]],[[66594,66594],\"mapped\",[66634]],[[66595,66595],\"mapped\",[66635]],[[66596,66596],\"mapped\",[66636]],[[66597,66597],\"mapped\",[66637]],[[66598,66598],\"mapped\",[66638]],[[66599,66599],\"mapped\",[66639]],[[66600,66637],\"valid\"],[[66638,66717],\"valid\"],[[66718,66719],\"disallowed\"],[[66720,66729],\"valid\"],[[66730,66815],\"disallowed\"],[[66816,66855],\"valid\"],[[66856,66863],\"disallowed\"],[[66864,66915],\"valid\"],[[66916,66926],\"disallowed\"],[[66927,66927],\"valid\",[],\"NV8\"],[[66928,67071],\"disallowed\"],[[67072,67382],\"valid\"],[[67383,67391],\"disallowed\"],[[67392,67413],\"valid\"],[[67414,67423],\"disallowed\"],[[67424,67431],\"valid\"],[[67432,67583],\"disallowed\"],[[67584,67589],\"valid\"],[[67590,67591],\"disallowed\"],[[67592,67592],\"valid\"],[[67593,67593],\"disallowed\"],[[67594,67637],\"valid\"],[[67638,67638],\"disallowed\"],[[67639,67640],\"valid\"],[[67641,67643],\"disallowed\"],[[67644,67644],\"valid\"],[[67645,67646],\"disallowed\"],[[67647,67647],\"valid\"],[[67648,67669],\"valid\"],[[67670,67670],\"disallowed\"],[[67671,67679],\"valid\",[],\"NV8\"],[[67680,67702],\"valid\"],[[67703,67711],\"valid\",[],\"NV8\"],[[67712,67742],\"valid\"],[[67743,67750],\"disallowed\"],[[67751,67759],\"valid\",[],\"NV8\"],[[67760,67807],\"disallowed\"],[[67808,67826],\"valid\"],[[67827,67827],\"disallowed\"],[[67828,67829],\"valid\"],[[67830,67834],\"disallowed\"],[[67835,67839],\"valid\",[],\"NV8\"],[[67840,67861],\"valid\"],[[67862,67865],\"valid\",[],\"NV8\"],[[67866,67867],\"valid\",[],\"NV8\"],[[67868,67870],\"disallowed\"],[[67871,67871],\"valid\",[],\"NV8\"],[[67872,67897],\"valid\"],[[67898,67902],\"disallowed\"],[[67903,67903],\"valid\",[],\"NV8\"],[[67904,67967],\"disallowed\"],[[67968,68023],\"valid\"],[[68024,68027],\"disallowed\"],[[68028,68029],\"valid\",[],\"NV8\"],[[68030,68031],\"valid\"],[[68032,68047],\"valid\",[],\"NV8\"],[[68048,68049],\"disallowed\"],[[68050,68095],\"valid\",[],\"NV8\"],[[68096,68099],\"valid\"],[[68100,68100],\"disallowed\"],[[68101,68102],\"valid\"],[[68103,68107],\"disallowed\"],[[68108,68115],\"valid\"],[[68116,68116],\"disallowed\"],[[68117,68119],\"valid\"],[[68120,68120],\"disallowed\"],[[68121,68147],\"valid\"],[[68148,68151],\"disallowed\"],[[68152,68154],\"valid\"],[[68155,68158],\"disallowed\"],[[68159,68159],\"valid\"],[[68160,68167],\"valid\",[],\"NV8\"],[[68168,68175],\"disallowed\"],[[68176,68184],\"valid\",[],\"NV8\"],[[68185,68191],\"disallowed\"],[[68192,68220],\"valid\"],[[68221,68223],\"valid\",[],\"NV8\"],[[68224,68252],\"valid\"],[[68253,68255],\"valid\",[],\"NV8\"],[[68256,68287],\"disallowed\"],[[68288,68295],\"valid\"],[[68296,68296],\"valid\",[],\"NV8\"],[[68297,68326],\"valid\"],[[68327,68330],\"disallowed\"],[[68331,68342],\"valid\",[],\"NV8\"],[[68343,68351],\"disallowed\"],[[68352,68405],\"valid\"],[[68406,68408],\"disallowed\"],[[68409,68415],\"valid\",[],\"NV8\"],[[68416,68437],\"valid\"],[[68438,68439],\"disallowed\"],[[68440,68447],\"valid\",[],\"NV8\"],[[68448,68466],\"valid\"],[[68467,68471],\"disallowed\"],[[68472,68479],\"valid\",[],\"NV8\"],[[68480,68497],\"valid\"],[[68498,68504],\"disallowed\"],[[68505,68508],\"valid\",[],\"NV8\"],[[68509,68520],\"disallowed\"],[[68521,68527],\"valid\",[],\"NV8\"],[[68528,68607],\"disallowed\"],[[68608,68680],\"valid\"],[[68681,68735],\"disallowed\"],[[68736,68736],\"mapped\",[68800]],[[68737,68737],\"mapped\",[68801]],[[68738,68738],\"mapped\",[68802]],[[68739,68739],\"mapped\",[68803]],[[68740,68740],\"mapped\",[68804]],[[68741,68741],\"mapped\",[68805]],[[68742,68742],\"mapped\",[68806]],[[68743,68743],\"mapped\",[68807]],[[68744,68744],\"mapped\",[68808]],[[68745,68745],\"mapped\",[68809]],[[68746,68746],\"mapped\",[68810]],[[68747,68747],\"mapped\",[68811]],[[68748,68748],\"mapped\",[68812]],[[68749,68749],\"mapped\",[68813]],[[68750,68750],\"mapped\",[68814]],[[68751,68751],\"mapped\",[68815]],[[68752,68752],\"mapped\",[68816]],[[68753,68753],\"mapped\",[68817]],[[68754,68754],\"mapped\",[68818]],[[68755,68755],\"mapped\",[68819]],[[68756,68756],\"mapped\",[68820]],[[68757,68757],\"mapped\",[68821]],[[68758,68758],\"mapped\",[68822]],[[68759,68759],\"mapped\",[68823]],[[68760,68760],\"mapped\",[68824]],[[68761,68761],\"mapped\",[68825]],[[68762,68762],\"mapped\",[68826]],[[68763,68763],\"mapped\",[68827]],[[68764,68764],\"mapped\",[68828]],[[68765,68765],\"mapped\",[68829]],[[68766,68766],\"mapped\",[68830]],[[68767,68767],\"mapped\",[68831]],[[68768,68768],\"mapped\",[68832]],[[68769,68769],\"mapped\",[68833]],[[68770,68770],\"mapped\",[68834]],[[68771,68771],\"mapped\",[68835]],[[68772,68772],\"mapped\",[68836]],[[68773,68773],\"mapped\",[68837]],[[68774,68774],\"mapped\",[68838]],[[68775,68775],\"mapped\",[68839]],[[68776,68776],\"mapped\",[68840]],[[68777,68777],\"mapped\",[68841]],[[68778,68778],\"mapped\",[68842]],[[68779,68779],\"mapped\",[68843]],[[68780,68780],\"mapped\",[68844]],[[68781,68781],\"mapped\",[68845]],[[68782,68782],\"mapped\",[68846]],[[68783,68783],\"mapped\",[68847]],[[68784,68784],\"mapped\",[68848]],[[68785,68785],\"mapped\",[68849]],[[68786,68786],\"mapped\",[68850]],[[68787,68799],\"disallowed\"],[[68800,68850],\"valid\"],[[68851,68857],\"disallowed\"],[[68858,68863],\"valid\",[],\"NV8\"],[[68864,69215],\"disallowed\"],[[69216,69246],\"valid\",[],\"NV8\"],[[69247,69631],\"disallowed\"],[[69632,69702],\"valid\"],[[69703,69709],\"valid\",[],\"NV8\"],[[69710,69713],\"disallowed\"],[[69714,69733],\"valid\",[],\"NV8\"],[[69734,69743],\"valid\"],[[69744,69758],\"disallowed\"],[[69759,69759],\"valid\"],[[69760,69818],\"valid\"],[[69819,69820],\"valid\",[],\"NV8\"],[[69821,69821],\"disallowed\"],[[69822,69825],\"valid\",[],\"NV8\"],[[69826,69839],\"disallowed\"],[[69840,69864],\"valid\"],[[69865,69871],\"disallowed\"],[[69872,69881],\"valid\"],[[69882,69887],\"disallowed\"],[[69888,69940],\"valid\"],[[69941,69941],\"disallowed\"],[[69942,69951],\"valid\"],[[69952,69955],\"valid\",[],\"NV8\"],[[69956,69967],\"disallowed\"],[[69968,70003],\"valid\"],[[70004,70005],\"valid\",[],\"NV8\"],[[70006,70006],\"valid\"],[[70007,70015],\"disallowed\"],[[70016,70084],\"valid\"],[[70085,70088],\"valid\",[],\"NV8\"],[[70089,70089],\"valid\",[],\"NV8\"],[[70090,70092],\"valid\"],[[70093,70093],\"valid\",[],\"NV8\"],[[70094,70095],\"disallowed\"],[[70096,70105],\"valid\"],[[70106,70106],\"valid\"],[[70107,70107],\"valid\",[],\"NV8\"],[[70108,70108],\"valid\"],[[70109,70111],\"valid\",[],\"NV8\"],[[70112,70112],\"disallowed\"],[[70113,70132],\"valid\",[],\"NV8\"],[[70133,70143],\"disallowed\"],[[70144,70161],\"valid\"],[[70162,70162],\"disallowed\"],[[70163,70199],\"valid\"],[[70200,70205],\"valid\",[],\"NV8\"],[[70206,70271],\"disallowed\"],[[70272,70278],\"valid\"],[[70279,70279],\"disallowed\"],[[70280,70280],\"valid\"],[[70281,70281],\"disallowed\"],[[70282,70285],\"valid\"],[[70286,70286],\"disallowed\"],[[70287,70301],\"valid\"],[[70302,70302],\"disallowed\"],[[70303,70312],\"valid\"],[[70313,70313],\"valid\",[],\"NV8\"],[[70314,70319],\"disallowed\"],[[70320,70378],\"valid\"],[[70379,70383],\"disallowed\"],[[70384,70393],\"valid\"],[[70394,70399],\"disallowed\"],[[70400,70400],\"valid\"],[[70401,70403],\"valid\"],[[70404,70404],\"disallowed\"],[[70405,70412],\"valid\"],[[70413,70414],\"disallowed\"],[[70415,70416],\"valid\"],[[70417,70418],\"disallowed\"],[[70419,70440],\"valid\"],[[70441,70441],\"disallowed\"],[[70442,70448],\"valid\"],[[70449,70449],\"disallowed\"],[[70450,70451],\"valid\"],[[70452,70452],\"disallowed\"],[[70453,70457],\"valid\"],[[70458,70459],\"disallowed\"],[[70460,70468],\"valid\"],[[70469,70470],\"disallowed\"],[[70471,70472],\"valid\"],[[70473,70474],\"disallowed\"],[[70475,70477],\"valid\"],[[70478,70479],\"disallowed\"],[[70480,70480],\"valid\"],[[70481,70486],\"disallowed\"],[[70487,70487],\"valid\"],[[70488,70492],\"disallowed\"],[[70493,70499],\"valid\"],[[70500,70501],\"disallowed\"],[[70502,70508],\"valid\"],[[70509,70511],\"disallowed\"],[[70512,70516],\"valid\"],[[70517,70783],\"disallowed\"],[[70784,70853],\"valid\"],[[70854,70854],\"valid\",[],\"NV8\"],[[70855,70855],\"valid\"],[[70856,70863],\"disallowed\"],[[70864,70873],\"valid\"],[[70874,71039],\"disallowed\"],[[71040,71093],\"valid\"],[[71094,71095],\"disallowed\"],[[71096,71104],\"valid\"],[[71105,71113],\"valid\",[],\"NV8\"],[[71114,71127],\"valid\",[],\"NV8\"],[[71128,71133],\"valid\"],[[71134,71167],\"disallowed\"],[[71168,71232],\"valid\"],[[71233,71235],\"valid\",[],\"NV8\"],[[71236,71236],\"valid\"],[[71237,71247],\"disallowed\"],[[71248,71257],\"valid\"],[[71258,71295],\"disallowed\"],[[71296,71351],\"valid\"],[[71352,71359],\"disallowed\"],[[71360,71369],\"valid\"],[[71370,71423],\"disallowed\"],[[71424,71449],\"valid\"],[[71450,71452],\"disallowed\"],[[71453,71467],\"valid\"],[[71468,71471],\"disallowed\"],[[71472,71481],\"valid\"],[[71482,71487],\"valid\",[],\"NV8\"],[[71488,71839],\"disallowed\"],[[71840,71840],\"mapped\",[71872]],[[71841,71841],\"mapped\",[71873]],[[71842,71842],\"mapped\",[71874]],[[71843,71843],\"mapped\",[71875]],[[71844,71844],\"mapped\",[71876]],[[71845,71845],\"mapped\",[71877]],[[71846,71846],\"mapped\",[71878]],[[71847,71847],\"mapped\",[71879]],[[71848,71848],\"mapped\",[71880]],[[71849,71849],\"mapped\",[71881]],[[71850,71850],\"mapped\",[71882]],[[71851,71851],\"mapped\",[71883]],[[71852,71852],\"mapped\",[71884]],[[71853,71853],\"mapped\",[71885]],[[71854,71854],\"mapped\",[71886]],[[71855,71855],\"mapped\",[71887]],[[71856,71856],\"mapped\",[71888]],[[71857,71857],\"mapped\",[71889]],[[71858,71858],\"mapped\",[71890]],[[71859,71859],\"mapped\",[71891]],[[71860,71860],\"mapped\",[71892]],[[71861,71861],\"mapped\",[71893]],[[71862,71862],\"mapped\",[71894]],[[71863,71863],\"mapped\",[71895]],[[71864,71864],\"mapped\",[71896]],[[71865,71865],\"mapped\",[71897]],[[71866,71866],\"mapped\",[71898]],[[71867,71867],\"mapped\",[71899]],[[71868,71868],\"mapped\",[71900]],[[71869,71869],\"mapped\",[71901]],[[71870,71870],\"mapped\",[71902]],[[71871,71871],\"mapped\",[71903]],[[71872,71913],\"valid\"],[[71914,71922],\"valid\",[],\"NV8\"],[[71923,71934],\"disallowed\"],[[71935,71935],\"valid\"],[[71936,72383],\"disallowed\"],[[72384,72440],\"valid\"],[[72441,73727],\"disallowed\"],[[73728,74606],\"valid\"],[[74607,74648],\"valid\"],[[74649,74649],\"valid\"],[[74650,74751],\"disallowed\"],[[74752,74850],\"valid\",[],\"NV8\"],[[74851,74862],\"valid\",[],\"NV8\"],[[74863,74863],\"disallowed\"],[[74864,74867],\"valid\",[],\"NV8\"],[[74868,74868],\"valid\",[],\"NV8\"],[[74869,74879],\"disallowed\"],[[74880,75075],\"valid\"],[[75076,77823],\"disallowed\"],[[77824,78894],\"valid\"],[[78895,82943],\"disallowed\"],[[82944,83526],\"valid\"],[[83527,92159],\"disallowed\"],[[92160,92728],\"valid\"],[[92729,92735],\"disallowed\"],[[92736,92766],\"valid\"],[[92767,92767],\"disallowed\"],[[92768,92777],\"valid\"],[[92778,92781],\"disallowed\"],[[92782,92783],\"valid\",[],\"NV8\"],[[92784,92879],\"disallowed\"],[[92880,92909],\"valid\"],[[92910,92911],\"disallowed\"],[[92912,92916],\"valid\"],[[92917,92917],\"valid\",[],\"NV8\"],[[92918,92927],\"disallowed\"],[[92928,92982],\"valid\"],[[92983,92991],\"valid\",[],\"NV8\"],[[92992,92995],\"valid\"],[[92996,92997],\"valid\",[],\"NV8\"],[[92998,93007],\"disallowed\"],[[93008,93017],\"valid\"],[[93018,93018],\"disallowed\"],[[93019,93025],\"valid\",[],\"NV8\"],[[93026,93026],\"disallowed\"],[[93027,93047],\"valid\"],[[93048,93052],\"disallowed\"],[[93053,93071],\"valid\"],[[93072,93951],\"disallowed\"],[[93952,94020],\"valid\"],[[94021,94031],\"disallowed\"],[[94032,94078],\"valid\"],[[94079,94094],\"disallowed\"],[[94095,94111],\"valid\"],[[94112,110591],\"disallowed\"],[[110592,110593],\"valid\"],[[110594,113663],\"disallowed\"],[[113664,113770],\"valid\"],[[113771,113775],\"disallowed\"],[[113776,113788],\"valid\"],[[113789,113791],\"disallowed\"],[[113792,113800],\"valid\"],[[113801,113807],\"disallowed\"],[[113808,113817],\"valid\"],[[113818,113819],\"disallowed\"],[[113820,113820],\"valid\",[],\"NV8\"],[[113821,113822],\"valid\"],[[113823,113823],\"valid\",[],\"NV8\"],[[113824,113827],\"ignored\"],[[113828,118783],\"disallowed\"],[[118784,119029],\"valid\",[],\"NV8\"],[[119030,119039],\"disallowed\"],[[119040,119078],\"valid\",[],\"NV8\"],[[119079,119080],\"disallowed\"],[[119081,119081],\"valid\",[],\"NV8\"],[[119082,119133],\"valid\",[],\"NV8\"],[[119134,119134],\"mapped\",[119127,119141]],[[119135,119135],\"mapped\",[119128,119141]],[[119136,119136],\"mapped\",[119128,119141,119150]],[[119137,119137],\"mapped\",[119128,119141,119151]],[[119138,119138],\"mapped\",[119128,119141,119152]],[[119139,119139],\"mapped\",[119128,119141,119153]],[[119140,119140],\"mapped\",[119128,119141,119154]],[[119141,119154],\"valid\",[],\"NV8\"],[[119155,119162],\"disallowed\"],[[119163,119226],\"valid\",[],\"NV8\"],[[119227,119227],\"mapped\",[119225,119141]],[[119228,119228],\"mapped\",[119226,119141]],[[119229,119229],\"mapped\",[119225,119141,119150]],[[119230,119230],\"mapped\",[119226,119141,119150]],[[119231,119231],\"mapped\",[119225,119141,119151]],[[119232,119232],\"mapped\",[119226,119141,119151]],[[119233,119261],\"valid\",[],\"NV8\"],[[119262,119272],\"valid\",[],\"NV8\"],[[119273,119295],\"disallowed\"],[[119296,119365],\"valid\",[],\"NV8\"],[[119366,119551],\"disallowed\"],[[119552,119638],\"valid\",[],\"NV8\"],[[119639,119647],\"disallowed\"],[[119648,119665],\"valid\",[],\"NV8\"],[[119666,119807],\"disallowed\"],[[119808,119808],\"mapped\",[97]],[[119809,119809],\"mapped\",[98]],[[119810,119810],\"mapped\",[99]],[[119811,119811],\"mapped\",[100]],[[119812,119812],\"mapped\",[101]],[[119813,119813],\"mapped\",[102]],[[119814,119814],\"mapped\",[103]],[[119815,119815],\"mapped\",[104]],[[119816,119816],\"mapped\",[105]],[[119817,119817],\"mapped\",[106]],[[119818,119818],\"mapped\",[107]],[[119819,119819],\"mapped\",[108]],[[119820,119820],\"mapped\",[109]],[[119821,119821],\"mapped\",[110]],[[119822,119822],\"mapped\",[111]],[[119823,119823],\"mapped\",[112]],[[119824,119824],\"mapped\",[113]],[[119825,119825],\"mapped\",[114]],[[119826,119826],\"mapped\",[115]],[[119827,119827],\"mapped\",[116]],[[119828,119828],\"mapped\",[117]],[[119829,119829],\"mapped\",[118]],[[119830,119830],\"mapped\",[119]],[[119831,119831],\"mapped\",[120]],[[119832,119832],\"mapped\",[121]],[[119833,119833],\"mapped\",[122]],[[119834,119834],\"mapped\",[97]],[[119835,119835],\"mapped\",[98]],[[119836,119836],\"mapped\",[99]],[[119837,119837],\"mapped\",[100]],[[119838,119838],\"mapped\",[101]],[[119839,119839],\"mapped\",[102]],[[119840,119840],\"mapped\",[103]],[[119841,119841],\"mapped\",[104]],[[119842,119842],\"mapped\",[105]],[[119843,119843],\"mapped\",[106]],[[119844,119844],\"mapped\",[107]],[[119845,119845],\"mapped\",[108]],[[119846,119846],\"mapped\",[109]],[[119847,119847],\"mapped\",[110]],[[119848,119848],\"mapped\",[111]],[[119849,119849],\"mapped\",[112]],[[119850,119850],\"mapped\",[113]],[[119851,119851],\"mapped\",[114]],[[119852,119852],\"mapped\",[115]],[[119853,119853],\"mapped\",[116]],[[119854,119854],\"mapped\",[117]],[[119855,119855],\"mapped\",[118]],[[119856,119856],\"mapped\",[119]],[[119857,119857],\"mapped\",[120]],[[119858,119858],\"mapped\",[121]],[[119859,119859],\"mapped\",[122]],[[119860,119860],\"mapped\",[97]],[[119861,119861],\"mapped\",[98]],[[119862,119862],\"mapped\",[99]],[[119863,119863],\"mapped\",[100]],[[119864,119864],\"mapped\",[101]],[[119865,119865],\"mapped\",[102]],[[119866,119866],\"mapped\",[103]],[[119867,119867],\"mapped\",[104]],[[119868,119868],\"mapped\",[105]],[[119869,119869],\"mapped\",[106]],[[119870,119870],\"mapped\",[107]],[[119871,119871],\"mapped\",[108]],[[119872,119872],\"mapped\",[109]],[[119873,119873],\"mapped\",[110]],[[119874,119874],\"mapped\",[111]],[[119875,119875],\"mapped\",[112]],[[119876,119876],\"mapped\",[113]],[[119877,119877],\"mapped\",[114]],[[119878,119878],\"mapped\",[115]],[[119879,119879],\"mapped\",[116]],[[119880,119880],\"mapped\",[117]],[[119881,119881],\"mapped\",[118]],[[119882,119882],\"mapped\",[119]],[[119883,119883],\"mapped\",[120]],[[119884,119884],\"mapped\",[121]],[[119885,119885],\"mapped\",[122]],[[119886,119886],\"mapped\",[97]],[[119887,119887],\"mapped\",[98]],[[119888,119888],\"mapped\",[99]],[[119889,119889],\"mapped\",[100]],[[119890,119890],\"mapped\",[101]],[[119891,119891],\"mapped\",[102]],[[119892,119892],\"mapped\",[103]],[[119893,119893],\"disallowed\"],[[119894,119894],\"mapped\",[105]],[[119895,119895],\"mapped\",[106]],[[119896,119896],\"mapped\",[107]],[[119897,119897],\"mapped\",[108]],[[119898,119898],\"mapped\",[109]],[[119899,119899],\"mapped\",[110]],[[119900,119900],\"mapped\",[111]],[[119901,119901],\"mapped\",[112]],[[119902,119902],\"mapped\",[113]],[[119903,119903],\"mapped\",[114]],[[119904,119904],\"mapped\",[115]],[[119905,119905],\"mapped\",[116]],[[119906,119906],\"mapped\",[117]],[[119907,119907],\"mapped\",[118]],[[119908,119908],\"mapped\",[119]],[[119909,119909],\"mapped\",[120]],[[119910,119910],\"mapped\",[121]],[[119911,119911],\"mapped\",[122]],[[119912,119912],\"mapped\",[97]],[[119913,119913],\"mapped\",[98]],[[119914,119914],\"mapped\",[99]],[[119915,119915],\"mapped\",[100]],[[119916,119916],\"mapped\",[101]],[[119917,119917],\"mapped\",[102]],[[119918,119918],\"mapped\",[103]],[[119919,119919],\"mapped\",[104]],[[119920,119920],\"mapped\",[105]],[[119921,119921],\"mapped\",[106]],[[119922,119922],\"mapped\",[107]],[[119923,119923],\"mapped\",[108]],[[119924,119924],\"mapped\",[109]],[[119925,119925],\"mapped\",[110]],[[119926,119926],\"mapped\",[111]],[[119927,119927],\"mapped\",[112]],[[119928,119928],\"mapped\",[113]],[[119929,119929],\"mapped\",[114]],[[119930,119930],\"mapped\",[115]],[[119931,119931],\"mapped\",[116]],[[119932,119932],\"mapped\",[117]],[[119933,119933],\"mapped\",[118]],[[119934,119934],\"mapped\",[119]],[[119935,119935],\"mapped\",[120]],[[119936,119936],\"mapped\",[121]],[[119937,119937],\"mapped\",[122]],[[119938,119938],\"mapped\",[97]],[[119939,119939],\"mapped\",[98]],[[119940,119940],\"mapped\",[99]],[[119941,119941],\"mapped\",[100]],[[119942,119942],\"mapped\",[101]],[[119943,119943],\"mapped\",[102]],[[119944,119944],\"mapped\",[103]],[[119945,119945],\"mapped\",[104]],[[119946,119946],\"mapped\",[105]],[[119947,119947],\"mapped\",[106]],[[119948,119948],\"mapped\",[107]],[[119949,119949],\"mapped\",[108]],[[119950,119950],\"mapped\",[109]],[[119951,119951],\"mapped\",[110]],[[119952,119952],\"mapped\",[111]],[[119953,119953],\"mapped\",[112]],[[119954,119954],\"mapped\",[113]],[[119955,119955],\"mapped\",[114]],[[119956,119956],\"mapped\",[115]],[[119957,119957],\"mapped\",[116]],[[119958,119958],\"mapped\",[117]],[[119959,119959],\"mapped\",[118]],[[119960,119960],\"mapped\",[119]],[[119961,119961],\"mapped\",[120]],[[119962,119962],\"mapped\",[121]],[[119963,119963],\"mapped\",[122]],[[119964,119964],\"mapped\",[97]],[[119965,119965],\"disallowed\"],[[119966,119966],\"mapped\",[99]],[[119967,119967],\"mapped\",[100]],[[119968,119969],\"disallowed\"],[[119970,119970],\"mapped\",[103]],[[119971,119972],\"disallowed\"],[[119973,119973],\"mapped\",[106]],[[119974,119974],\"mapped\",[107]],[[119975,119976],\"disallowed\"],[[119977,119977],\"mapped\",[110]],[[119978,119978],\"mapped\",[111]],[[119979,119979],\"mapped\",[112]],[[119980,119980],\"mapped\",[113]],[[119981,119981],\"disallowed\"],[[119982,119982],\"mapped\",[115]],[[119983,119983],\"mapped\",[116]],[[119984,119984],\"mapped\",[117]],[[119985,119985],\"mapped\",[118]],[[119986,119986],\"mapped\",[119]],[[119987,119987],\"mapped\",[120]],[[119988,119988],\"mapped\",[121]],[[119989,119989],\"mapped\",[122]],[[119990,119990],\"mapped\",[97]],[[119991,119991],\"mapped\",[98]],[[119992,119992],\"mapped\",[99]],[[119993,119993],\"mapped\",[100]],[[119994,119994],\"disallowed\"],[[119995,119995],\"mapped\",[102]],[[119996,119996],\"disallowed\"],[[119997,119997],\"mapped\",[104]],[[119998,119998],\"mapped\",[105]],[[119999,119999],\"mapped\",[106]],[[120000,120000],\"mapped\",[107]],[[120001,120001],\"mapped\",[108]],[[120002,120002],\"mapped\",[109]],[[120003,120003],\"mapped\",[110]],[[120004,120004],\"disallowed\"],[[120005,120005],\"mapped\",[112]],[[120006,120006],\"mapped\",[113]],[[120007,120007],\"mapped\",[114]],[[120008,120008],\"mapped\",[115]],[[120009,120009],\"mapped\",[116]],[[120010,120010],\"mapped\",[117]],[[120011,120011],\"mapped\",[118]],[[120012,120012],\"mapped\",[119]],[[120013,120013],\"mapped\",[120]],[[120014,120014],\"mapped\",[121]],[[120015,120015],\"mapped\",[122]],[[120016,120016],\"mapped\",[97]],[[120017,120017],\"mapped\",[98]],[[120018,120018],\"mapped\",[99]],[[120019,120019],\"mapped\",[100]],[[120020,120020],\"mapped\",[101]],[[120021,120021],\"mapped\",[102]],[[120022,120022],\"mapped\",[103]],[[120023,120023],\"mapped\",[104]],[[120024,120024],\"mapped\",[105]],[[120025,120025],\"mapped\",[106]],[[120026,120026],\"mapped\",[107]],[[120027,120027],\"mapped\",[108]],[[120028,120028],\"mapped\",[109]],[[120029,120029],\"mapped\",[110]],[[120030,120030],\"mapped\",[111]],[[120031,120031],\"mapped\",[112]],[[120032,120032],\"mapped\",[113]],[[120033,120033],\"mapped\",[114]],[[120034,120034],\"mapped\",[115]],[[120035,120035],\"mapped\",[116]],[[120036,120036],\"mapped\",[117]],[[120037,120037],\"mapped\",[118]],[[120038,120038],\"mapped\",[119]],[[120039,120039],\"mapped\",[120]],[[120040,120040],\"mapped\",[121]],[[120041,120041],\"mapped\",[122]],[[120042,120042],\"mapped\",[97]],[[120043,120043],\"mapped\",[98]],[[120044,120044],\"mapped\",[99]],[[120045,120045],\"mapped\",[100]],[[120046,120046],\"mapped\",[101]],[[120047,120047],\"mapped\",[102]],[[120048,120048],\"mapped\",[103]],[[120049,120049],\"mapped\",[104]],[[120050,120050],\"mapped\",[105]],[[120051,120051],\"mapped\",[106]],[[120052,120052],\"mapped\",[107]],[[120053,120053],\"mapped\",[108]],[[120054,120054],\"mapped\",[109]],[[120055,120055],\"mapped\",[110]],[[120056,120056],\"mapped\",[111]],[[120057,120057],\"mapped\",[112]],[[120058,120058],\"mapped\",[113]],[[120059,120059],\"mapped\",[114]],[[120060,120060],\"mapped\",[115]],[[120061,120061],\"mapped\",[116]],[[120062,120062],\"mapped\",[117]],[[120063,120063],\"mapped\",[118]],[[120064,120064],\"mapped\",[119]],[[120065,120065],\"mapped\",[120]],[[120066,120066],\"mapped\",[121]],[[120067,120067],\"mapped\",[122]],[[120068,120068],\"mapped\",[97]],[[120069,120069],\"mapped\",[98]],[[120070,120070],\"disallowed\"],[[120071,120071],\"mapped\",[100]],[[120072,120072],\"mapped\",[101]],[[120073,120073],\"mapped\",[102]],[[120074,120074],\"mapped\",[103]],[[120075,120076],\"disallowed\"],[[120077,120077],\"mapped\",[106]],[[120078,120078],\"mapped\",[107]],[[120079,120079],\"mapped\",[108]],[[120080,120080],\"mapped\",[109]],[[120081,120081],\"mapped\",[110]],[[120082,120082],\"mapped\",[111]],[[120083,120083],\"mapped\",[112]],[[120084,120084],\"mapped\",[113]],[[120085,120085],\"disallowed\"],[[120086,120086],\"mapped\",[115]],[[120087,120087],\"mapped\",[116]],[[120088,120088],\"mapped\",[117]],[[120089,120089],\"mapped\",[118]],[[120090,120090],\"mapped\",[119]],[[120091,120091],\"mapped\",[120]],[[120092,120092],\"mapped\",[121]],[[120093,120093],\"disallowed\"],[[120094,120094],\"mapped\",[97]],[[120095,120095],\"mapped\",[98]],[[120096,120096],\"mapped\",[99]],[[120097,120097],\"mapped\",[100]],[[120098,120098],\"mapped\",[101]],[[120099,120099],\"mapped\",[102]],[[120100,120100],\"mapped\",[103]],[[120101,120101],\"mapped\",[104]],[[120102,120102],\"mapped\",[105]],[[120103,120103],\"mapped\",[106]],[[120104,120104],\"mapped\",[107]],[[120105,120105],\"mapped\",[108]],[[120106,120106],\"mapped\",[109]],[[120107,120107],\"mapped\",[110]],[[120108,120108],\"mapped\",[111]],[[120109,120109],\"mapped\",[112]],[[120110,120110],\"mapped\",[113]],[[120111,120111],\"mapped\",[114]],[[120112,120112],\"mapped\",[115]],[[120113,120113],\"mapped\",[116]],[[120114,120114],\"mapped\",[117]],[[120115,120115],\"mapped\",[118]],[[120116,120116],\"mapped\",[119]],[[120117,120117],\"mapped\",[120]],[[120118,120118],\"mapped\",[121]],[[120119,120119],\"mapped\",[122]],[[120120,120120],\"mapped\",[97]],[[120121,120121],\"mapped\",[98]],[[120122,120122],\"disallowed\"],[[120123,120123],\"mapped\",[100]],[[120124,120124],\"mapped\",[101]],[[120125,120125],\"mapped\",[102]],[[120126,120126],\"mapped\",[103]],[[120127,120127],\"disallowed\"],[[120128,120128],\"mapped\",[105]],[[120129,120129],\"mapped\",[106]],[[120130,120130],\"mapped\",[107]],[[120131,120131],\"mapped\",[108]],[[120132,120132],\"mapped\",[109]],[[120133,120133],\"disallowed\"],[[120134,120134],\"mapped\",[111]],[[120135,120137],\"disallowed\"],[[120138,120138],\"mapped\",[115]],[[120139,120139],\"mapped\",[116]],[[120140,120140],\"mapped\",[117]],[[120141,120141],\"mapped\",[118]],[[120142,120142],\"mapped\",[119]],[[120143,120143],\"mapped\",[120]],[[120144,120144],\"mapped\",[121]],[[120145,120145],\"disallowed\"],[[120146,120146],\"mapped\",[97]],[[120147,120147],\"mapped\",[98]],[[120148,120148],\"mapped\",[99]],[[120149,120149],\"mapped\",[100]],[[120150,120150],\"mapped\",[101]],[[120151,120151],\"mapped\",[102]],[[120152,120152],\"mapped\",[103]],[[120153,120153],\"mapped\",[104]],[[120154,120154],\"mapped\",[105]],[[120155,120155],\"mapped\",[106]],[[120156,120156],\"mapped\",[107]],[[120157,120157],\"mapped\",[108]],[[120158,120158],\"mapped\",[109]],[[120159,120159],\"mapped\",[110]],[[120160,120160],\"mapped\",[111]],[[120161,120161],\"mapped\",[112]],[[120162,120162],\"mapped\",[113]],[[120163,120163],\"mapped\",[114]],[[120164,120164],\"mapped\",[115]],[[120165,120165],\"mapped\",[116]],[[120166,120166],\"mapped\",[117]],[[120167,120167],\"mapped\",[118]],[[120168,120168],\"mapped\",[119]],[[120169,120169],\"mapped\",[120]],[[120170,120170],\"mapped\",[121]],[[120171,120171],\"mapped\",[122]],[[120172,120172],\"mapped\",[97]],[[120173,120173],\"mapped\",[98]],[[120174,120174],\"mapped\",[99]],[[120175,120175],\"mapped\",[100]],[[120176,120176],\"mapped\",[101]],[[120177,120177],\"mapped\",[102]],[[120178,120178],\"mapped\",[103]],[[120179,120179],\"mapped\",[104]],[[120180,120180],\"mapped\",[105]],[[120181,120181],\"mapped\",[106]],[[120182,120182],\"mapped\",[107]],[[120183,120183],\"mapped\",[108]],[[120184,120184],\"mapped\",[109]],[[120185,120185],\"mapped\",[110]],[[120186,120186],\"mapped\",[111]],[[120187,120187],\"mapped\",[112]],[[120188,120188],\"mapped\",[113]],[[120189,120189],\"mapped\",[114]],[[120190,120190],\"mapped\",[115]],[[120191,120191],\"mapped\",[116]],[[120192,120192],\"mapped\",[117]],[[120193,120193],\"mapped\",[118]],[[120194,120194],\"mapped\",[119]],[[120195,120195],\"mapped\",[120]],[[120196,120196],\"mapped\",[121]],[[120197,120197],\"mapped\",[122]],[[120198,120198],\"mapped\",[97]],[[120199,120199],\"mapped\",[98]],[[120200,120200],\"mapped\",[99]],[[120201,120201],\"mapped\",[100]],[[120202,120202],\"mapped\",[101]],[[120203,120203],\"mapped\",[102]],[[120204,120204],\"mapped\",[103]],[[120205,120205],\"mapped\",[104]],[[120206,120206],\"mapped\",[105]],[[120207,120207],\"mapped\",[106]],[[120208,120208],\"mapped\",[107]],[[120209,120209],\"mapped\",[108]],[[120210,120210],\"mapped\",[109]],[[120211,120211],\"mapped\",[110]],[[120212,120212],\"mapped\",[111]],[[120213,120213],\"mapped\",[112]],[[120214,120214],\"mapped\",[113]],[[120215,120215],\"mapped\",[114]],[[120216,120216],\"mapped\",[115]],[[120217,120217],\"mapped\",[116]],[[120218,120218],\"mapped\",[117]],[[120219,120219],\"mapped\",[118]],[[120220,120220],\"mapped\",[119]],[[120221,120221],\"mapped\",[120]],[[120222,120222],\"mapped\",[121]],[[120223,120223],\"mapped\",[122]],[[120224,120224],\"mapped\",[97]],[[120225,120225],\"mapped\",[98]],[[120226,120226],\"mapped\",[99]],[[120227,120227],\"mapped\",[100]],[[120228,120228],\"mapped\",[101]],[[120229,120229],\"mapped\",[102]],[[120230,120230],\"mapped\",[103]],[[120231,120231],\"mapped\",[104]],[[120232,120232],\"mapped\",[105]],[[120233,120233],\"mapped\",[106]],[[120234,120234],\"mapped\",[107]],[[120235,120235],\"mapped\",[108]],[[120236,120236],\"mapped\",[109]],[[120237,120237],\"mapped\",[110]],[[120238,120238],\"mapped\",[111]],[[120239,120239],\"mapped\",[112]],[[120240,120240],\"mapped\",[113]],[[120241,120241],\"mapped\",[114]],[[120242,120242],\"mapped\",[115]],[[120243,120243],\"mapped\",[116]],[[120244,120244],\"mapped\",[117]],[[120245,120245],\"mapped\",[118]],[[120246,120246],\"mapped\",[119]],[[120247,120247],\"mapped\",[120]],[[120248,120248],\"mapped\",[121]],[[120249,120249],\"mapped\",[122]],[[120250,120250],\"mapped\",[97]],[[120251,120251],\"mapped\",[98]],[[120252,120252],\"mapped\",[99]],[[120253,120253],\"mapped\",[100]],[[120254,120254],\"mapped\",[101]],[[120255,120255],\"mapped\",[102]],[[120256,120256],\"mapped\",[103]],[[120257,120257],\"mapped\",[104]],[[120258,120258],\"mapped\",[105]],[[120259,120259],\"mapped\",[106]],[[120260,120260],\"mapped\",[107]],[[120261,120261],\"mapped\",[108]],[[120262,120262],\"mapped\",[109]],[[120263,120263],\"mapped\",[110]],[[120264,120264],\"mapped\",[111]],[[120265,120265],\"mapped\",[112]],[[120266,120266],\"mapped\",[113]],[[120267,120267],\"mapped\",[114]],[[120268,120268],\"mapped\",[115]],[[120269,120269],\"mapped\",[116]],[[120270,120270],\"mapped\",[117]],[[120271,120271],\"mapped\",[118]],[[120272,120272],\"mapped\",[119]],[[120273,120273],\"mapped\",[120]],[[120274,120274],\"mapped\",[121]],[[120275,120275],\"mapped\",[122]],[[120276,120276],\"mapped\",[97]],[[120277,120277],\"mapped\",[98]],[[120278,120278],\"mapped\",[99]],[[120279,120279],\"mapped\",[100]],[[120280,120280],\"mapped\",[101]],[[120281,120281],\"mapped\",[102]],[[120282,120282],\"mapped\",[103]],[[120283,120283],\"mapped\",[104]],[[120284,120284],\"mapped\",[105]],[[120285,120285],\"mapped\",[106]],[[120286,120286],\"mapped\",[107]],[[120287,120287],\"mapped\",[108]],[[120288,120288],\"mapped\",[109]],[[120289,120289],\"mapped\",[110]],[[120290,120290],\"mapped\",[111]],[[120291,120291],\"mapped\",[112]],[[120292,120292],\"mapped\",[113]],[[120293,120293],\"mapped\",[114]],[[120294,120294],\"mapped\",[115]],[[120295,120295],\"mapped\",[116]],[[120296,120296],\"mapped\",[117]],[[120297,120297],\"mapped\",[118]],[[120298,120298],\"mapped\",[119]],[[120299,120299],\"mapped\",[120]],[[120300,120300],\"mapped\",[121]],[[120301,120301],\"mapped\",[122]],[[120302,120302],\"mapped\",[97]],[[120303,120303],\"mapped\",[98]],[[120304,120304],\"mapped\",[99]],[[120305,120305],\"mapped\",[100]],[[120306,120306],\"mapped\",[101]],[[120307,120307],\"mapped\",[102]],[[120308,120308],\"mapped\",[103]],[[120309,120309],\"mapped\",[104]],[[120310,120310],\"mapped\",[105]],[[120311,120311],\"mapped\",[106]],[[120312,120312],\"mapped\",[107]],[[120313,120313],\"mapped\",[108]],[[120314,120314],\"mapped\",[109]],[[120315,120315],\"mapped\",[110]],[[120316,120316],\"mapped\",[111]],[[120317,120317],\"mapped\",[112]],[[120318,120318],\"mapped\",[113]],[[120319,120319],\"mapped\",[114]],[[120320,120320],\"mapped\",[115]],[[120321,120321],\"mapped\",[116]],[[120322,120322],\"mapped\",[117]],[[120323,120323],\"mapped\",[118]],[[120324,120324],\"mapped\",[119]],[[120325,120325],\"mapped\",[120]],[[120326,120326],\"mapped\",[121]],[[120327,120327],\"mapped\",[122]],[[120328,120328],\"mapped\",[97]],[[120329,120329],\"mapped\",[98]],[[120330,120330],\"mapped\",[99]],[[120331,120331],\"mapped\",[100]],[[120332,120332],\"mapped\",[101]],[[120333,120333],\"mapped\",[102]],[[120334,120334],\"mapped\",[103]],[[120335,120335],\"mapped\",[104]],[[120336,120336],\"mapped\",[105]],[[120337,120337],\"mapped\",[106]],[[120338,120338],\"mapped\",[107]],[[120339,120339],\"mapped\",[108]],[[120340,120340],\"mapped\",[109]],[[120341,120341],\"mapped\",[110]],[[120342,120342],\"mapped\",[111]],[[120343,120343],\"mapped\",[112]],[[120344,120344],\"mapped\",[113]],[[120345,120345],\"mapped\",[114]],[[120346,120346],\"mapped\",[115]],[[120347,120347],\"mapped\",[116]],[[120348,120348],\"mapped\",[117]],[[120349,120349],\"mapped\",[118]],[[120350,120350],\"mapped\",[119]],[[120351,120351],\"mapped\",[120]],[[120352,120352],\"mapped\",[121]],[[120353,120353],\"mapped\",[122]],[[120354,120354],\"mapped\",[97]],[[120355,120355],\"mapped\",[98]],[[120356,120356],\"mapped\",[99]],[[120357,120357],\"mapped\",[100]],[[120358,120358],\"mapped\",[101]],[[120359,120359],\"mapped\",[102]],[[120360,120360],\"mapped\",[103]],[[120361,120361],\"mapped\",[104]],[[120362,120362],\"mapped\",[105]],[[120363,120363],\"mapped\",[106]],[[120364,120364],\"mapped\",[107]],[[120365,120365],\"mapped\",[108]],[[120366,120366],\"mapped\",[109]],[[120367,120367],\"mapped\",[110]],[[120368,120368],\"mapped\",[111]],[[120369,120369],\"mapped\",[112]],[[120370,120370],\"mapped\",[113]],[[120371,120371],\"mapped\",[114]],[[120372,120372],\"mapped\",[115]],[[120373,120373],\"mapped\",[116]],[[120374,120374],\"mapped\",[117]],[[120375,120375],\"mapped\",[118]],[[120376,120376],\"mapped\",[119]],[[120377,120377],\"mapped\",[120]],[[120378,120378],\"mapped\",[121]],[[120379,120379],\"mapped\",[122]],[[120380,120380],\"mapped\",[97]],[[120381,120381],\"mapped\",[98]],[[120382,120382],\"mapped\",[99]],[[120383,120383],\"mapped\",[100]],[[120384,120384],\"mapped\",[101]],[[120385,120385],\"mapped\",[102]],[[120386,120386],\"mapped\",[103]],[[120387,120387],\"mapped\",[104]],[[120388,120388],\"mapped\",[105]],[[120389,120389],\"mapped\",[106]],[[120390,120390],\"mapped\",[107]],[[120391,120391],\"mapped\",[108]],[[120392,120392],\"mapped\",[109]],[[120393,120393],\"mapped\",[110]],[[120394,120394],\"mapped\",[111]],[[120395,120395],\"mapped\",[112]],[[120396,120396],\"mapped\",[113]],[[120397,120397],\"mapped\",[114]],[[120398,120398],\"mapped\",[115]],[[120399,120399],\"mapped\",[116]],[[120400,120400],\"mapped\",[117]],[[120401,120401],\"mapped\",[118]],[[120402,120402],\"mapped\",[119]],[[120403,120403],\"mapped\",[120]],[[120404,120404],\"mapped\",[121]],[[120405,120405],\"mapped\",[122]],[[120406,120406],\"mapped\",[97]],[[120407,120407],\"mapped\",[98]],[[120408,120408],\"mapped\",[99]],[[120409,120409],\"mapped\",[100]],[[120410,120410],\"mapped\",[101]],[[120411,120411],\"mapped\",[102]],[[120412,120412],\"mapped\",[103]],[[120413,120413],\"mapped\",[104]],[[120414,120414],\"mapped\",[105]],[[120415,120415],\"mapped\",[106]],[[120416,120416],\"mapped\",[107]],[[120417,120417],\"mapped\",[108]],[[120418,120418],\"mapped\",[109]],[[120419,120419],\"mapped\",[110]],[[120420,120420],\"mapped\",[111]],[[120421,120421],\"mapped\",[112]],[[120422,120422],\"mapped\",[113]],[[120423,120423],\"mapped\",[114]],[[120424,120424],\"mapped\",[115]],[[120425,120425],\"mapped\",[116]],[[120426,120426],\"mapped\",[117]],[[120427,120427],\"mapped\",[118]],[[120428,120428],\"mapped\",[119]],[[120429,120429],\"mapped\",[120]],[[120430,120430],\"mapped\",[121]],[[120431,120431],\"mapped\",[122]],[[120432,120432],\"mapped\",[97]],[[120433,120433],\"mapped\",[98]],[[120434,120434],\"mapped\",[99]],[[120435,120435],\"mapped\",[100]],[[120436,120436],\"mapped\",[101]],[[120437,120437],\"mapped\",[102]],[[120438,120438],\"mapped\",[103]],[[120439,120439],\"mapped\",[104]],[[120440,120440],\"mapped\",[105]],[[120441,120441],\"mapped\",[106]],[[120442,120442],\"mapped\",[107]],[[120443,120443],\"mapped\",[108]],[[120444,120444],\"mapped\",[109]],[[120445,120445],\"mapped\",[110]],[[120446,120446],\"mapped\",[111]],[[120447,120447],\"mapped\",[112]],[[120448,120448],\"mapped\",[113]],[[120449,120449],\"mapped\",[114]],[[120450,120450],\"mapped\",[115]],[[120451,120451],\"mapped\",[116]],[[120452,120452],\"mapped\",[117]],[[120453,120453],\"mapped\",[118]],[[120454,120454],\"mapped\",[119]],[[120455,120455],\"mapped\",[120]],[[120456,120456],\"mapped\",[121]],[[120457,120457],\"mapped\",[122]],[[120458,120458],\"mapped\",[97]],[[120459,120459],\"mapped\",[98]],[[120460,120460],\"mapped\",[99]],[[120461,120461],\"mapped\",[100]],[[120462,120462],\"mapped\",[101]],[[120463,120463],\"mapped\",[102]],[[120464,120464],\"mapped\",[103]],[[120465,120465],\"mapped\",[104]],[[120466,120466],\"mapped\",[105]],[[120467,120467],\"mapped\",[106]],[[120468,120468],\"mapped\",[107]],[[120469,120469],\"mapped\",[108]],[[120470,120470],\"mapped\",[109]],[[120471,120471],\"mapped\",[110]],[[120472,120472],\"mapped\",[111]],[[120473,120473],\"mapped\",[112]],[[120474,120474],\"mapped\",[113]],[[120475,120475],\"mapped\",[114]],[[120476,120476],\"mapped\",[115]],[[120477,120477],\"mapped\",[116]],[[120478,120478],\"mapped\",[117]],[[120479,120479],\"mapped\",[118]],[[120480,120480],\"mapped\",[119]],[[120481,120481],\"mapped\",[120]],[[120482,120482],\"mapped\",[121]],[[120483,120483],\"mapped\",[122]],[[120484,120484],\"mapped\",[305]],[[120485,120485],\"mapped\",[567]],[[120486,120487],\"disallowed\"],[[120488,120488],\"mapped\",[945]],[[120489,120489],\"mapped\",[946]],[[120490,120490],\"mapped\",[947]],[[120491,120491],\"mapped\",[948]],[[120492,120492],\"mapped\",[949]],[[120493,120493],\"mapped\",[950]],[[120494,120494],\"mapped\",[951]],[[120495,120495],\"mapped\",[952]],[[120496,120496],\"mapped\",[953]],[[120497,120497],\"mapped\",[954]],[[120498,120498],\"mapped\",[955]],[[120499,120499],\"mapped\",[956]],[[120500,120500],\"mapped\",[957]],[[120501,120501],\"mapped\",[958]],[[120502,120502],\"mapped\",[959]],[[120503,120503],\"mapped\",[960]],[[120504,120504],\"mapped\",[961]],[[120505,120505],\"mapped\",[952]],[[120506,120506],\"mapped\",[963]],[[120507,120507],\"mapped\",[964]],[[120508,120508],\"mapped\",[965]],[[120509,120509],\"mapped\",[966]],[[120510,120510],\"mapped\",[967]],[[120511,120511],\"mapped\",[968]],[[120512,120512],\"mapped\",[969]],[[120513,120513],\"mapped\",[8711]],[[120514,120514],\"mapped\",[945]],[[120515,120515],\"mapped\",[946]],[[120516,120516],\"mapped\",[947]],[[120517,120517],\"mapped\",[948]],[[120518,120518],\"mapped\",[949]],[[120519,120519],\"mapped\",[950]],[[120520,120520],\"mapped\",[951]],[[120521,120521],\"mapped\",[952]],[[120522,120522],\"mapped\",[953]],[[120523,120523],\"mapped\",[954]],[[120524,120524],\"mapped\",[955]],[[120525,120525],\"mapped\",[956]],[[120526,120526],\"mapped\",[957]],[[120527,120527],\"mapped\",[958]],[[120528,120528],\"mapped\",[959]],[[120529,120529],\"mapped\",[960]],[[120530,120530],\"mapped\",[961]],[[120531,120532],\"mapped\",[963]],[[120533,120533],\"mapped\",[964]],[[120534,120534],\"mapped\",[965]],[[120535,120535],\"mapped\",[966]],[[120536,120536],\"mapped\",[967]],[[120537,120537],\"mapped\",[968]],[[120538,120538],\"mapped\",[969]],[[120539,120539],\"mapped\",[8706]],[[120540,120540],\"mapped\",[949]],[[120541,120541],\"mapped\",[952]],[[120542,120542],\"mapped\",[954]],[[120543,120543],\"mapped\",[966]],[[120544,120544],\"mapped\",[961]],[[120545,120545],\"mapped\",[960]],[[120546,120546],\"mapped\",[945]],[[120547,120547],\"mapped\",[946]],[[120548,120548],\"mapped\",[947]],[[120549,120549],\"mapped\",[948]],[[120550,120550],\"mapped\",[949]],[[120551,120551],\"mapped\",[950]],[[120552,120552],\"mapped\",[951]],[[120553,120553],\"mapped\",[952]],[[120554,120554],\"mapped\",[953]],[[120555,120555],\"mapped\",[954]],[[120556,120556],\"mapped\",[955]],[[120557,120557],\"mapped\",[956]],[[120558,120558],\"mapped\",[957]],[[120559,120559],\"mapped\",[958]],[[120560,120560],\"mapped\",[959]],[[120561,120561],\"mapped\",[960]],[[120562,120562],\"mapped\",[961]],[[120563,120563],\"mapped\",[952]],[[120564,120564],\"mapped\",[963]],[[120565,120565],\"mapped\",[964]],[[120566,120566],\"mapped\",[965]],[[120567,120567],\"mapped\",[966]],[[120568,120568],\"mapped\",[967]],[[120569,120569],\"mapped\",[968]],[[120570,120570],\"mapped\",[969]],[[120571,120571],\"mapped\",[8711]],[[120572,120572],\"mapped\",[945]],[[120573,120573],\"mapped\",[946]],[[120574,120574],\"mapped\",[947]],[[120575,120575],\"mapped\",[948]],[[120576,120576],\"mapped\",[949]],[[120577,120577],\"mapped\",[950]],[[120578,120578],\"mapped\",[951]],[[120579,120579],\"mapped\",[952]],[[120580,120580],\"mapped\",[953]],[[120581,120581],\"mapped\",[954]],[[120582,120582],\"mapped\",[955]],[[120583,120583],\"mapped\",[956]],[[120584,120584],\"mapped\",[957]],[[120585,120585],\"mapped\",[958]],[[120586,120586],\"mapped\",[959]],[[120587,120587],\"mapped\",[960]],[[120588,120588],\"mapped\",[961]],[[120589,120590],\"mapped\",[963]],[[120591,120591],\"mapped\",[964]],[[120592,120592],\"mapped\",[965]],[[120593,120593],\"mapped\",[966]],[[120594,120594],\"mapped\",[967]],[[120595,120595],\"mapped\",[968]],[[120596,120596],\"mapped\",[969]],[[120597,120597],\"mapped\",[8706]],[[120598,120598],\"mapped\",[949]],[[120599,120599],\"mapped\",[952]],[[120600,120600],\"mapped\",[954]],[[120601,120601],\"mapped\",[966]],[[120602,120602],\"mapped\",[961]],[[120603,120603],\"mapped\",[960]],[[120604,120604],\"mapped\",[945]],[[120605,120605],\"mapped\",[946]],[[120606,120606],\"mapped\",[947]],[[120607,120607],\"mapped\",[948]],[[120608,120608],\"mapped\",[949]],[[120609,120609],\"mapped\",[950]],[[120610,120610],\"mapped\",[951]],[[120611,120611],\"mapped\",[952]],[[120612,120612],\"mapped\",[953]],[[120613,120613],\"mapped\",[954]],[[120614,120614],\"mapped\",[955]],[[120615,120615],\"mapped\",[956]],[[120616,120616],\"mapped\",[957]],[[120617,120617],\"mapped\",[958]],[[120618,120618],\"mapped\",[959]],[[120619,120619],\"mapped\",[960]],[[120620,120620],\"mapped\",[961]],[[120621,120621],\"mapped\",[952]],[[120622,120622],\"mapped\",[963]],[[120623,120623],\"mapped\",[964]],[[120624,120624],\"mapped\",[965]],[[120625,120625],\"mapped\",[966]],[[120626,120626],\"mapped\",[967]],[[120627,120627],\"mapped\",[968]],[[120628,120628],\"mapped\",[969]],[[120629,120629],\"mapped\",[8711]],[[120630,120630],\"mapped\",[945]],[[120631,120631],\"mapped\",[946]],[[120632,120632],\"mapped\",[947]],[[120633,120633],\"mapped\",[948]],[[120634,120634],\"mapped\",[949]],[[120635,120635],\"mapped\",[950]],[[120636,120636],\"mapped\",[951]],[[120637,120637],\"mapped\",[952]],[[120638,120638],\"mapped\",[953]],[[120639,120639],\"mapped\",[954]],[[120640,120640],\"mapped\",[955]],[[120641,120641],\"mapped\",[956]],[[120642,120642],\"mapped\",[957]],[[120643,120643],\"mapped\",[958]],[[120644,120644],\"mapped\",[959]],[[120645,120645],\"mapped\",[960]],[[120646,120646],\"mapped\",[961]],[[120647,120648],\"mapped\",[963]],[[120649,120649],\"mapped\",[964]],[[120650,120650],\"mapped\",[965]],[[120651,120651],\"mapped\",[966]],[[120652,120652],\"mapped\",[967]],[[120653,120653],\"mapped\",[968]],[[120654,120654],\"mapped\",[969]],[[120655,120655],\"mapped\",[8706]],[[120656,120656],\"mapped\",[949]],[[120657,120657],\"mapped\",[952]],[[120658,120658],\"mapped\",[954]],[[120659,120659],\"mapped\",[966]],[[120660,120660],\"mapped\",[961]],[[120661,120661],\"mapped\",[960]],[[120662,120662],\"mapped\",[945]],[[120663,120663],\"mapped\",[946]],[[120664,120664],\"mapped\",[947]],[[120665,120665],\"mapped\",[948]],[[120666,120666],\"mapped\",[949]],[[120667,120667],\"mapped\",[950]],[[120668,120668],\"mapped\",[951]],[[120669,120669],\"mapped\",[952]],[[120670,120670],\"mapped\",[953]],[[120671,120671],\"mapped\",[954]],[[120672,120672],\"mapped\",[955]],[[120673,120673],\"mapped\",[956]],[[120674,120674],\"mapped\",[957]],[[120675,120675],\"mapped\",[958]],[[120676,120676],\"mapped\",[959]],[[120677,120677],\"mapped\",[960]],[[120678,120678],\"mapped\",[961]],[[120679,120679],\"mapped\",[952]],[[120680,120680],\"mapped\",[963]],[[120681,120681],\"mapped\",[964]],[[120682,120682],\"mapped\",[965]],[[120683,120683],\"mapped\",[966]],[[120684,120684],\"mapped\",[967]],[[120685,120685],\"mapped\",[968]],[[120686,120686],\"mapped\",[969]],[[120687,120687],\"mapped\",[8711]],[[120688,120688],\"mapped\",[945]],[[120689,120689],\"mapped\",[946]],[[120690,120690],\"mapped\",[947]],[[120691,120691],\"mapped\",[948]],[[120692,120692],\"mapped\",[949]],[[120693,120693],\"mapped\",[950]],[[120694,120694],\"mapped\",[951]],[[120695,120695],\"mapped\",[952]],[[120696,120696],\"mapped\",[953]],[[120697,120697],\"mapped\",[954]],[[120698,120698],\"mapped\",[955]],[[120699,120699],\"mapped\",[956]],[[120700,120700],\"mapped\",[957]],[[120701,120701],\"mapped\",[958]],[[120702,120702],\"mapped\",[959]],[[120703,120703],\"mapped\",[960]],[[120704,120704],\"mapped\",[961]],[[120705,120706],\"mapped\",[963]],[[120707,120707],\"mapped\",[964]],[[120708,120708],\"mapped\",[965]],[[120709,120709],\"mapped\",[966]],[[120710,120710],\"mapped\",[967]],[[120711,120711],\"mapped\",[968]],[[120712,120712],\"mapped\",[969]],[[120713,120713],\"mapped\",[8706]],[[120714,120714],\"mapped\",[949]],[[120715,120715],\"mapped\",[952]],[[120716,120716],\"mapped\",[954]],[[120717,120717],\"mapped\",[966]],[[120718,120718],\"mapped\",[961]],[[120719,120719],\"mapped\",[960]],[[120720,120720],\"mapped\",[945]],[[120721,120721],\"mapped\",[946]],[[120722,120722],\"mapped\",[947]],[[120723,120723],\"mapped\",[948]],[[120724,120724],\"mapped\",[949]],[[120725,120725],\"mapped\",[950]],[[120726,120726],\"mapped\",[951]],[[120727,120727],\"mapped\",[952]],[[120728,120728],\"mapped\",[953]],[[120729,120729],\"mapped\",[954]],[[120730,120730],\"mapped\",[955]],[[120731,120731],\"mapped\",[956]],[[120732,120732],\"mapped\",[957]],[[120733,120733],\"mapped\",[958]],[[120734,120734],\"mapped\",[959]],[[120735,120735],\"mapped\",[960]],[[120736,120736],\"mapped\",[961]],[[120737,120737],\"mapped\",[952]],[[120738,120738],\"mapped\",[963]],[[120739,120739],\"mapped\",[964]],[[120740,120740],\"mapped\",[965]],[[120741,120741],\"mapped\",[966]],[[120742,120742],\"mapped\",[967]],[[120743,120743],\"mapped\",[968]],[[120744,120744],\"mapped\",[969]],[[120745,120745],\"mapped\",[8711]],[[120746,120746],\"mapped\",[945]],[[120747,120747],\"mapped\",[946]],[[120748,120748],\"mapped\",[947]],[[120749,120749],\"mapped\",[948]],[[120750,120750],\"mapped\",[949]],[[120751,120751],\"mapped\",[950]],[[120752,120752],\"mapped\",[951]],[[120753,120753],\"mapped\",[952]],[[120754,120754],\"mapped\",[953]],[[120755,120755],\"mapped\",[954]],[[120756,120756],\"mapped\",[955]],[[120757,120757],\"mapped\",[956]],[[120758,120758],\"mapped\",[957]],[[120759,120759],\"mapped\",[958]],[[120760,120760],\"mapped\",[959]],[[120761,120761],\"mapped\",[960]],[[120762,120762],\"mapped\",[961]],[[120763,120764],\"mapped\",[963]],[[120765,120765],\"mapped\",[964]],[[120766,120766],\"mapped\",[965]],[[120767,120767],\"mapped\",[966]],[[120768,120768],\"mapped\",[967]],[[120769,120769],\"mapped\",[968]],[[120770,120770],\"mapped\",[969]],[[120771,120771],\"mapped\",[8706]],[[120772,120772],\"mapped\",[949]],[[120773,120773],\"mapped\",[952]],[[120774,120774],\"mapped\",[954]],[[120775,120775],\"mapped\",[966]],[[120776,120776],\"mapped\",[961]],[[120777,120777],\"mapped\",[960]],[[120778,120779],\"mapped\",[989]],[[120780,120781],\"disallowed\"],[[120782,120782],\"mapped\",[48]],[[120783,120783],\"mapped\",[49]],[[120784,120784],\"mapped\",[50]],[[120785,120785],\"mapped\",[51]],[[120786,120786],\"mapped\",[52]],[[120787,120787],\"mapped\",[53]],[[120788,120788],\"mapped\",[54]],[[120789,120789],\"mapped\",[55]],[[120790,120790],\"mapped\",[56]],[[120791,120791],\"mapped\",[57]],[[120792,120792],\"mapped\",[48]],[[120793,120793],\"mapped\",[49]],[[120794,120794],\"mapped\",[50]],[[120795,120795],\"mapped\",[51]],[[120796,120796],\"mapped\",[52]],[[120797,120797],\"mapped\",[53]],[[120798,120798],\"mapped\",[54]],[[120799,120799],\"mapped\",[55]],[[120800,120800],\"mapped\",[56]],[[120801,120801],\"mapped\",[57]],[[120802,120802],\"mapped\",[48]],[[120803,120803],\"mapped\",[49]],[[120804,120804],\"mapped\",[50]],[[120805,120805],\"mapped\",[51]],[[120806,120806],\"mapped\",[52]],[[120807,120807],\"mapped\",[53]],[[120808,120808],\"mapped\",[54]],[[120809,120809],\"mapped\",[55]],[[120810,120810],\"mapped\",[56]],[[120811,120811],\"mapped\",[57]],[[120812,120812],\"mapped\",[48]],[[120813,120813],\"mapped\",[49]],[[120814,120814],\"mapped\",[50]],[[120815,120815],\"mapped\",[51]],[[120816,120816],\"mapped\",[52]],[[120817,120817],\"mapped\",[53]],[[120818,120818],\"mapped\",[54]],[[120819,120819],\"mapped\",[55]],[[120820,120820],\"mapped\",[56]],[[120821,120821],\"mapped\",[57]],[[120822,120822],\"mapped\",[48]],[[120823,120823],\"mapped\",[49]],[[120824,120824],\"mapped\",[50]],[[120825,120825],\"mapped\",[51]],[[120826,120826],\"mapped\",[52]],[[120827,120827],\"mapped\",[53]],[[120828,120828],\"mapped\",[54]],[[120829,120829],\"mapped\",[55]],[[120830,120830],\"mapped\",[56]],[[120831,120831],\"mapped\",[57]],[[120832,121343],\"valid\",[],\"NV8\"],[[121344,121398],\"valid\"],[[121399,121402],\"valid\",[],\"NV8\"],[[121403,121452],\"valid\"],[[121453,121460],\"valid\",[],\"NV8\"],[[121461,121461],\"valid\"],[[121462,121475],\"valid\",[],\"NV8\"],[[121476,121476],\"valid\"],[[121477,121483],\"valid\",[],\"NV8\"],[[121484,121498],\"disallowed\"],[[121499,121503],\"valid\"],[[121504,121504],\"disallowed\"],[[121505,121519],\"valid\"],[[121520,124927],\"disallowed\"],[[124928,125124],\"valid\"],[[125125,125126],\"disallowed\"],[[125127,125135],\"valid\",[],\"NV8\"],[[125136,125142],\"valid\"],[[125143,126463],\"disallowed\"],[[126464,126464],\"mapped\",[1575]],[[126465,126465],\"mapped\",[1576]],[[126466,126466],\"mapped\",[1580]],[[126467,126467],\"mapped\",[1583]],[[126468,126468],\"disallowed\"],[[126469,126469],\"mapped\",[1608]],[[126470,126470],\"mapped\",[1586]],[[126471,126471],\"mapped\",[1581]],[[126472,126472],\"mapped\",[1591]],[[126473,126473],\"mapped\",[1610]],[[126474,126474],\"mapped\",[1603]],[[126475,126475],\"mapped\",[1604]],[[126476,126476],\"mapped\",[1605]],[[126477,126477],\"mapped\",[1606]],[[126478,126478],\"mapped\",[1587]],[[126479,126479],\"mapped\",[1593]],[[126480,126480],\"mapped\",[1601]],[[126481,126481],\"mapped\",[1589]],[[126482,126482],\"mapped\",[1602]],[[126483,126483],\"mapped\",[1585]],[[126484,126484],\"mapped\",[1588]],[[126485,126485],\"mapped\",[1578]],[[126486,126486],\"mapped\",[1579]],[[126487,126487],\"mapped\",[1582]],[[126488,126488],\"mapped\",[1584]],[[126489,126489],\"mapped\",[1590]],[[126490,126490],\"mapped\",[1592]],[[126491,126491],\"mapped\",[1594]],[[126492,126492],\"mapped\",[1646]],[[126493,126493],\"mapped\",[1722]],[[126494,126494],\"mapped\",[1697]],[[126495,126495],\"mapped\",[1647]],[[126496,126496],\"disallowed\"],[[126497,126497],\"mapped\",[1576]],[[126498,126498],\"mapped\",[1580]],[[126499,126499],\"disallowed\"],[[126500,126500],\"mapped\",[1607]],[[126501,126502],\"disallowed\"],[[126503,126503],\"mapped\",[1581]],[[126504,126504],\"disallowed\"],[[126505,126505],\"mapped\",[1610]],[[126506,126506],\"mapped\",[1603]],[[126507,126507],\"mapped\",[1604]],[[126508,126508],\"mapped\",[1605]],[[126509,126509],\"mapped\",[1606]],[[126510,126510],\"mapped\",[1587]],[[126511,126511],\"mapped\",[1593]],[[126512,126512],\"mapped\",[1601]],[[126513,126513],\"mapped\",[1589]],[[126514,126514],\"mapped\",[1602]],[[126515,126515],\"disallowed\"],[[126516,126516],\"mapped\",[1588]],[[126517,126517],\"mapped\",[1578]],[[126518,126518],\"mapped\",[1579]],[[126519,126519],\"mapped\",[1582]],[[126520,126520],\"disallowed\"],[[126521,126521],\"mapped\",[1590]],[[126522,126522],\"disallowed\"],[[126523,126523],\"mapped\",[1594]],[[126524,126529],\"disallowed\"],[[126530,126530],\"mapped\",[1580]],[[126531,126534],\"disallowed\"],[[126535,126535],\"mapped\",[1581]],[[126536,126536],\"disallowed\"],[[126537,126537],\"mapped\",[1610]],[[126538,126538],\"disallowed\"],[[126539,126539],\"mapped\",[1604]],[[126540,126540],\"disallowed\"],[[126541,126541],\"mapped\",[1606]],[[126542,126542],\"mapped\",[1587]],[[126543,126543],\"mapped\",[1593]],[[126544,126544],\"disallowed\"],[[126545,126545],\"mapped\",[1589]],[[126546,126546],\"mapped\",[1602]],[[126547,126547],\"disallowed\"],[[126548,126548],\"mapped\",[1588]],[[126549,126550],\"disallowed\"],[[126551,126551],\"mapped\",[1582]],[[126552,126552],\"disallowed\"],[[126553,126553],\"mapped\",[1590]],[[126554,126554],\"disallowed\"],[[126555,126555],\"mapped\",[1594]],[[126556,126556],\"disallowed\"],[[126557,126557],\"mapped\",[1722]],[[126558,126558],\"disallowed\"],[[126559,126559],\"mapped\",[1647]],[[126560,126560],\"disallowed\"],[[126561,126561],\"mapped\",[1576]],[[126562,126562],\"mapped\",[1580]],[[126563,126563],\"disallowed\"],[[126564,126564],\"mapped\",[1607]],[[126565,126566],\"disallowed\"],[[126567,126567],\"mapped\",[1581]],[[126568,126568],\"mapped\",[1591]],[[126569,126569],\"mapped\",[1610]],[[126570,126570],\"mapped\",[1603]],[[126571,126571],\"disallowed\"],[[126572,126572],\"mapped\",[1605]],[[126573,126573],\"mapped\",[1606]],[[126574,126574],\"mapped\",[1587]],[[126575,126575],\"mapped\",[1593]],[[126576,126576],\"mapped\",[1601]],[[126577,126577],\"mapped\",[1589]],[[126578,126578],\"mapped\",[1602]],[[126579,126579],\"disallowed\"],[[126580,126580],\"mapped\",[1588]],[[126581,126581],\"mapped\",[1578]],[[126582,126582],\"mapped\",[1579]],[[126583,126583],\"mapped\",[1582]],[[126584,126584],\"disallowed\"],[[126585,126585],\"mapped\",[1590]],[[126586,126586],\"mapped\",[1592]],[[126587,126587],\"mapped\",[1594]],[[126588,126588],\"mapped\",[1646]],[[126589,126589],\"disallowed\"],[[126590,126590],\"mapped\",[1697]],[[126591,126591],\"disallowed\"],[[126592,126592],\"mapped\",[1575]],[[126593,126593],\"mapped\",[1576]],[[126594,126594],\"mapped\",[1580]],[[126595,126595],\"mapped\",[1583]],[[126596,126596],\"mapped\",[1607]],[[126597,126597],\"mapped\",[1608]],[[126598,126598],\"mapped\",[1586]],[[126599,126599],\"mapped\",[1581]],[[126600,126600],\"mapped\",[1591]],[[126601,126601],\"mapped\",[1610]],[[126602,126602],\"disallowed\"],[[126603,126603],\"mapped\",[1604]],[[126604,126604],\"mapped\",[1605]],[[126605,126605],\"mapped\",[1606]],[[126606,126606],\"mapped\",[1587]],[[126607,126607],\"mapped\",[1593]],[[126608,126608],\"mapped\",[1601]],[[126609,126609],\"mapped\",[1589]],[[126610,126610],\"mapped\",[1602]],[[126611,126611],\"mapped\",[1585]],[[126612,126612],\"mapped\",[1588]],[[126613,126613],\"mapped\",[1578]],[[126614,126614],\"mapped\",[1579]],[[126615,126615],\"mapped\",[1582]],[[126616,126616],\"mapped\",[1584]],[[126617,126617],\"mapped\",[1590]],[[126618,126618],\"mapped\",[1592]],[[126619,126619],\"mapped\",[1594]],[[126620,126624],\"disallowed\"],[[126625,126625],\"mapped\",[1576]],[[126626,126626],\"mapped\",[1580]],[[126627,126627],\"mapped\",[1583]],[[126628,126628],\"disallowed\"],[[126629,126629],\"mapped\",[1608]],[[126630,126630],\"mapped\",[1586]],[[126631,126631],\"mapped\",[1581]],[[126632,126632],\"mapped\",[1591]],[[126633,126633],\"mapped\",[1610]],[[126634,126634],\"disallowed\"],[[126635,126635],\"mapped\",[1604]],[[126636,126636],\"mapped\",[1605]],[[126637,126637],\"mapped\",[1606]],[[126638,126638],\"mapped\",[1587]],[[126639,126639],\"mapped\",[1593]],[[126640,126640],\"mapped\",[1601]],[[126641,126641],\"mapped\",[1589]],[[126642,126642],\"mapped\",[1602]],[[126643,126643],\"mapped\",[1585]],[[126644,126644],\"mapped\",[1588]],[[126645,126645],\"mapped\",[1578]],[[126646,126646],\"mapped\",[1579]],[[126647,126647],\"mapped\",[1582]],[[126648,126648],\"mapped\",[1584]],[[126649,126649],\"mapped\",[1590]],[[126650,126650],\"mapped\",[1592]],[[126651,126651],\"mapped\",[1594]],[[126652,126703],\"disallowed\"],[[126704,126705],\"valid\",[],\"NV8\"],[[126706,126975],\"disallowed\"],[[126976,127019],\"valid\",[],\"NV8\"],[[127020,127023],\"disallowed\"],[[127024,127123],\"valid\",[],\"NV8\"],[[127124,127135],\"disallowed\"],[[127136,127150],\"valid\",[],\"NV8\"],[[127151,127152],\"disallowed\"],[[127153,127166],\"valid\",[],\"NV8\"],[[127167,127167],\"valid\",[],\"NV8\"],[[127168,127168],\"disallowed\"],[[127169,127183],\"valid\",[],\"NV8\"],[[127184,127184],\"disallowed\"],[[127185,127199],\"valid\",[],\"NV8\"],[[127200,127221],\"valid\",[],\"NV8\"],[[127222,127231],\"disallowed\"],[[127232,127232],\"disallowed\"],[[127233,127233],\"disallowed_STD3_mapped\",[48,44]],[[127234,127234],\"disallowed_STD3_mapped\",[49,44]],[[127235,127235],\"disallowed_STD3_mapped\",[50,44]],[[127236,127236],\"disallowed_STD3_mapped\",[51,44]],[[127237,127237],\"disallowed_STD3_mapped\",[52,44]],[[127238,127238],\"disallowed_STD3_mapped\",[53,44]],[[127239,127239],\"disallowed_STD3_mapped\",[54,44]],[[127240,127240],\"disallowed_STD3_mapped\",[55,44]],[[127241,127241],\"disallowed_STD3_mapped\",[56,44]],[[127242,127242],\"disallowed_STD3_mapped\",[57,44]],[[127243,127244],\"valid\",[],\"NV8\"],[[127245,127247],\"disallowed\"],[[127248,127248],\"disallowed_STD3_mapped\",[40,97,41]],[[127249,127249],\"disallowed_STD3_mapped\",[40,98,41]],[[127250,127250],\"disallowed_STD3_mapped\",[40,99,41]],[[127251,127251],\"disallowed_STD3_mapped\",[40,100,41]],[[127252,127252],\"disallowed_STD3_mapped\",[40,101,41]],[[127253,127253],\"disallowed_STD3_mapped\",[40,102,41]],[[127254,127254],\"disallowed_STD3_mapped\",[40,103,41]],[[127255,127255],\"disallowed_STD3_mapped\",[40,104,41]],[[127256,127256],\"disallowed_STD3_mapped\",[40,105,41]],[[127257,127257],\"disallowed_STD3_mapped\",[40,106,41]],[[127258,127258],\"disallowed_STD3_mapped\",[40,107,41]],[[127259,127259],\"disallowed_STD3_mapped\",[40,108,41]],[[127260,127260],\"disallowed_STD3_mapped\",[40,109,41]],[[127261,127261],\"disallowed_STD3_mapped\",[40,110,41]],[[127262,127262],\"disallowed_STD3_mapped\",[40,111,41]],[[127263,127263],\"disallowed_STD3_mapped\",[40,112,41]],[[127264,127264],\"disallowed_STD3_mapped\",[40,113,41]],[[127265,127265],\"disallowed_STD3_mapped\",[40,114,41]],[[127266,127266],\"disallowed_STD3_mapped\",[40,115,41]],[[127267,127267],\"disallowed_STD3_mapped\",[40,116,41]],[[127268,127268],\"disallowed_STD3_mapped\",[40,117,41]],[[127269,127269],\"disallowed_STD3_mapped\",[40,118,41]],[[127270,127270],\"disallowed_STD3_mapped\",[40,119,41]],[[127271,127271],\"disallowed_STD3_mapped\",[40,120,41]],[[127272,127272],\"disallowed_STD3_mapped\",[40,121,41]],[[127273,127273],\"disallowed_STD3_mapped\",[40,122,41]],[[127274,127274],\"mapped\",[12308,115,12309]],[[127275,127275],\"mapped\",[99]],[[127276,127276],\"mapped\",[114]],[[127277,127277],\"mapped\",[99,100]],[[127278,127278],\"mapped\",[119,122]],[[127279,127279],\"disallowed\"],[[127280,127280],\"mapped\",[97]],[[127281,127281],\"mapped\",[98]],[[127282,127282],\"mapped\",[99]],[[127283,127283],\"mapped\",[100]],[[127284,127284],\"mapped\",[101]],[[127285,127285],\"mapped\",[102]],[[127286,127286],\"mapped\",[103]],[[127287,127287],\"mapped\",[104]],[[127288,127288],\"mapped\",[105]],[[127289,127289],\"mapped\",[106]],[[127290,127290],\"mapped\",[107]],[[127291,127291],\"mapped\",[108]],[[127292,127292],\"mapped\",[109]],[[127293,127293],\"mapped\",[110]],[[127294,127294],\"mapped\",[111]],[[127295,127295],\"mapped\",[112]],[[127296,127296],\"mapped\",[113]],[[127297,127297],\"mapped\",[114]],[[127298,127298],\"mapped\",[115]],[[127299,127299],\"mapped\",[116]],[[127300,127300],\"mapped\",[117]],[[127301,127301],\"mapped\",[118]],[[127302,127302],\"mapped\",[119]],[[127303,127303],\"mapped\",[120]],[[127304,127304],\"mapped\",[121]],[[127305,127305],\"mapped\",[122]],[[127306,127306],\"mapped\",[104,118]],[[127307,127307],\"mapped\",[109,118]],[[127308,127308],\"mapped\",[115,100]],[[127309,127309],\"mapped\",[115,115]],[[127310,127310],\"mapped\",[112,112,118]],[[127311,127311],\"mapped\",[119,99]],[[127312,127318],\"valid\",[],\"NV8\"],[[127319,127319],\"valid\",[],\"NV8\"],[[127320,127326],\"valid\",[],\"NV8\"],[[127327,127327],\"valid\",[],\"NV8\"],[[127328,127337],\"valid\",[],\"NV8\"],[[127338,127338],\"mapped\",[109,99]],[[127339,127339],\"mapped\",[109,100]],[[127340,127343],\"disallowed\"],[[127344,127352],\"valid\",[],\"NV8\"],[[127353,127353],\"valid\",[],\"NV8\"],[[127354,127354],\"valid\",[],\"NV8\"],[[127355,127356],\"valid\",[],\"NV8\"],[[127357,127358],\"valid\",[],\"NV8\"],[[127359,127359],\"valid\",[],\"NV8\"],[[127360,127369],\"valid\",[],\"NV8\"],[[127370,127373],\"valid\",[],\"NV8\"],[[127374,127375],\"valid\",[],\"NV8\"],[[127376,127376],\"mapped\",[100,106]],[[127377,127386],\"valid\",[],\"NV8\"],[[127387,127461],\"disallowed\"],[[127462,127487],\"valid\",[],\"NV8\"],[[127488,127488],\"mapped\",[12411,12363]],[[127489,127489],\"mapped\",[12467,12467]],[[127490,127490],\"mapped\",[12469]],[[127491,127503],\"disallowed\"],[[127504,127504],\"mapped\",[25163]],[[127505,127505],\"mapped\",[23383]],[[127506,127506],\"mapped\",[21452]],[[127507,127507],\"mapped\",[12487]],[[127508,127508],\"mapped\",[20108]],[[127509,127509],\"mapped\",[22810]],[[127510,127510],\"mapped\",[35299]],[[127511,127511],\"mapped\",[22825]],[[127512,127512],\"mapped\",[20132]],[[127513,127513],\"mapped\",[26144]],[[127514,127514],\"mapped\",[28961]],[[127515,127515],\"mapped\",[26009]],[[127516,127516],\"mapped\",[21069]],[[127517,127517],\"mapped\",[24460]],[[127518,127518],\"mapped\",[20877]],[[127519,127519],\"mapped\",[26032]],[[127520,127520],\"mapped\",[21021]],[[127521,127521],\"mapped\",[32066]],[[127522,127522],\"mapped\",[29983]],[[127523,127523],\"mapped\",[36009]],[[127524,127524],\"mapped\",[22768]],[[127525,127525],\"mapped\",[21561]],[[127526,127526],\"mapped\",[28436]],[[127527,127527],\"mapped\",[25237]],[[127528,127528],\"mapped\",[25429]],[[127529,127529],\"mapped\",[19968]],[[127530,127530],\"mapped\",[19977]],[[127531,127531],\"mapped\",[36938]],[[127532,127532],\"mapped\",[24038]],[[127533,127533],\"mapped\",[20013]],[[127534,127534],\"mapped\",[21491]],[[127535,127535],\"mapped\",[25351]],[[127536,127536],\"mapped\",[36208]],[[127537,127537],\"mapped\",[25171]],[[127538,127538],\"mapped\",[31105]],[[127539,127539],\"mapped\",[31354]],[[127540,127540],\"mapped\",[21512]],[[127541,127541],\"mapped\",[28288]],[[127542,127542],\"mapped\",[26377]],[[127543,127543],\"mapped\",[26376]],[[127544,127544],\"mapped\",[30003]],[[127545,127545],\"mapped\",[21106]],[[127546,127546],\"mapped\",[21942]],[[127547,127551],\"disallowed\"],[[127552,127552],\"mapped\",[12308,26412,12309]],[[127553,127553],\"mapped\",[12308,19977,12309]],[[127554,127554],\"mapped\",[12308,20108,12309]],[[127555,127555],\"mapped\",[12308,23433,12309]],[[127556,127556],\"mapped\",[12308,28857,12309]],[[127557,127557],\"mapped\",[12308,25171,12309]],[[127558,127558],\"mapped\",[12308,30423,12309]],[[127559,127559],\"mapped\",[12308,21213,12309]],[[127560,127560],\"mapped\",[12308,25943,12309]],[[127561,127567],\"disallowed\"],[[127568,127568],\"mapped\",[24471]],[[127569,127569],\"mapped\",[21487]],[[127570,127743],\"disallowed\"],[[127744,127776],\"valid\",[],\"NV8\"],[[127777,127788],\"valid\",[],\"NV8\"],[[127789,127791],\"valid\",[],\"NV8\"],[[127792,127797],\"valid\",[],\"NV8\"],[[127798,127798],\"valid\",[],\"NV8\"],[[127799,127868],\"valid\",[],\"NV8\"],[[127869,127869],\"valid\",[],\"NV8\"],[[127870,127871],\"valid\",[],\"NV8\"],[[127872,127891],\"valid\",[],\"NV8\"],[[127892,127903],\"valid\",[],\"NV8\"],[[127904,127940],\"valid\",[],\"NV8\"],[[127941,127941],\"valid\",[],\"NV8\"],[[127942,127946],\"valid\",[],\"NV8\"],[[127947,127950],\"valid\",[],\"NV8\"],[[127951,127955],\"valid\",[],\"NV8\"],[[127956,127967],\"valid\",[],\"NV8\"],[[127968,127984],\"valid\",[],\"NV8\"],[[127985,127991],\"valid\",[],\"NV8\"],[[127992,127999],\"valid\",[],\"NV8\"],[[128000,128062],\"valid\",[],\"NV8\"],[[128063,128063],\"valid\",[],\"NV8\"],[[128064,128064],\"valid\",[],\"NV8\"],[[128065,128065],\"valid\",[],\"NV8\"],[[128066,128247],\"valid\",[],\"NV8\"],[[128248,128248],\"valid\",[],\"NV8\"],[[128249,128252],\"valid\",[],\"NV8\"],[[128253,128254],\"valid\",[],\"NV8\"],[[128255,128255],\"valid\",[],\"NV8\"],[[128256,128317],\"valid\",[],\"NV8\"],[[128318,128319],\"valid\",[],\"NV8\"],[[128320,128323],\"valid\",[],\"NV8\"],[[128324,128330],\"valid\",[],\"NV8\"],[[128331,128335],\"valid\",[],\"NV8\"],[[128336,128359],\"valid\",[],\"NV8\"],[[128360,128377],\"valid\",[],\"NV8\"],[[128378,128378],\"disallowed\"],[[128379,128419],\"valid\",[],\"NV8\"],[[128420,128420],\"disallowed\"],[[128421,128506],\"valid\",[],\"NV8\"],[[128507,128511],\"valid\",[],\"NV8\"],[[128512,128512],\"valid\",[],\"NV8\"],[[128513,128528],\"valid\",[],\"NV8\"],[[128529,128529],\"valid\",[],\"NV8\"],[[128530,128532],\"valid\",[],\"NV8\"],[[128533,128533],\"valid\",[],\"NV8\"],[[128534,128534],\"valid\",[],\"NV8\"],[[128535,128535],\"valid\",[],\"NV8\"],[[128536,128536],\"valid\",[],\"NV8\"],[[128537,128537],\"valid\",[],\"NV8\"],[[128538,128538],\"valid\",[],\"NV8\"],[[128539,128539],\"valid\",[],\"NV8\"],[[128540,128542],\"valid\",[],\"NV8\"],[[128543,128543],\"valid\",[],\"NV8\"],[[128544,128549],\"valid\",[],\"NV8\"],[[128550,128551],\"valid\",[],\"NV8\"],[[128552,128555],\"valid\",[],\"NV8\"],[[128556,128556],\"valid\",[],\"NV8\"],[[128557,128557],\"valid\",[],\"NV8\"],[[128558,128559],\"valid\",[],\"NV8\"],[[128560,128563],\"valid\",[],\"NV8\"],[[128564,128564],\"valid\",[],\"NV8\"],[[128565,128576],\"valid\",[],\"NV8\"],[[128577,128578],\"valid\",[],\"NV8\"],[[128579,128580],\"valid\",[],\"NV8\"],[[128581,128591],\"valid\",[],\"NV8\"],[[128592,128639],\"valid\",[],\"NV8\"],[[128640,128709],\"valid\",[],\"NV8\"],[[128710,128719],\"valid\",[],\"NV8\"],[[128720,128720],\"valid\",[],\"NV8\"],[[128721,128735],\"disallowed\"],[[128736,128748],\"valid\",[],\"NV8\"],[[128749,128751],\"disallowed\"],[[128752,128755],\"valid\",[],\"NV8\"],[[128756,128767],\"disallowed\"],[[128768,128883],\"valid\",[],\"NV8\"],[[128884,128895],\"disallowed\"],[[128896,128980],\"valid\",[],\"NV8\"],[[128981,129023],\"disallowed\"],[[129024,129035],\"valid\",[],\"NV8\"],[[129036,129039],\"disallowed\"],[[129040,129095],\"valid\",[],\"NV8\"],[[129096,129103],\"disallowed\"],[[129104,129113],\"valid\",[],\"NV8\"],[[129114,129119],\"disallowed\"],[[129120,129159],\"valid\",[],\"NV8\"],[[129160,129167],\"disallowed\"],[[129168,129197],\"valid\",[],\"NV8\"],[[129198,129295],\"disallowed\"],[[129296,129304],\"valid\",[],\"NV8\"],[[129305,129407],\"disallowed\"],[[129408,129412],\"valid\",[],\"NV8\"],[[129413,129471],\"disallowed\"],[[129472,129472],\"valid\",[],\"NV8\"],[[129473,131069],\"disallowed\"],[[131070,131071],\"disallowed\"],[[131072,173782],\"valid\"],[[173783,173823],\"disallowed\"],[[173824,177972],\"valid\"],[[177973,177983],\"disallowed\"],[[177984,178205],\"valid\"],[[178206,178207],\"disallowed\"],[[178208,183969],\"valid\"],[[183970,194559],\"disallowed\"],[[194560,194560],\"mapped\",[20029]],[[194561,194561],\"mapped\",[20024]],[[194562,194562],\"mapped\",[20033]],[[194563,194563],\"mapped\",[131362]],[[194564,194564],\"mapped\",[20320]],[[194565,194565],\"mapped\",[20398]],[[194566,194566],\"mapped\",[20411]],[[194567,194567],\"mapped\",[20482]],[[194568,194568],\"mapped\",[20602]],[[194569,194569],\"mapped\",[20633]],[[194570,194570],\"mapped\",[20711]],[[194571,194571],\"mapped\",[20687]],[[194572,194572],\"mapped\",[13470]],[[194573,194573],\"mapped\",[132666]],[[194574,194574],\"mapped\",[20813]],[[194575,194575],\"mapped\",[20820]],[[194576,194576],\"mapped\",[20836]],[[194577,194577],\"mapped\",[20855]],[[194578,194578],\"mapped\",[132380]],[[194579,194579],\"mapped\",[13497]],[[194580,194580],\"mapped\",[20839]],[[194581,194581],\"mapped\",[20877]],[[194582,194582],\"mapped\",[132427]],[[194583,194583],\"mapped\",[20887]],[[194584,194584],\"mapped\",[20900]],[[194585,194585],\"mapped\",[20172]],[[194586,194586],\"mapped\",[20908]],[[194587,194587],\"mapped\",[20917]],[[194588,194588],\"mapped\",[168415]],[[194589,194589],\"mapped\",[20981]],[[194590,194590],\"mapped\",[20995]],[[194591,194591],\"mapped\",[13535]],[[194592,194592],\"mapped\",[21051]],[[194593,194593],\"mapped\",[21062]],[[194594,194594],\"mapped\",[21106]],[[194595,194595],\"mapped\",[21111]],[[194596,194596],\"mapped\",[13589]],[[194597,194597],\"mapped\",[21191]],[[194598,194598],\"mapped\",[21193]],[[194599,194599],\"mapped\",[21220]],[[194600,194600],\"mapped\",[21242]],[[194601,194601],\"mapped\",[21253]],[[194602,194602],\"mapped\",[21254]],[[194603,194603],\"mapped\",[21271]],[[194604,194604],\"mapped\",[21321]],[[194605,194605],\"mapped\",[21329]],[[194606,194606],\"mapped\",[21338]],[[194607,194607],\"mapped\",[21363]],[[194608,194608],\"mapped\",[21373]],[[194609,194611],\"mapped\",[21375]],[[194612,194612],\"mapped\",[133676]],[[194613,194613],\"mapped\",[28784]],[[194614,194614],\"mapped\",[21450]],[[194615,194615],\"mapped\",[21471]],[[194616,194616],\"mapped\",[133987]],[[194617,194617],\"mapped\",[21483]],[[194618,194618],\"mapped\",[21489]],[[194619,194619],\"mapped\",[21510]],[[194620,194620],\"mapped\",[21662]],[[194621,194621],\"mapped\",[21560]],[[194622,194622],\"mapped\",[21576]],[[194623,194623],\"mapped\",[21608]],[[194624,194624],\"mapped\",[21666]],[[194625,194625],\"mapped\",[21750]],[[194626,194626],\"mapped\",[21776]],[[194627,194627],\"mapped\",[21843]],[[194628,194628],\"mapped\",[21859]],[[194629,194630],\"mapped\",[21892]],[[194631,194631],\"mapped\",[21913]],[[194632,194632],\"mapped\",[21931]],[[194633,194633],\"mapped\",[21939]],[[194634,194634],\"mapped\",[21954]],[[194635,194635],\"mapped\",[22294]],[[194636,194636],\"mapped\",[22022]],[[194637,194637],\"mapped\",[22295]],[[194638,194638],\"mapped\",[22097]],[[194639,194639],\"mapped\",[22132]],[[194640,194640],\"mapped\",[20999]],[[194641,194641],\"mapped\",[22766]],[[194642,194642],\"mapped\",[22478]],[[194643,194643],\"mapped\",[22516]],[[194644,194644],\"mapped\",[22541]],[[194645,194645],\"mapped\",[22411]],[[194646,194646],\"mapped\",[22578]],[[194647,194647],\"mapped\",[22577]],[[194648,194648],\"mapped\",[22700]],[[194649,194649],\"mapped\",[136420]],[[194650,194650],\"mapped\",[22770]],[[194651,194651],\"mapped\",[22775]],[[194652,194652],\"mapped\",[22790]],[[194653,194653],\"mapped\",[22810]],[[194654,194654],\"mapped\",[22818]],[[194655,194655],\"mapped\",[22882]],[[194656,194656],\"mapped\",[136872]],[[194657,194657],\"mapped\",[136938]],[[194658,194658],\"mapped\",[23020]],[[194659,194659],\"mapped\",[23067]],[[194660,194660],\"mapped\",[23079]],[[194661,194661],\"mapped\",[23000]],[[194662,194662],\"mapped\",[23142]],[[194663,194663],\"mapped\",[14062]],[[194664,194664],\"disallowed\"],[[194665,194665],\"mapped\",[23304]],[[194666,194667],\"mapped\",[23358]],[[194668,194668],\"mapped\",[137672]],[[194669,194669],\"mapped\",[23491]],[[194670,194670],\"mapped\",[23512]],[[194671,194671],\"mapped\",[23527]],[[194672,194672],\"mapped\",[23539]],[[194673,194673],\"mapped\",[138008]],[[194674,194674],\"mapped\",[23551]],[[194675,194675],\"mapped\",[23558]],[[194676,194676],\"disallowed\"],[[194677,194677],\"mapped\",[23586]],[[194678,194678],\"mapped\",[14209]],[[194679,194679],\"mapped\",[23648]],[[194680,194680],\"mapped\",[23662]],[[194681,194681],\"mapped\",[23744]],[[194682,194682],\"mapped\",[23693]],[[194683,194683],\"mapped\",[138724]],[[194684,194684],\"mapped\",[23875]],[[194685,194685],\"mapped\",[138726]],[[194686,194686],\"mapped\",[23918]],[[194687,194687],\"mapped\",[23915]],[[194688,194688],\"mapped\",[23932]],[[194689,194689],\"mapped\",[24033]],[[194690,194690],\"mapped\",[24034]],[[194691,194691],\"mapped\",[14383]],[[194692,194692],\"mapped\",[24061]],[[194693,194693],\"mapped\",[24104]],[[194694,194694],\"mapped\",[24125]],[[194695,194695],\"mapped\",[24169]],[[194696,194696],\"mapped\",[14434]],[[194697,194697],\"mapped\",[139651]],[[194698,194698],\"mapped\",[14460]],[[194699,194699],\"mapped\",[24240]],[[194700,194700],\"mapped\",[24243]],[[194701,194701],\"mapped\",[24246]],[[194702,194702],\"mapped\",[24266]],[[194703,194703],\"mapped\",[172946]],[[194704,194704],\"mapped\",[24318]],[[194705,194706],\"mapped\",[140081]],[[194707,194707],\"mapped\",[33281]],[[194708,194709],\"mapped\",[24354]],[[194710,194710],\"mapped\",[14535]],[[194711,194711],\"mapped\",[144056]],[[194712,194712],\"mapped\",[156122]],[[194713,194713],\"mapped\",[24418]],[[194714,194714],\"mapped\",[24427]],[[194715,194715],\"mapped\",[14563]],[[194716,194716],\"mapped\",[24474]],[[194717,194717],\"mapped\",[24525]],[[194718,194718],\"mapped\",[24535]],[[194719,194719],\"mapped\",[24569]],[[194720,194720],\"mapped\",[24705]],[[194721,194721],\"mapped\",[14650]],[[194722,194722],\"mapped\",[14620]],[[194723,194723],\"mapped\",[24724]],[[194724,194724],\"mapped\",[141012]],[[194725,194725],\"mapped\",[24775]],[[194726,194726],\"mapped\",[24904]],[[194727,194727],\"mapped\",[24908]],[[194728,194728],\"mapped\",[24910]],[[194729,194729],\"mapped\",[24908]],[[194730,194730],\"mapped\",[24954]],[[194731,194731],\"mapped\",[24974]],[[194732,194732],\"mapped\",[25010]],[[194733,194733],\"mapped\",[24996]],[[194734,194734],\"mapped\",[25007]],[[194735,194735],\"mapped\",[25054]],[[194736,194736],\"mapped\",[25074]],[[194737,194737],\"mapped\",[25078]],[[194738,194738],\"mapped\",[25104]],[[194739,194739],\"mapped\",[25115]],[[194740,194740],\"mapped\",[25181]],[[194741,194741],\"mapped\",[25265]],[[194742,194742],\"mapped\",[25300]],[[194743,194743],\"mapped\",[25424]],[[194744,194744],\"mapped\",[142092]],[[194745,194745],\"mapped\",[25405]],[[194746,194746],\"mapped\",[25340]],[[194747,194747],\"mapped\",[25448]],[[194748,194748],\"mapped\",[25475]],[[194749,194749],\"mapped\",[25572]],[[194750,194750],\"mapped\",[142321]],[[194751,194751],\"mapped\",[25634]],[[194752,194752],\"mapped\",[25541]],[[194753,194753],\"mapped\",[25513]],[[194754,194754],\"mapped\",[14894]],[[194755,194755],\"mapped\",[25705]],[[194756,194756],\"mapped\",[25726]],[[194757,194757],\"mapped\",[25757]],[[194758,194758],\"mapped\",[25719]],[[194759,194759],\"mapped\",[14956]],[[194760,194760],\"mapped\",[25935]],[[194761,194761],\"mapped\",[25964]],[[194762,194762],\"mapped\",[143370]],[[194763,194763],\"mapped\",[26083]],[[194764,194764],\"mapped\",[26360]],[[194765,194765],\"mapped\",[26185]],[[194766,194766],\"mapped\",[15129]],[[194767,194767],\"mapped\",[26257]],[[194768,194768],\"mapped\",[15112]],[[194769,194769],\"mapped\",[15076]],[[194770,194770],\"mapped\",[20882]],[[194771,194771],\"mapped\",[20885]],[[194772,194772],\"mapped\",[26368]],[[194773,194773],\"mapped\",[26268]],[[194774,194774],\"mapped\",[32941]],[[194775,194775],\"mapped\",[17369]],[[194776,194776],\"mapped\",[26391]],[[194777,194777],\"mapped\",[26395]],[[194778,194778],\"mapped\",[26401]],[[194779,194779],\"mapped\",[26462]],[[194780,194780],\"mapped\",[26451]],[[194781,194781],\"mapped\",[144323]],[[194782,194782],\"mapped\",[15177]],[[194783,194783],\"mapped\",[26618]],[[194784,194784],\"mapped\",[26501]],[[194785,194785],\"mapped\",[26706]],[[194786,194786],\"mapped\",[26757]],[[194787,194787],\"mapped\",[144493]],[[194788,194788],\"mapped\",[26766]],[[194789,194789],\"mapped\",[26655]],[[194790,194790],\"mapped\",[26900]],[[194791,194791],\"mapped\",[15261]],[[194792,194792],\"mapped\",[26946]],[[194793,194793],\"mapped\",[27043]],[[194794,194794],\"mapped\",[27114]],[[194795,194795],\"mapped\",[27304]],[[194796,194796],\"mapped\",[145059]],[[194797,194797],\"mapped\",[27355]],[[194798,194798],\"mapped\",[15384]],[[194799,194799],\"mapped\",[27425]],[[194800,194800],\"mapped\",[145575]],[[194801,194801],\"mapped\",[27476]],[[194802,194802],\"mapped\",[15438]],[[194803,194803],\"mapped\",[27506]],[[194804,194804],\"mapped\",[27551]],[[194805,194805],\"mapped\",[27578]],[[194806,194806],\"mapped\",[27579]],[[194807,194807],\"mapped\",[146061]],[[194808,194808],\"mapped\",[138507]],[[194809,194809],\"mapped\",[146170]],[[194810,194810],\"mapped\",[27726]],[[194811,194811],\"mapped\",[146620]],[[194812,194812],\"mapped\",[27839]],[[194813,194813],\"mapped\",[27853]],[[194814,194814],\"mapped\",[27751]],[[194815,194815],\"mapped\",[27926]],[[194816,194816],\"mapped\",[27966]],[[194817,194817],\"mapped\",[28023]],[[194818,194818],\"mapped\",[27969]],[[194819,194819],\"mapped\",[28009]],[[194820,194820],\"mapped\",[28024]],[[194821,194821],\"mapped\",[28037]],[[194822,194822],\"mapped\",[146718]],[[194823,194823],\"mapped\",[27956]],[[194824,194824],\"mapped\",[28207]],[[194825,194825],\"mapped\",[28270]],[[194826,194826],\"mapped\",[15667]],[[194827,194827],\"mapped\",[28363]],[[194828,194828],\"mapped\",[28359]],[[194829,194829],\"mapped\",[147153]],[[194830,194830],\"mapped\",[28153]],[[194831,194831],\"mapped\",[28526]],[[194832,194832],\"mapped\",[147294]],[[194833,194833],\"mapped\",[147342]],[[194834,194834],\"mapped\",[28614]],[[194835,194835],\"mapped\",[28729]],[[194836,194836],\"mapped\",[28702]],[[194837,194837],\"mapped\",[28699]],[[194838,194838],\"mapped\",[15766]],[[194839,194839],\"mapped\",[28746]],[[194840,194840],\"mapped\",[28797]],[[194841,194841],\"mapped\",[28791]],[[194842,194842],\"mapped\",[28845]],[[194843,194843],\"mapped\",[132389]],[[194844,194844],\"mapped\",[28997]],[[194845,194845],\"mapped\",[148067]],[[194846,194846],\"mapped\",[29084]],[[194847,194847],\"disallowed\"],[[194848,194848],\"mapped\",[29224]],[[194849,194849],\"mapped\",[29237]],[[194850,194850],\"mapped\",[29264]],[[194851,194851],\"mapped\",[149000]],[[194852,194852],\"mapped\",[29312]],[[194853,194853],\"mapped\",[29333]],[[194854,194854],\"mapped\",[149301]],[[194855,194855],\"mapped\",[149524]],[[194856,194856],\"mapped\",[29562]],[[194857,194857],\"mapped\",[29579]],[[194858,194858],\"mapped\",[16044]],[[194859,194859],\"mapped\",[29605]],[[194860,194861],\"mapped\",[16056]],[[194862,194862],\"mapped\",[29767]],[[194863,194863],\"mapped\",[29788]],[[194864,194864],\"mapped\",[29809]],[[194865,194865],\"mapped\",[29829]],[[194866,194866],\"mapped\",[29898]],[[194867,194867],\"mapped\",[16155]],[[194868,194868],\"mapped\",[29988]],[[194869,194869],\"mapped\",[150582]],[[194870,194870],\"mapped\",[30014]],[[194871,194871],\"mapped\",[150674]],[[194872,194872],\"mapped\",[30064]],[[194873,194873],\"mapped\",[139679]],[[194874,194874],\"mapped\",[30224]],[[194875,194875],\"mapped\",[151457]],[[194876,194876],\"mapped\",[151480]],[[194877,194877],\"mapped\",[151620]],[[194878,194878],\"mapped\",[16380]],[[194879,194879],\"mapped\",[16392]],[[194880,194880],\"mapped\",[30452]],[[194881,194881],\"mapped\",[151795]],[[194882,194882],\"mapped\",[151794]],[[194883,194883],\"mapped\",[151833]],[[194884,194884],\"mapped\",[151859]],[[194885,194885],\"mapped\",[30494]],[[194886,194887],\"mapped\",[30495]],[[194888,194888],\"mapped\",[30538]],[[194889,194889],\"mapped\",[16441]],[[194890,194890],\"mapped\",[30603]],[[194891,194891],\"mapped\",[16454]],[[194892,194892],\"mapped\",[16534]],[[194893,194893],\"mapped\",[152605]],[[194894,194894],\"mapped\",[30798]],[[194895,194895],\"mapped\",[30860]],[[194896,194896],\"mapped\",[30924]],[[194897,194897],\"mapped\",[16611]],[[194898,194898],\"mapped\",[153126]],[[194899,194899],\"mapped\",[31062]],[[194900,194900],\"mapped\",[153242]],[[194901,194901],\"mapped\",[153285]],[[194902,194902],\"mapped\",[31119]],[[194903,194903],\"mapped\",[31211]],[[194904,194904],\"mapped\",[16687]],[[194905,194905],\"mapped\",[31296]],[[194906,194906],\"mapped\",[31306]],[[194907,194907],\"mapped\",[31311]],[[194908,194908],\"mapped\",[153980]],[[194909,194910],\"mapped\",[154279]],[[194911,194911],\"disallowed\"],[[194912,194912],\"mapped\",[16898]],[[194913,194913],\"mapped\",[154539]],[[194914,194914],\"mapped\",[31686]],[[194915,194915],\"mapped\",[31689]],[[194916,194916],\"mapped\",[16935]],[[194917,194917],\"mapped\",[154752]],[[194918,194918],\"mapped\",[31954]],[[194919,194919],\"mapped\",[17056]],[[194920,194920],\"mapped\",[31976]],[[194921,194921],\"mapped\",[31971]],[[194922,194922],\"mapped\",[32000]],[[194923,194923],\"mapped\",[155526]],[[194924,194924],\"mapped\",[32099]],[[194925,194925],\"mapped\",[17153]],[[194926,194926],\"mapped\",[32199]],[[194927,194927],\"mapped\",[32258]],[[194928,194928],\"mapped\",[32325]],[[194929,194929],\"mapped\",[17204]],[[194930,194930],\"mapped\",[156200]],[[194931,194931],\"mapped\",[156231]],[[194932,194932],\"mapped\",[17241]],[[194933,194933],\"mapped\",[156377]],[[194934,194934],\"mapped\",[32634]],[[194935,194935],\"mapped\",[156478]],[[194936,194936],\"mapped\",[32661]],[[194937,194937],\"mapped\",[32762]],[[194938,194938],\"mapped\",[32773]],[[194939,194939],\"mapped\",[156890]],[[194940,194940],\"mapped\",[156963]],[[194941,194941],\"mapped\",[32864]],[[194942,194942],\"mapped\",[157096]],[[194943,194943],\"mapped\",[32880]],[[194944,194944],\"mapped\",[144223]],[[194945,194945],\"mapped\",[17365]],[[194946,194946],\"mapped\",[32946]],[[194947,194947],\"mapped\",[33027]],[[194948,194948],\"mapped\",[17419]],[[194949,194949],\"mapped\",[33086]],[[194950,194950],\"mapped\",[23221]],[[194951,194951],\"mapped\",[157607]],[[194952,194952],\"mapped\",[157621]],[[194953,194953],\"mapped\",[144275]],[[194954,194954],\"mapped\",[144284]],[[194955,194955],\"mapped\",[33281]],[[194956,194956],\"mapped\",[33284]],[[194957,194957],\"mapped\",[36766]],[[194958,194958],\"mapped\",[17515]],[[194959,194959],\"mapped\",[33425]],[[194960,194960],\"mapped\",[33419]],[[194961,194961],\"mapped\",[33437]],[[194962,194962],\"mapped\",[21171]],[[194963,194963],\"mapped\",[33457]],[[194964,194964],\"mapped\",[33459]],[[194965,194965],\"mapped\",[33469]],[[194966,194966],\"mapped\",[33510]],[[194967,194967],\"mapped\",[158524]],[[194968,194968],\"mapped\",[33509]],[[194969,194969],\"mapped\",[33565]],[[194970,194970],\"mapped\",[33635]],[[194971,194971],\"mapped\",[33709]],[[194972,194972],\"mapped\",[33571]],[[194973,194973],\"mapped\",[33725]],[[194974,194974],\"mapped\",[33767]],[[194975,194975],\"mapped\",[33879]],[[194976,194976],\"mapped\",[33619]],[[194977,194977],\"mapped\",[33738]],[[194978,194978],\"mapped\",[33740]],[[194979,194979],\"mapped\",[33756]],[[194980,194980],\"mapped\",[158774]],[[194981,194981],\"mapped\",[159083]],[[194982,194982],\"mapped\",[158933]],[[194983,194983],\"mapped\",[17707]],[[194984,194984],\"mapped\",[34033]],[[194985,194985],\"mapped\",[34035]],[[194986,194986],\"mapped\",[34070]],[[194987,194987],\"mapped\",[160714]],[[194988,194988],\"mapped\",[34148]],[[194989,194989],\"mapped\",[159532]],[[194990,194990],\"mapped\",[17757]],[[194991,194991],\"mapped\",[17761]],[[194992,194992],\"mapped\",[159665]],[[194993,194993],\"mapped\",[159954]],[[194994,194994],\"mapped\",[17771]],[[194995,194995],\"mapped\",[34384]],[[194996,194996],\"mapped\",[34396]],[[194997,194997],\"mapped\",[34407]],[[194998,194998],\"mapped\",[34409]],[[194999,194999],\"mapped\",[34473]],[[195000,195000],\"mapped\",[34440]],[[195001,195001],\"mapped\",[34574]],[[195002,195002],\"mapped\",[34530]],[[195003,195003],\"mapped\",[34681]],[[195004,195004],\"mapped\",[34600]],[[195005,195005],\"mapped\",[34667]],[[195006,195006],\"mapped\",[34694]],[[195007,195007],\"disallowed\"],[[195008,195008],\"mapped\",[34785]],[[195009,195009],\"mapped\",[34817]],[[195010,195010],\"mapped\",[17913]],[[195011,195011],\"mapped\",[34912]],[[195012,195012],\"mapped\",[34915]],[[195013,195013],\"mapped\",[161383]],[[195014,195014],\"mapped\",[35031]],[[195015,195015],\"mapped\",[35038]],[[195016,195016],\"mapped\",[17973]],[[195017,195017],\"mapped\",[35066]],[[195018,195018],\"mapped\",[13499]],[[195019,195019],\"mapped\",[161966]],[[195020,195020],\"mapped\",[162150]],[[195021,195021],\"mapped\",[18110]],[[195022,195022],\"mapped\",[18119]],[[195023,195023],\"mapped\",[35488]],[[195024,195024],\"mapped\",[35565]],[[195025,195025],\"mapped\",[35722]],[[195026,195026],\"mapped\",[35925]],[[195027,195027],\"mapped\",[162984]],[[195028,195028],\"mapped\",[36011]],[[195029,195029],\"mapped\",[36033]],[[195030,195030],\"mapped\",[36123]],[[195031,195031],\"mapped\",[36215]],[[195032,195032],\"mapped\",[163631]],[[195033,195033],\"mapped\",[133124]],[[195034,195034],\"mapped\",[36299]],[[195035,195035],\"mapped\",[36284]],[[195036,195036],\"mapped\",[36336]],[[195037,195037],\"mapped\",[133342]],[[195038,195038],\"mapped\",[36564]],[[195039,195039],\"mapped\",[36664]],[[195040,195040],\"mapped\",[165330]],[[195041,195041],\"mapped\",[165357]],[[195042,195042],\"mapped\",[37012]],[[195043,195043],\"mapped\",[37105]],[[195044,195044],\"mapped\",[37137]],[[195045,195045],\"mapped\",[165678]],[[195046,195046],\"mapped\",[37147]],[[195047,195047],\"mapped\",[37432]],[[195048,195048],\"mapped\",[37591]],[[195049,195049],\"mapped\",[37592]],[[195050,195050],\"mapped\",[37500]],[[195051,195051],\"mapped\",[37881]],[[195052,195052],\"mapped\",[37909]],[[195053,195053],\"mapped\",[166906]],[[195054,195054],\"mapped\",[38283]],[[195055,195055],\"mapped\",[18837]],[[195056,195056],\"mapped\",[38327]],[[195057,195057],\"mapped\",[167287]],[[195058,195058],\"mapped\",[18918]],[[195059,195059],\"mapped\",[38595]],[[195060,195060],\"mapped\",[23986]],[[195061,195061],\"mapped\",[38691]],[[195062,195062],\"mapped\",[168261]],[[195063,195063],\"mapped\",[168474]],[[195064,195064],\"mapped\",[19054]],[[195065,195065],\"mapped\",[19062]],[[195066,195066],\"mapped\",[38880]],[[195067,195067],\"mapped\",[168970]],[[195068,195068],\"mapped\",[19122]],[[195069,195069],\"mapped\",[169110]],[[195070,195071],\"mapped\",[38923]],[[195072,195072],\"mapped\",[38953]],[[195073,195073],\"mapped\",[169398]],[[195074,195074],\"mapped\",[39138]],[[195075,195075],\"mapped\",[19251]],[[195076,195076],\"mapped\",[39209]],[[195077,195077],\"mapped\",[39335]],[[195078,195078],\"mapped\",[39362]],[[195079,195079],\"mapped\",[39422]],[[195080,195080],\"mapped\",[19406]],[[195081,195081],\"mapped\",[170800]],[[195082,195082],\"mapped\",[39698]],[[195083,195083],\"mapped\",[40000]],[[195084,195084],\"mapped\",[40189]],[[195085,195085],\"mapped\",[19662]],[[195086,195086],\"mapped\",[19693]],[[195087,195087],\"mapped\",[40295]],[[195088,195088],\"mapped\",[172238]],[[195089,195089],\"mapped\",[19704]],[[195090,195090],\"mapped\",[172293]],[[195091,195091],\"mapped\",[172558]],[[195092,195092],\"mapped\",[172689]],[[195093,195093],\"mapped\",[40635]],[[195094,195094],\"mapped\",[19798]],[[195095,195095],\"mapped\",[40697]],[[195096,195096],\"mapped\",[40702]],[[195097,195097],\"mapped\",[40709]],[[195098,195098],\"mapped\",[40719]],[[195099,195099],\"mapped\",[40726]],[[195100,195100],\"mapped\",[40763]],[[195101,195101],\"mapped\",[173568]],[[195102,196605],\"disallowed\"],[[196606,196607],\"disallowed\"],[[196608,262141],\"disallowed\"],[[262142,262143],\"disallowed\"],[[262144,327677],\"disallowed\"],[[327678,327679],\"disallowed\"],[[327680,393213],\"disallowed\"],[[393214,393215],\"disallowed\"],[[393216,458749],\"disallowed\"],[[458750,458751],\"disallowed\"],[[458752,524285],\"disallowed\"],[[524286,524287],\"disallowed\"],[[524288,589821],\"disallowed\"],[[589822,589823],\"disallowed\"],[[589824,655357],\"disallowed\"],[[655358,655359],\"disallowed\"],[[655360,720893],\"disallowed\"],[[720894,720895],\"disallowed\"],[[720896,786429],\"disallowed\"],[[786430,786431],\"disallowed\"],[[786432,851965],\"disallowed\"],[[851966,851967],\"disallowed\"],[[851968,917501],\"disallowed\"],[[917502,917503],\"disallowed\"],[[917504,917504],\"disallowed\"],[[917505,917505],\"disallowed\"],[[917506,917535],\"disallowed\"],[[917536,917631],\"disallowed\"],[[917632,917759],\"disallowed\"],[[917760,917999],\"ignored\"],[[918000,983037],\"disallowed\"],[[983038,983039],\"disallowed\"],[[983040,1048573],\"disallowed\"],[[1048574,1048575],\"disallowed\"],[[1048576,1114109],\"disallowed\"],[[1114110,1114111],\"disallowed\"]]");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Vue.js v2.7.5
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*!
 * Vue.js v2.7.5
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
const t=Object.freeze({}),e=Array.isArray;function n(t){return null==t}function o(t){return null!=t}function r(t){return!0===t}function s(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function i(t){return"function"==typeof t}function c(t){return null!==t&&"object"==typeof t}const a=Object.prototype.toString;function l(t){return"[object Object]"===a.call(t)}function u(t){const e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return o(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===a?JSON.stringify(t,null,2):String(t)}function p(t){const e=parseFloat(t);return isNaN(e)?t:e}function h(t,e){const n=Object.create(null),o=t.split(",");for(let t=0;t<o.length;t++)n[o[t]]=!0;return e?t=>n[t.toLowerCase()]:t=>n[t]}const m=h("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){const n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}const v=Object.prototype.hasOwnProperty;function y(t,e){return v.call(t,e)}function g(t){const e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}const b=/-(\w)/g,$=g((t=>t.replace(b,((t,e)=>e?e.toUpperCase():"")))),w=g((t=>t.charAt(0).toUpperCase()+t.slice(1))),C=/\B([A-Z])/g,x=g((t=>t.replace(C,"-$1").toLowerCase()));const k=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){const o=arguments.length;return o?o>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function O(t,e){e=e||0;let n=t.length-e;const o=new Array(n);for(;n--;)o[n]=t[n+e];return o}function S(t,e){for(const n in e)t[n]=e[n];return t}function A(t){const e={};for(let n=0;n<t.length;n++)t[n]&&S(e,t[n]);return e}function T(t,e,n){}const j=(t,e,n)=>!1,E=t=>t;function I(t,e){if(t===e)return!0;const n=c(t),o=c(e);if(!n||!o)return!n&&!o&&String(t)===String(e);try{const n=Array.isArray(t),o=Array.isArray(e);if(n&&o)return t.length===e.length&&t.every(((t,n)=>I(t,e[n])));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(n||o)return!1;{const n=Object.keys(t),o=Object.keys(e);return n.length===o.length&&n.every((n=>I(t[n],e[n])))}}catch(t){return!1}}function P(t,e){for(let n=0;n<t.length;n++)if(I(t[n],e))return n;return-1}function D(t){let e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function N(t,e){return t===e?0===t&&1/t!=1/e:t==t||e==e}const M=["component","directive","filter"],R=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"];var L={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:T,parsePlatformTagName:E,mustUseProp:j,async:!0,_lifecycleHooks:R};function F(t){const e=(t+"").charCodeAt(0);return 36===e||95===e}function U(t,e,n,o){Object.defineProperty(t,e,{value:n,enumerable:!!o,writable:!0,configurable:!0})}const B=new RegExp(`[^${/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source}.$_\\d]`);const V="__proto__"in{},z="undefined"!=typeof window,H=z&&window.navigator.userAgent.toLowerCase(),W=H&&/msie|trident/.test(H),K=H&&H.indexOf("msie 9.0")>0,q=H&&H.indexOf("edge/")>0;H&&H.indexOf("android");const G=H&&/iphone|ipad|ipod|ios/.test(H);H&&/chrome\/\d+/.test(H),H&&/phantomjs/.test(H);const Z=H&&H.match(/firefox\/(\d+)/),J={}.watch;let X,Q=!1;if(z)try{const t={};Object.defineProperty(t,"passive",{get(){Q=!0}}),window.addEventListener("test-passive",null,t)}catch(t){}const Y=()=>(void 0===X&&(X=!z&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),X),tt=z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function et(t){return"function"==typeof t&&/native code/.test(t.toString())}const nt="undefined"!=typeof Symbol&&et(Symbol)&&"undefined"!=typeof Reflect&&et(Reflect.ownKeys);let ot;ot="undefined"!=typeof Set&&et(Set)?Set:class{constructor(){this.set=Object.create(null)}has(t){return!0===this.set[t]}add(t){this.set[t]=!0}clear(){this.set=Object.create(null)}};let rt=null;function st(t=null){t||rt&&rt._scope.off(),rt=t,t&&t._scope.on()}class it{constructor(t,e,n,o,r,s,i,c){this.tag=t,this.data=e,this.children=n,this.text=o,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=i,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=c,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}get child(){return this.componentInstance}}const ct=(t="")=>{const e=new it;return e.text=t,e.isComment=!0,e};function at(t){return new it(void 0,void 0,void 0,String(t))}function lt(t){const e=new it(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}let ut=0;class ft{constructor(){this.id=ut++,this.subs=[]}addSub(t){this.subs.push(t)}removeSub(t){_(this.subs,t)}depend(t){ft.target&&ft.target.addDep(this)}notify(t){const e=this.subs.slice();for(let t=0,n=e.length;t<n;t++)e[t].update()}}ft.target=null;const dt=[];function pt(t){dt.push(t),ft.target=t}function ht(){dt.pop(),ft.target=dt[dt.length-1]}const mt=Array.prototype,_t=Object.create(mt);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(t){const e=mt[t];U(_t,t,(function(...n){const o=e.apply(this,n),r=this.__ob__;let s;switch(t){case"push":case"unshift":s=n;break;case"splice":s=n.slice(2)}return s&&r.observeArray(s),r.dep.notify(),o}))}));const vt=Object.getOwnPropertyNames(_t),yt={};let gt=!0;function bt(t){gt=t}const $t={notify:T,depend:T,addSub:T,removeSub:T};class wt{constructor(t,n=!1,o=!1){if(this.value=t,this.shallow=n,this.mock=o,this.dep=o?$t:new ft,this.vmCount=0,U(t,"__ob__",this),e(t)){if(!o)if(V)t.__proto__=_t;else for(let e=0,n=vt.length;e<n;e++){const n=vt[e];U(t,n,_t[n])}n||this.observeArray(t)}else{const e=Object.keys(t);for(let r=0;r<e.length;r++){xt(t,e[r],yt,void 0,n,o)}}}observeArray(t){for(let e=0,n=t.length;e<n;e++)Ct(t[e],!1,this.mock)}}function Ct(t,n,o){if(!c(t)||Pt(t)||t instanceof it)return;let r;return y(t,"__ob__")&&t.__ob__ instanceof wt?r=t.__ob__:!gt||!o&&Y()||!e(t)&&!l(t)||!Object.isExtensible(t)||t.__v_skip||(r=new wt(t,n,o)),r}function xt(t,n,o,r,s,i){const c=new ft,a=Object.getOwnPropertyDescriptor(t,n);if(a&&!1===a.configurable)return;const l=a&&a.get,u=a&&a.set;l&&!u||o!==yt&&2!==arguments.length||(o=t[n]);let f=!s&&Ct(o,!1,i);return Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){const n=l?l.call(t):o;return ft.target&&(c.depend(),f&&(f.dep.depend(),e(n)&&St(n))),Pt(n)&&!s?n.value:n},set:function(e){const n=l?l.call(t):o;if(N(n,e)){if(u)u.call(t,e);else{if(l)return;if(Pt(n)&&!Pt(e))return void(n.value=e);o=e}f=!s&&Ct(e,!1,i),c.notify()}}}),c}function kt(t,n,o){if(It(t))return;const r=t.__ob__;return e(t)&&u(n)?(t.length=Math.max(t.length,n),t.splice(n,1,o),r&&!r.shallow&&r.mock&&Ct(o,!1,!0),o):n in t&&!(n in Object.prototype)?(t[n]=o,o):t._isVue||r&&r.vmCount?o:r?(xt(r.value,n,o,void 0,r.shallow,r.mock),r.dep.notify(),o):(t[n]=o,o)}function Ot(t,n){if(e(t)&&u(n))return void t.splice(n,1);const o=t.__ob__;t._isVue||o&&o.vmCount||It(t)||y(t,n)&&(delete t[n],o&&o.dep.notify())}function St(t){for(let n,o=0,r=t.length;o<r;o++)n=t[o],n&&n.__ob__&&n.__ob__.dep.depend(),e(n)&&St(n)}function At(t){return Tt(t,!0),U(t,"__v_isShallow",!0),t}function Tt(t,e){It(t)||Ct(t,e,Y())}function jt(t){return It(t)?jt(t.__v_raw):!(!t||!t.__ob__)}function Et(t){return!(!t||!t.__v_isShallow)}function It(t){return!(!t||!t.__v_isReadonly)}function Pt(t){return!(!t||!0!==t.__v_isRef)}function Dt(t,e){if(Pt(t))return t;const n={};return U(n,"__v_isRef",!0),U(n,"__v_isShallow",e),U(n,"dep",xt(n,"value",t,null,e,Y())),n}function Nt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>{const t=e[n];if(Pt(t))return t.value;{const e=t&&t.__ob__;return e&&e.dep.depend(),t}},set:t=>{const o=e[n];Pt(o)&&!Pt(t)?o.value=t:e[n]=t}})}function Mt(t,e,n){const o=t[e];if(Pt(o))return o;const r={get value(){const o=t[e];return void 0===o?n:o},set value(n){t[e]=n}};return U(r,"__v_isRef",!0),r}function Rt(t){return Lt(t,!1)}function Lt(t,e){if(!l(t))return t;if(It(t))return t;const n=e?"__v_rawToShallowReadonly":"__v_rawToReadonly",o=t[n];if(o)return o;const r=Object.create(Object.getPrototypeOf(t));U(t,n,r),U(r,"__v_isReadonly",!0),U(r,"__v_raw",t),Pt(t)&&U(r,"__v_isRef",!0),(e||Et(t))&&U(r,"__v_isShallow",!0);const s=Object.keys(t);for(let n=0;n<s.length;n++)Ft(r,t,s[n],e);return r}function Ft(t,e,n,o){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get(){const t=e[n];return o||!l(t)?t:Rt(t)},set(){}})}function Ut(t,e){return Vt(t,null,{flush:"post"})}const Bt={};function Vt(n,o,{immediate:r,deep:s,flush:c="pre",onTrack:a,onTrigger:l}=t){const u=rt,f=(t,e,n=null)=>Ie(t,null,n,u,e);let d,p,h=!1,m=!1;if(Pt(n)?(d=()=>n.value,h=Et(n)):jt(n)?(d=()=>(n.__ob__.dep.depend(),n),s=!0):e(n)?(m=!0,h=n.some((t=>jt(t)||Et(t))),d=()=>n.map((t=>Pt(t)?t.value:jt(t)?nn(t):i(t)?f(t,"watcher getter"):void 0))):d=i(n)?o?()=>f(n,"watcher getter"):()=>{if(!u||!u._isDestroyed)return p&&p(),f(n,"watcher",[_])}:T,o&&s){const t=d;d=()=>nn(t())}let _=t=>{p=v.onStop=()=>{f(t,"watcher cleanup")}};if(Y())return _=T,o?r&&f(o,"watcher callback",[d(),m?[]:void 0,_]):d(),T;const v=new cn(rt,d,T,{lazy:!0});v.noRecurse=!o;let y=m?[]:Bt;return v.run=()=>{if(v.active||"pre"===c&&u&&u._isBeingDestroyed)if(o){const t=v.get();(s||h||(m?t.some(((t,e)=>N(t,y[e]))):N(t,y)))&&(p&&p(),f(o,"watcher callback",[t,y===Bt?void 0:y,_]),y=t)}else v.get()},"sync"===c?v.update=v.run:"post"===c?(v.id=1/0,v.update=()=>Sn(v)):v.update=()=>{if(u&&u===rt&&!u._isMounted){const t=u._preWatchers||(u._preWatchers=[]);t.indexOf(v)<0&&t.push(v)}else Sn(v)},o?r?v.run():y=v.get():"post"===c&&u?u.$once("hook:mounted",(()=>v.get())):v.get(),()=>{v.teardown()}}let zt;class Ht{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&zt&&(this.parent=zt,this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}run(t){if(this.active){const e=zt;try{return zt=this,t()}finally{zt=e}}}on(){zt=this}off(){zt=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function Wt(t,e){if(rt){let n=rt._provided;const o=rt.$parent&&rt.$parent._provided;o===n&&(n=rt._provided=Object.create(o)),n[t]=e}else;}const Kt=g((t=>{const e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),o="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=o?t.slice(1):t,once:n,capture:o,passive:e}}));function qt(t,n){function o(){const t=o.fns;if(!e(t))return Ie(t,null,arguments,n,"v-on handler");{const e=t.slice();for(let t=0;t<e.length;t++)Ie(e[t],null,arguments,n,"v-on handler")}}return o.fns=t,o}function Gt(t,e,o,s,i,c){let a,l,u,f;for(a in t)l=t[a],u=e[a],f=Kt(a),n(l)||(n(u)?(n(l.fns)&&(l=t[a]=qt(l,c)),r(f.once)&&(l=t[a]=i(f.name,l,f.capture)),o(f.name,l,f.capture,f.passive,f.params)):l!==u&&(u.fns=l,t[a]=u));for(a in e)n(t[a])&&(f=Kt(a),s(f.name,e[a],f.capture))}function Zt(t,e,s){let i;t instanceof it&&(t=t.data.hook||(t.data.hook={}));const c=t[e];function a(){s.apply(this,arguments),_(i.fns,a)}n(c)?i=qt([a]):o(c.fns)&&r(c.merged)?(i=c,i.fns.push(a)):i=qt([c,a]),i.merged=!0,t[e]=i}function Jt(t,e,n,r,s){if(o(e)){if(y(e,n))return t[n]=e[n],s||delete e[n],!0;if(y(e,r))return t[n]=e[r],s||delete e[r],!0}return!1}function Xt(t){return s(t)?[at(t)]:e(t)?Yt(t):void 0}function Qt(t){return o(t)&&o(t.text)&&!1===t.isComment}function Yt(t,i){const c=[];let a,l,u,f;for(a=0;a<t.length;a++)l=t[a],n(l)||"boolean"==typeof l||(u=c.length-1,f=c[u],e(l)?l.length>0&&(l=Yt(l,`${i||""}_${a}`),Qt(l[0])&&Qt(f)&&(c[u]=at(f.text+l[0].text),l.shift()),c.push.apply(c,l)):s(l)?Qt(f)?c[u]=at(f.text+l):""!==l&&c.push(at(l)):Qt(l)&&Qt(f)?c[u]=at(f.text+l.text):(r(t._isVList)&&o(l.tag)&&n(l.key)&&o(i)&&(l.key=`__vlist${i}_${a}__`),c.push(l)));return c}function te(t,n){let r,s,i,a,l=null;if(e(t)||"string"==typeof t)for(l=new Array(t.length),r=0,s=t.length;r<s;r++)l[r]=n(t[r],r);else if("number"==typeof t)for(l=new Array(t),r=0;r<t;r++)l[r]=n(r+1,r);else if(c(t))if(nt&&t[Symbol.iterator]){l=[];const e=t[Symbol.iterator]();let o=e.next();for(;!o.done;)l.push(n(o.value,l.length)),o=e.next()}else for(i=Object.keys(t),l=new Array(i.length),r=0,s=i.length;r<s;r++)a=i[r],l[r]=n(t[a],a,r);return o(l)||(l=[]),l._isVList=!0,l}function ee(t,e,n,o){const r=this.$scopedSlots[t];let s;r?(n=n||{},o&&(n=S(S({},o),n)),s=r(n)||(i(e)?e():e)):s=this.$slots[t]||(i(e)?e():e);const c=n&&n.slot;return c?this.$createElement("template",{slot:c},s):s}function ne(t){return Wn(this.$options,"filters",t)||E}function oe(t,n){return e(t)?-1===t.indexOf(n):t!==n}function re(t,e,n,o,r){const s=L.keyCodes[e]||n;return r&&o&&!L.keyCodes[e]?oe(r,o):s?oe(s,t):o?x(o)!==e:void 0===t}function se(t,n,o,r,s){if(o)if(c(o)){let i;e(o)&&(o=A(o));for(const e in o){if("class"===e||"style"===e||m(e))i=t;else{const o=t.attrs&&t.attrs.type;i=r||L.mustUseProp(n,o,e)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}const c=$(e),a=x(e);if(!(c in i)&&!(a in i)&&(i[e]=o[e],s)){(t.on||(t.on={}))[`update:${e}`]=function(t){o[e]=t}}}}else;return t}function ie(t,e){const n=this._staticTrees||(this._staticTrees=[]);let o=n[t];return o&&!e||(o=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),ae(o,`__static__${t}`,!1)),o}function ce(t,e,n){return ae(t,`__once__${e}${n?`_${n}`:""}`,!0),t}function ae(t,n,o){if(e(t))for(let e=0;e<t.length;e++)t[e]&&"string"!=typeof t[e]&&le(t[e],`${n}_${e}`,o);else le(t,n,o)}function le(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ue(t,e){if(e)if(l(e)){const n=t.on=t.on?S({},t.on):{};for(const t in e){const o=n[t],r=e[t];n[t]=o?[].concat(o,r):r}}else;return t}function fe(t,n,o,r){n=n||{$stable:!o};for(let r=0;r<t.length;r++){const s=t[r];e(s)?fe(s,n,o):s&&(s.proxy&&(s.fn.proxy=!0),n[s.key]=s.fn)}return r&&(n.$key=r),n}function de(t,e){for(let n=0;n<e.length;n+=2){const o=e[n];"string"==typeof o&&o&&(t[e[n]]=e[n+1])}return t}function pe(t,e){return"string"==typeof t?e+t:t}function he(t){t._o=ce,t._n=p,t._s=d,t._l=te,t._t=ee,t._q=I,t._i=P,t._m=ie,t._f=ne,t._k=re,t._b=se,t._v=at,t._e=ct,t._u=fe,t._g=ue,t._d=de,t._p=pe}function me(t,e){if(!t||!t.length)return{};const n={};for(let o=0,r=t.length;o<r;o++){const r=t[o],s=r.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,r.context!==e&&r.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(r);else{const t=s.slot,e=n[t]||(n[t]=[]);"template"===r.tag?e.push.apply(e,r.children||[]):e.push(r)}}for(const t in n)n[t].every(_e)&&delete n[t];return n}function _e(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ve(t){return t.isComment&&t.asyncFactory}function ye(e,n,o,r){let s;const i=Object.keys(o).length>0,c=n?!!n.$stable:!i,a=n&&n.$key;if(n){if(n._normalized)return n._normalized;if(c&&r&&r!==t&&a===r.$key&&!i&&!r.$hasNormal)return r;s={};for(const t in n)n[t]&&"$"!==t[0]&&(s[t]=ge(e,o,t,n[t]))}else s={};for(const t in o)t in s||(s[t]=be(o,t));return n&&Object.isExtensible(n)&&(n._normalized=s),U(s,"$stable",c),U(s,"$key",a),U(s,"$hasNormal",i),s}function ge(t,n,o,r){const s=function(){const n=rt;st(t);let o=arguments.length?r.apply(null,arguments):r({});o=o&&"object"==typeof o&&!e(o)?[o]:Xt(o);const s=o&&o[0];return st(n),o&&(!s||1===o.length&&s.isComment&&!ve(s))?void 0:o};return r.proxy&&Object.defineProperty(n,o,{get:s,enumerable:!0,configurable:!0}),s}function be(t,e){return()=>t[e]}function $e(e){return{get attrs(){return function(e){if(!e._attrsProxy){const n=e._attrsProxy={};U(n,"_v_attr_proxy",!0),we(n,e.$attrs,t,e)}return e._attrsProxy}(e)},get slots(){return function(t){t._slotsProxy||xe(t._slotsProxy={},t.$scopedSlots);return t._slotsProxy}(e)},emit:k(e.$emit,e),expose(t){t&&Object.keys(t).forEach((n=>Nt(e,t,n)))}}}function we(t,e,n,o){let r=!1;for(const s in e)s in t?e[s]!==n[s]&&(r=!0):(r=!0,Ce(t,s,o));for(const n in t)n in e||(r=!0,delete t[n]);return r}function Ce(t,e,n){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:()=>n.$attrs[e]})}function xe(t,e){for(const n in e)t[n]=e[n];for(const n in t)n in e||delete t[n]}function ke(){const t=rt;return t._setupContext||(t._setupContext=$e(t))}let Oe=null;function Se(t,e){return(t.__esModule||nt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function Ae(t){if(e(t))for(let e=0;e<t.length;e++){const n=t[e];if(o(n)&&(o(n.componentOptions)||ve(n)))return n}}function Te(t,n,a,l,u,f){return(e(a)||s(a))&&(u=l,l=a,a=void 0),r(f)&&(u=2),function(t,n,r,s,a){if(o(r)&&o(r.__ob__))return ct();o(r)&&o(r.is)&&(n=r.is);if(!n)return ct();e(s)&&i(s[0])&&((r=r||{}).scopedSlots={default:s[0]},s.length=0);2===a?s=Xt(s):1===a&&(s=function(t){for(let n=0;n<t.length;n++)if(e(t[n]))return Array.prototype.concat.apply([],t);return t}(s));let l,u;if("string"==typeof n){let e;u=t.$vnode&&t.$vnode.ns||L.getTagNamespace(n),l=L.isReservedTag(n)?new it(L.parsePlatformTagName(n),r,s,void 0,void 0,t):r&&r.pre||!o(e=Wn(t.$options,"components",n))?new it(n,r,s,void 0,void 0,t):Nn(e,r,t,s,n)}else l=Nn(n,r,t,s);return e(l)?l:o(l)?(o(u)&&je(l,u),o(r)&&function(t){c(t.style)&&nn(t.style);c(t.class)&&nn(t.class)}(r),l):ct()}(t,n,a,l,u)}function je(t,e,s){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,s=!0),o(t.children))for(let i=0,c=t.children.length;i<c;i++){const c=t.children[i];o(c.tag)&&(n(c.ns)||r(s)&&"svg"!==c.tag)&&je(c,e,s)}}function Ee(t,e,n){pt();try{if(e){let o=e;for(;o=o.$parent;){const r=o.$options.errorCaptured;if(r)for(let s=0;s<r.length;s++)try{if(!1===r[s].call(o,t,e,n))return}catch(t){Pe(t,o,"errorCaptured hook")}}}Pe(t,e,n)}finally{ht()}}function Ie(t,e,n,o,r){let s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((t=>Ee(t,o,r+" (Promise/async)"))),s._handled=!0)}catch(t){Ee(t,o,r)}return s}function Pe(t,e,n){if(L.errorHandler)try{return L.errorHandler.call(null,t,e,n)}catch(e){e!==t&&De(e)}De(t)}function De(t,e,n){if(!z||"undefined"==typeof console)throw t;console.error(t)}let Ne=!1;const Me=[];let Re,Le=!1;function Fe(){Le=!1;const t=Me.slice(0);Me.length=0;for(let e=0;e<t.length;e++)t[e]()}if("undefined"!=typeof Promise&&et(Promise)){const t=Promise.resolve();Re=()=>{t.then(Fe),G&&setTimeout(T)},Ne=!0}else if(W||"undefined"==typeof MutationObserver||!et(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Re="undefined"!=typeof setImmediate&&et(setImmediate)?()=>{setImmediate(Fe)}:()=>{setTimeout(Fe,0)};else{let t=1;const e=new MutationObserver(Fe),n=document.createTextNode(String(t));e.observe(n,{characterData:!0}),Re=()=>{t=(t+1)%2,n.data=String(t)},Ne=!0}function Ue(t,e){let n;if(Me.push((()=>{if(t)try{t.call(e)}catch(t){Ee(t,e,"nextTick")}else n&&n(e)})),Le||(Le=!0,Re()),!t&&"undefined"!=typeof Promise)return new Promise((t=>{n=t}))}function Be(t){return(e,n=rt)=>{if(n)return function(t,e,n){const o=t.$options;o[e]=Bn(o[e],n)}(n,t,e)}}const Ve=Be("beforeMount"),ze=Be("mounted"),He=Be("beforeUpdate"),We=Be("updated"),Ke=Be("beforeDestroy"),qe=Be("destroyed"),Ge=Be("errorCaptured"),Ze=Be("activated"),Je=Be("deactivated"),Xe=Be("serverPrefetch"),Qe=Be("renderTracked"),Ye=Be("renderTriggered");var tn=Object.freeze({__proto__:null,version:"2.7.5",defineComponent:function(t){return t},ref:function(t){return Dt(t,!1)},shallowRef:function(t){return Dt(t,!0)},isRef:Pt,toRef:Mt,toRefs:function(t){const n=e(t)?new Array(t.length):{};for(const e in t)n[e]=Mt(t,e);return n},unref:function(t){return Pt(t)?t.value:t},proxyRefs:function(t){if(jt(t))return t;const e={},n=Object.keys(t);for(let o=0;o<n.length;o++)Nt(e,t,n[o]);return e},customRef:function(t){const e=new ft,{get:n,set:o}=t((()=>{e.depend()}),(()=>{e.notify()})),r={get value(){return n()},set value(t){o(t)}};return U(r,"__v_isRef",!0),r},triggerRef:function(t){t.dep&&t.dep.notify()},reactive:function(t){return Tt(t,!1),t},isReactive:jt,isReadonly:It,isShallow:Et,isProxy:function(t){return jt(t)||It(t)},shallowReactive:At,markRaw:function(t){return U(t,"__v_skip",!0),t},toRaw:function t(e){const n=e&&e.__v_raw;return n?t(n):e},readonly:Rt,shallowReadonly:function(t){return Lt(t,!0)},computed:function(t,e){let n,o;const r=i(t);r?(n=t,o=T):(n=t.get,o=t.set);const s=Y()?null:new cn(rt,n,T,{lazy:!0}),c={effect:s,get value(){return s?(s.dirty&&s.evaluate(),ft.target&&s.depend(),s.value):n()},set value(t){o(t)}};return U(c,"__v_isRef",!0),U(c,"__v_isReadonly",r),c},watch:function(t,e,n){return Vt(t,e,n)},watchEffect:function(t,e){return Vt(t,null,e)},watchPostEffect:Ut,watchSyncEffect:function(t,e){return Vt(t,null,{flush:"sync"})},EffectScope:Ht,effectScope:function(t){return new Ht(t)},onScopeDispose:function(t){zt&&zt.cleanups.push(t)},getCurrentScope:function(){return zt},provide:Wt,inject:function(t,e,n=!1){const o=rt;if(o){const r=o.$parent&&o.$parent._provided;if(r&&t in r)return r[t];if(arguments.length>1)return n&&i(e)?e.call(o):e}},h:function(t,e,n){return Te(rt,t,e,n,2,!0)},getCurrentInstance:function(){return rt&&{proxy:rt}},useSlots:function(){return ke().slots},useAttrs:function(){return ke().attrs},mergeDefaults:function(t,n){const o=e(t)?t.reduce(((t,e)=>(t[e]={},t)),{}):t;for(const t in n){const r=o[t];r?e(r)||i(r)?o[t]={type:r,default:n[t]}:r.default=n[t]:null===r&&(o[t]={default:n[t]})}return o},nextTick:Ue,set:kt,del:Ot,useCssModule:function(e="$style"){{if(!rt)return t;const n=rt[e];return n||t}},useCssVars:function(t){if(!z)return;const e=rt;e&&Ut((()=>{const n=e.$el,o=t(e,e._setupProxy);if(n&&1===n.nodeType){const t=n.style;for(const e in o)t.setProperty(`--${e}`,o[e])}}))},defineAsyncComponent:function(t){i(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:o,delay:r=200,timeout:s,suspensible:c=!1,onError:a}=t;let l=null,u=0;const f=()=>{let t;return l||(t=l=e().catch((t=>{if(t=t instanceof Error?t:new Error(String(t)),a)return new Promise(((e,n)=>{a(t,(()=>e((u++,l=null,f()))),(()=>n(t)),u+1)}));throw t})).then((e=>t!==l&&l?l:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),e))))};return()=>({component:f(),delay:r,timeout:s,error:o,loading:n})},onBeforeMount:Ve,onMounted:ze,onBeforeUpdate:He,onUpdated:We,onBeforeUnmount:Ke,onUnmounted:qe,onErrorCaptured:Ge,onActivated:Ze,onDeactivated:Je,onServerPrefetch:Xe,onRenderTracked:Qe,onRenderTriggered:Ye});const en=new ot;function nn(t){return on(t,en),en.clear(),t}function on(t,n){let o,r;const s=e(t);if(!(!s&&!c(t)||Object.isFrozen(t)||t instanceof it)){if(t.__ob__){const e=t.__ob__.dep.id;if(n.has(e))return;n.add(e)}if(s)for(o=t.length;o--;)on(t[o],n);else if(Pt(t))on(t.value,n);else for(r=Object.keys(t),o=r.length;o--;)on(t[r[o]],n)}}let rn,sn=0;class cn{constructor(t,e,n,o,r){!function(t,e=zt){e&&e.active&&e.effects.push(t)}(this,zt||(t?t._scope:void 0)),(this.vm=t)&&r&&(t._watcher=this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.before=o.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++sn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ot,this.newDepIds=new ot,this.expression="",i(e)?this.getter=e:(this.getter=function(t){if(B.test(t))return;const e=t.split(".");return function(t){for(let n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}(e),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()}get(){let t;pt(this);const e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;Ee(t,e,`getter for watcher "${this.expression}"`)}finally{this.deep&&nn(t),ht(),this.cleanupDeps()}return t}addDep(t){const e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))}cleanupDeps(){let t=this.deps.length;for(;t--;){const e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}let e=this.depIds;this.depIds=this.newDepIds,this.newDepIds=e,this.newDepIds.clear(),e=this.deps,this.deps=this.newDeps,this.newDeps=e,this.newDeps.length=0}update(){this.lazy?this.dirty=!0:this.sync?this.run():Sn(this)}run(){if(this.active){const t=this.get();if(t!==this.value||c(t)||this.deep){const e=this.value;if(this.value=t,this.user){const n=`callback for watcher "${this.expression}"`;Ie(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}}evaluate(){this.value=this.get(),this.dirty=!1}depend(){let t=this.deps.length;for(;t--;)this.deps[t].depend()}teardown(){if(this.vm&&!this.vm._isBeingDestroyed&&_(this.vm._scope.effects,this),this.active){let t=this.deps.length;for(;t--;)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}}}function an(t,e){rn.$on(t,e)}function ln(t,e){rn.$off(t,e)}function un(t,e){const n=rn;return function o(){const r=e.apply(null,arguments);null!==r&&n.$off(t,o)}}function fn(t,e,n){rn=t,Gt(e,n||{},an,ln,un,t),rn=void 0}let dn=null;function pn(t){const e=dn;return dn=t,()=>{dn=e}}function hn(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function mn(t,e){if(e){if(t._directInactive=!1,hn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(let e=0;e<t.$children.length;e++)mn(t.$children[e]);vn(t,"activated")}}function _n(t,e){if(!(e&&(t._directInactive=!0,hn(t))||t._inactive)){t._inactive=!0;for(let e=0;e<t.$children.length;e++)_n(t.$children[e]);vn(t,"deactivated")}}function vn(t,e,n,o=!0){pt();const r=rt;o&&st(t);const s=t.$options[e],i=`${e} hook`;if(s)for(let e=0,o=s.length;e<o;e++)Ie(s[e],t,n||null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),o&&st(r),ht()}const yn=[],gn=[];let bn={},$n=!1,wn=!1,Cn=0;let xn=0,kn=Date.now;if(z&&!W){const t=window.performance;t&&"function"==typeof t.now&&kn()>document.createEvent("Event").timeStamp&&(kn=()=>t.now())}function On(){let t,e;for(xn=kn(),wn=!0,yn.sort(((t,e)=>t.id-e.id)),Cn=0;Cn<yn.length;Cn++)t=yn[Cn],t.before&&t.before(),e=t.id,bn[e]=null,t.run();const n=gn.slice(),o=yn.slice();Cn=yn.length=gn.length=0,bn={},$n=wn=!1,function(t){for(let e=0;e<t.length;e++)t[e]._inactive=!0,mn(t[e],!0)}(n),function(t){let e=t.length;for(;e--;){const n=t[e],o=n.vm;o&&o._watcher===n&&o._isMounted&&!o._isDestroyed&&vn(o,"updated")}}(o),tt&&L.devtools&&tt.emit("flush")}function Sn(t){const e=t.id;if(null==bn[e]&&(t!==ft.target||!t.noRecurse)){if(bn[e]=!0,wn){let e=yn.length-1;for(;e>Cn&&yn[e].id>t.id;)e--;yn.splice(e+1,0,t)}else yn.push(t);$n||($n=!0,Ue(On))}}function An(t,e){if(t){const n=Object.create(null),o=nt?Reflect.ownKeys(t):Object.keys(t);for(let r=0;r<o.length;r++){const s=o[r];if("__ob__"===s)continue;const c=t[s].from;if(c in e._provided)n[s]=e._provided[c];else if("default"in t[s]){const o=t[s].default;n[s]=i(o)?o.call(e):o}}return n}}function Tn(n,o,s,i,c){const a=c.options;let l;y(i,"_uid")?(l=Object.create(i),l._original=i):(l=i,i=i._original);const u=r(a._compiled),f=!u;this.data=n,this.props=o,this.children=s,this.parent=i,this.listeners=n.on||t,this.injections=An(a.inject,i),this.slots=()=>(this.$slots||ye(i,n.scopedSlots,this.$slots=me(s,i)),this.$slots),Object.defineProperty(this,"scopedSlots",{enumerable:!0,get(){return ye(i,n.scopedSlots,this.slots())}}),u&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=ye(i,n.scopedSlots,this.$slots)),a._scopeId?this._c=(t,n,o,r)=>{const s=Te(l,t,n,o,r,f);return s&&!e(s)&&(s.fnScopeId=a._scopeId,s.fnContext=i),s}:this._c=(t,e,n,o)=>Te(l,t,e,n,o,f)}function jn(t,e,n,o,r){const s=lt(t);return s.fnContext=n,s.fnOptions=o,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function En(t,e){for(const n in e)t[$(n)]=e[n]}function In(t){return t.name||t.__name||t._componentTag}he(Tn.prototype);const Pn={init(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){const e=t;Pn.prepatch(e,e)}else{(t.componentInstance=function(t,e){const n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns);return new t.componentOptions.Ctor(n)}(t,dn)).$mount(e?t.elm:void 0,e)}},prepatch(e,n){const o=n.componentOptions;!function(e,n,o,r,s){const i=r.data.scopedSlots,c=e.$scopedSlots,a=!!(i&&!i.$stable||c!==t&&!c.$stable||i&&e.$scopedSlots.$key!==i.$key||!i&&e.$scopedSlots.$key);let l=!!(s||e.$options._renderChildren||a);const u=e.$vnode;e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=s;const f=r.data.attrs||t;if(e._attrsProxy&&we(e._attrsProxy,f,u.data&&u.data.attrs||t,e)&&(l=!0),e.$attrs=f,e.$listeners=o||t,n&&e.$options.props){bt(!1);const t=e._props,o=e.$options._propKeys||[];for(let r=0;r<o.length;r++){const s=o[r],i=e.$options.props;t[s]=Kn(s,i,n,e)}bt(!0),e.$options.propsData=n}o=o||t;const d=e.$options._parentListeners;e.$options._parentListeners=o,fn(e,o,d),l&&(e.$slots=me(s,r.context),e.$forceUpdate())}(n.componentInstance=e.componentInstance,o.propsData,o.listeners,n,o.children)},insert(t){const{context:e,componentInstance:n}=t;var o;n._isMounted||(n._isMounted=!0,vn(n,"mounted")),t.data.keepAlive&&(e._isMounted?((o=n)._inactive=!1,gn.push(o)):mn(n,!0))},destroy(t){const{componentInstance:e}=t;e._isDestroyed||(t.data.keepAlive?_n(e,!0):e.$destroy())}},Dn=Object.keys(Pn);function Nn(s,i,a,l,u){if(n(s))return;const d=a.$options._base;if(c(s)&&(s=d.extend(s)),"function"!=typeof s)return;let p;if(n(s.cid)&&(p=s,s=function(t,e){if(r(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;const s=Oe;if(s&&o(t.owners)&&-1===t.owners.indexOf(s)&&t.owners.push(s),r(t.loading)&&o(t.loadingComp))return t.loadingComp;if(s&&!o(t.owners)){const r=t.owners=[s];let i=!0,a=null,l=null;s.$on("hook:destroyed",(()=>_(r,s)));const u=t=>{for(let t=0,e=r.length;t<e;t++)r[t].$forceUpdate();t&&(r.length=0,null!==a&&(clearTimeout(a),a=null),null!==l&&(clearTimeout(l),l=null))},d=D((n=>{t.resolved=Se(n,e),i?r.length=0:u(!0)})),p=D((e=>{o(t.errorComp)&&(t.error=!0,u(!0))})),h=t(d,p);return c(h)&&(f(h)?n(t.resolved)&&h.then(d,p):f(h.component)&&(h.component.then(d,p),o(h.error)&&(t.errorComp=Se(h.error,e)),o(h.loading)&&(t.loadingComp=Se(h.loading,e),0===h.delay?t.loading=!0:a=setTimeout((()=>{a=null,n(t.resolved)&&n(t.error)&&(t.loading=!0,u(!1))}),h.delay||200)),o(h.timeout)&&(l=setTimeout((()=>{l=null,n(t.resolved)&&p(null)}),h.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}(p,d),void 0===s))return function(t,e,n,o,r){const s=ct();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:o,tag:r},s}(p,i,a,l,u);i=i||{},io(s),o(i.model)&&function(t,n){const r=t.model&&t.model.prop||"value",s=t.model&&t.model.event||"input";(n.attrs||(n.attrs={}))[r]=n.model.value;const i=n.on||(n.on={}),c=i[s],a=n.model.callback;o(c)?(e(c)?-1===c.indexOf(a):c!==a)&&(i[s]=[a].concat(c)):i[s]=a}(s.options,i);const h=function(t,e,r){const s=e.options.props;if(n(s))return;const i={},{attrs:c,props:a}=t;if(o(c)||o(a))for(const t in s){const e=x(t);Jt(i,a,t,e,!0)||Jt(i,c,t,e,!1)}return i}(i,s);if(r(s.options.functional))return function(n,r,s,i,c){const a=n.options,l={},u=a.props;if(o(u))for(const e in u)l[e]=Kn(e,u,r||t);else o(s.attrs)&&En(l,s.attrs),o(s.props)&&En(l,s.props);const f=new Tn(s,l,c,i,n),d=a.render.call(null,f._c,f);if(d instanceof it)return jn(d,s,f.parent,a);if(e(d)){const t=Xt(d)||[],e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=jn(t[n],s,f.parent,a);return e}}(s,h,i,a,l);const m=i.on;if(i.on=i.nativeOn,r(s.options.abstract)){const t=i.slot;i={},t&&(i.slot=t)}!function(t){const e=t.hook||(t.hook={});for(let t=0;t<Dn.length;t++){const n=Dn[t],o=e[n],r=Pn[n];o===r||o&&o._merged||(e[n]=o?Mn(r,o):r)}}(i);const v=In(s.options)||u;return new it(`vue-component-${s.cid}${v?`-${v}`:""}`,i,void 0,void 0,void 0,a,{Ctor:s,propsData:h,listeners:m,tag:u,children:l},p)}function Mn(t,e){const n=(n,o)=>{t(n,o),e(n,o)};return n._merged=!0,n}let Rn=T;const Ln=L.optionMergeStrategies;function Fn(t,e){if(!e)return t;let n,o,r;const s=nt?Reflect.ownKeys(e):Object.keys(e);for(let i=0;i<s.length;i++)n=s[i],"__ob__"!==n&&(o=t[n],r=e[n],y(t,n)?o!==r&&l(o)&&l(r)&&Fn(o,r):kt(t,n,r));return t}function Un(t,e,n){return n?function(){const o=i(e)?e.call(n,n):e,r=i(t)?t.call(n,n):t;return o?Fn(o,r):r}:e?t?function(){return Fn(i(e)?e.call(this,this):e,i(t)?t.call(this,this):t)}:e:t}function Bn(t,n){const o=n?t?t.concat(n):e(n)?n:[n]:t;return o?function(t){const e=[];for(let n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(o):o}function Vn(t,e,n,o){const r=Object.create(t||null);return e?S(r,e):r}Ln.data=function(t,e,n){return n?Un(t,e,n):e&&"function"!=typeof e?t:Un(t,e)},R.forEach((t=>{Ln[t]=Bn})),M.forEach((function(t){Ln[t+"s"]=Vn})),Ln.watch=function(t,n,o,r){if(t===J&&(t=void 0),n===J&&(n=void 0),!n)return Object.create(t||null);if(!t)return n;const s={};S(s,t);for(const t in n){let o=s[t];const r=n[t];o&&!e(o)&&(o=[o]),s[t]=o?o.concat(r):e(r)?r:[r]}return s},Ln.props=Ln.methods=Ln.inject=Ln.computed=function(t,e,n,o){if(!t)return e;const r=Object.create(null);return S(r,t),e&&S(r,e),r},Ln.provide=Un;const zn=function(t,e){return void 0===e?t:e};function Hn(t,n,o){if(i(n)&&(n=n.options),function(t,n){const o=t.props;if(!o)return;const r={};let s,i,c;if(e(o))for(s=o.length;s--;)i=o[s],"string"==typeof i&&(c=$(i),r[c]={type:null});else if(l(o))for(const t in o)i=o[t],c=$(t),r[c]=l(i)?i:{type:i};t.props=r}(n),function(t,n){const o=t.inject;if(!o)return;const r=t.inject={};if(e(o))for(let t=0;t<o.length;t++)r[o[t]]={from:o[t]};else if(l(o))for(const t in o){const e=o[t];r[t]=l(e)?S({from:t},e):{from:e}}}(n),function(t){const e=t.directives;if(e)for(const t in e){const n=e[t];i(n)&&(e[t]={bind:n,update:n})}}(n),!n._base&&(n.extends&&(t=Hn(t,n.extends,o)),n.mixins))for(let e=0,r=n.mixins.length;e<r;e++)t=Hn(t,n.mixins[e],o);const r={};let s;for(s in t)c(s);for(s in n)y(t,s)||c(s);function c(e){const s=Ln[e]||zn;r[e]=s(t[e],n[e],o,e)}return r}function Wn(t,e,n,o){if("string"!=typeof n)return;const r=t[e];if(y(r,n))return r[n];const s=$(n);if(y(r,s))return r[s];const i=w(s);if(y(r,i))return r[i];return r[n]||r[s]||r[i]}function Kn(t,e,n,o){const r=e[t],s=!y(n,t);let c=n[t];const a=Jn(Boolean,r.type);if(a>-1)if(s&&!y(r,"default"))c=!1;else if(""===c||c===x(t)){const t=Jn(String,r.type);(t<0||a<t)&&(c=!0)}if(void 0===c){c=function(t,e,n){if(!y(e,"default"))return;const o=e.default;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return i(o)&&"Function"!==Gn(e.type)?o.call(t):o}(o,r,t);const e=gt;bt(!0),Ct(c),bt(e)}return c}const qn=/^\s*function (\w+)/;function Gn(t){const e=t&&t.toString().match(qn);return e?e[1]:""}function Zn(t,e){return Gn(t)===Gn(e)}function Jn(t,n){if(!e(n))return Zn(n,t)?0:-1;for(let e=0,o=n.length;e<o;e++)if(Zn(n[e],t))return e;return-1}const Xn={enumerable:!0,configurable:!0,get:T,set:T};function Qn(t,e,n){Xn.get=function(){return this[e][n]},Xn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Xn)}function Yn(t){const n=t.$options;if(n.props&&function(t,e){const n=t.$options.propsData||{},o=t._props=At({}),r=t.$options._propKeys=[];t.$parent&&bt(!1);for(const s in e){r.push(s);xt(o,s,Kn(s,e,n,t)),s in t||Qn(t,"_props",s)}bt(!0)}(t,n.props),function(t){const e=t.$options,n=e.setup;if(n){const o=t._setupContext=$e(t);st(t),pt();const r=Ie(n,null,[t._props||At({}),o],t,"setup");if(ht(),st(),i(r))e.render=r;else if(c(r))if(t._setupState=r,r.__sfc){const e=t._setupProxy={};for(const t in r)"__sfc"!==t&&Nt(e,r,t)}else for(const e in r)F(e)||Nt(t,r,e)}}(t),n.methods&&function(t,e){t.$options.props;for(const n in e)t[n]="function"!=typeof e[n]?T:k(e[n],t)}(t,n.methods),n.data)!function(t){let e=t.$options.data;e=t._data=i(e)?function(t,e){pt();try{return t.call(e,e)}catch(t){return Ee(t,e,"data()"),{}}finally{ht()}}(e,t):e||{},l(e)||(e={});const n=Object.keys(e),o=t.$options.props;t.$options.methods;let r=n.length;for(;r--;){const e=n[r];o&&y(o,e)||F(e)||Qn(t,"_data",e)}const s=Ct(e);s&&s.vmCount++}(t);else{const e=Ct(t._data={});e&&e.vmCount++}n.computed&&function(t,e){const n=t._computedWatchers=Object.create(null),o=Y();for(const r in e){const s=e[r],c=i(s)?s:s.get;o||(n[r]=new cn(t,c||T,T,to)),r in t||eo(t,r,s)}}(t,n.computed),n.watch&&n.watch!==J&&function(t,n){for(const o in n){const r=n[o];if(e(r))for(let e=0;e<r.length;e++)ro(t,o,r[e]);else ro(t,o,r)}}(t,n.watch)}const to={lazy:!0};function eo(t,e,n){const o=!Y();i(n)?(Xn.get=o?no(e):oo(n),Xn.set=T):(Xn.get=n.get?o&&!1!==n.cache?no(e):oo(n.get):T,Xn.set=n.set||T),Object.defineProperty(t,e,Xn)}function no(t){return function(){const e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.target&&e.depend(),e.value}}function oo(t){return function(){return t.call(this,this)}}function ro(t,e,n,o){return l(n)&&(o=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,o)}let so=0;function io(t){let e=t.options;if(t.super){const n=io(t.super);if(n!==t.superOptions){t.superOptions=n;const o=function(t){let e;const n=t.options,o=t.sealedOptions;for(const t in n)n[t]!==o[t]&&(e||(e={}),e[t]=n[t]);return e}(t);o&&S(t.extendOptions,o),e=t.options=Hn(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function co(t){this._init(t)}function ao(t){t.cid=0;let e=1;t.extend=function(t){t=t||{};const n=this,o=n.cid,r=t._Ctor||(t._Ctor={});if(r[o])return r[o];const s=In(t)||In(n.options),i=function(t){this._init(t)};return(i.prototype=Object.create(n.prototype)).constructor=i,i.cid=e++,i.options=Hn(n.options,t),i.super=n,i.options.props&&function(t){const e=t.options.props;for(const n in e)Qn(t.prototype,"_props",n)}(i),i.options.computed&&function(t){const e=t.options.computed;for(const n in e)eo(t.prototype,n,e[n])}(i),i.extend=n.extend,i.mixin=n.mixin,i.use=n.use,M.forEach((function(t){i[t]=n[t]})),s&&(i.options.components[s]=i),i.superOptions=n.options,i.extendOptions=t,i.sealedOptions=S({},i.options),r[o]=i,i}}function lo(t){return t&&(In(t.Ctor.options)||t.tag)}function uo(t,n){return e(t)?t.indexOf(n)>-1:"string"==typeof t?t.split(",").indexOf(n)>-1:(o=t,"[object RegExp]"===a.call(o)&&t.test(n));var o}function fo(t,e){const{cache:n,keys:o,_vnode:r}=t;for(const t in n){const s=n[t];if(s){const i=s.name;i&&!e(i)&&po(n,t,o,r)}}}function po(t,e,n,o){const r=t[e];!r||o&&r.tag===o.tag||r.componentInstance.$destroy(),t[e]=null,_(n,e)}!function(e){e.prototype._init=function(e){const n=this;n._uid=so++,n._isVue=!0,n.__v_skip=!0,n._scope=new Ht(!0),e&&e._isComponent?function(t,e){const n=t.$options=Object.create(t.constructor.options),o=e._parentVnode;n.parent=e.parent,n._parentVnode=o;const r=o.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(n,e):n.$options=Hn(io(n.constructor),e||{},n),n._renderProxy=n,n._self=n,function(t){const e=t.$options;let n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(n),function(t){t._events=Object.create(null),t._hasHookEvent=!1;const e=t.$options._parentListeners;e&&fn(t,e)}(n),function(e){e._vnode=null,e._staticTrees=null;const n=e.$options,o=e.$vnode=n._parentVnode,r=o&&o.context;e.$slots=me(n._renderChildren,r),e.$scopedSlots=t,e._c=(t,n,o,r)=>Te(e,t,n,o,r,!1),e.$createElement=(t,n,o,r)=>Te(e,t,n,o,r,!0);const s=o&&o.data;xt(e,"$attrs",s&&s.attrs||t,null,!0),xt(e,"$listeners",n._parentListeners||t,null,!0)}(n),vn(n,"beforeCreate",void 0,!1),function(t){const e=An(t.$options.inject,t);e&&(bt(!1),Object.keys(e).forEach((n=>{xt(t,n,e[n])})),bt(!0))}(n),Yn(n),function(t){const e=t.$options.provide;if(e){const n=i(e)?e.call(t):e;if(!c(n))return;const o=nt?Reflect.ownKeys(n):Object.keys(n);st(t);for(let t=0;t<o.length;t++)Wt(o[t],n[o[t]]);st()}}(n),vn(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}(co),function(t){const e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=kt,t.prototype.$delete=Ot,t.prototype.$watch=function(t,e,n){const o=this;if(l(e))return ro(o,t,e,n);(n=n||{}).user=!0;const r=new cn(o,t,e,n);if(n.immediate){const t=`callback for immediate watcher "${r.expression}"`;pt(),Ie(e,o,[r.value],o,t),ht()}return function(){r.teardown()}}}(co),function(t){const n=/^hook:/;t.prototype.$on=function(t,o){const r=this;if(e(t))for(let e=0,n=t.length;e<n;e++)r.$on(t[e],o);else(r._events[t]||(r._events[t]=[])).push(o),n.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){const n=this;function o(){n.$off(t,o),e.apply(n,arguments)}return o.fn=e,n.$on(t,o),n},t.prototype.$off=function(t,n){const o=this;if(!arguments.length)return o._events=Object.create(null),o;if(e(t)){for(let e=0,r=t.length;e<r;e++)o.$off(t[e],n);return o}const r=o._events[t];if(!r)return o;if(!n)return o._events[t]=null,o;let s,i=r.length;for(;i--;)if(s=r[i],s===n||s.fn===n){r.splice(i,1);break}return o},t.prototype.$emit=function(t){const e=this;let n=e._events[t];if(n){n=n.length>1?O(n):n;const o=O(arguments,1),r=`event handler for "${t}"`;for(let t=0,s=n.length;t<s;t++)Ie(n[t],e,o,e,r)}return e}}(co),function(t){t.prototype._update=function(t,e){const n=this,o=n.$el,r=n._vnode,s=pn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),s(),o&&(o.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){const t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){const t=this;if(t._isBeingDestroyed)return;vn(t,"beforeDestroy"),t._isBeingDestroyed=!0;const e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),vn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}(co),function(t){he(t.prototype),t.prototype.$nextTick=function(t){return Ue(t,this)},t.prototype._render=function(){const t=this,{render:n,_parentVnode:o}=t.$options;let r;o&&(t.$scopedSlots=ye(t.$parent,o.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&xe(t._slotsProxy,t.$scopedSlots)),t.$vnode=o;try{st(t),Oe=t,r=n.call(t._renderProxy,t.$createElement)}catch(e){Ee(e,t,"render"),r=t._vnode}finally{Oe=null,st()}return e(r)&&1===r.length&&(r=r[0]),r instanceof it||(r=ct()),r.parent=o,r}}(co);const ho=[String,RegExp,Array];var mo={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:ho,exclude:ho,max:[String,Number]},methods:{cacheVNode(){const{cache:t,keys:e,vnodeToCache:n,keyToCache:o}=this;if(n){const{tag:r,componentInstance:s,componentOptions:i}=n;t[o]={name:lo(i),tag:r,componentInstance:s},e.push(o),this.max&&e.length>parseInt(this.max)&&po(t,e[0],e,this._vnode),this.vnodeToCache=null}}},created(){this.cache=Object.create(null),this.keys=[]},destroyed(){for(const t in this.cache)po(this.cache,t,this.keys)},mounted(){this.cacheVNode(),this.$watch("include",(t=>{fo(this,(e=>uo(t,e)))})),this.$watch("exclude",(t=>{fo(this,(e=>!uo(t,e)))}))},updated(){this.cacheVNode()},render(){const t=this.$slots.default,e=Ae(t),n=e&&e.componentOptions;if(n){const t=lo(n),{include:o,exclude:r}=this;if(o&&(!t||!uo(o,t))||r&&t&&uo(r,t))return e;const{cache:s,keys:i}=this,c=null==e.key?n.Ctor.cid+(n.tag?`::${n.tag}`:""):e.key;s[c]?(e.componentInstance=s[c].componentInstance,_(i,c),i.push(c)):(this.vnodeToCache=e,this.keyToCache=c),e.data.keepAlive=!0}return e||t&&t[0]}}};!function(t){const e={get:()=>L};Object.defineProperty(t,"config",e),t.util={warn:Rn,extend:S,mergeOptions:Hn,defineReactive:xt},t.set=kt,t.delete=Ot,t.nextTick=Ue,t.observable=t=>(Ct(t),t),t.options=Object.create(null),M.forEach((e=>{t.options[e+"s"]=Object.create(null)})),t.options._base=t,S(t.options.components,mo),function(t){t.use=function(t){const e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;const n=O(arguments,1);return n.unshift(this),i(t.install)?t.install.apply(t,n):i(t)&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=Hn(this.options,t),this}}(t),ao(t),function(t){M.forEach((e=>{t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&i(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}(t)}(co),Object.defineProperty(co.prototype,"$isServer",{get:Y}),Object.defineProperty(co.prototype,"$ssrContext",{get(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(co,"FunctionalRenderContext",{value:Tn}),co.version="2.7.5";const _o=h("style,class"),vo=h("input,textarea,option,select,progress"),yo=h("contenteditable,draggable,spellcheck"),go=h("events,caret,typing,plaintext-only"),bo=h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),$o="http://www.w3.org/1999/xlink",wo=t=>":"===t.charAt(5)&&"xlink"===t.slice(0,5),Co=t=>wo(t)?t.slice(6,t.length):"",xo=t=>null==t||!1===t;function ko(t){let e=t.data,n=t,r=t;for(;o(r.componentInstance);)r=r.componentInstance._vnode,r&&r.data&&(e=Oo(r.data,e));for(;o(n=n.parent);)n&&n.data&&(e=Oo(e,n.data));return function(t,e){if(o(t)||o(e))return So(t,Ao(e));return""}(e.staticClass,e.class)}function Oo(t,e){return{staticClass:So(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function So(t,e){return t?e?t+" "+e:t:e||""}function Ao(t){return Array.isArray(t)?function(t){let e,n="";for(let r=0,s=t.length;r<s;r++)o(e=Ao(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):c(t)?function(t){let e="";for(const n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}const To={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},jo=h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Eo=h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Io=t=>jo(t)||Eo(t);const Po=Object.create(null);const Do=h("text,number,password,search,email,tel,url");var No=Object.freeze({__proto__:null,createElement:function(t,e){const n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(t,e){return document.createElementNS(To[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setStyleScope:function(t,e){t.setAttribute(e,"")}}),Mo={create(t,e){Ro(e)},update(t,e){t.data.ref!==e.data.ref&&(Ro(t,!0),Ro(e))},destroy(t){Ro(t,!0)}};function Ro(t,n){const r=t.data.ref;if(!o(r))return;const s=t.context,c=t.componentInstance||t.elm,a=n?null:c,l=n?void 0:c;if(i(r))return void Ie(r,s,[a],s,"template ref function");const u=t.data.refInFor,f="string"==typeof r||"number"==typeof r,d=Pt(r),p=s.$refs;if(f||d)if(u){const t=f?p[r]:r.value;n?e(t)&&_(t,c):e(t)?t.includes(c)||t.push(c):f?(p[r]=[c],Lo(s,r,p[r])):r.value=[c]}else if(f){if(n&&p[r]!==c)return;p[r]=l,Lo(s,r,a)}else if(d){if(n&&r.value!==c)return;r.value=a}}function Lo({_setupState:t},e,n){t&&y(t,e)&&(Pt(t[e])?t[e].value=n:t[e]=n)}const Fo=new it("",{},[]),Uo=["create","activate","update","remove","destroy"];function Bo(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&function(t,e){if("input"!==t.tag)return!0;let n;const r=o(n=t.data)&&o(n=n.attrs)&&n.type,s=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===s||Do(r)&&Do(s)}(t,e)||r(t.isAsyncPlaceholder)&&n(e.asyncFactory.error))}function Vo(t,e,n){let r,s;const i={};for(r=e;r<=n;++r)s=t[r].key,o(s)&&(i[s]=r);return i}var zo={create:Ho,update:Ho,destroy:function(t){Ho(t,Fo)}};function Ho(t,e){(t.data.directives||e.data.directives)&&function(t,e){const n=t===Fo,o=e===Fo,r=Ko(t.data.directives,t.context),s=Ko(e.data.directives,e.context),i=[],c=[];let a,l,u;for(a in s)l=r[a],u=s[a],l?(u.oldValue=l.value,u.oldArg=l.arg,Go(u,"update",e,t),u.def&&u.def.componentUpdated&&c.push(u)):(Go(u,"bind",e,t),u.def&&u.def.inserted&&i.push(u));if(i.length){const o=()=>{for(let n=0;n<i.length;n++)Go(i[n],"inserted",e,t)};n?Zt(e,"insert",o):o()}c.length&&Zt(e,"postpatch",(()=>{for(let n=0;n<c.length;n++)Go(c[n],"componentUpdated",e,t)}));if(!n)for(a in r)s[a]||Go(r[a],"unbind",t,t,o)}(t,e)}const Wo=Object.create(null);function Ko(t,e){const n=Object.create(null);if(!t)return n;let o,r;for(o=0;o<t.length;o++)r=t[o],r.modifiers||(r.modifiers=Wo),n[qo(r)]=r,e._setupState&&e._setupState.__sfc&&(r.def=r.def||Wn(e,"_setupState","v-"+r.name)),r.def=r.def||Wn(e.$options,"directives",r.name);return n}function qo(t){return t.rawName||`${t.name}.${Object.keys(t.modifiers||{}).join(".")}`}function Go(t,e,n,o,r){const s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,o,r)}catch(o){Ee(o,n.context,`directive ${t.name} ${e} hook`)}}var Zo=[Mo,zo];function Jo(t,e){const s=e.componentOptions;if(o(s)&&!1===s.Ctor.options.inheritAttrs)return;if(n(t.data.attrs)&&n(e.data.attrs))return;let i,c,a;const l=e.elm,u=t.data.attrs||{};let f=e.data.attrs||{};for(i in(o(f.__ob__)||r(f._v_attr_proxy))&&(f=e.data.attrs=S({},f)),f)c=f[i],a=u[i],a!==c&&Xo(l,i,c,e.data.pre);for(i in(W||q)&&f.value!==u.value&&Xo(l,"value",f.value),u)n(f[i])&&(wo(i)?l.removeAttributeNS($o,Co(i)):yo(i)||l.removeAttribute(i))}function Xo(t,e,n,o){o||t.tagName.indexOf("-")>-1?Qo(t,e,n):bo(e)?xo(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):yo(e)?t.setAttribute(e,((t,e)=>xo(e)||"false"===e?"false":"contenteditable"===t&&go(e)?e:"true")(e,n)):wo(e)?xo(n)?t.removeAttributeNS($o,Co(e)):t.setAttributeNS($o,e,n):Qo(t,e,n)}function Qo(t,e,n){if(xo(n))t.removeAttribute(e);else{if(W&&!K&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){const e=n=>{n.stopImmediatePropagation(),t.removeEventListener("input",e)};t.addEventListener("input",e),t.__ieph=!0}t.setAttribute(e,n)}}var Yo={create:Jo,update:Jo};function tr(t,e){const r=e.elm,s=e.data,i=t.data;if(n(s.staticClass)&&n(s.class)&&(n(i)||n(i.staticClass)&&n(i.class)))return;let c=ko(e);const a=r._transitionClasses;o(a)&&(c=So(c,Ao(a))),c!==r._prevClass&&(r.setAttribute("class",c),r._prevClass=c)}var er={create:tr,update:tr};let nr;function or(t,e,n){const o=nr;return function r(){const s=e.apply(null,arguments);null!==s&&ir(t,r,n,o)}}const rr=Ne&&!(Z&&Number(Z[1])<=53);function sr(t,e,n,o){if(rr){const t=xn,n=e;e=n._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=t||e.timeStamp<=0||e.target.ownerDocument!==document)return n.apply(this,arguments)}}nr.addEventListener(t,e,Q?{capture:n,passive:o}:n)}function ir(t,e,n,o){(o||nr).removeEventListener(t,e._wrapper||e,n)}function cr(t,e){if(n(t.data.on)&&n(e.data.on))return;const r=e.data.on||{},s=t.data.on||{};nr=e.elm||t.elm,function(t){if(o(t.__r)){const e=W?"change":"input";t[e]=[].concat(t.__r,t[e]||[]),delete t.__r}o(t.__c)&&(t.change=[].concat(t.__c,t.change||[]),delete t.__c)}(r),Gt(r,s,sr,ir,or,e.context),nr=void 0}var ar={create:cr,update:cr,destroy:t=>cr(t,Fo)};let lr;function ur(t,e){if(n(t.data.domProps)&&n(e.data.domProps))return;let s,i;const c=e.elm,a=t.data.domProps||{};let l=e.data.domProps||{};for(s in(o(l.__ob__)||r(l._v_attr_proxy))&&(l=e.data.domProps=S({},l)),a)s in l||(c[s]="");for(s in l){if(i=l[s],"textContent"===s||"innerHTML"===s){if(e.children&&(e.children.length=0),i===a[s])continue;1===c.childNodes.length&&c.removeChild(c.childNodes[0])}if("value"===s&&"PROGRESS"!==c.tagName){c._value=i;const t=n(i)?"":String(i);fr(c,t)&&(c.value=t)}else if("innerHTML"===s&&Eo(c.tagName)&&n(c.innerHTML)){lr=lr||document.createElement("div"),lr.innerHTML=`<svg>${i}</svg>`;const t=lr.firstChild;for(;c.firstChild;)c.removeChild(c.firstChild);for(;t.firstChild;)c.appendChild(t.firstChild)}else if(i!==a[s])try{c[s]=i}catch(t){}}}function fr(t,e){return!t.composing&&("OPTION"===t.tagName||function(t,e){let n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(t,e)||function(t,e){const n=t.value,r=t._vModifiers;if(o(r)){if(r.number)return p(n)!==p(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}(t,e))}var dr={create:ur,update:ur};const pr=g((function(t){const e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach((function(t){if(t){const o=t.split(n);o.length>1&&(e[o[0].trim()]=o[1].trim())}})),e}));function hr(t){const e=mr(t.style);return t.staticStyle?S(t.staticStyle,e):e}function mr(t){return Array.isArray(t)?A(t):"string"==typeof t?pr(t):t}const _r=/^--/,vr=/\s*!important$/,yr=(t,e,n)=>{if(_r.test(e))t.style.setProperty(e,n);else if(vr.test(n))t.style.setProperty(x(e),n.replace(vr,""),"important");else{const o=$r(e);if(Array.isArray(n))for(let e=0,r=n.length;e<r;e++)t.style[o]=n[e];else t.style[o]=n}},gr=["Webkit","Moz","ms"];let br;const $r=g((function(t){if(br=br||document.createElement("div").style,"filter"!==(t=$(t))&&t in br)return t;const e=t.charAt(0).toUpperCase()+t.slice(1);for(let t=0;t<gr.length;t++){const n=gr[t]+e;if(n in br)return n}}));function wr(t,e){const r=e.data,s=t.data;if(n(r.staticStyle)&&n(r.style)&&n(s.staticStyle)&&n(s.style))return;let i,c;const a=e.elm,l=s.staticStyle,u=s.normalizedStyle||s.style||{},f=l||u,d=mr(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?S({},d):d;const p=function(t,e){const n={};let o;if(e){let e=t;for(;e.componentInstance;)e=e.componentInstance._vnode,e&&e.data&&(o=hr(e.data))&&S(n,o)}(o=hr(t.data))&&S(n,o);let r=t;for(;r=r.parent;)r.data&&(o=hr(r.data))&&S(n,o);return n}(e,!0);for(c in f)n(p[c])&&yr(a,c,"");for(c in p)i=p[c],i!==f[c]&&yr(a,c,null==i?"":i)}var Cr={create:wr,update:wr};const xr=/\s+/;function kr(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(xr).forEach((e=>t.classList.add(e))):t.classList.add(e);else{const n=` ${t.getAttribute("class")||""} `;n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Or(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(xr).forEach((e=>t.classList.remove(e))):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{let n=` ${t.getAttribute("class")||""} `;const o=" "+e+" ";for(;n.indexOf(o)>=0;)n=n.replace(o," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Sr(t){if(t){if("object"==typeof t){const e={};return!1!==t.css&&S(e,Ar(t.name||"v")),S(e,t),e}return"string"==typeof t?Ar(t):void 0}}const Ar=g((t=>({enterClass:`${t}-enter`,enterToClass:`${t}-enter-to`,enterActiveClass:`${t}-enter-active`,leaveClass:`${t}-leave`,leaveToClass:`${t}-leave-to`,leaveActiveClass:`${t}-leave-active`}))),Tr=z&&!K;let jr="transition",Er="transitionend",Ir="animation",Pr="animationend";Tr&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(jr="WebkitTransition",Er="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ir="WebkitAnimation",Pr="webkitAnimationEnd"));const Dr=z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:t=>t();function Nr(t){Dr((()=>{Dr(t)}))}function Mr(t,e){const n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),kr(t,e))}function Rr(t,e){t._transitionClasses&&_(t._transitionClasses,e),Or(t,e)}function Lr(t,e,n){const{type:o,timeout:r,propCount:s}=Ur(t,e);if(!o)return n();const i="transition"===o?Er:Pr;let c=0;const a=()=>{t.removeEventListener(i,l),n()},l=e=>{e.target===t&&++c>=s&&a()};setTimeout((()=>{c<s&&a()}),r+1),t.addEventListener(i,l)}const Fr=/\b(transform|all)(,|$)/;function Ur(t,e){const n=window.getComputedStyle(t),o=(n[jr+"Delay"]||"").split(", "),r=(n[jr+"Duration"]||"").split(", "),s=Br(o,r),i=(n[Ir+"Delay"]||"").split(", "),c=(n[Ir+"Duration"]||"").split(", "),a=Br(i,c);let l,u=0,f=0;"transition"===e?s>0&&(l="transition",u=s,f=r.length):"animation"===e?a>0&&(l="animation",u=a,f=c.length):(u=Math.max(s,a),l=u>0?s>a?"transition":"animation":null,f=l?"transition"===l?r.length:c.length:0);return{type:l,timeout:u,propCount:f,hasTransform:"transition"===l&&Fr.test(n[jr+"Property"])}}function Br(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(((e,n)=>Vr(e)+Vr(t[n]))))}function Vr(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function zr(t,e){const r=t.elm;o(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());const s=Sr(t.data.transition);if(n(s))return;if(o(r._enterCb)||1!==r.nodeType)return;const{css:a,type:l,enterClass:u,enterToClass:f,enterActiveClass:d,appearClass:h,appearToClass:m,appearActiveClass:_,beforeEnter:v,enter:y,afterEnter:g,enterCancelled:b,beforeAppear:$,appear:w,afterAppear:C,appearCancelled:x,duration:k}=s;let O=dn,S=dn.$vnode;for(;S&&S.parent;)O=S.context,S=S.parent;const A=!O._isMounted||!t.isRootInsert;if(A&&!w&&""!==w)return;const T=A&&h?h:u,j=A&&_?_:d,E=A&&m?m:f,I=A&&$||v,P=A&&i(w)?w:y,N=A&&C||g,M=A&&x||b,R=p(c(k)?k.enter:k),L=!1!==a&&!K,F=Kr(P),U=r._enterCb=D((()=>{L&&(Rr(r,E),Rr(r,j)),U.cancelled?(L&&Rr(r,T),M&&M(r)):N&&N(r),r._enterCb=null}));t.data.show||Zt(t,"insert",(()=>{const e=r.parentNode,n=e&&e._pending&&e._pending[t.key];n&&n.tag===t.tag&&n.elm._leaveCb&&n.elm._leaveCb(),P&&P(r,U)})),I&&I(r),L&&(Mr(r,T),Mr(r,j),Nr((()=>{Rr(r,T),U.cancelled||(Mr(r,E),F||(Wr(R)?setTimeout(U,R):Lr(r,l,U)))}))),t.data.show&&(e&&e(),P&&P(r,U)),L||F||U()}function Hr(t,e){const r=t.elm;o(r._enterCb)&&(r._enterCb.cancelled=!0,r._enterCb());const s=Sr(t.data.transition);if(n(s)||1!==r.nodeType)return e();if(o(r._leaveCb))return;const{css:i,type:a,leaveClass:l,leaveToClass:u,leaveActiveClass:f,beforeLeave:d,leave:h,afterLeave:m,leaveCancelled:_,delayLeave:v,duration:y}=s,g=!1!==i&&!K,b=Kr(h),$=p(c(y)?y.leave:y),w=r._leaveCb=D((()=>{r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[t.key]=null),g&&(Rr(r,u),Rr(r,f)),w.cancelled?(g&&Rr(r,l),_&&_(r)):(e(),m&&m(r)),r._leaveCb=null}));function C(){w.cancelled||(!t.data.show&&r.parentNode&&((r.parentNode._pending||(r.parentNode._pending={}))[t.key]=t),d&&d(r),g&&(Mr(r,l),Mr(r,f),Nr((()=>{Rr(r,l),w.cancelled||(Mr(r,u),b||(Wr($)?setTimeout(w,$):Lr(r,a,w)))}))),h&&h(r,w),g||b||w())}v?v(C):C()}function Wr(t){return"number"==typeof t&&!isNaN(t)}function Kr(t){if(n(t))return!1;const e=t.fns;return o(e)?Kr(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function qr(t,e){!0!==e.data.show&&zr(e)}const Gr=function(t){let i,c;const a={},{modules:l,nodeOps:u}=t;for(i=0;i<Uo.length;++i)for(a[Uo[i]]=[],c=0;c<l.length;++c)o(l[c][Uo[i]])&&a[Uo[i]].push(l[c][Uo[i]]);function f(t){const e=u.parentNode(t);o(e)&&u.removeChild(e,t)}function d(t,e,n,s,i,c,l){if(o(t.elm)&&o(c)&&(t=c[l]=lt(t)),t.isRootInsert=!i,function(t,e,n,s){let i=t.data;if(o(i)){const c=o(t.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(t,!1),o(t.componentInstance))return p(t,e),m(n,t.elm,s),r(c)&&function(t,e,n,r){let s,i=t;for(;i.componentInstance;)if(i=i.componentInstance._vnode,o(s=i.data)&&o(s=s.transition)){for(s=0;s<a.activate.length;++s)a.activate[s](Fo,i);e.push(i);break}m(n,t.elm,r)}(t,e,n,s),!0}}(t,e,n,s))return;const f=t.data,d=t.children,h=t.tag;o(h)?(t.elm=t.ns?u.createElementNS(t.ns,h):u.createElement(h,t),g(t),_(t,d,e),o(f)&&y(t,e),m(n,t.elm,s)):r(t.isComment)?(t.elm=u.createComment(t.text),m(n,t.elm,s)):(t.elm=u.createTextNode(t.text),m(n,t.elm,s))}function p(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,v(t)?(y(t,e),g(t)):(Ro(t),e.push(t))}function m(t,e,n){o(t)&&(o(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function _(t,n,o){if(e(n))for(let e=0;e<n.length;++e)d(n[e],o,t.elm,null,!0,n,e);else s(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function v(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return o(t.tag)}function y(t,e){for(let e=0;e<a.create.length;++e)a.create[e](Fo,t);i=t.data.hook,o(i)&&(o(i.create)&&i.create(Fo,t),o(i.insert)&&e.push(t))}function g(t){let e;if(o(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{let n=t;for(;n;)o(e=n.context)&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}o(e=dn)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function b(t,e,n,o,r,s){for(;o<=r;++o)d(n[o],s,t,e,!1,n,o)}function $(t){let e,n;const r=t.data;if(o(r))for(o(e=r.hook)&&o(e=e.destroy)&&e(t),e=0;e<a.destroy.length;++e)a.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)$(t.children[n])}function w(t,e,n){for(;e<=n;++e){const n=t[e];o(n)&&(o(n.tag)?(C(n),$(n)):f(n.elm))}}function C(t,e){if(o(e)||o(t.data)){let n;const r=a.remove.length+1;for(o(e)?e.listeners+=r:e=function(t,e){function n(){0==--n.listeners&&f(t)}return n.listeners=e,n}(t.elm,r),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&C(n,e),n=0;n<a.remove.length;++n)a.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else f(t.elm)}function x(t,e,n,r){for(let s=n;s<r;s++){const n=e[s];if(o(n)&&Bo(t,n))return s}}function k(t,e,s,i,c,l){if(t===e)return;o(e.elm)&&o(i)&&(e=i[c]=lt(e));const f=e.elm=t.elm;if(r(t.isAsyncPlaceholder))return void(o(e.asyncFactory.resolved)?A(t.elm,e,s):e.isAsyncPlaceholder=!0);if(r(e.isStatic)&&r(t.isStatic)&&e.key===t.key&&(r(e.isCloned)||r(e.isOnce)))return void(e.componentInstance=t.componentInstance);let p;const h=e.data;o(h)&&o(p=h.hook)&&o(p=p.prepatch)&&p(t,e);const m=t.children,_=e.children;if(o(h)&&v(e)){for(p=0;p<a.update.length;++p)a.update[p](t,e);o(p=h.hook)&&o(p=p.update)&&p(t,e)}n(e.text)?o(m)&&o(_)?m!==_&&function(t,e,r,s,i){let c,a,l,f,p=0,h=0,m=e.length-1,_=e[0],v=e[m],y=r.length-1,g=r[0],$=r[y];const C=!i;for(;p<=m&&h<=y;)n(_)?_=e[++p]:n(v)?v=e[--m]:Bo(_,g)?(k(_,g,s,r,h),_=e[++p],g=r[++h]):Bo(v,$)?(k(v,$,s,r,y),v=e[--m],$=r[--y]):Bo(_,$)?(k(_,$,s,r,y),C&&u.insertBefore(t,_.elm,u.nextSibling(v.elm)),_=e[++p],$=r[--y]):Bo(v,g)?(k(v,g,s,r,h),C&&u.insertBefore(t,v.elm,_.elm),v=e[--m],g=r[++h]):(n(c)&&(c=Vo(e,p,m)),a=o(g.key)?c[g.key]:x(g,e,p,m),n(a)?d(g,s,t,_.elm,!1,r,h):(l=e[a],Bo(l,g)?(k(l,g,s,r,h),e[a]=void 0,C&&u.insertBefore(t,l.elm,_.elm)):d(g,s,t,_.elm,!1,r,h)),g=r[++h]);p>m?(f=n(r[y+1])?null:r[y+1].elm,b(t,f,r,h,y,s)):h>y&&w(e,p,m)}(f,m,_,s,l):o(_)?(o(t.text)&&u.setTextContent(f,""),b(f,null,_,0,_.length-1,s)):o(m)?w(m,0,m.length-1):o(t.text)&&u.setTextContent(f,""):t.text!==e.text&&u.setTextContent(f,e.text),o(h)&&o(p=h.hook)&&o(p=p.postpatch)&&p(t,e)}function O(t,e,n){if(r(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(let t=0;t<e.length;++t)e[t].data.hook.insert(e[t])}const S=h("attrs,class,staticClass,staticStyle,key");function A(t,e,n,s){let i;const{tag:c,data:a,children:l}=e;if(s=s||a&&a.pre,e.elm=t,r(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(a)&&(o(i=a.hook)&&o(i=i.init)&&i(e,!0),o(i=e.componentInstance)))return p(e,n),!0;if(o(c)){if(o(l))if(t.hasChildNodes())if(o(i=a)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{let e=!0,o=t.firstChild;for(let t=0;t<l.length;t++){if(!o||!A(o,l[t],n,s)){e=!1;break}o=o.nextSibling}if(!e||o)return!1}else _(e,l,n);if(o(a)){let t=!1;for(const o in a)if(!S(o)){t=!0,y(e,n);break}!t&&a.class&&nn(a.class)}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,s,i){if(n(e))return void(o(t)&&$(t));let c=!1;const l=[];if(n(t))c=!0,d(e,l);else{const n=o(t.nodeType);if(!n&&Bo(t,e))k(t,e,l,null,null,i);else{if(n){if(1===t.nodeType&&t.hasAttribute("data-server-rendered")&&(t.removeAttribute("data-server-rendered"),s=!0),r(s)&&A(t,e,l))return O(e,l,!0),t;f=t,t=new it(u.tagName(f).toLowerCase(),{},[],void 0,f)}const i=t.elm,c=u.parentNode(i);if(d(e,l,i._leaveCb?null:c,u.nextSibling(i)),o(e.parent)){let t=e.parent;const n=v(e);for(;t;){for(let e=0;e<a.destroy.length;++e)a.destroy[e](t);if(t.elm=e.elm,n){for(let e=0;e<a.create.length;++e)a.create[e](Fo,t);const e=t.data.hook.insert;if(e.merged)for(let t=1;t<e.fns.length;t++)e.fns[t]()}else Ro(t);t=t.parent}}o(c)?w([t],0,0):o(t.tag)&&$(t)}}var f;return O(e,l,c),e.elm}}({nodeOps:No,modules:[Yo,er,ar,dr,Cr,z?{create:qr,activate:qr,remove(t,e){!0!==t.data.show?Hr(t,e):e()}}:{}].concat(Zo)});K&&document.addEventListener("selectionchange",(()=>{const t=document.activeElement;t&&t.vmodel&&ns(t,"input")}));const Zr={inserted(t,e,n,o){"select"===n.tag?(o.elm&&!o.elm._vOptions?Zt(n,"postpatch",(()=>{Zr.componentUpdated(t,e,n)})):Jr(t,e,n.context),t._vOptions=[].map.call(t.options,Yr)):("textarea"===n.tag||Do(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ts),t.addEventListener("compositionend",es),t.addEventListener("change",es),K&&(t.vmodel=!0)))},componentUpdated(t,e,n){if("select"===n.tag){Jr(t,e,n.context);const o=t._vOptions,r=t._vOptions=[].map.call(t.options,Yr);if(r.some(((t,e)=>!I(t,o[e])))){(t.multiple?e.value.some((t=>Qr(t,r))):e.value!==e.oldValue&&Qr(e.value,r))&&ns(t,"change")}}}};function Jr(t,e,n){Xr(t,e),(W||q)&&setTimeout((()=>{Xr(t,e)}),0)}function Xr(t,e,n){const o=e.value,r=t.multiple;if(r&&!Array.isArray(o))return;let s,i;for(let e=0,n=t.options.length;e<n;e++)if(i=t.options[e],r)s=P(o,Yr(i))>-1,i.selected!==s&&(i.selected=s);else if(I(Yr(i),o))return void(t.selectedIndex!==e&&(t.selectedIndex=e));r||(t.selectedIndex=-1)}function Qr(t,e){return e.every((e=>!I(e,t)))}function Yr(t){return"_value"in t?t._value:t.value}function ts(t){t.target.composing=!0}function es(t){t.target.composing&&(t.target.composing=!1,ns(t.target,"input"))}function ns(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function os(t){return!t.componentInstance||t.data&&t.data.transition?t:os(t.componentInstance._vnode)}var rs={bind(t,{value:e},n){const o=(n=os(n)).data&&n.data.transition,r=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;e&&o?(n.data.show=!0,zr(n,(()=>{t.style.display=r}))):t.style.display=e?r:"none"},update(t,{value:e,oldValue:n},o){if(!e==!n)return;(o=os(o)).data&&o.data.transition?(o.data.show=!0,e?zr(o,(()=>{t.style.display=t.__vOriginalDisplay})):Hr(o,(()=>{t.style.display="none"}))):t.style.display=e?t.__vOriginalDisplay:"none"},unbind(t,e,n,o,r){r||(t.style.display=t.__vOriginalDisplay)}},ss={model:Zr,show:rs};const is={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function cs(t){const e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?cs(Ae(e.children)):t}function as(t){const e={},n=t.$options;for(const o in n.propsData)e[o]=t[o];const o=n._parentListeners;for(const t in o)e[$(t)]=o[t];return e}function ls(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}const us=t=>t.tag||ve(t),fs=t=>"show"===t.name;var ds={name:"transition",props:is,abstract:!0,render(t){let e=this.$slots.default;if(!e)return;if(e=e.filter(us),!e.length)return;const n=this.mode,o=e[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return o;const r=cs(o);if(!r)return o;if(this._leaving)return ls(t,o);const i=`__transition-${this._uid}-`;r.key=null==r.key?r.isComment?i+"comment":i+r.tag:s(r.key)?0===String(r.key).indexOf(i)?r.key:i+r.key:r.key;const c=(r.data||(r.data={})).transition=as(this),a=this._vnode,l=cs(a);if(r.data.directives&&r.data.directives.some(fs)&&(r.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(r,l)&&!ve(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){const e=l.data.transition=S({},c);if("out-in"===n)return this._leaving=!0,Zt(e,"afterLeave",(()=>{this._leaving=!1,this.$forceUpdate()})),ls(t,o);if("in-out"===n){if(ve(r))return a;let t;const n=()=>{t()};Zt(c,"afterEnter",n),Zt(c,"enterCancelled",n),Zt(e,"delayLeave",(e=>{t=e}))}}return o}};const ps=S({tag:String,moveClass:String},is);delete ps.mode;var hs={props:ps,beforeMount(){const t=this._update;this._update=(e,n)=>{const o=pn(this);this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept,o(),t.call(this,e,n)}},render(t){const e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),o=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],i=as(this);for(let t=0;t<r.length;t++){const e=r[t];e.tag&&null!=e.key&&0!==String(e.key).indexOf("__vlist")&&(s.push(e),n[e.key]=e,(e.data||(e.data={})).transition=i)}if(o){const r=[],s=[];for(let t=0;t<o.length;t++){const e=o[t];e.data.transition=i,e.data.pos=e.elm.getBoundingClientRect(),n[e.key]?r.push(e):s.push(e)}this.kept=t(e,null,r),this.removed=s}return t(e,null,s)},updated(){const t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(ms),t.forEach(_s),t.forEach(vs),this._reflow=document.body.offsetHeight,t.forEach((t=>{if(t.data.moved){const n=t.elm,o=n.style;Mr(n,e),o.transform=o.WebkitTransform=o.transitionDuration="",n.addEventListener(Er,n._moveCb=function t(o){o&&o.target!==n||o&&!/transform$/.test(o.propertyName)||(n.removeEventListener(Er,t),n._moveCb=null,Rr(n,e))})}})))},methods:{hasMove(t,e){if(!Tr)return!1;if(this._hasMove)return this._hasMove;const n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((t=>{Or(n,t)})),kr(n,e),n.style.display="none",this.$el.appendChild(n);const o=Ur(n);return this.$el.removeChild(n),this._hasMove=o.hasTransform}}};function ms(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function _s(t){t.data.newPos=t.elm.getBoundingClientRect()}function vs(t){const e=t.data.pos,n=t.data.newPos,o=e.left-n.left,r=e.top-n.top;if(o||r){t.data.moved=!0;const e=t.elm.style;e.transform=e.WebkitTransform=`translate(${o}px,${r}px)`,e.transitionDuration="0s"}}var ys={Transition:ds,TransitionGroup:hs};co.config.mustUseProp=(t,e,n)=>"value"===n&&vo(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t,co.config.isReservedTag=Io,co.config.isReservedAttr=_o,co.config.getTagNamespace=function(t){return Eo(t)?"svg":"math"===t?"math":void 0},co.config.isUnknownElement=function(t){if(!z)return!0;if(Io(t))return!1;if(t=t.toLowerCase(),null!=Po[t])return Po[t];const e=document.createElement(t);return t.indexOf("-")>-1?Po[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Po[t]=/HTMLUnknownElement/.test(e.toString())},S(co.options.directives,ss),S(co.options.components,ys),co.prototype.__patch__=z?Gr:T,co.prototype.$mount=function(t,e){return function(t,e,n){let o;t.$el=e,t.$options.render||(t.$options.render=ct),vn(t,"beforeMount"),o=()=>{t._update(t._render(),n)},new cn(t,o,T,{before(){t._isMounted&&!t._isDestroyed&&vn(t,"beforeUpdate")}},!0),n=!1;const r=t._preWatchers;if(r)for(let t=0;t<r.length;t++)r[t].run();return null==t.$vnode&&(t._isMounted=!0,vn(t,"mounted")),t}(this,t=t&&z?function(t){if("string"==typeof t){return document.querySelector(t)||document.createElement("div")}return t}(t):void 0,e)},z&&setTimeout((()=>{L.devtools&&tt&&tt.emit("init",co)}),0),S(co,tn),module.exports=co;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dev_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_dev_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_dev_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dev_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_dev_nuxt_components_dist_loader_js_ref_0_0_node_modules_dev_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_dev_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_dev_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_dev_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dev_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_dev_nuxt_components_dist_loader_js_ref_0_0_node_modules_dev_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_dev_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_dev_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_dev_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dev_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_dev_nuxt_components_dist_loader_js_ref_0_0_node_modules_dev_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_dev_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_dev_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_dev_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dev_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_dev_nuxt_components_dist_loader_js_ref_0_0_node_modules_dev_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_dev_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_dev_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_dev_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dev_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_dev_nuxt_components_dist_loader_js_ref_0_0_node_modules_dev_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.__nuxt-error-page{\n  padding:1rem;\n  background:#f7f8fb;\n  color:#47494e;\n  text-align:center;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  font-family:sans-serif;\n  font-weight:100!important;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -webkit-font-smoothing:antialiased;\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n.__nuxt-error-page .error{\n  max-width:450px\n}\n.__nuxt-error-page .title{\n  font-size:1.5rem;\n  margin-top:15px;\n  color:#47494e;\n  margin-bottom:8px\n}\n.__nuxt-error-page .description{\n  color:#7f828b;\n  line-height:21px;\n  margin-bottom:10px\n}\n.__nuxt-error-page a{\n  color:#7f828b!important;\n  text-decoration:none\n}\n.__nuxt-error-page .logo{\n  position:fixed;\n  left:12px;\n  bottom:12px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dev_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_dev_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_dev_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dev_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_dev_nuxt_components_dist_loader_js_ref_0_0_node_modules_dev_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_dev_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_dev_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_dev_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dev_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_dev_nuxt_components_dist_loader_js_ref_0_0_node_modules_dev_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_dev_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_dev_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_dev_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dev_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_dev_nuxt_components_dist_loader_js_ref_0_0_node_modules_dev_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_dev_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_dev_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_dev_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dev_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_dev_nuxt_components_dist_loader_js_ref_0_0_node_modules_dev_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_dev_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_dev_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_dev_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dev_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_dev_nuxt_components_dist_loader_js_ref_0_0_node_modules_dev_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("54b08540", content, true)

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.relative{\n  position:relative;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.mt-3{\n  margin-top:0.75rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.max-w-4xl{\n  max-width:56rem;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-t{\n  border-top-width:1px;\n}\n\n.border-dashed{\n  border-style:dashed;\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.p-1{\n  padding:0.25rem;\n}\n\n.p-6{\n  padding:1.5rem;\n}\n\n.pt-4{\n  padding-top:1rem;\n}\n\n.pt-8{\n  padding-top:2rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.leading-7{\n  line-height:1.75rem;\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-800{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.text-green-500{\n  --tw-text-opacity:1;\n  color:rgba(16, 185, 129, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-800:hover{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.hover\\:underline:hover{\n  text-decoration:underline;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n@media (min-width: 640px){\n  .sm\\:items-center{\n    align-items:center;\n  }\n\n  .sm\\:rounded-lg{\n    border-radius:0.5rem;\n  }\n\n  .sm\\:px-6{\n    padding-left:1.5rem;\n    padding-right:1.5rem;\n  }\n\n  .sm\\:pt-0{\n    padding-top:0px;\n  }\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n  .lg\\:px-8{\n    padding-left:2rem;\n    padding-right:2rem;\n  }\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "NuxtLogo", function() { return NuxtLogo; });
__webpack_require__.d(components_namespaceObject, "Tutorial", function() { return Tutorial; });

// NAMESPACE OBJECT: ./node_modules_dev/@nuxt/image/dist/runtime/providers/static.js
var static_namespaceObject = {};
__webpack_require__.r(static_namespaceObject);
__webpack_require__.d(static_namespaceObject, "getImage", function() { return static_getImage; });
__webpack_require__.d(static_namespaceObject, "supportsAlias", function() { return static_supportsAlias; });

// NAMESPACE OBJECT: ./node_modules_dev/@nuxt/image/dist/runtime/providers/vercel.js
var vercel_namespaceObject = {};
__webpack_require__.r(vercel_namespaceObject);
__webpack_require__.d(vercel_namespaceObject, "getImage", function() { return vercel_getImage; });
__webpack_require__.d(vercel_namespaceObject, "validateDomains", function() { return vercel_validateDomains; });

// EXTERNAL MODULE: ./node_modules_dev/vue/dist/vue.runtime.common.js
var vue_runtime_common = __webpack_require__(0);
var vue_runtime_common_default = /*#__PURE__*/__webpack_require__.n(vue_runtime_common);

// EXTERNAL MODULE: ./node_modules_dev/ufo/dist/index.cjs
var dist = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules_dev/node-fetch/lib/index.js
var lib = __webpack_require__(16);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (vue_runtime_common_default.a.config.errorHandler) {
    vue_runtime_common_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = vue_runtime_common_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(dist["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(dist["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = dist["joinURL"];
const stripTrailingSlash = dist["withoutTrailingSlash"];
const isSamePath = dist["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    vue_runtime_common_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: ./node_modules_dev/vue-meta/dist/vue-meta.common.js
var vue_meta_common = __webpack_require__(17);
var vue_meta_common_default = /*#__PURE__*/__webpack_require__.n(vue_meta_common);

// EXTERNAL MODULE: ./node_modules_dev/vue-client-only/dist/vue-client-only.common.js
var vue_client_only_common = __webpack_require__(10);
var vue_client_only_common_default = /*#__PURE__*/__webpack_require__.n(vue_client_only_common);

// EXTERNAL MODULE: ./node_modules_dev/vue-no-ssr/dist/vue-no-ssr.common.js
var vue_no_ssr_common = __webpack_require__(5);
var vue_no_ssr_common_default = /*#__PURE__*/__webpack_require__.n(vue_no_ssr_common);

// EXTERNAL MODULE: ./node_modules_dev/vue-router/dist/vue-router.common.js
var vue_router_common = __webpack_require__(11);
var vue_router_common_default = /*#__PURE__*/__webpack_require__.n(vue_router_common);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _3c7dad0c = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 3).then(__webpack_require__.bind(null, 47)));

const emptyFn = () => {};

vue_runtime_common_default.a.use(vue_router_common_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _3c7dad0c,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new vue_router_common_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(dist["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules_dev/babel-loader/lib??ref--2-0!./node_modules_dev/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules_dev/@nuxt/components/dist/loader.js??ref--0-0!./node_modules_dev/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules_dev/babel-loader/lib??ref--2-0!./node_modules_dev/@nuxt/components/dist/loader.js??ref--0-0!./node_modules_dev/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules_dev/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2c8b0ba5"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    vue_runtime_common_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules_dev/babel-loader/lib??ref--2-0!./node_modules_dev/@nuxt/components/dist/loader.js??ref--0-0!./node_modules_dev/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "a76498ce"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules_dev/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
var tailwind = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules_dev/babel-loader/lib??ref--2-0!./node_modules_dev/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules_dev/@nuxt/components/dist/loader.js??ref--0-0!./node_modules_dev/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&
var defaultvue_type_template_id_0040005c_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('Nuxt');
};

var defaultvue_type_template_id_0040005c_staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "39087b89"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    vue_runtime_common_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              vue_runtime_common_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const NuxtLogo = () => __webpack_require__.e(/* import() | components/nuxt-logo */ 1).then(__webpack_require__.bind(null, 49)).then(c => wrapFunctional(c.default || c));
const Tutorial = () => __webpack_require__.e(/* import() | components/tutorial */ 2).then(__webpack_require__.bind(null, 48)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  vue_runtime_common_default.a.component(name, components_namespaceObject[name]);
  vue_runtime_common_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./node_modules_dev/defu/dist/defu.cjs
var defu = __webpack_require__(12);
var defu_default = /*#__PURE__*/__webpack_require__.n(defu);

// EXTERNAL MODULE: ./node_modules_dev/@nuxt/image/node_modules/ufo/dist/index.cjs
var ufo_dist = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/utils/meta.js
async function imageMeta(ctx, url) {
  const cache = getCache(ctx);
  const cacheKey = "image:meta:" + url;

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const meta = await _imageMeta(url).catch(err => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  cache.set(cacheKey, meta);
  return meta;
}

async function _imageMeta(url) {
  if (true) {
    const imageMeta2 = await __webpack_require__.e(/* import() */ 4).then(__webpack_require__.t.bind(null, 46, 7)).then(r => r.default || r);
    const data = await fetch(url).then(res => res.buffer());
    const metadata = imageMeta2(data);

    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }

    const {
      width,
      height
    } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }

  if (typeof Image === "undefined") {
    throw new TypeError("Image not supported");
  }

  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const meta = {
        width: img.width,
        height: img.height,
        ratio: img.width / img.height
      };
      resolve(meta);
    };

    img.onerror = err => reject(err);

    img.src = url;
  });
}

function getCache(ctx) {
  if (!ctx.nuxtContext.cache) {
    if (ctx.nuxtContext.ssrContext && ctx.nuxtContext.ssrContext.cache) {
      ctx.nuxtContext.cache = ctx.nuxtContext.ssrContext.cache;
    } else {
      const _cache = {};
      ctx.nuxtContext.cache = {
        get: id => _cache[id],
        set: (id, value) => {
          _cache[id] = value;
        },
        has: id => typeof _cache[id] !== "undefined"
      };
    }
  }

  return ctx.nuxtContext.cache;
}
// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/utils/index.js
function imageFetch(url) {
  return fetch(cleanDoubleSlashes(url));
}
function getInt(x) {
  if (typeof x === "number") {
    return x;
  }

  if (typeof x === "string") {
    return parseInt(x, 10);
  }

  return void 0;
}
function getFileExtension(url = "") {
  const extension = url.split(/[?#]/).shift().split("/").pop().split(".").pop();
  return extension;
}
function cleanDoubleSlashes(path = "") {
  return path.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
}
function createMapper(map) {
  return key => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({
  formatter,
  keyMap,
  joinWith = "/",
  valueMap
} = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }

  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }

  const map = valueMap || {};
  Object.keys(map).forEach(valueKey => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];

      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }

      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function renderAttributesToString(attributes = {}) {
  return Object.entries(attributes).map(([key, value]) => value ? `${key}="${value}"` : "").filter(Boolean).join(" ");
}
function renderTag(tag, attrs, contents) {
  const html = `<${tag} ${renderAttributesToString(attrs)}>`;

  if (!contents) {
    return html;
  }

  return html + contents + `</${tag}>`;
}
function generateAlt(src = "") {
  return src.split(/[?#]/).shift().split("/").pop().split(".").shift();
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }

  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/image.js





function createImage(globalOptions, nuxtContext) {
  const staticImageManifest =  false ? undefined : {};
  const ctx = {
    options: globalOptions,
    nuxtContext
  };

  const getImage = function (input, options = {}) {
    const image = resolveImage(ctx, input, options);

    if (image.isStatic) {
      handleStaticImage(image, input);
    }

    return image;
  };

  const $img = function $img2(input, modifiers = {}, options = {}) {
    return getImage(input, { ...options,
      modifiers: defu_default()(modifiers, options.modifiers || {})
    }).url;
  };

  function handleStaticImage(image, input) {
    if (false) { var _ssrState$data, _ssrContext$image; } else if (true) {
      image.url = input;
    }
  }

  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName],
      ...options
    });
  }

  $img.options = globalOptions;
  $img.getImage = getImage;

  $img.getMeta = (input, options) => getMeta(ctx, input, options);

  $img.getSizes = (input, options) => getSizes(ctx, input, options);

  ctx.$img = $img;
  return $img;
}

async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options
  });

  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}

function resolveImage(ctx, input, options) {
  var _options$modifiers, _options$modifiers2;

  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }

  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }

  const {
    provider,
    defaults
  } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = Object(ufo_dist["hasProtocol"])(input) ? input : Object(ufo_dist["withLeadingSlash"])(input);

  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = Object(ufo_dist["joinURL"])(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }

  if (provider.validateDomains && Object(ufo_dist["hasProtocol"])(input)) {
    const inputHost = Object(ufo_dist["parseURL"])(input).host;

    if (!ctx.options.domains.find(d => d === inputHost)) {
      return {
        url: input
      };
    }
  }

  const _options = defu_default()(options, preset, defaults);

  _options.modifiers = { ..._options.modifiers
  };
  const expectedFormat = _options.modifiers.format;

  if ((_options$modifiers = _options.modifiers) !== null && _options$modifiers !== void 0 && _options$modifiers.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }

  if ((_options$modifiers2 = _options.modifiers) !== null && _options$modifiers2 !== void 0 && _options$modifiers2.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }

  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}

function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];

  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }

  return provider;
}

function getPreset(ctx, name) {
  if (!name) {
    return {};
  }

  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }

  return ctx.options.presets[name];
}

function getSizes(ctx, input, opts) {
  var _opts$modifiers, _opts$modifiers2;

  const width = parseSize((_opts$modifiers = opts.modifiers) === null || _opts$modifiers === void 0 ? void 0 : _opts$modifiers.width);
  const height = parseSize((_opts$modifiers2 = opts.modifiers) === null || _opts$modifiers2 === void 0 ? void 0 : _opts$modifiers2.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};

  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter(e => e)) {
      const s = entry.split(":");

      if (s.length !== 2) {
        continue;
      }

      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }

  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");

    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }

    if (!isFluid && !size.endsWith("px")) {
      continue;
    }

    let _cWidth = parseInt(size);

    if (!screenMaxWidth || !_cWidth) {
      continue;
    }

    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }

    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;

    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers,
        width: _cWidth,
        height: _cHeight
      }, opts)
    });
  }

  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];

  if (defaultVar) {
    defaultVar.media = "";
  }

  return {
    sizes: variants.map(v => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map(v => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar === null || defaultVar === void 0 ? void 0 : defaultVar.src
  };
}
// CONCATENATED MODULE: ./node_modules_dev/babel-loader/lib??ref--2-0!./node_modules_dev/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules_dev/@nuxt/components/dist/loader.js??ref--0-0!./node_modules_dev/vue-loader/lib??vue-loader-options!./node_modules_dev/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=template&id=7b3fec07&
var nuxt_imgvue_type_template_id_7b3fec07_render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _c('img', _vm._g(_vm._b({
    key: _vm.nSrc,
    ref: "img",
    attrs: {
      "src": _vm.nSrc
    }
  }, 'img', _vm.nAttrs, false), _vm.$listeners), []);
};

var nuxt_imgvue_type_template_id_7b3fec07_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/components/image.mixin.js


const defineMixin = opts => opts;

const imageMixin = defineMixin({
  props: {
    src: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: void 0
    },
    quality: {
      type: [Number, String],
      default: void 0
    },
    background: {
      type: String,
      default: void 0
    },
    fit: {
      type: String,
      default: void 0
    },
    modifiers: {
      type: Object,
      default: void 0
    },
    preset: {
      type: String,
      default: void 0
    },
    provider: {
      type: String,
      default: void 0
    },
    sizes: {
      type: [Object, String],
      default: void 0
    },
    preload: {
      type: Boolean,
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    alt: {
      type: String,
      default: void 0
    },
    referrerpolicy: {
      type: String,
      default: void 0
    },
    usemap: {
      type: String,
      default: void 0
    },
    longdesc: {
      type: String,
      default: void 0
    },
    ismap: {
      type: Boolean,
      default: void 0
    },
    crossorigin: {
      type: [Boolean, String],
      default: void 0,
      validator: val => ["anonymous", "use-credentials", "", true, false].includes(val)
    },
    loading: {
      type: String,
      default: void 0
    },
    decoding: {
      type: String,
      default: void 0,
      validator: val => ["async", "auto", "sync"].includes(val)
    }
  },
  computed: {
    nImgAttrs() {
      return {
        width: parseSize(this.width),
        height: parseSize(this.height),
        alt: this.alt,
        referrerpolicy: this.referrerpolicy,
        usemap: this.usemap,
        longdesc: this.longdesc,
        ismap: this.ismap,
        crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
        loading: this.loading,
        decoding: this.decoding
      };
    },

    nModifiers() {
      return { ...this.modifiers,
        width: parseSize(this.width),
        height: parseSize(this.height),
        format: this.format,
        quality: this.quality,
        background: this.background,
        fit: this.fit
      };
    },

    nOptions() {
      return {
        provider: this.provider,
        preset: this.preset
      };
    }

  }
});
// CONCATENATED MODULE: ./node_modules_dev/babel-loader/lib??ref--2-0!./node_modules_dev/@nuxt/components/dist/loader.js??ref--0-0!./node_modules_dev/vue-loader/lib??vue-loader-options!./node_modules_dev/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&



const defineComponent = opts => opts;

/* harmony default export */ var nuxt_imgvue_type_script_lang_js_ = (defineComponent({
  name: "NuxtImg",
  mixins: [imageMixin],
  props: {
    placeholder: {
      type: [Boolean, String, Number, Array],
      default: void 0
    }
  },

  head() {
    if (this.preload === true) {
      return {
        link: [{
          rel: "preload",
          as: "image",
          href: this.nSrc
        }]
      };
    }

    return {};
  },

  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;

      if (this.sizes) {
        const {
          sizes,
          srcset
        } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }

      return attrs;
    },

    nMainSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },

    nSizes() {
      return this.$img.getSizes(this.src, { ...this.nOptions,
        sizes: this.sizes,
        modifiers: { ...this.nModifiers,
          width: parseSize(this.width),
          height: parseSize(this.height)
        }
      });
    },

    nSrc() {
      return this.nPlaceholder ? this.nPlaceholder : this.nMainSrc;
    },

    nPlaceholder() {
      let placeholder = this.placeholder;

      if (placeholder === "") {
        placeholder = true;
      }

      if (!placeholder || this.placeholderLoaded) {
        return false;
      }

      if (typeof placeholder === "string") {
        return placeholder;
      }

      const size = Array.isArray(placeholder) ? placeholder : typeof placeholder === "number" ? [placeholder, placeholder] : [10, 10];
      return this.$img(this.src, { ...this.nModifiers,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, this.nOptions);
    }

  },

  mounted() {
    if (this.nPlaceholder) {
      const img = new Image();
      img.src = this.nMainSrc;

      img.onload = () => {
        this.$refs.img.src = this.nMainSrc;
        this.placeholderLoaded = true;
      };
    }

    if (false) {}
  }

}));
// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_imgvue_type_script_lang_js_ = (nuxt_imgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/components/nuxt-img.vue





/* normalize component */

var nuxt_img_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_imgvue_type_script_lang_js_,
  nuxt_imgvue_type_template_id_7b3fec07_render,
  nuxt_imgvue_type_template_id_7b3fec07_staticRenderFns,
  false,
  null,
  null,
  "2abe156d"
  
)

/* harmony default export */ var nuxt_img = (nuxt_img_component.exports);
// CONCATENATED MODULE: ./node_modules_dev/babel-loader/lib??ref--2-0!./node_modules_dev/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules_dev/@nuxt/components/dist/loader.js??ref--0-0!./node_modules_dev/vue-loader/lib??vue-loader-options!./node_modules_dev/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=template&id=1a636689&
var nuxt_picturevue_type_template_id_1a636689_render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _c('picture', {
    key: _vm.nSources[0].src
  }, [_vm._ssrNode((_vm.nSources[1] ? "<source" + _vm._ssrAttr("type", _vm.nSources[1].type) + _vm._ssrAttr("srcset", _vm.nSources[1].srcset) + _vm._ssrAttr("sizes", _vm.nSources[1].sizes) + ">" : "<!---->") + " <img" + _vm._ssrAttr("src", _vm.nSources[0].src) + _vm._ssrAttr("srcset", _vm.nSources[0].srcset) + _vm._ssrAttr("sizes", _vm.nSources[0].sizes) + _vm._ssrAttrs({ ..._vm.nImgAttrs,
    ..._vm.imgAttrs
  }) + ">")]);
};

var nuxt_picturevue_type_template_id_1a636689_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules_dev/babel-loader/lib??ref--2-0!./node_modules_dev/@nuxt/components/dist/loader.js??ref--0-0!./node_modules_dev/vue-loader/lib??vue-loader-options!./node_modules_dev/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&



const nuxt_picturevue_type_script_lang_js_defineComponent = opts => opts;

/* harmony default export */ var nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_defineComponent({
  name: "NuxtPicture",
  mixins: [imageMixin],
  props: {
    legacyFormat: {
      type: String,
      default: null
    },
    imgAttrs: {
      type: Object,
      default: null
    }
  },

  head() {
    if (this.preload === true) {
      const srcKey = typeof this.nSources[1] !== "undefined" ? 1 : 0;
      const link = {
        rel: "preload",
        as: "image",
        imagesrcset: this.nSources[srcKey].srcset
      };

      if (typeof this.nSources[srcKey].sizes !== "undefined") {
        link.imagesizes = this.nSources[srcKey].sizes;
      }

      return {
        link: [link]
      };
    }

    return {};
  },

  computed: {
    isTransparent() {
      return ["png", "webp", "gif"].includes(this.originalFormat);
    },

    originalFormat() {
      return getFileExtension(this.src);
    },

    nFormat() {
      if (this.format) {
        return this.format;
      }

      if (this.originalFormat === "svg") {
        return "svg";
      }

      return "webp";
    },

    nLegacyFormat() {
      if (this.legacyFormat) {
        return this.legacyFormat;
      }

      const formats = {
        webp: this.isTransparent ? "png" : "jpeg",
        svg: "png"
      };
      return formats[this.nFormat] || this.originalFormat;
    },

    nSources() {
      if (this.nFormat === "svg") {
        return [{
          srcset: this.src
        }];
      }

      const formats = this.nLegacyFormat !== this.nFormat ? [this.nLegacyFormat, this.nFormat] : [this.nFormat];
      const sources = formats.map(format => {
        const {
          srcset,
          sizes,
          src
        } = this.$img.getSizes(this.src, { ...this.nOptions,
          sizes: this.sizes || this.$img.options.screens,
          modifiers: { ...this.nModifiers,
            format
          }
        });
        return {
          src,
          type: `image/${format}`,
          sizes,
          srcset
        };
      });
      return sources;
    }

  },

  created() {
    if (false) {}
  }

}));
// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/components/nuxt-picture.vue





/* normalize component */

var nuxt_picture_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_picturevue_type_script_lang_js_,
  nuxt_picturevue_type_template_id_1a636689_render,
  nuxt_picturevue_type_template_id_1a636689_staticRenderFns,
  false,
  null,
  null,
  "314da7b0"
  
)

/* harmony default export */ var nuxt_picture = (nuxt_picture_component.exports);
// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/providers/ipx.js


const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => Object(ufo_dist["encodeParam"])(key) + "_" + Object(ufo_dist["encodeParam"])(val)
});
const ipx_getImage = (src, {
  modifiers = {},
  baseURL
} = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }

  const params = operationsGenerator(modifiers) || "_";

  if (!baseURL) {
    var _ctx$nuxtContext;

    baseURL = Object(ufo_dist["joinURL"])(((_ctx$nuxtContext = ctx.nuxtContext) === null || _ctx$nuxtContext === void 0 ? void 0 : _ctx$nuxtContext.base) || "/", "/_ipx");
  }

  return {
    url: Object(ufo_dist["joinURL"])(baseURL, params, Object(ufo_dist["encodePath"])(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/providers/static.js

const static_getImage = (src, options, ctx) => ({ ...ipx_getImage(src, options, ctx),
  isStatic: true
});
const static_supportsAlias = true;
// CONCATENATED MODULE: ./node_modules_dev/@nuxt/image/dist/runtime/providers/vercel.js

const vercel_getImage = (src, {
  modifiers,
  baseURL = "/_vercel/image"
} = {}, ctx) => {
  const validWidths = Object.values(ctx.options.screens || {}).sort((a, b) => a - b);
  const largestWidth = validWidths[validWidths.length - 1];
  let width = Number((modifiers === null || modifiers === void 0 ? void 0 : modifiers.width) || 0);

  if (!width) {
    width = largestWidth;

    if (false) {}
  } else if (!validWidths.includes(width)) {
    width = validWidths.find(validWidth => validWidth > width) || largestWidth;

    if (false) {}
  }

  if (false) {}

  return {
    url: baseURL + "?" + Object(ufo_dist["stringifyQuery"])({
      url: src,
      w: String(width),
      q: String((modifiers === null || modifiers === void 0 ? void 0 : modifiers.quality) || "100")
    })
  };
};
const vercel_validateDomains = true;
// CONCATENATED MODULE: ./.nuxt/image.js






const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "vercel",
  "domains": ["avatars.githubusercontent.com"],
  "alias": {}
};
imageOptions.providers = {
  ['static']: {
    provider: static_namespaceObject,
    defaults: {}
  },
  ['vercel']: {
    provider: vercel_namespaceObject,
    defaults: {}
  }
};
vue_runtime_common_default.a.component(nuxt_img.name, nuxt_img);
vue_runtime_common_default.a.component(nuxt_picture.name, nuxt_picture);
vue_runtime_common_default.a.component('NImg', nuxt_img);
vue_runtime_common_default.a.component('NPicture', nuxt_picture);
/* harmony default export */ var _nuxt_image = (function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext);

  if (false) {}

  inject('img', $img);
});
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./image.js (mode: 'all')
// Component: <ClientOnly>

vue_runtime_common_default.a.component(vue_client_only_common_default.a.name, vue_client_only_common_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

vue_runtime_common_default.a.component(vue_no_ssr_common_default.a.name, { ...vue_no_ssr_common_default.a,

  render(h, ctx) {
    if (false) {}

    return vue_no_ssr_common_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

vue_runtime_common_default.a.component(nuxt_child.name, nuxt_child);
vue_runtime_common_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

vue_runtime_common_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(vue_runtime_common_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
vue_runtime_common_default.a.use(vue_meta_common_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "starter_nuxt",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (vue_runtime_common_default.a[installKey]) {
      return;
    }

    vue_runtime_common_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    vue_runtime_common_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(vue_runtime_common_default.a.prototype, key)) {
        Object.defineProperty(vue_runtime_common_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_image === 'function') {
    await _nuxt_image(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: vue_runtime_common_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

vue_runtime_common_default.a.config.optionMergeStrategies.serverPrefetch = vue_runtime_common_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!vue_runtime_common_default.a.__nuxt__fetch__mixin__) {
  vue_runtime_common_default.a.mixin(fetch_server);
  vue_runtime_common_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


vue_runtime_common_default.a.component(nuxt_link_server.name, nuxt_link_server);
vue_runtime_common_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = lib_default.a;
}

const noopApp = () => new vue_runtime_common_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(dist["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(dist["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(dist["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(dist["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new vue_runtime_common_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map