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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* eslint-disable no-param-reassign */\n/* eslint-disable no-plusplus */\n\n\nclass Gameboard {\n  constructor() {\n    this.gameBoard = [\n      // States: 0 - empty, 1 - ship, 2 - hit, 3 - missed\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    ];\n    this.ships = [];\n  }\n\n  placeShip(typeShip, xPosition, yPosition, align) {\n    let length;\n    // eslint-disable-next-line default-case\n    switch (typeShip) {\n      case 'carrier':\n        length = 5;\n        break;\n\n      case 'battleship':\n        length = 4;\n        break;\n\n      case 'destroyer':\n        length = 3;\n        break;\n\n      case 'submarine':\n        length = 3;\n        break;\n\n      case 'patrol':\n        length = 2;\n        break;\n    }\n    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(length);\n    ship.type = typeShip;\n    ship.coordinates = []\n    this.ships.push(ship);\n    console.log(this.ships);\n    if (align === 'vertical') {\n      for (let i = 0; i < length; i++) {\n        ship.coordinates.push({'row': yPosition, 'column': xPosition})\n        this.gameBoard[yPosition][xPosition] = typeShip;\n        yPosition += 1;\n        console.table(this.gameBoard);\n      }\n    } else if (align === 'horizontal') {\n      for (let i = 0; i < length; i++) {\n        ship.coordinates.push({'row': yPosition, 'column': xPosition})\n        this.gameBoard[yPosition][xPosition] = typeShip;\n        xPosition += 1;\n        console.table(this.gameBoard);\n      }\n    }\n    return this.gameBoard;\n  }\n\n  receiveAttack(xPosition, yPosition) {\n    if (this.gameBoard[yPosition][xPosition] !== 0) {\n      const typeShip = this.gameBoard[yPosition][xPosition];\n\n      const ship = this.ships.find((element) => element.type === typeShip);\n\n      this.ships[0].isHit(1);\n      console.log(ship);\n    }\n  }\n}\n\n\n// eslint-disable-next-line no-undef\n// module.exports = Gameboard;\n\n\n//# sourceURL=webpack://Class/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\n\nwindow.gameBoard = _gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard\nwindow.ship = _ship__WEBPACK_IMPORTED_MODULE_0__.Ship\n\n//# sourceURL=webpack://Class/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = [];\n  }\n\n  isHit(number) {\n    // isHit from GameBoard, loop through the array hits. if reaches de maximum, call isSunk, if the hits array it's smaller than the length of the boat, its not sunk\n    if (!this.hits.includes(number)){\n      this.hits.push(number);\n    }\n    return this\n  }\n\n  isSunk() {\n      if (this.hits.length === this.length){\n        return true;\n      }\n  }\n}\n\n\n\n// eslint-disable-next-line import/prefer-default-export\n\n// module.exports = Ship;\n\n\n//# sourceURL=webpack://Class/./src/ship.js?");

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
/******/ 			// no module.id needed
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