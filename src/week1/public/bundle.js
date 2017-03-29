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
	
	var _lfo = __webpack_require__(/*! ./lfo.js */ 3);
	
	var _lfo2 = _interopRequireDefault(_lfo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	  function App() {
	    _classCallCheck(this, App);
	
	    this.synth = new _synth2.default();
	    this.lfo = new _lfo2.default();
	
	    this.element = document.getElementById("AppDiv");
	    this.element.setAttribute("tabIndex", 1);
	  }
	
	  _createClass(App, [{
	    key: "lfoExample",
	    value: function lfoExample() {
	      this.lfo.start();
	      this.lfo.connectToMouse(this.element);
	    }
	  }, {
	    key: "usingEnvelopes",
	    value: function usingEnvelopes() {
	      this.synth.playSynth(this.element);
	    }
	  }]);
	
	  return App;
	}();
	
	window.app = new App();
	window.app.lfoExample();

/***/ },
/* 1 */
/*!*******************************!*\
  !*** ./src/week1/js/synth.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _base = __webpack_require__(/*! ./base */ 2);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Synth = function (_Base) {
	  _inherits(Synth, _Base);
	
	  function Synth() {
	    _classCallCheck(this, Synth);
	
	    var _this = _possibleConstructorReturn(this, (Synth.__proto__ || Object.getPrototypeOf(Synth)).call(this));
	
	    _this.osc = _this.con.createOscillator();
	    _this.osc.connect(_this.con.destination);
	    return _this;
	  }
	
	  _createClass(Synth, [{
	    key: "connectToMouse",
	    value: function connectToMouse(object) {
	      var _this2 = this;
	
	      var fn = function fn(event) {
	        _this2.osc.frequency.value = event.clientY;
	      };
	      this.onMouse(object, fn);
	    }
	  }, {
	    key: "connectToKeyboard",
	    value: function connectToKeyboard(object) {
	      var _this3 = this;
	
	      var fn = function fn(event) {
	        switch (event.key) {
	          case "z":
	            _this3.osc.frequency.value = 261.63;
	            break;
	          case "x":
	            _this3.osc.frequency.value = 293.66;
	            break;
	          case "c":
	            _this3.osc.frequency.value = 329.63;
	            break;
	          case "v":
	            _this3.osc.frequency.value = 349.23;
	            break;
	        }
	      };
	      this.onKeyDown(object, fn);
	    }
	
	    // using enveloppes version
	
	  }, {
	    key: "playSynth",
	    value: function playSynth(object) {
	      var _this4 = this;
	
	      var fn = function fn(event) {
	        var osc = _this4.con.createOscillator();
	        var amp = _this4.con.createGain();
	        var now = _this4.con.currentTime;
	        amp.gain.value = 0;
	        amp.gain.linearRampToValueAtTime(0.1, now + 2);
	        amp.gain.linearRampToValueAtTime(0, now + 4);
	        osc.frequency.value = Math.random() * 500;
	        osc.connect(amp);
	        osc.type = 'sine';
	        amp.connect(_this4.con.destination);
	        osc.start();
	        osc.stop(now + 4.1);
	      };
	      this.onKeyDown(object, fn);
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
	}(_base2.default);
	
	exports.default = Synth;

/***/ },
/* 2 */
/*!******************************!*\
  !*** ./src/week1/js/base.js ***!
  \******************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Base = function () {
	  function Base() {
	    _classCallCheck(this, Base);
	
	    //nothing to do
	    var audioContext = window.AudioContext || window.webkitAudioContext;
	    this.con = new audioContext();
	  }
	
	  _createClass(Base, [{
	    key: "onMouse",
	    value: function onMouse(object, fn) {
	      object.addEventListener("mousemove", fn);
	    }
	  }, {
	    key: "onKeyDown",
	    value: function onKeyDown(object, fn) {
	      object.addEventListener("keydown", fn);
	    }
	  }]);
	
	  return Base;
	}();
	
	exports.default = Base;

/***/ },
/* 3 */
/*!*****************************!*\
  !*** ./src/week1/js/lfo.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _base = __webpack_require__(/*! ./base */ 2);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LFO = function (_Base) {
	  _inherits(LFO, _Base);
	
	  function LFO() {
	    _classCallCheck(this, LFO);
	
	    var _this = _possibleConstructorReturn(this, (LFO.__proto__ || Object.getPrototypeOf(LFO)).call(this));
	
	    _this.osc = _this.con.createOscillator();
	    var lfo = _this.con.createOscillator();
	    var lfo_amp = _this.con.createGain();
	
	    lfo_amp.gain.value = 200;
	
	    lfo.connect(lfo_amp);
	    lfo_amp.connect(_this.osc.frequency);
	    _this.osc.connect(_this.con.destination);
	
	    _this.osc.frequency.value = 300;
	    lfo.frequency.value = 0.5;
	
	    lfo.start();
	    return _this;
	  }
	
	  _createClass(LFO, [{
	    key: "connectToMouse",
	    value: function connectToMouse(object) {
	      var _this2 = this;
	
	      var fn = function fn(event) {
	        _this2.osc.frequency.value = event.clientX;
	      };
	      this.onMouse(object, fn);
	    }
	  }, {
	    key: "connectToKeyboard",
	    value: function connectToKeyboard(object) {
	      var _this3 = this;
	
	      var fn = function fn(event) {
	        switch (event.key) {
	          case "z":
	            _this3.osc.frequency.value = 261.63;
	            break;
	          case "x":
	            _this3.osc.frequency.value = 293.66;
	            break;
	          case "c":
	            _this3.osc.frequency.value = 329.63;
	            break;
	          case "v":
	            _this3.osc.frequency.value = 349.23;
	            break;
	        }
	      };
	      this.onKeyDown(object, fn);
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
	
	  return LFO;
	}(_base2.default);
	
	exports.default = LFO;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map