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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nclass Controller { \n    constructor() { \n        this.left = false;\n        this.right = false; \n        this.up = false; \n        this.space = false;\n\n        this.inputHandler = this.inputHandler.bind(this);\n\n        document.addEventListener(\"keydown\", () => this.inputHandler(event))\n        document.addEventListener(\"keyup\", () => this.inputHandler(event))\n    }\n\n    inputHandler(event) { \n        let keyState = (event.type == \"keydown\") ? true : false \n        \n        if (event.keyCode === 65) { \n            this.left = keyState;\n        } else if (event.keyCode === 68) { \n            this.right = keyState;\n        } else if (event.keyCode === 87) { \n            this.up = keyState;\n        } else if (event.keyCode === 32) { \n            this.space = keyState;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BladeBoy; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform */ \"./src/platform.js\");\n\n\n\nclass BladeBoy { \n    constructor(canvas) { \n        this.ctx = canvas.getContext(\"2d\");\n        this.dimensions = { width: canvas.width, height: canvas.height }\n        this.lastTime = 0;\n        this.height = canvas.height\n        this.width = canvas.width\n        \n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.height, this.width);\n        this.platform = new _platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.height, this.width);\n\n        this.gameLoop = this.gameLoop.bind(this);\n        this.gameLoop()\n    }\n\n    gameLoop(timeStamp) { \n        let deltaTime = timeStamp - this.lastTime\n        this.lastTime = timeStamp\n\n        // this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n        this.drawBackground(this.ctx)\n        this.player.loop(this.ctx)\n        this.player.draw(this.ctx)\n        this.platform.draw(this.ctx)\n    \n        // console.log(\"hey\")\n        // if (this.getDistance(this.player, this.platform) < )\n\n        requestAnimationFrame(this.gameLoop)\n    }\n\n    drawBackground(ctx) {\n        // ctx.fillStyle = \"skyblue\";\n        // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n        // ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height) // Doesn't work rn\n        this.backgroundImg = new Image();\n        this.backgroundImg.src = \"../assets/background_glacial_mountains.png\";\n        this.backgroundImg.onload = () => {\n            this.ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height);\n            this.ctx.beginPath();\n        }\n    }\n\n    getDistance(obj1, obj2) { // Pythagorean Theroem\n        let xDistance = obj1.x - obj2.x; \n        let yDistance = obj1.y - obj2.y;\n\n        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))\n    }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas) \n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/platform.js":
/*!*************************!*\
  !*** ./src/platform.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Platform; });\nclass Platform { \n    constructor(maxX, maxY) { \n        this.width = 100;\n        this.height = 25;\n        this.x = maxX - this.width - 40;\n        this.y = maxY - this.height - 10;\n\n        this.draw = this.draw.bind(this)\n    }\n\n    draw(ctx) { \n        ctx.fillStyle = \"black\";\n        // ctx.fillRect(this.x, this.y, this.width, this.height)\n        ctx.fillRect(200, 400, this.width, this.height)\n    }\n}\n\n//# sourceURL=webpack:///./src/platform.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\nclass Player { \n    constructor(maxHeight, maxWidth) { \n        this.height = 32;\n        this.jumping = true;\n        this.width = 10;\n        this.x = 144; \n        this.velocityX = 0;\n        this.y = 0; \n        this.velocityY = 0;\n        this.facing = \"right\"\n        this.maxX = maxWidth;\n        this.maxY = maxHeight;\n\n        console.log(this.maxX)\n        console.log(this.maxY)\n\n        this.controller = new _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n        this.loop = this.loop.bind(this);\n    }\n\n    loop(ctx) { \n        if (this.controller.up && !this.jumping) { \n            this.velocityY -= 20;\n            this.jumping = true;\n        }\n\n        if (this.controller.left) { \n            this.velocityX -= 1; // If I just set it equal, it won't ease in\n            this.facing = \"left\";\n        }\n\n        if (this.controller.right) {\n            this.velocityX += 1;\n            this.facing = \"right\";\n        }\n\n        if (this.controller.space) { \n            this.attack(ctx);\n        }\n\n        this.velocityY += 0.7; // gravity\n        this.x += this.velocityX;\n        this.y += this.velocityY;\n        this.velocityX *= 0.8 // friction\n        this.velocityY *= 0.9 // friction\n\n        // if the player is falling below the floor line\n        if (this.y > this.maxY - this.height) { \n            this.jumping = false; \n            this.y = this.maxY - this.height; \n            this.velocityY = 0;\n        }\n\n        // if the player is going off of the screen to the left \n        if (this.x < 0) { \n            this.x = 0;\n        } else if (this.x > this.maxX - this.width) { \n            this.x = this.maxX - this.width;\n        }\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = \"red\";\n        ctx.fillRect(this.x, this.y, this.width, this.height)\n    }\n\n    attack(ctx) { \n        ctx.fillStyle = \"blue\";\n        if (this.facing === \"left\") { \n            ctx.fillRect(this.x, this.y, -20, this.height)\n        } else if (this.facing === \"right\") { \n            ctx.fillRect(this.x + this.width, this.y, 20, this.height)\n        }\n    }\n}\n\n// export default class Player { \n//     constructor(ctx) { \n//         this.width = 10\n//         this.height = 30\n//         this.position = { x: 100, y: 100}\n//         this.speed = 0\n//         this.maxSpeed = 5\n//         this.draw(ctx)\n\n//         // this.zombieImg = new Image();\n//         // this.zombieImg.src = \"./public/images/zombie.png\";\n//         document.addEventListener(\"keydown\", event => {\n//             this.handleInput(event)\n//         })\n\n//         document.addEventListener(\"keyup\", event => {\n//             this.handleRelease(event)\n//         })\n\n//         this.update = this.update.bind(this); \n//         this.handleInput = this.handleInput.bind(this);\n//     }\n\n//     draw(ctx) {\n//         ctx.fillStyle = \"red\";\n//         ctx.fillRect(this.position.x, this.position.y, this.width, this.height)\n//     }\n\n//     update(deltaTime) { \n//         if (!deltaTime) return \n//         // this.position.x += 5 / deltaTime\n//         this.position.x += this.speed;\n\n//         if (this.position.x < 0) this.position.x = 0\n//     }\n\n//     handleInput(event) {\n//         // This switch case doesn't work properly\n//         // switch (event.keyCode) {\n//         //     case 65:\n//         //         this.position.x -= 10 \n//         //     case 68:\n//         //         this.position.x += 10 \n//         //     case 87: \n//         //         this.position.y += 10\n//         //     default:\n//         //         break;\n//         // } \n//         if (event.keyCode === 65) { // a\n//             // this.position.x -= 10 \n//             this.speed = -this.maxSpeed\n//         } else if (event.keyCode === 68) { // d\n//             this.speed = this.maxSpeed \n//         } else if (event.keyCode === 87) { // w\n//             this.position.y -= 10\n//         } \n//     }\n\n//     handleRelease(event) {\n//         if (event.keyCode === 65 || event.keyCode === 68 || event.keyCode === 87) { \n//            this.speed = 0\n//         }\n//     }\n// }\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });