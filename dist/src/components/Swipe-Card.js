"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSwipeableCards = require("react-swipeable-cards");

var _Instructions = _interopRequireDefault(require("./Instructions"));

var _Score = _interopRequireDefault(require("./Score"));

var d3 = _interopRequireWildcard(require("d3"));

var _data = _interopRequireDefault(require("./../data/data.csv"));

var _levels = _interopRequireDefault(require("./../data/levels.csv"));

var _confettiJs = _interopRequireDefault(require("confetti-js"));

var _LevelUp = _interopRequireDefault(require("./LevelUp"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dataset = [];
var game_levels = [];
var wrapperStyle = {
  backgroundColor: "transparent",
  width: "100%",
  height: "70vh",
  marginBottom: "5%",
  border: "none"
};
var colors = ["f15a22", "ab4a9c", "0083ca", "2e3192", "ff4469", "6279ff", "ffcbb5", "998783", "edb86c", "ed6d6c", "4bba8d", "a0597e", "b3e1ed", "19c2ed", "54ceed", "22c1c3", "fdbb2d"];

var SwipeCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SwipeCard, _React$Component);

  function SwipeCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SwipeCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SwipeCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: [],
      score: 0,
      current_badge: "",
      next_badge: "",
      color: "linear-gradient(73deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
    });

    return _this;
  }

  _createClass(SwipeCard, [{
    key: "onSwipe",
    value: function onSwipe(data) {}
  }, {
    key: "onSwipeRight",
    value: function onSwipeRight(data) {
      var points = Math.floor(Math.random() * 100) + 20;
      this.setState({
        score: this.state.score += points
      });
      var random_color1 = Math.floor(Math.random() * colors.length) + 0;
      var random_color2 = Math.floor(Math.random() * colors.length) + 0;
      var new_color = "linear-gradient(73deg, #" + colors[random_color1] + " 0%, #" + colors[random_color2] + " 100%)";
      this.setState({
        color: new_color
      });
      var counter = this.state.score;
      console.log(counter);
      var filteredLevels = game_levels.filter(function (x) {
        return counter >= x.points;
      });
      var maxPoint = Math.max.apply(Math, filteredLevels.map(function (p) {
        return p.points;
      }));
      var current_level = filteredLevels.find(function (y) {
        return y.points >= maxPoint;
      });
      current_level = current_level.badge;
      this.setState({
        current_badge: current_level
      });
      var current_level_index = game_levels.findIndex(function (d) {
        return d.badge === current_level;
      });
      var next_level = game_levels[current_level_index + 1]['badge'];
      this.setState({
        next_badge: next_level
      });
      console.log(this.state.current_badge, this.state.next_badge);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.current_badge !== this.state.current_badge) {
        // show popup
        var popup = document.querySelector('.popup');
        var next = document.querySelector('.continue');
        var lightbox = document.querySelector('.lightbox');
        popup.style.display = "flex";
        lightbox.style.display = "block"; // play confetti

        var confettiSettings = {
          target: 'confetti'
        };
        var confetti = new _confettiJs.default(confettiSettings);
        var confetti_canvas = document.querySelector('#confetti');
        confetti_canvas.style.zIndex = "200";
        confetti.render(); // clear alerts

        next.onclick = function () {
          lightbox.style.display = "none";
          confetti_canvas.style.zIndex = "0";
          confetti.clear();
          popup.style.display = "none";
        };
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var random;
      var self = this;

      function shuffle(array) {
        array.sort(function () {
          return Math.random() - 0.5;
        });
      }

      d3.csv(_data.default).then(function (data) {
        dataset.push(data);
        dataset = dataset[0];
        shuffle(dataset);
        random = Math.floor(Math.random() * data.length) + 0;
        self.setState({
          data: data[random]
        });
      });

      function callback(data) {
        this.setState({
          data: data[random]
        });
      }

      d3.csv(_data.default).then(callback.bind(this));
      d3.csv(_levels.default).then(function (data) {
        game_levels.push(data);
        game_levels = game_levels[0];

        _this2.setState({
          current_badge: data[0]['badge']
        });

        _this2.setState({
          next_badge: data[1]['badge']
        });
      });
    }
  }, {
    key: "renderCards",
    value: function renderCards() {
      var _this3 = this;

      var self = this;
      var cardStyle = {
        backgroundColor: "#f2f2f2",
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5%",
        background: this.state.color,
        color: "white",
        height: "60%",
        borderRadius: "1em",
        fontSize: "2em",
        fontFamily: "Helvetica-Neue, sans-serif",
        fontWeight: "800"
      };

      if (dataset != undefined) {
        return dataset.map(function (d, index) {
          return _react.default.createElement(_reactSwipeableCards.Card, {
            style: cardStyle,
            key: index,
            onSwipe: _this3.onSwipeRight.bind(_this3),
            onSwipeRight: _this3.onSwipeRight.bind(_this3),
            data: d
          }, d.quote);
        });
      }
    }
  }, {
    key: "restart",
    value: function restart() {
      window.location.reload();
    }
  }, {
    key: "addEndCard",
    value: function addEndCard() {
      var titleStyle = {
        backgroundColor: "transparent",
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5%",
        color: "#333333",
        height: "80%",
        border: 'none',
        fontSize: "2em",
        fontFamily: "Helvetica-Neue, sans-serif",
        fontWeight: "800"
      };
      return _react.default.createElement("div", {
        style: titleStyle
      }, _react.default.createElement("div", {
        className: "aligner"
      }, "You have achieved good vibe enlightment!", _react.default.createElement("div", {
        className: "restart",
        onClick: this.restart.bind(this)
      }, "Play again")));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Score.default, {
        score: this.state.score
      }), _react.default.createElement(_reactSwipeableCards.CardWrapper, {
        style: wrapperStyle,
        addEndCard: this.addEndCard.bind(this)
      }, this.renderCards()), _react.default.createElement(_Instructions.default, {
        current_badge: this.state.current_badge,
        next_badge: this.state.next_badge,
        text: "Swipe \u2197\uFE0F for more good vibes"
      }), _react.default.createElement(_LevelUp.default, {
        current_badge: this.state.current_badge,
        next_badge: this.state.next_badge
      }));
    }
  }]);

  return SwipeCard;
}(_react.default.Component);

var _default = SwipeCard;
exports.default = _default;

//# sourceMappingURL=Swipe-Card.js.map