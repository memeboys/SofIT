/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/src/main.ts":
/*!****************************!*\
  !*** ./server/src/main.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ \"ws\");\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_getMockVehicleTrafficEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getMockVehicleTrafficEntry */ \"./server/src/utils/getMockVehicleTrafficEntry.ts\");\n/* harmony import */ var _utils_delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/delay */ \"./server/src/utils/delay.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _a;\r\n\r\n\r\n\r\nvar PORT = Number((_a = process.env[\"PORT\"]) !== null && _a !== void 0 ? _a : 8080);\r\nvar server = new ws__WEBPACK_IMPORTED_MODULE_0__.Server({ port: PORT });\r\nserver.on(\"connection\", function (socket) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var isClosed, entry;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                isClosed = false;\r\n                socket.on(\"close\", function () { return isClosed = true; });\r\n                _a.label = 1;\r\n            case 1:\r\n                if (!!isClosed) return [3 /*break*/, 3];\r\n                entry = (0,_utils_getMockVehicleTrafficEntry__WEBPACK_IMPORTED_MODULE_1__.getMockVehicleTrafficEntry)();\r\n                socket.send(JSON.stringify(entry));\r\n                return [4 /*yield*/, (0,_utils_delay__WEBPACK_IMPORTED_MODULE_2__.delay)(500)];\r\n            case 2:\r\n                _a.sent();\r\n                return [3 /*break*/, 1];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n\n\n//# sourceURL=webpack://my-app/./server/src/main.ts?");

/***/ }),

/***/ "./server/src/utils/delay.ts":
/*!***********************************!*\
  !*** ./server/src/utils/delay.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delay\": () => (/* binding */ delay)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nfunction delay(timeout) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, timeout); })];\r\n                case 1:\r\n                    _a.sent();\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://my-app/./server/src/utils/delay.ts?");

/***/ }),

/***/ "./server/src/utils/getMockVehicleTrafficEntry.ts":
/*!********************************************************!*\
  !*** ./server/src/utils/getMockVehicleTrafficEntry.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMockVehicleTrafficEntry\": () => (/* binding */ getMockVehicleTrafficEntry)\n/* harmony export */ });\nvar vehicleColors = [\r\n    \"black\", \"white\", \"red\", \"green\", \"blue\", \"yellow\", \"silver\"\r\n];\r\nvar vehicleClasses = [\r\n    \"car\", \"truck\", \"bus\", \"motorcycle\"\r\n];\r\nfunction getMockVehicleTrafficEntry() {\r\n    return {\r\n        deviceId: getRandomId(),\r\n        timestamp: Math.trunc(Date.now() / 1000),\r\n        color: getRandomElement(vehicleColors),\r\n        class: getRandomElement(vehicleClasses),\r\n        plate: getRandomPlate(),\r\n        speed: getRandomSpeed()\r\n    };\r\n}\r\nfunction getRandomSpeed() {\r\n    var min = 100;\r\n    var max = 250;\r\n    return getRandomInt(min, max);\r\n}\r\nfunction getRandomPlate() {\r\n    return \"X000XX000\"\r\n        .replace(\"X\", getRandomChar())\r\n        .replace(\"000\", getRandomInt(0, 999).toString().padStart(3, \"0\"))\r\n        .replace(\"X\", getRandomChar())\r\n        .replace(\"X\", getRandomChar())\r\n        .replace(\"000\", getRandomInt(0, 999).toString().padStart(3, \"0\"));\r\n}\r\nfunction getRandomId() {\r\n    return getRandomInt().toString();\r\n}\r\nfunction getRandomChar() {\r\n    var min = 65;\r\n    var max = 90;\r\n    var code = getRandomInt(min, max);\r\n    return String.fromCharCode(code);\r\n}\r\nfunction getRandomInt(min, max) {\r\n    if (min === void 0) { min = 0; }\r\n    if (max === void 0) { max = Number.MAX_SAFE_INTEGER; }\r\n    if (min > max) {\r\n        throw new Error(\"Min value should be less than max value!\");\r\n    }\r\n    return Math.floor(Math.random() * (max - min + 1)) + min;\r\n}\r\nfunction getRandomElement(array) {\r\n    if (array.length === 0) {\r\n        throw new Error(\"Array should not be empty!\");\r\n    }\r\n    var index = getRandomInt(0, array.length - 1);\r\n    return array[index];\r\n}\r\n\n\n//# sourceURL=webpack://my-app/./server/src/utils/getMockVehicleTrafficEntry.ts?");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("ws");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./server/src/main.ts");
/******/ 	
/******/ })()
;