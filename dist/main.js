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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BladeBoy; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform */ \"./src/platform.js\");\n\n\n\nclass BladeBoy { \n    constructor(canvas, sound, muteButton) { \n        this.ctx = canvas.getContext(\"2d\");\n        this.dimensions = { width: canvas.width, height: canvas.height }\n        this.lastTime = 0;\n        this.height = canvas.height\n        this.width = canvas.width\n\n        this.muteButton = muteButton;\n        this.sound = sound;\n        this.soundFlag = true;\n        this.muteButton.addEventListener(\"click\", () => { \n            this.musicHandler()\n        })\n        \n        this.platforms = [\n            // x, y, width, height\n            new _platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"](200, 425, 100, 25, this.height, this.width),\n            new _platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"](350, 425, 100, 25, this.height, this.width),\n            new _platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"](100, 475, 100, 25, this.height, this.width) \n        ];\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.height, this.width, this.platforms);\n\n        this.gameLoop = this.gameLoop.bind(this);\n        this.gameLoop()\n    }\n\n    gameLoop(timeStamp) { \n        let deltaTime = timeStamp - this.lastTime\n        this.lastTime = timeStamp\n\n        // this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height); // For some reason this breaks the background\n        this.drawBackground(this.ctx)\n        this.player.loop(this.ctx)\n        this.player.draw(this.ctx)\n        for (let i = 0; i < this.platforms.length; i++) { \n            let platform = this.platforms[i]\n            platform.draw(this.ctx)\n        }\n\n        if (this.soundFlag) { \n            this.sound.play();\n            this.sound.volume = 0.25;\n        } else if (!this.soundFlag) { \n            this.sound.pause();\n        }\n\n        requestAnimationFrame(this.gameLoop)\n    }\n\n    drawBackground(ctx) {\n        this.backgroundImg = new Image();\n        this.backgroundImg.src = \"./assets/background_glacial_mountains.png\";\n        this.backgroundImg.onload = () => {\n            this.ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height);\n            // this.ctx.beginPath();\n        }\n    }\n\n    musicHandler() { \n        if (this.soundFlag) { \n            this.soundFlag = false;\n        } else if (!this.soundFlag) { \n            this.soundFlag = true\n        }\n    }\n\n    getDistance(obj1, obj2) { // Pythagorean Theroem\n        let xDistance = obj1.x - obj2.x; \n        let yDistance = obj1.y - obj2.y;\n\n        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))\n    }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    const sound = document.getElementById(\"sound\");\n    const muteButton = document.getElementById(\"mute-button\")\n    new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, sound, muteButton) \n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/platform.js":
/*!*************************!*\
  !*** ./src/platform.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Platform; });\nclass Platform { \n    constructor(x, y, width, height, maxX, maxY, player) { \n        this.width = width;\n        this.height = height;\n        // this.x = maxX - this.width - 40;\n        // this.y = maxY - this.height - 10;\n        this.x = x; // Left\n        this.y = y; // Top\n        this.right = this.x + this.width\n        this.bottom = this.y + this.height\n\n        console.log(this.x, this.right, this.y, this.bottom)\n\n        this.draw = this.draw.bind(this)\n    }\n\n    draw(ctx) { \n        // ctx.fillStyle = \"black\";\n        // // ctx.fillRect(this.x, this.y, this.width, this.height)\n        // ctx.fillRect(this.x, this.y, this.width, this.height)\n        this.platformImg = new Image();\n        this.platformImg.src = \"./assets/Tilemap.png\";\n        this.platformImg.onload = () => {\n            ctx.drawImage(this.platformImg, 0, 0, 8, 8, this.x, this.y, this.width, this.height)\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/platform.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\nclass Player { \n    constructor(maxHeight, maxWidth, platforms, ctx) { \n        this.height = 32;\n        this.width = 10;\n        // this.height = 100;\n        // this.width = 100;\n\n        this.x = 144; // Left\n        this.velocityX = 0;\n        this.y = 0; // Top\n        this.velocityY = 0;\n\n        this.facing = \"right\"\n        this.right;\n        this.bottom;\n\n        this.ol; \n        this.or;\n        this.ot;\n        this.ob;\n\n        this.maxX = maxWidth;\n        this.maxY = maxHeight;\n        this.platforms = platforms // When I have more platforms, the game is going to pass in an array of them\n\n        this.jumping = true;\n        \n        this.attacked = false;\n        this.attackDelay = 15;\n        this.attackFrame = 0;\n\n        this.controller = new _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n        this.loop = this.loop.bind(this);\n        this.collidedWith = this.collidedWith.bind(this)\n        this.setBottom = this.setBottom.bind(this)\n        this.setRight = this.setRight.bind(this)\n        this.draw = this.draw.bind(this);\n    }\n\n    loop(ctx) { \n        this.setBottom()\n        this.setRight()\n        // this.setCenter()\n\n        // Movement\n        if (this.controller.up && !this.jumping) { \n            this.velocityY -= 20;\n            this.jumping = true;\n        }\n\n        if (this.controller.left) { \n            this.velocityX -= 1; // If I just set it equal, it won't ease in\n            this.facing = \"left\";\n        }\n\n        if (this.controller.right) {\n            this.velocityX += 1;\n            this.facing = \"right\";\n        }\n        \n        this.velocityY += 0.7; // gravity\n        this.x += this.velocityX;\n        this.y += this.velocityY;\n        this.velocityX *= 0.8 // friction\n        this.velocityY *= 0.9 // friction\n\n        // if the player is falling below the floor line\n        if (this.y > this.maxY - this.height) { \n            this.jumping = false; \n            this.y = this.maxY - this.height; \n            this.velocityY = 0;\n        }\n\n        // if the player is going off of the screen to the left \n        if (this.x < 0) { \n            this.x = 0;\n        } else if (this.x > this.maxX - this.width) { \n            this.x = this.maxX - this.width;\n        }\n\n        // Attack Logic\n        if (this.controller.space && (this.attacked === false)) {\n            this.attack(ctx);\n            this.attacked = true\n            this.attackFrame += 1\n        }\n\n        if (this.attackFrame === this.attackDelay) {\n            this.attackFrame = 0;\n            this.attacked = false;\n        }\n\n        if (this.attacked === true) {\n            this.attackFrame += 1\n        }\n\n        // Checking if I'm hitting a platform\n        this.collidedWith(this.platforms)\n\n        // Set the old dimensions to the current dimensions\n        this.ol = this.x;\n        this.or = this.right; \n        this.ot = this.y; \n        this.ob = this.bottom;\n    }\n\n    draw(ctx) {\n        // ctx.fillStyle = \"red\";\n        // ctx.fillRect(this.x, this.y, this.width, this.height)\n        // console.log(this.width, this.height)\n        this.playerImg = new Image();\n        this.playerImg.src = \"./assets/adventurer-v1.5-Sheet.png\"\n        this.playerImg.onload = () => {\n            ctx.drawImage(this.playerImg, 13, 0, 20, 37, this.x, this.y, this.width, this.height);\n        }\n    }\n\n    attack(ctx) {\n        ctx.fillStyle = \"blue\";\n        if (this.facing === \"left\") { \n            ctx.fillRect(this.x, this.y, -20, this.height)\n        } else if (this.facing === \"right\") { \n            ctx.fillRect(this.x + this.width, this.y, 20, this.height)\n        }\n    }\n\n    setBottom() { \n        this.bottom = this.y + this.height\n    }\n\n    setRight() { \n        this.right = this.x + this.width\n    }\n\n    collidedWith(platforms) { \n        for (let i = 0; i < platforms.length; i++) { \n            let platform = platforms[i];\n\n            // I don't understand this line, but I understand everything else\n            if (this.y > platform.bottom || this.bottom < platform.y || this.x > platform.right || this.right < platform.x) continue;\n\n            if (this.y <= platform.bottom && this.ot >= platform.bottom) {\n                this.y = platform.bottom\n                this.velocityY = 0;\n            } else if (this.bottom >= platform.y && this.ob <= platform.y) {\n                this.y = platform.y - this.height;\n                this.velocityY = 0; // Set the gravity to 0, or else it will look like the player is stuttering\n                this.jumping = false;\n            } else if (this.x <= platform.right && this.ol >= platform.right) {\n                this.x = platform.right\n            } else if (this.right >= platform.x && this.or <= platform.x) {\n                this.x = platform.x - this.width;\n                // this.right = this.x; // Prevents it from stuttering, but gets stuck to the wall. I already tried setting velocityX to 0 too.\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });