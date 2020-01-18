"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var d3 = _interopRequireWildcard(require("d3"));

var _data = _interopRequireDefault(require("./../data/data.csv"));

var _levels = _interopRequireDefault(require("./../data/levels.csv"));

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

var Card =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: [],
      score: Math.floor(Math.random() * 100) + 20
    });

    return _this;
  }

  _createClass(Card, [{
    key: "refresh",
    value: function refresh() {
      var random;
      var points = Math.floor(Math.random() * 100) + 20;
      var self = this;
      d3.csv(_data.default).then(function (data, i) {
        dataset.push({
          key: i,
          quote: data['quote']
        });
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
      this.setState({
        score: this.state.score += points
      });
      console.log(this.state.score);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var random;
      var self = this;
      d3.csv(_data.default).then(function (data) {
        dataset.push(data);
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
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "score"
      }, _react.default.createElement("h2", null, this.state.score)), _react.default.createElement("div", {
        className: "card",
        key: this.state.data.key,
        onClick: this.refresh.bind(this)
      }, _react.default.createElement("h1", null, this.state.data.quote)));
    }
  }]);

  return Card;
}(_react.default.Component);

var _default = Card;
exports.default = _default;

//# sourceMappingURL=Card.js.map