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
  !*** ./src/week1/js/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _synth = __webpack_require__(/*! ./synth.js */ 1);
	
	var _synth2 = _interopRequireDefault(_synth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	  function App() {
	    _classCallCheck(this, App);
	
	    this.synth = new _synth2.default();
	    this.synth.start();
	    this.connectToMouse();
	  }
	
	  _createClass(App, [{
	    key: "connectToMouse",
	    value: function connectToMouse() {
	      var element = document.getElementById("AppDiv");
	      this.synth.onMouse(element);
	    }
	  }, {
	    key: "changeFrequency",
	    value: function changeFrequency(value) {
	      this.synth.osc.frequency.value = value;
	    }
	  }, {
	    key: "synth",
	    value: function synth() {
	      return this.synth;
	    }
	  }]);
	
	  return App;
	}();
	
	window.app = new App();

/***/ },
/* 1 */
/*!*******************************!*\
  !*** ./src/week1/js/synth.js ***!
  \*******************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Synth = function () {
	  function Synth() {
	    _classCallCheck(this, Synth);
	
	    var audioContext = window.AudioContext || window.webkitAudioContext;
	    var con = new audioContext();
	    this.osc = con.createOscillator();
	    this.osc.connect(con.destination);
	  }
	
	  _createClass(Synth, [{
	    key: "onMouse",
	    value: function onMouse(object) {
	      var _this = this;
	
	      var fn = function fn(event) {
	        _this.osc.frequency.value = event.clientY;
	      };
	      object.addEventListener("mousemove", fn);
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      this.osc.start();
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	      this.ocs.stop();
	    }
	  }]);
	
	  return Synth;
	}();
	
	exports.default = Synth;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map