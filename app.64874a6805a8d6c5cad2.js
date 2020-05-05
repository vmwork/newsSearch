/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n // Custom Http Module\n\nfunction customHttp() {\n  return {\n    get: function get(url, cb) {\n      try {\n        var xhr = new XMLHttpRequest();\n        xhr.open('GET', url);\n        xhr.addEventListener('load', function () {\n          if (Math.floor(xhr.status / 100) !== 2) {\n            cb(\"Error. Status code: \".concat(xhr.status), xhr);\n            return;\n          }\n\n          var response = JSON.parse(xhr.responseText);\n          cb(null, response);\n        });\n        xhr.addEventListener('error', function () {\n          cb(\"Error. Status code: \".concat(xhr.status), xhr);\n        });\n        xhr.send();\n      } catch (error) {\n        cb(error);\n      }\n    },\n    post: function post(url, body, headers, cb) {\n      try {\n        var xhr = new XMLHttpRequest();\n        xhr.open('POST', url);\n        xhr.addEventListener('load', function () {\n          if (Math.floor(xhr.status / 100) !== 2) {\n            cb(\"Error. Status code: \".concat(xhr.status), xhr);\n            return;\n          }\n\n          var response = JSON.parse(xhr.responseText);\n          cb(null, response);\n        });\n        xhr.addEventListener('error', function () {\n          cb(\"Error. Status code: \".concat(xhr.status), xhr);\n        });\n\n        if (headers) {\n          Object.entries(headers).forEach(function (_ref) {\n            var _ref2 = _slicedToArray(_ref, 2),\n                key = _ref2[0],\n                value = _ref2[1];\n\n            xhr.setRequestHeader(key, value);\n          });\n        }\n\n        xhr.send(JSON.stringify(body));\n      } catch (error) {\n        cb(error);\n      }\n    }\n  };\n} // Init http module\n\n\nvar http = customHttp();\n\nvar newService = function () {\n  var apikey = '582d3ca14bbd4a3d877a5b4bdf891712';\n  var apiUrl = 'https://newsapi.org/v2';\n  return {\n    topHeadLines: function topHeadLines() {\n      var country = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ua';\n      var cb = arguments.length > 1 ? arguments[1] : undefined;\n      http.get(\"\".concat(apiUrl, \"/top-headlines?country=\").concat(country, \"&category=technology&apiKey=\").concat(apikey), cb);\n    },\n    everything: function everything(query, cb) {\n      http.get(\"\".concat(apiUrl, \"/everything?q=\").concat(query, \"&apiKey=\").concat(apikey), cb);\n    }\n  };\n}(); //  init selects\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  M.AutoInit();\n  loadNews();\n}); // Elements\n\nvar forms = document.forms['newsControls'];\nvar countrySelect = forms.elements['country'];\nvar searchInput = forms.elements['search'];\nforms.addEventListener('submit', function (e) {\n  e.preventDefault();\n  loadNews();\n}); // Load news function\n\nfunction loadNews() {\n  showLoader();\n  var country = countrySelect.value;\n  var searchText = searchInput.value;\n\n  if (!searchText) {\n    newService.topHeadLines(country, onGetResponse);\n  } else {\n    newService.everything(searchText, onGetResponse);\n  }\n} // function on get response from service\n\n\nfunction onGetResponse(err, res) {\n  removePreLoader();\n\n  if (err) {\n    showAlert(err, 'error-msg');\n    return;\n  }\n\n  if (!res.articles.length) {\n    showAlert('Таких новостей нет');\n    return;\n  }\n\n  renderNews(res.articles);\n} // Function render News\n\n\nfunction renderNews(news) {\n  var newsContainer = document.querySelector('.news-container .row');\n\n  if (newsContainer.children.length) {\n    clearContainer(newsContainer);\n  }\n\n  var fragment = '';\n  news.forEach(function (newsItem) {\n    var el = newsTemplate(newsItem);\n    fragment += el;\n  });\n  newsContainer.insertAdjacentHTML('afterbegin', fragment);\n} // News Item Template function\n\n\nfunction newsTemplate(_ref3) {\n  var urlToImage = _ref3.urlToImage,\n      title = _ref3.title,\n      url = _ref3.url,\n      description = _ref3.description;\n  return \"\\n  <div class=\\\"col s12\\\"> \\n  <div class=\\\"card\\\">\\n  <div class=\\\"card-image\\\">\\n  <img src=\\\"\".concat(urlToImage, \"\\\">\\n  <span class=\\\"card-title\\\">\").concat(title || '', \"</span>\\n   </div>\\n   <div class=\\\"card-content\\\"> \\n   <p>\").concat(description || '', \"</p>\\n   <div class=\\\"card-action\\\">\\n   <a href=\\\"\").concat(url, \"\\\">Read more</a>\\n   </div>\\n   </div>\\n  </div>\\n  </div>\\n  \");\n}\n\nfunction showAlert(msg) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';\n  M.toast({\n    html: msg,\n    classes: type\n  });\n}\n\nfunction clearContainer(container) {\n  var chaild = container.lastElementChild;\n\n  while (chaild) {\n    container.removeChild(chaild);\n    chaild = container.lastElementChild;\n  }\n}\n\nfunction showLoader() {\n  document.body.insertAdjacentHTML('afterbegin', \" <div class=\\\"progress\\\">\\n  <div class=\\\"indeterminate\\\"></div>\\n</div>\");\n}\n\nfunction removePreLoader() {\n  var loader = document.querySelector('.progress');\n\n  if (loader) {\n    loader.remove();\n  }\n}\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });