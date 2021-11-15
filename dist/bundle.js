/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Class"] = factory();
	else
		root["Class"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body{\\n    margin: 0;\\n    padding: 0;\\n    height: 100vh;\\n    width: 100vw;\\n}\\n.menu-place-ships{\\n    width: 100%;\\n    height: 100%;\\n    margin: auto;\\n    position: fixed;\\n    z-index: 1;\\n    background-color: rgb(0,0,0);\\n    background-color: rgba(0, 0, 0, 0.767); \\n}\\n.menu-place-content{\\n    width: 45%;\\n    height: 50%;\\n    padding: 25px;\\n    margin: 15% auto;\\n    background-color: rgb(72, 58, 204);\\n    border-radius: 2px;\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n    display: flex;\\n    flex-direction: row;\\n    gap: 5px;\\n}\\n.ls-mp{\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n    column-gap: 2px;\\n    row-gap: 2px;\\n    width: 60%;\\n    height: 100%;\\n}\\n.rs-mp{\\n    width: 40%;\\n    height: 100%;\\n    font-family: 'Roboto', sans-serif;\\n    font-weight: 400;\\n    font-size: 25px;\\n    color: white;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    gap: 10%;\\n    align-items: center;\\n}\\n.rs-mp div.title{\\n}\\n.rs-mp div div{\\n    display: flex;\\n    flex-direction: row;\\n    gap: 10%;\\n    font-size: 20px;\\n}\\n.content{\\n    display: flex;\\n    flex-direction: column;\\n    height: 100vh;\\n    width: 100vw;\\n    background-color: rgb(36, 36, 36);\\n    margin: 0;\\n    padding: 0;\\n    gap: 5%;\\n}\\n.header{\\n    width: 100%;\\n    background-color: rgb(224, 224, 224);\\n    height: 100px;\\n}\\n.header h1{\\n    font-family: 'Roboto', sans-serif;\\n    padding: 20px;\\n    color:rgba(2, 0, 0, 0.705);\\n    margin: 0;\\n    text-align: center;\\n}\\n.main-gameboard{\\n    height: 100%;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 1%;\\n}\\n.gameboards{\\n    width: 500px;\\n    height: 500px;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n    column-gap: 2px;\\n    row-gap: 2px;\\n}\\n.individual-gameboard{\\n    width: 40%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    margin-bottom: 50px;\\n}\\n.individual-gameboard h3{\\n    font-family: 'Roboto', sans-serif;\\n    color: whitesmoke;\\n    font-size: 35px;\\n    margin-bottom: 25px;\\n    padding: 0;\\n}\\n.info-cells{\\n    width: 10%;\\n    color: white;\\n    font-family: 'Roboto', sans-serif;\\n}\\n.info-cells ul{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    align-items: flex-start;\\n    list-style-type: none;\\n}\\n.info-cells li{\\n    margin-bottom: 15px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.info-cells li div{\\n    width: 25px;\\n    height: 25px;\\n    margin-right: 10px;\\n}\\n.cell{\\n    border: 1px solid white;\\n}\\n.cell-computer{\\n    border: 1px solid white;\\n    cursor: inherit;\\n}\\n.missed-cell{\\n    background-color: rgb(145, 38, 38);\\n}\\n.hit-cell{\\n    background-color: rgb(168, 168, 168);\\n}\\n.hit-forbidden{\\n    cursor: not-allowed !important;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Class/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Class/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Class/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Class/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Class/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Render\": () => (/* binding */ Render)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* eslint-disable no-plusplus */\n\n\n\n\nclass Render {\n  static renderGameboards() {\n    const { gameBoard } = _game__WEBPACK_IMPORTED_MODULE_2__.gameboardHuman;\n    const divHuman = document.getElementById('gameboard-human');\n    const divComputer = document.getElementById('gameboard-computer');\n    for (let i = 0; i < gameBoard.length; i++) {\n      for (let j = 0; j < gameBoard[i].length; j++) {\n        const cellHuman = document.createElement('div');\n        const cellComputer = document.createElement('div');\n        cellHuman.setAttribute('player', _game__WEBPACK_IMPORTED_MODULE_2__.gameboardHuman.player);\n        cellHuman.setAttribute('y-position', i);\n        cellHuman.setAttribute('x-position', j);\n\n        cellComputer.setAttribute('player', _game__WEBPACK_IMPORTED_MODULE_2__.gameboardComputer.player);\n        cellComputer.setAttribute('y-position', i);\n        cellComputer.setAttribute('x-position', j);\n\n        cellComputer.addEventListener('click', (e) => this.inputAttack(e));\n\n        cellHuman.classList.add('cell');\n        cellComputer.classList.add('cell-computer');\n\n        divHuman.appendChild(cellHuman);\n        divComputer.appendChild(cellComputer);\n      }\n    }\n  }\n\n  static inputAttack(e) {\n    const cellClicked = e.target;\n    const yPosition = cellClicked.getAttribute('y-position');\n    const xPosition = cellClicked.getAttribute('x-position');\n    if (\n      typeof _game__WEBPACK_IMPORTED_MODULE_2__.gameboardComputer.gameBoard[yPosition][xPosition] === 'string' ||\n      _game__WEBPACK_IMPORTED_MODULE_2__.gameboardComputer.gameBoard[yPosition][xPosition] === 0\n    ) {\n      _game__WEBPACK_IMPORTED_MODULE_2__.humanPlayer.attackEnemy(yPosition, xPosition, _game__WEBPACK_IMPORTED_MODULE_2__.gameboardComputer);\n      _game__WEBPACK_IMPORTED_MODULE_2__.computerPlayer.randomMove(_game__WEBPACK_IMPORTED_MODULE_2__.gameboardHuman);\n    }\n  }\n\n  static changeColorMissed(xPosition, yPosition, gameBoard) {\n    const cellClicked = document.querySelector(\n      `[x-position=\"${xPosition}\"][y-position=\"${yPosition}\"][player=\"${gameBoard}\"]`\n    );\n    cellClicked.classList.add('missed-cell');\n  }\n\n  static changeColorHit(xPosition, yPosition, gameBoard) {\n    const cellClicked = document.querySelector(\n      `[x-position=\"${xPosition}\"][y-position=\"${yPosition}\"][player=\"${gameBoard}\"]`\n    );\n    cellClicked.classList.add('hit-cell');\n  }\n\n  static menuPlaceShips() {\n    const shipsInfo = [\n      { type: 'carrier', length: 5, align: 'vertical' },\n      { type: 'battleship', length: 4, align: 'vertical' },\n      { type: 'destroyer', length: 3, align: 'vertical' },\n      { type: 'submarine', length: 3, align: 'vertical' },\n      { type: 'patrol', length: 2, align: 'vertical' },\n    ];\n    const { gameBoard } = _game__WEBPACK_IMPORTED_MODULE_2__.gameboardHuman;\n    const divGameboard = document.getElementById('copy-gameboard');\n    const buttonChangeAlign = document.getElementById('change-align');\n    buttonChangeAlign.addEventListener('click', () => this.changeAlign(shipsInfo));\n    for (let i = 0; i < gameBoard.length; i++) {\n      for (let j = 0; j < gameBoard[i].length; j++) {\n        const cell = document.createElement('div');\n        cell.setAttribute('y-position', i);\n        cell.setAttribute('x-position', j);\n        cell.classList.add('cell-computer');\n        cell.addEventListener('mouseover', (e) => this.mouseOverPlacing(e, shipsInfo));\n        cell.addEventListener('mouseleave', (e) => this.mouseLeavePlacing(e, shipsInfo));\n\n        divGameboard.appendChild(cell);\n      }\n    }\n  }\n\n  static changeAlign(shipsInfo) {\n    if (shipsInfo[0].align === 'vertical') {\n      shipsInfo[0].align = 'horizontal';\n    } else {\n      shipsInfo[0].align = 'vertical';\n    }\n  }\n\n  static mouseOverPlacing(e, shipsInfo) {\n    // Get the gameboard and if its set up to vertical or horizontal, take ship's length and\n    // make a for loop (X or Y)  to get the div and change color\n    console.log(e);\n    console.log(shipsInfo);\n    console.log(shipsInfo);\n    const shipLength = shipsInfo[0].length;\n    let xPosition = Number(e.target.getAttribute('x-position'));\n    let yPosition = Number(e.target.getAttribute('y-position'));\n    for (let i = 0; i < shipLength; i++) {\n      console.log(yPosition);\n      const cellHover = document.querySelector(\n        `[x-position=\"${xPosition}\"][y-position=\"${yPosition}\"]`\n      );\n      if (xPosition < 10 && yPosition < 10) {\n        if (shipsInfo[0].align === 'vertical') {\n          yPosition += 1;\n        } else {\n          xPosition += 1;\n        }\n        cellHover.classList.toggle('hit-cell');\n      } else {\n        const divGameboard = document.getElementById('copy-gameboard')\n        divGameboard.classList.add('hit-forbidden');\n        console.log(divGameboard)\n      }\n    }\n  }\n\n  static mouseLeavePlacing(e, shipsInfo) {\n    const shipLength = shipsInfo[0].length;\n    let xPosition = Number(e.target.getAttribute('x-position'));\n    let yPosition = Number(e.target.getAttribute('y-position'));\n    for (let i = 0; i < shipLength; i++) {\n      const cellHover = document.querySelector(\n        `[x-position=\"${xPosition}\"][y-position=\"${yPosition}\"]`\n      );\n      if (cellHover !== null) {\n        if (shipsInfo[0].align === 'vertical') {\n          yPosition += 1;\n        } else {\n          xPosition += 1;\n        }\n        cellHover.classList.toggle('hit-cell');\n      } else {\n        const divGameboard = document.getElementById('copy-gameboard')\n        \n        divGameboard.classList.toggle('hit-forbidden');\n        console.log(divGameboard)\n      }\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://Class/./src/dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initGame\": () => (/* binding */ initGame),\n/* harmony export */   \"humanPlayer\": () => (/* binding */ humanPlayer),\n/* harmony export */   \"computerPlayer\": () => (/* binding */ computerPlayer),\n/* harmony export */   \"gameboardHuman\": () => (/* binding */ gameboardHuman),\n/* harmony export */   \"gameboardComputer\": () => (/* binding */ gameboardComputer),\n/* harmony export */   \"gameEnd\": () => (/* binding */ gameEnd)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\nconst humanPlayer = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('human');\nconst computerPlayer = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('computer');\n\nconst gameboardHuman = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard('human');\nconst gameboardComputer = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard('computer');\n\ngameboardHuman.placeShip('carrier', 0, 0, 'vertical')\ngameboardHuman.placeShip('battleship', 1, 0, 'vertical')\n\ngameboardComputer.placeShip('battleship', 1, 0, 'vertical')\ngameboardComputer.placeShip('carrier', 0, 0, 'vertical')\n\nfunction initGame() {\n  _dom__WEBPACK_IMPORTED_MODULE_2__.Render.renderGameboards();\n}\nfunction gameEnd(loser){\n  alert(`The loser is: ${loser}`)\n}\n\n\n\n\n//# sourceURL=webpack://Class/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* eslint-disable eqeqeq */\n/* eslint-disable no-param-reassign */\n/* eslint-disable no-plusplus */\n\n\n\n\nclass Gameboard {\n  constructor(player) {\n    this.player = player;\n    this.gameBoard = [\n      // States: 0 - empty, 1 - already attacked\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    ];\n    this.ships = [];\n    this.missedShots = [];\n  }\n\n  placeShip(typeShip, xPosition, yPosition, align) {\n    let length;\n    // eslint-disable-next-line default-case\n    switch (typeShip) {\n      case 'carrier':\n        length = 5;\n        break;\n\n      case 'battleship':\n        length = 4;\n        break;\n\n      case 'destroyer':\n        length = 3;\n        break;\n\n      case 'submarine':\n        length = 3;\n        break;\n\n      case 'patrol':\n        length = 2;\n        break;\n    }\n    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(length);\n    ship.type = typeShip;\n    ship.coordinates = [];\n    this.ships.push(ship);\n    // Add placement possible\n    if (align === 'vertical') {\n      for (let i = 0; i < length; i++) {\n        ship.coordinates.push({ row: yPosition, column: xPosition });\n        this.gameBoard[yPosition][xPosition] = typeShip;\n        yPosition += 1;\n      }\n    } else if (align === 'horizontal') {\n      for (let i = 0; i < length; i++) {\n        ship.coordinates.push({ row: yPosition, column: xPosition });\n        this.gameBoard[yPosition][xPosition] = typeShip;\n        xPosition += 1;\n      }\n    }\n    return this.gameBoard;\n  }\n\n  receiveAttack(yPosition, xPosition) {\n    if (this.checkPositionAttacked(yPosition, xPosition) === true) {\n      if (typeof this.gameBoard[yPosition][xPosition] === 'string') {\n        const typeShip = this.gameBoard[yPosition][xPosition];\n        const ship = this.ships.find((element) => element.type === typeShip);\n        \n        const positionHit = ship.coordinates.findIndex(\n          (coordinate) => coordinate.row == yPosition && coordinate.column == xPosition\n        );\n        console.log(positionHit)\n        this.gameBoard[yPosition][xPosition] = 1\n        ship.isHit(positionHit);\n      }\n      this.allShipsSunk();\n      _dom__WEBPACK_IMPORTED_MODULE_2__.Render.changeColorHit(xPosition, yPosition, this.player)\n    }else{\n      this.gameBoard[yPosition][xPosition] = 1\n      this.missedShots.push({ row: yPosition, column: xPosition });\n\n      _dom__WEBPACK_IMPORTED_MODULE_2__.Render.changeColorMissed(xPosition, yPosition, this.player)\n    }\n  }\n\n  checkPositionAttacked(yPosition, xPosition) {\n    if (this.gameBoard[yPosition][xPosition] == 0){\n      return false\n    }\n      return true;\n\n  }\n\n  allShipsSunk() {\n    const allIsSunk = this.ships.every((ship) => ship.sunk === true);\n    if(allIsSunk === true){\n      (0,_game__WEBPACK_IMPORTED_MODULE_1__.gameEnd)(this.player)\n    }\n    return allIsSunk;\n  }\n}\n\n\n// eslint-disable-next-line no-undef\n// module.exports = Gameboard;\n\n\n//# sourceURL=webpack://Class/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n(0,_game__WEBPACK_IMPORTED_MODULE_0__.initGame)();\n_dom__WEBPACK_IMPORTED_MODULE_1__.Render.menuPlaceShips();\n\n//# sourceURL=webpack://Class/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* eslint-disable class-methods-use-this */\n\n\nclass Player {\n  constructor(playerName) {\n    this.playerName = playerName;\n  }\n\n  attackEnemy(yPosition, xPosition, enemyGameboard) {\n    if(enemyGameboard.receiveAttack(yPosition, xPosition)){return true}\n    return false;\n  }\n\n  randomMove(enemyGameboard) {\n    const min = 0;\n    const max = 10;\n\n    const yPosition = Math.floor(Math.random() * (max - min) + min);\n    const xPosition = Math.floor(Math.random() * (max - min) + min);\n\n    if (enemyGameboard.gameBoard[yPosition][xPosition] === 1) {\n      this.randomMove(enemyGameboard);\n    } else {\n      this.attackEnemy(yPosition, xPosition, enemyGameboard);\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://Class/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = [];\n    this.sunk = false;\n  }\n\n  isHit(number) {\n    // isHit from GameBoard, loop through the array hits. if reaches de maximum, call isSunk, if the hits array it's smaller than the length of the boat, its not sunk\n    if (!this.hits.includes(number)){\n      this.hits.push(number);\n      console.log(this.hits)\n    }\n    \n    this.isSunk()\n  }\n\n  isSunk() {\n      if (this.hits.length === this.length){\n        this.sunk = true\n        console.log(`The ship it's sunk? ${this.sunk}`)\n        return this.isSunk\n      }\n  }\n}\n\n\n\n// eslint-disable-next-line import/prefer-default-export\n\n// module.exports = Ship;\n\n\n//# sourceURL=webpack://Class/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});