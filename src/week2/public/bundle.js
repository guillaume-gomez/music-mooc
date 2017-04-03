/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************!*\
  !*** ./src/week2/js/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _week = __webpack_require__(/*! ./week2 */ 1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function App() {
	  _classCallCheck(this, App);
	
	  (0, _week.connnectToUi)();
	};
	
	window.app = new App();

/***/ },
/* 1 */
/*!*******************************!*\
  !*** ./src/week2/js/week2.js ***!
  \*******************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.connectToMouse = connectToMouse;
	exports.connectToKeyboard = connectToKeyboard;
	exports.connnectToUi = connnectToUi;
	var audio_context = window.AudioContext || window.webkitAudioContext;
	
	var con = exports.con = new audio_context();
	
	function connectToMouse(object, osc) {
	  var fn = function fn(event) {
	    osc.frequency.value = event.clientY;
	  };
	  object.addEventListener("mousedown", fn);
	}
	
	function connectToKeyboard(object, osc) {
	  var fn = function fn(event) {
	    switch (event.key) {
	      case "z":
	        osc.frequency.value = 261.63;
	        break;
	      case "x":
	        osc.frequency.value = 293.66;
	        break;
	      case "c":
	        osc.frequency.value = 329.63;
	        break;
	      case "v":
	        osc.frequency.value = 349.23;
	        break;
	    }
	  };
	  object.addEventListener("keydown", fn);
	}
	
	function connnectToUi() {
	  var osc = con.createOscillator();
	  osc.connect(con.destination);
	  osc.start();
	
	  var midiToFreq = function midiToFreq(midiValue) {
	    var midiToFreq = {
	      60: 261.63,
	      61: 277.18,
	      62: 293.66,
	      63: 311.13
	    };
	    if (!midiToFreq[midiValue]) {
	      return midiToFreq[60];
	    }
	    return midiToFreq[midiValue];
	  };
	
	  var keyboardChanged = function keyboardChanged(data) {
	    osc.frequency.value = midiToFreq(data.note);
	  };
	
	  var slider1Changed = function slider1Changed(data) {
	    osc.frequency.value = data.value;
	  };
	  //on page loaded
	  nx.onload = function () {
	    nx.widgets.slider1.on('*', slider1Changed);
	    nx.widgets.keyboard1.on('*', keyboardChanged);
	  };
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map