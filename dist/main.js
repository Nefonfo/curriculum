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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _utils_switchMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/switchMode */ \"./src/js/utils/switchMode.js\");\n/* harmony import */ var _utils_buttonMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/buttonMenu */ \"./src/js/utils/buttonMenu.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var switch_mode = new _utils_switchMode__WEBPACK_IMPORTED_MODULE_1__.default(document.documentElement, '.switch-mode', 'dark', 'nfDarkMode');\n  switch_mode.init();\n  new _utils_buttonMenu__WEBPACK_IMPORTED_MODULE_2__.default(document.querySelector('.hamburger'), 'is-active', document.querySelector('#menu-offcanvas'), 'hidden', document.querySelector('#menu-offcanvas-close'));\n});\n\n//# sourceURL=webpack://curriculum_webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/buttonMenu.js":
/*!************************************!*\
  !*** ./src/js/utils/buttonMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ButtonMenu = /*#__PURE__*/function () {\n  function ButtonMenu(button_click, button_active_class, modal, modal_active_class, off_canvas_close) {\n    _classCallCheck(this, ButtonMenu);\n\n    this.button_click = button_click;\n    this.button_active_class = button_active_class;\n    this.modal = modal;\n    this.modal_active_class = modal_active_class;\n    this.off_canvas_close = off_canvas_close;\n    this.init();\n  }\n\n  _createClass(ButtonMenu, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.button_click.addEventListener('click', function () {\n        return _this.toggle_menu();\n      });\n      this.off_canvas_close.addEventListener('click', function () {\n        return _this.toggle_menu();\n      });\n    }\n  }, {\n    key: \"toggle_menu\",\n    value: function toggle_menu() {\n      this.button_click.classList.toggle(this.button_active_class);\n      this.modal.classList.toggle(this.modal_active_class);\n    }\n  }]);\n\n  return ButtonMenu;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonMenu);\n\n//# sourceURL=webpack://curriculum_webpack/./src/js/utils/buttonMenu.js?");

/***/ }),

/***/ "./src/js/utils/switchMode.js":
/*!************************************!*\
  !*** ./src/js/utils/switchMode.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SwitchMode = /*#__PURE__*/function () {\n  function SwitchMode(element_class, element_click, active_class, storage) {\n    _classCallCheck(this, SwitchMode);\n\n    this.element_class = element_class;\n    this.element_click = document.querySelector(element_click);\n    this.active_class = active_class;\n    this.storage = storage;\n    this.active = false;\n  }\n\n  _createClass(SwitchMode, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.active = this.get_storage();\n\n      if (this.active) {\n        this.element_class.classList.add(this.active_class);\n        this.element_class.classList.remove(this.unactive_class);\n        this.element_click.classList.add('justify-end');\n      }\n\n      this.element_click.addEventListener('click', function () {\n        _this.active = !_this.active;\n\n        _this.set_storage(_this.active);\n\n        _this.element_class.classList.toggle(_this.active_class);\n\n        _this.element_click.classList.toggle('justify-end');\n\n        if (_this.active) {}\n      });\n    }\n  }, {\n    key: \"get_storage\",\n    value: function get_storage() {\n      var data;\n\n      try {\n        data = JSON.parse(localStorage.getItem(this.storage));\n      } catch (e) {\n        data = null;\n      }\n\n      if (data === null) {\n        this.set_storage(false);\n      }\n\n      return data;\n    }\n  }, {\n    key: \"set_storage\",\n    value: function set_storage(mode) {\n      localStorage.setItem(this.storage, JSON.stringify(mode));\n    }\n  }]);\n\n  return SwitchMode;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchMode);\n\n//# sourceURL=webpack://curriculum_webpack/./src/js/utils/switchMode.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://curriculum_webpack/./src/css/index.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;