module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.presentr = function (elemId, slides, color) {
	  if (elemId && slides) {
	    document.body.style.cssText = 'background-color: ' + (color || '#E71D36') + '; margin: 0; overflow: hidden';
	    return _reactDom2.default.render(_react2.default.createElement(_App2.default, { slides: slides }), document.getElementById(elemId));
	  }

	  if (!elemId) throw "You need to specify an element id.";
	  if (!slides || slides.length === 0) throw "You need to specify at least one slide.";
	}; /**
	    * presentr | index.js
	    *
	    * @author Kelvin De Moya <http://github.com/kdemoya>.
	    */

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _redux = __webpack_require__(7);

	var _slides = __webpack_require__(8);

	var slidesReducer = _interopRequireWildcard(_slides);

	var _PresentationContainer = __webpack_require__(10);

	var _PresentationContainer2 = _interopRequireDefault(_PresentationContainer);

	var _Presentation = __webpack_require__(11);

	var _Presentation2 = _interopRequireDefault(_Presentation);

	var _Speaker = __webpack_require__(29);

	var _Speaker2 = _interopRequireDefault(_Speaker);

	var _DevTools = __webpack_require__(26);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(30); /**
	                                                             * presentr | App.jsx
	                                                             *
	                                                             * @author Kelvin De Moya <http://github.com/kdemoya>.
	                                                             */

	var App = function App(_ref) {
	  var slides = _ref.slides;

	  var preloadedState = {
	    slides: slides,
	    currentSlide: slides.slide1,
	    step: 1,
	    totalSlides: Object.keys(slides).length,
	    counter: 0
	  };

	  var store = (0, _redux.createStore)(slidesReducer.default, preloadedState, _DevTools2.default.instrument());

	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(
	      _reactRouter.Router,
	      { history: _reactRouter.browserHistory },
	      _react2.default.createElement(_reactRouter.Route, { path: '/speaker', component: (0, _PresentationContainer2.default)(_Speaker2.default) }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/', component: (0, _PresentationContainer2.default)(_Presentation2.default) })
	    )
	  );
	};

	exports.default = App;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * presentr | slides.js
	                                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                                   * @author Kelvin De Moya <http://github.com/kdemoya>.
	                                                                                                                                                                                                                                                                   */

	exports.default = slides;

	var _slide = __webpack_require__(9);

	/**
	 * Finds the next slide to show, based on requested slide number.
	 *
	 * @param {Object} state       - App's current state.
	 * @param {String} slideNumber - Requested slide number.
	 * @returns {Object} Returns the correct slide.
	 */
	function getSlide(state, slideNumber) {
	  var slideKey = 'slide' + slideNumber;
	  var requestedSlide = state.slides[slideKey];

	  if (!requestedSlide) {
	    console.err(slideKey + ' not found.');
	    return state;
	  }

	  return _extends({}, state, { currentSlide: requestedSlide, step: slideNumber });
	}

	/**
	 * Reducer - this part is in charge of changing the global state
	 * of our app whenever we fire a Redux action.
	 *
	 * @param {Object} state  - App's current state.
	 * @param {String} action - Fired action.
	 * @returns {Object} Returns the app's new state.
	 */
	function slides(state, action) {
	  switch (action.type) {
	    case _slide.GET_SLIDE:
	      return getSlide(state, action.slideNumber);
	    case _slide.INCREASE_COUNTER:
	      return _extends({}, state, { counter: state.counter + 1 });
	    case _slide.DECREASE_COUNTER:
	      return _extends({}, state, { counter: state.counter - 1 });
	    default:
	      return state;
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSlide = getSlide;
	exports.increaseCounter = increaseCounter;
	exports.decreaseCounter = decreaseCounter;
	/**
	 * presentr | slide.js
	 *
	 * @author Kelvin De Moya <http://github.com/kdemoya>.
	 */

	var GET_SLIDE = exports.GET_SLIDE = 'GET_SLIDE';
	var INCREASE_COUNTER = exports.INCREASE_COUNTER = 'INCREASE_COUNTER';
	var DECREASE_COUNTER = exports.DECREASE_COUNTER = 'DECREASE_COUNTER';

	/**
	 * Fires a "GET_SLIDE" action.
	 *
	 * @param {Number} slideNumber - Requested slide.
	 * @returns {Object} Redux action.
	 */
	function getSlide(slideNumber) {
	  return {
	    type: GET_SLIDE,
	    slideNumber: slideNumber
	  };
	}

	/**
	 * Fires a "INCREASE_COUNTER" action.
	 *
	 * @returns {Object} Redux action.
	 */
	function increaseCounter() {
	  return {
	    type: INCREASE_COUNTER
	  };
	}

	/**
	 * Fires a "DECREASE_COUNTER" action.
	 *
	 * @returns {Object} Redux action.
	 */
	function decreaseCounter() {
	  return {
	    type: DECREASE_COUNTER
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(7);

	var _reactRedux = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _slide = __webpack_require__(9);

	var slideActions = _interopRequireWildcard(_slide);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * presentr | PresentationContainer.js
	 *
	 * @author Kelvin De Moya <http://github.com/kdemoya>.
	 */

	function mapStateToProps(state) {
	  return {
	    currentSlide: state.currentSlide,
	    totalSlides: state.totalSlides,
	    step: state.step,
	    counter: state.counter
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(slideActions, dispatch)
	  };
	}

	var container = function container(Component) {
	  return (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Component));
	};

	exports.default = container;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAnime = __webpack_require__(12);

	var _reactAnime2 = _interopRequireDefault(_reactAnime);

	var _SimpleSlide = __webpack_require__(13);

	var _SimpleSlide2 = _interopRequireDefault(_SimpleSlide);

	var _ImageSlide = __webpack_require__(17);

	var _ImageSlide2 = _interopRequireDefault(_ImageSlide);

	var _ListImageSlide = __webpack_require__(18);

	var _ListImageSlide2 = _interopRequireDefault(_ListImageSlide);

	var _ListSlide = __webpack_require__(20);

	var _ListSlide2 = _interopRequireDefault(_ListSlide);

	var _CounterSlide = __webpack_require__(21);

	var _CounterSlide2 = _interopRequireDefault(_CounterSlide);

	var _CodeSlide = __webpack_require__(22);

	var _CodeSlide2 = _interopRequireDefault(_CodeSlide);

	var _QuoteSlide = __webpack_require__(24);

	var _QuoteSlide2 = _interopRequireDefault(_QuoteSlide);

	var _VideoSlide = __webpack_require__(25);

	var _VideoSlide2 = _interopRequireDefault(_VideoSlide);

	var _DevTools = __webpack_require__(26);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * presentr | Presentation.jsx
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Kelvin De Moya <http://github.com/kdemoya>.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var styles = {};

	var Presentation = function (_Component) {
	  _inherits(Presentation, _Component);

	  function Presentation() {
	    _classCallCheck(this, Presentation);

	    return _possibleConstructorReturn(this, (Presentation.__proto__ || Object.getPrototypeOf(Presentation)).apply(this, arguments));
	  }

	  _createClass(Presentation, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      this.goToSlide(1);
	      document.addEventListener('keydown', function (e) {
	        return _this2.handleKeyboardEvent(e);
	      }, false);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var step = newProps.step;

	      localStorage.setItem('CURRENT_SLIDE', step);
	    }

	    /**
	     * Generate an object with the slides container styles.
	     *
	     * @returns {Object} Objeto de estilo | Style object.
	     */

	  }, {
	    key: 'getContainerStyle',
	    value: function getContainerStyle() {
	      var background = this.props.currentSlide.background;


	      return {
	        display: 'flex',
	        backgroundImage: background && 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\'' + background + '\')',
	        backgroundSize: 'cover',
	        flexDirection: 'column',
	        justifyContent: 'center',
	        textAlign: 'center',
	        width: '100vw',
	        height: '100vh'
	      };
	    }

	    /**
	     * Navigates to the slide belonging to the received number.
	     *
	     * @param {Number} slideNumber - Número del slide requerido | Requested slide number.
	     */

	  }, {
	    key: 'goToSlide',
	    value: function goToSlide(slideNumber) {
	      var _props = this.props,
	          totalSlides = _props.totalSlides,
	          actions = _props.actions;


	      if (slideNumber > 0 && slideNumber <= totalSlides) {
	        actions.getSlide(slideNumber);
	      }
	    }

	    /**
	     * Use arrow keys to navigate through the slides.
	     *
	     * @param {Object} event - Evento keydown | keydown event.
	     */

	  }, {
	    key: 'handleKeyboardEvent',
	    value: function handleKeyboardEvent(event) {
	      var step = this.props.step;


	      if (event.key === 'ArrowRight') {
	        this.goToSlide(step + 1);
	      } else if (event.key === 'ArrowLeft') {
	        this.goToSlide(step - 1);
	      }
	    }

	    /**
	     * Returns the component needed to render the current slide,
	     * based on its type.
	     *
	     * @param {Object} currentSlide - Slide actual | Current slide.
	     * @returns {Object} Componente React | React component.
	     */

	  }, {
	    key: 'renderSlide',
	    value: function renderSlide(currentSlide) {
	      var _props2 = this.props,
	          counter = _props2.counter,
	          actions = _props2.actions;


	      switch (currentSlide.type) {
	        case 'simple':
	          return _react2.default.createElement(_SimpleSlide2.default, { slide: currentSlide });
	        case 'image':
	          return _react2.default.createElement(_ImageSlide2.default, { slide: currentSlide });
	        case 'listImage':
	          return _react2.default.createElement(_ListImageSlide2.default, { slide: currentSlide });
	        case 'list':
	          return _react2.default.createElement(_ListSlide2.default, { slide: currentSlide });
	        case 'counter':
	          return _react2.default.createElement(_CounterSlide2.default, { counter: counter, actions: actions });
	        case 'code':
	          return _react2.default.createElement(_CodeSlide2.default, { slide: currentSlide, counter: counter, actions: actions });
	        case 'quote':
	          return _react2.default.createElement(_QuoteSlide2.default, { slide: currentSlide });
	        case 'video':
	          return _react2.default.createElement(_VideoSlide2.default, { slide: currentSlide });
	        default:
	          return _react2.default.createElement(
	            'div',
	            null,
	            'Oops...'
	          );
	      }
	    }

	    /**
	     * Part of a React's component lifecycle, this method is called
	     * to render our component.
	     *
	     * @returns {Object} Componente React | React component.
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var currentSlide = this.props.currentSlide;


	      return _react2.default.createElement(
	        'div',
	        { style: this.getContainerStyle() },
	        _react2.default.createElement(_DevTools2.default, null),
	        _react2.default.createElement(
	          _reactAnime2.default,
	          {
	            easing: 'linear',
	            duration: 125,
	            direction: 'alternate',
	            scale: [1, 1.025]
	          },
	          _react2.default.createElement(
	            'div',
	            { style: Object.assign(styles.base, Presentation.getContentStyle(currentSlide.type)) },
	            this.renderSlide(currentSlide)
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'getContentStyle',

	    /**
	     * Generate an object with the slides content styles,
	     * based on the current slide type.
	     *
	     * @returns {Object} Style object.
	     */
	    value: function getContentStyle(type) {
	      return styles[type];
	    }
	  }]);

	  return Presentation;
	}(_react.Component);

	Presentation.propTypes = {
	  currentSlide: _react.PropTypes.shape({
	    type: _react.PropTypes.string.isRequired,
	    background: _react.PropTypes.string
	  }).isRequired,
	  actions: _react.PropTypes.shape({
	    getSlide: _react.PropTypes.func.isRequired,
	    increaseCounter: _react.PropTypes.func.isRequired,
	    decreaseCounter: _react.PropTypes.func.isRequired
	  }).isRequired,
	  totalSlides: _react.PropTypes.number.isRequired,
	  counter: _react.PropTypes.number,
	  step: _react.PropTypes.number.isRequired
	};

	styles = {
	  base: {
	    width: '50vw',
	    margin: '0 auto'
	  },
	  simple: {
	    overflow: 'hidden'
	  },
	  quote: {
	    overflow: 'visible'
	  }
	};

	exports.default = Presentation;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("react-anime");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(14);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Header = __webpack_require__(15);

	var _Header2 = _interopRequireDefault(_Header);

	var _SubHeader = __webpack_require__(16);

	var _SubHeader2 = _interopRequireDefault(_SubHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * presentr | SimpleSlide.jsx
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Kelvin De Moya <http://github.com/kdemoya>.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SimpleSlide = function (_Component) {
	  _inherits(SimpleSlide, _Component);

	  function SimpleSlide() {
	    _classCallCheck(this, SimpleSlide);

	    return _possibleConstructorReturn(this, (SimpleSlide.__proto__ || Object.getPrototypeOf(SimpleSlide)).apply(this, arguments));
	  }

	  _createClass(SimpleSlide, [{
	    key: 'render',
	    value: function render() {
	      var _props$slide = this.props.slide,
	          header = _props$slide.header,
	          subHeader = _props$slide.subHeader,
	          headerFit = _props$slide.headerFit;


	      return _react2.default.createElement(
	        'div',
	        null,
	        SimpleSlide.renderHeader(header, headerFit),
	        subHeader && _react2.default.createElement(
	          _SubHeader2.default,
	          null,
	          subHeader
	        )
	      );
	    }
	  }], [{
	    key: 'renderHeader',

	    /**
	     * Returns one or several Header components with the received text.
	     *
	     * @param {Text|Array<Text>} header - Header's text(s).
	     * @param {Boolean} fit             - Fill container size?
	     * @returns {Object} React component.
	     */
	    value: function renderHeader(header, fit) {
	      if (_lodash2.default.isArray(header)) {
	        return _lodash2.default.map(header, function (singleHeader) {
	          return _react2.default.createElement(
	            _Header2.default,
	            { fit: fit },
	            singleHeader
	          );
	        });
	      }

	      return _react2.default.createElement(
	        _Header2.default,
	        { fit: fit },
	        header
	      );
	    }
	  }]);

	  return SimpleSlide;
	}(_react.Component);

	SimpleSlide.propTypes = {
	  slide: _react.PropTypes.shape({
	    header: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]).isRequired,
	    subHeader: _react.PropTypes.string,
	    headerFit: _react.PropTypes.bool
	  }).isRequired
	};

	exports.default = SimpleSlide;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * presentr | Header.jsx
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Kelvin De Moya <http://github.com/kdemoya>.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Header = function (_Component) {
	  _inherits(Header, _Component);

	  function Header(props) {
	    _classCallCheck(this, Header);

	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  /**
	   * Part of a React's component lifecycle, this method is called
	   * just after our component renders.
	   */


	  _createClass(Header, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.resizeText();
	      window.addEventListener('resize', this.resizeText());
	    }

	    /**
	     * Generate an object with our header styles.
	     *
	     * @returns {Object} Style object.
	     */

	  }, {
	    key: 'getHeaderStyle',
	    value: function getHeaderStyle() {
	      var scale = this.state.scale;
	      var fit = this.props.fit;


	      return {
	        color: '#FBFFFE',
	        fontSize: !fit ? 80 : 22,
	        textTransform: 'uppercase',
	        fontFamily: 'sans-serif',
	        margin: '0',
	        transform: !fit ? 'scale(1)' : 'scale(' + scale + ')',
	        transformOrigin: 'center top'
	      };
	    }

	    /**
	     * Generate an object with the header container styles.
	     *
	     * @returns {Object} Objeto de estilo | Style object.
	     */

	  }, {
	    key: 'getContainerStyle',
	    value: function getContainerStyle() {
	      var height = this.state.height;


	      return {
	        display: 'block',
	        width: '100%',
	        height: height
	      };
	    }

	    /**
	     * Adjust text size based on "fit" prop.
	     */

	  }, {
	    key: 'resizeText',
	    value: function resizeText() {
	      var fit = this.props.fit;


	      if (!fit) {
	        return;
	      }

	      var textRef = this.text;
	      var containerRef = this.container;
	      textRef.style.display = 'inline-block';
	      var scale = containerRef.offsetWidth / textRef.offsetWidth;
	      var height = textRef.offsetHeight * scale;
	      textRef.style.display = 'block';

	      this.setState({ scale: scale, height: height });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var children = this.props.children;


	      return _react2.default.createElement(
	        'div',
	        { style: this.getContainerStyle(), ref: function ref(c) {
	            _this2.container = c;
	          } },
	        _react2.default.createElement(
	          'h1',
	          { style: this.getHeaderStyle(), ref: function ref(c) {
	              _this2.text = c;
	            } },
	          children
	        )
	      );
	    }
	  }]);

	  return Header;
	}(_react.Component);

	Header.propTypes = {
	  fit: _react2.default.PropTypes.bool,
	  children: _react2.default.PropTypes.node.isRequired
	};

	exports.default = Header;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = {}; /**
	                  * presentr | SubHeader.jsx
	                  *
	                  * @author Kelvin De Moya <http://github.com/kdemoya>.
	                  */

	var SubHeader = function SubHeader(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'h2',
	    { style: styles.subHeader },
	    children
	  );
	};

	SubHeader.propTypes = {
	  children: _react.PropTypes.node.isRequired
	};

	styles = {
	  subHeader: {
	    color: '#FBFFFE',
	    fontSize: '40px',
	    textTransform: 'uppercase',
	    fontFamily: 'sans-serif',
	    margin: '0'
	  }
	};

	exports.default = SubHeader;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(15);

	var _Header2 = _interopRequireDefault(_Header);

	var _SubHeader = __webpack_require__(16);

	var _SubHeader2 = _interopRequireDefault(_SubHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = {}; /**
	                  * presentr | ImageSlide.jsx
	                  *
	                  * @author Kelvin De Moya <http://github.com/kdemoya>.
	                  */

	var ImageSlide = function ImageSlide(props) {
	  var _props$slide = props.slide,
	      image = _props$slide.image,
	      header = _props$slide.header,
	      subHeader = _props$slide.subHeader,
	      headerFit = _props$slide.headerFit;


	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('img', { style: styles.image, src: image, alt: '' }),
	    header && _react2.default.createElement(
	      _Header2.default,
	      { fit: headerFit },
	      header
	    ),
	    subHeader && _react2.default.createElement(
	      _SubHeader2.default,
	      null,
	      subHeader
	    )
	  );
	};

	ImageSlide.propTypes = {
	  slide: _react.PropTypes.shape({
	    header: _react.PropTypes.string,
	    subHeader: _react.PropTypes.string,
	    image: _react.PropTypes.string.isRequired,
	    headerFit: _react.PropTypes.bool
	  }).isRequired
	};

	styles = {
	  image: {
	    maxWidth: '100%',
	    maxHeight: '510px',
	    marginBottom: '20px'
	  }
	};

	exports.default = ImageSlide;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(15);

	var _Header2 = _interopRequireDefault(_Header);

	var _SubHeader = __webpack_require__(16);

	var _SubHeader2 = _interopRequireDefault(_SubHeader);

	var _List = __webpack_require__(19);

	var _List2 = _interopRequireDefault(_List);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * presentr | ListImageSlide.jsx
	 *
	 * @author Kelvin De Moya <http://github.com/kdemoya>.
	 */

	var styles = {};

	var ListImageSlide = function ListImageSlide(props) {
	  var _props$slide = props.slide,
	      header = _props$slide.header,
	      subHeader = _props$slide.subHeader,
	      image = _props$slide.image,
	      headerFit = _props$slide.headerFit,
	      list = _props$slide.list;


	  return _react2.default.createElement(
	    'div',
	    null,
	    header && _react2.default.createElement(
	      _Header2.default,
	      { fit: headerFit },
	      header
	    ),
	    subHeader && _react2.default.createElement(
	      _SubHeader2.default,
	      null,
	      subHeader
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.wrapper },
	      _react2.default.createElement(
	        'div',
	        { style: styles.imageWrapper },
	        _react2.default.createElement('img', { style: styles.image, src: image, alt: '' })
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: styles.listWrapper },
	        _react2.default.createElement(_List2.default, { list: list })
	      )
	    )
	  );
	};

	ListImageSlide.propTypes = {
	  slide: _react.PropTypes.shape({
	    header: _react.PropTypes.string.isRequired,
	    subHeader: _react.PropTypes.string.isRequired,
	    image: _react.PropTypes.string.isRequired,
	    headerFit: _react.PropTypes.bool,
	    list: _react.PropTypes.array
	  }).isRequired
	};

	styles = {
	  wrapper: {
	    display: 'flex',
	    flexDirection: 'row',
	    flexWrap: 'no-wrap',
	    marginTop: '40px'
	  },
	  image: {
	    maxWidth: '20vw'
	  },
	  imageWrapper: {
	    alignSelf: 'center'
	  },
	  listWrapper: {
	    display: 'flex',
	    flexGrow: 1,
	    alignSelf: 'center',
	    marginLeft: '40px'
	  }
	};

	exports.default = ListImageSlide;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(14);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * presentr | List.jsx
	 *
	 * @author Kelvin De Moya <http://github.com/kdemoya>.
	 */

	var styles = {};

	var List = function List(_ref) {
	  var list = _ref.list;
	  return _react2.default.createElement(
	    'ul',
	    { style: styles.list },
	    _lodash2.default.map(list, function (item) {
	      return _react2.default.createElement(
	        'li',
	        null,
	        item
	      );
	    })
	  );
	};

	List.propTypes = {
	  list: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired
	};

	styles = {
	  list: {
	    fontSize: 40,
	    color: '#FFFFFF',
	    textAlign: 'left'
	  }
	};

	exports.default = List;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(15);

	var _Header2 = _interopRequireDefault(_Header);

	var _List = __webpack_require__(19);

	var _List2 = _interopRequireDefault(_List);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ListSlide = function ListSlide(props) {
	  var _props$slide = props.slide,
	      header = _props$slide.header,
	      list = _props$slide.list;


	  return _react2.default.createElement(
	    'div',
	    null,
	    header && _react2.default.createElement(
	      _Header2.default,
	      null,
	      header
	    ),
	    _react2.default.createElement(_List2.default, { list: list })
	  );
	}; /**
	    * presentr | ListSlide.jsx
	    *
	    * @author Kelvin De Moya <http://github.com/kdemoya>.
	    */

	ListSlide.propTypes = {
	  slide: _react.PropTypes.shape({
	    header: _react.PropTypes.string.isRequired,
	    list: _react.PropTypes.array
	  }).isRequired
	};

	exports.default = ListSlide;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * presentr | CounterSlide.jsx
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Kelvin De Moya <http://github.com/kdemoya>.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var styles = {};

	var CounterSlide = function (_Component) {
	  _inherits(CounterSlide, _Component);

	  function CounterSlide() {
	    _classCallCheck(this, CounterSlide);

	    return _possibleConstructorReturn(this, (CounterSlide.__proto__ || Object.getPrototypeOf(CounterSlide)).apply(this, arguments));
	  }

	  _createClass(CounterSlide, [{
	    key: 'handleClick',


	    /**
	     * Handles the click event of the buttons in our counter,
	     * and decides if the counter should increase or decrease.
	     *
	     * @param {String} type - Action to execute.
	     */
	    value: function handleClick(type) {
	      var actions = this.props.actions;


	      switch (type) {
	        case 'increase':
	          actions.increaseCounter();
	          return;
	        case 'decrease':
	          actions.decreaseCounter();
	          return;
	        default:
	          return;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          counter = _props.counter,
	          dim = _props.dim;


	      return _react2.default.createElement(
	        'div',
	        { style: dim === 'both' ? styles.dim : {} },
	        _react2.default.createElement(
	          'span',
	          { style: Object.assign({}, styles.number, dim === 'counter' ? styles.dim : {}) },
	          counter
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: dim === 'controls' ? styles.dim : {} },
	          _react2.default.createElement(
	            'button',
	            { style: styles.button, onClick: function onClick() {
	                return _this2.handleClick('increase');
	              } },
	            '+'
	          ),
	          _react2.default.createElement(
	            'button',
	            { style: styles.button, onClick: function onClick() {
	                return _this2.handleClick('decrease');
	              } },
	            '-'
	          )
	        )
	      );
	    }
	  }]);

	  return CounterSlide;
	}(_react.Component);

	CounterSlide.propTypes = {
	  actions: _react.PropTypes.shape({
	    increaseCounter: _react.PropTypes.func.isRequired,
	    decreaseCounter: _react.PropTypes.func.isRequired
	  }).isRequired,
	  counter: _react2.default.PropTypes.number.isRequired,
	  dim: _react2.default.PropTypes.string
	};

	styles = {
	  dim: {
	    opacity: 0.4
	  },
	  number: {
	    display: 'block',
	    fontSize: '50vh',
	    lineHeight: '40vh',
	    color: '#ffffff'
	  },
	  button: {
	    width: '100px',
	    height: '40px',
	    border: '0',
	    borderRadius: '5px',
	    backgroundColor: '#ffffff',
	    fontSize: 30,
	    paddingTop: 0,
	    margin: '0 5px',
	    outline: 'none'
	  }
	};

	exports.default = CounterSlide;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactHighlight = __webpack_require__(23);

	var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

	var _CounterSlide = __webpack_require__(21);

	var _CounterSlide2 = _interopRequireDefault(_CounterSlide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = {}; /**
	                  * presentr | CodeSlide.jsx
	                  *
	                  * @author Kelvin De Moya <http://github.com/kdemoya>.
	                  */

	var CodeSlide = function CodeSlide(_ref) {
	  var slide = _ref.slide,
	      actions = _ref.actions,
	      counter = _ref.counter;
	  return _react2.default.createElement(
	    'div',
	    { style: styles.codeWrapper },
	    actions && _react2.default.createElement(
	      'div',
	      { style: styles.counter },
	      _react2.default.createElement(_CounterSlide2.default, { counter: counter, actions: actions, dim: slide.dim })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.code },
	      _react2.default.createElement(
	        _reactHighlight2.default,
	        { className: 'javascript' },
	        slide.code
	      )
	    )
	  );
	};

	CodeSlide.propTypes = {
	  slide: _react.PropTypes.shape({
	    dim: _react.PropTypes.string,
	    code: _react.PropTypes.string
	  }).isRequired,
	  actions: _react.PropTypes.shape({
	    increaseCounter: _react.PropTypes.func.isRequired,
	    decreaseCounter: _react.PropTypes.func.isRequired
	  }).isRequired,
	  counter: _react.PropTypes.number
	};

	styles = {
	  codeWrapper: {
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	    textAlign: 'left',
	    fontSize: 24
	  },
	  counter: {
	    textAlign: 'center'
	  }
	};

	exports.default = CodeSlide;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("react-highlight");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = {}; /**
	                  * presentr | QuoteSlide.jsx
	                  *
	                  * @author Kelvin De Moya <http://github.com/kdemoya>.
	                  */

	var QuoteSlide = function QuoteSlide(props) {
	  var _props$slide = props.slide,
	      image = _props$slide.image,
	      quote = _props$slide.quote,
	      author = _props$slide.author;


	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { style: styles.wrapper },
	      _react2.default.createElement(
	        'div',
	        { style: styles.quote },
	        image && _react2.default.createElement('img', { style: styles.image, src: image, alt: '' }),
	        '\u201C',
	        quote,
	        '\u201D',
	        _react2.default.createElement(
	          'div',
	          { style: styles.author },
	          '- ',
	          author
	        )
	      )
	    )
	  );
	};

	QuoteSlide.propTypes = {
	  slide: _react.PropTypes.shape({
	    quote: _react.PropTypes.string.isRequired,
	    author: _react.PropTypes.string.isRequired,
	    image: _react.PropTypes.string.isRequired
	  }).isRequired
	};

	styles = {
	  image: {
	    maxWidth: '200px',
	    borderRadius: '100px',
	    position: 'absolute',
	    top: '-130px',
	    left: '18vw'
	  },
	  quote: {
	    backgroundColor: '#ffd8dd',
	    fontSize: '40px',
	    fontFamily: 'sans-serif',
	    maxWidth: '50vw',
	    margin: '0 auto',
	    padding: '60px 80px',
	    borderRadius: '15px',
	    position: 'relative',
	    color: '#e71d36'
	  },
	  author: {
	    position: 'absolute',
	    right: '20px',
	    bottom: '20px',
	    fontWeight: 'bold',
	    textDecoration: 'underline',
	    fontStyle: 'italic',
	    fontSize: '18px'
	  }
	};

	exports.default = QuoteSlide;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = {}; /**
	                  * presentr | VideoSlide.jsx
	                  *
	                  * @author Kelvin De Moya <http://github.com/kdemoya>.
	                  */

	var VideoSlide = function VideoSlide(props) {
	  var source = props.slide.source;


	  return _react2.default.createElement(
	    'video',
	    { controls: true, style: styles.video },
	    _react2.default.createElement('source', { src: source, type: 'video/mp4' })
	  );
	};

	styles = {
	  video: {
	    maxHeight: '95vh'
	  }
	};

	VideoSlide.propTypes = {
	  slide: _react.PropTypes.shape({
	    source: _react.PropTypes.string.isRequired
	  }).isRequired
	};

	exports.default = VideoSlide;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(27);

	var _reduxDevtoolsDockMonitor = __webpack_require__(28);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-q',
	  defaultIsVisible: false
	})); /**
	      * presentr | DevTools.jsx
	      *
	      * @author Kelvin De Moya <http://github.com/kdemoya>.
	      */

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAnime = __webpack_require__(12);

	var _reactAnime2 = _interopRequireDefault(_reactAnime);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * presentr | Speaker.jsx
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Kelvin De Moya <http://github.com/kdemoya>.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var styles = {};

	var Speaker = function (_Component) {
	  _inherits(Speaker, _Component);

	  function Speaker() {
	    _classCallCheck(this, Speaker);

	    return _possibleConstructorReturn(this, (Speaker.__proto__ || Object.getPrototypeOf(Speaker)).apply(this, arguments));
	  }

	  _createClass(Speaker, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      window.addEventListener('storage', function (e) {
	        return _this2.handleSlideChange(e);
	      });
	    }

	    /**
	     * Handles the changes of the browser's local storage,
	     * which are triggered by out main component (Presentation.jsx),
	     * updates the current state based on the last value saved to the local storage.
	     *
	     * @param {String} event - Local storage's slide.
	     */

	  }, {
	    key: 'handleSlideChange',
	    value: function handleSlideChange(event) {
	      var actions = this.props.actions;
	      var newValue = event.newValue;


	      actions.getSlide(parseInt(newValue, 10));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          currentSlide = _props.currentSlide,
	          step = _props.step,
	          totalSlides = _props.totalSlides;


	      return _react2.default.createElement(
	        'div',
	        { style: styles.container },
	        _react2.default.createElement(
	          'div',
	          { style: styles.text },
	          _react2.default.createElement(
	            _reactAnime2.default,
	            {
	              easing: 'linear',
	              duration: 125,
	              direction: 'alternate',
	              scale: [1, 1.025]
	            },
	            _react2.default.createElement(
	              'span',
	              { style: styles.progress },
	              step,
	              '/',
	              totalSlides
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.notes },
	              currentSlide.notes || 'There are no notes for this slide.'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Speaker;
	}(_react.Component);

	Speaker.propTypes = {
	  currentSlide: _react.PropTypes.shape({
	    notes: _react.PropTypes.string.isRequired
	  }).isRequired,
	  actions: _react.PropTypes.shape({
	    getSlide: _react.PropTypes.func.isRequired
	  }).isRequired,
	  totalSlides: _react.PropTypes.number.isRequired,
	  step: _react.PropTypes.number.isRequired
	};

	styles = {
	  container: {
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	    justifyContent: 'center',
	    height: '100vh',
	    textAlign: 'center',
	    backgroundColor: '#011627'
	  },
	  text: {
	    color: '#FFFFFF',
	    fontSize: 72
	  },
	  notes: {
	    fontSize: 24,
	    margin: '40px',
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center',
	    height: '20vh',
	    width: '50vw',
	    padding: '30px',
	    borderTop: '1px solid #FFFFFF',
	    borderBottom: '1px solid #FFFFFF'
	  },
	  progress: {
	    position: 'absolute',
	    right: 50,
	    top: 50
	  }
	};

	exports.default = Speaker;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./monokai.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./monokai.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports


	// module
	exports.push([module.id, "/*\nMonokai style - ported by Luigi Maselli - http://grigio.org\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #272822; color: #ddd;\n}\n\n.hljs-tag,\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-strong,\n.hljs-name {\n  color: #f92672;\n}\n\n.hljs-code {\n  color: #66d9ef;\n}\n\n.hljs-class .hljs-title {\n  color: white;\n}\n\n.hljs-attribute,\n.hljs-symbol,\n.hljs-regexp,\n.hljs-link {\n  color: #bf79db;\n}\n\n.hljs-string,\n.hljs-bullet,\n.hljs-subst,\n.hljs-title,\n.hljs-section,\n.hljs-emphasis,\n.hljs-type,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-tag,\n.hljs-template-variable {\n  color: #a6e22e;\n}\n\n.hljs-comment,\n.hljs-quote,\n.hljs-deletion,\n.hljs-meta {\n  color: #75715e;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-doctag,\n.hljs-title,\n.hljs-section,\n.hljs-type,\n.hljs-selector-id {\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 32 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);