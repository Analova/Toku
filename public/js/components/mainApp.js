webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComposeSection = function (_Component) {
  _inherits(ComposeSection, _Component);

  function ComposeSection() {
    _classCallCheck(this, ComposeSection);

    var _this = _possibleConstructorReturn(this, (ComposeSection.__proto__ || Object.getPrototypeOf(ComposeSection)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: ""
    };
    return _this;
  }

  _createClass(ComposeSection, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "compose-section" },
        _react2.default.createElement("textarea", { name: true, id: true, cols: 80, rows: 10, defaultValue: "" }),
        _react2.default.createElement("div", { className: "user-img" }),
        _react2.default.createElement(
          "div",
          { className: "buttons" },
          _react2.default.createElement(
            "div",
            { className: "button photo-btn" },
            _react2.default.createElement("i", { className: "fas fa-camera-retro" })
          ),
          _react2.default.createElement(
            "div",
            { className: "button video-btn" },
            _react2.default.createElement("i", { className: "fas fa-video" })
          ),
          _react2.default.createElement(
            "div",
            { className: "button send-btn" },
            _react2.default.createElement("i", { className: "fas fa-paper-plane" })
          )
        )
      );
    }
  }]);

  return ComposeSection;
}(_react.Component);

exports.default = ComposeSection;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftMenu = function (_Component) {
  _inherits(LeftMenu, _Component);

  function LeftMenu() {
    _classCallCheck(this, LeftMenu);

    var _this = _possibleConstructorReturn(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: ""
    };
    return _this;
  }

  _createClass(LeftMenu, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "left-menu" },
        _react2.default.createElement(
          "div",
          { className: "account-dropdown" },
          _react2.default.createElement(
            "div",
            { className: "logo" },
            _react2.default.createElement("i", { className: "fab fa-typo3" })
          ),
          _react2.default.createElement(
            "div",
            { className: "name" },
            "Snata Clause"
          ),
          _react2.default.createElement(
            "div",
            { className: "icon" },
            _react2.default.createElement("i", { className: "fas fa-chevron-down" })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "groups" },
          _react2.default.createElement(
            "div",
            { className: "group" },
            _react2.default.createElement(
              "div",
              { className: "title" },
              "Title"
            ),
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/logout" },
                  "Logout"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                "link"
              ),
              _react2.default.createElement(
                "li",
                null,
                "link"
              )
            )
          )
        )
      );
    }
  }]);

  return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messenger = function (_Component) {
  _inherits(Messenger, _Component);

  function Messenger() {
    _classCallCheck(this, Messenger);

    var _this = _possibleConstructorReturn(this, (Messenger.__proto__ || Object.getPrototypeOf(Messenger)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: ""
    };
    return _this;
  }

  _createClass(Messenger, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "messenger" },
        _react2.default.createElement(
          "div",
          { className: "messenger-header" },
          _react2.default.createElement(
            "div",
            { className: "messenger-icon" },
            _react2.default.createElement("i", { className: "fas fa-comments" })
          ),
          _react2.default.createElement(
            "div",
            { className: "title" },
            "Messenger"
          ),
          _react2.default.createElement(
            "div",
            { className: "dots-icon" },
            _react2.default.createElement("i", { className: "fas fa-ellipsis-v" })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "users" },
          _react2.default.createElement(
            "div",
            { className: "users-container" },
            _react2.default.createElement(
              "div",
              { className: "user active" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user active" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user active" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user active" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user active" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user active" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user active" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user active" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("div", {
                className: "user-img",
                style: {
                  width: "30px",
                  height: "30px",
                  background: 'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "username" },
                "James Bond"
              ),
              _react2.default.createElement(
                "div",
                { className: "conversation" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "search" },
          _react2.default.createElement("input", { type: "text", placeholder: "search" })
        )
      );
    }
  }]);

  return Messenger;
}(_react.Component);

exports.default = Messenger;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_Component) {
  _inherits(Post, _Component);

  function Post() {
    _classCallCheck(this, Post);

    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: ""
    };
    return _this;
  }

  _createClass(Post, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "posts" },
        _react2.default.createElement(
          "div",
          { className: "update-container" },
          _react2.default.createElement(
            "div",
            { className: "author-info" },
            _react2.default.createElement("a", { href: "#", className: "user-img" }),
            _react2.default.createElement(
              "div",
              { className: "info" },
              _react2.default.createElement(
                "a",
                { href: "#" },
                "James Doe"
              ),
              "shared a story",
              _react2.default.createElement("a", { href: "#" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "media" },
            _react2.default.createElement("div", {
              className: "image",
              style: {
                background: 'url("http://www.lovethispic.com/uploaded_images/158130-Be-Your-Own-Inspiration.jpg")'
              }
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "padding-container" },
            _react2.default.createElement(
              "div",
              { className: "grey-container" },
              _react2.default.createElement(
                "div",
                { className: "update-info" },
                _react2.default.createElement(
                  "h3",
                  null,
                  "How to become a developer"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "update-stats" },
                _react2.default.createElement(
                  "div",
                  { className: "icon-section" },
                  _react2.default.createElement(
                    "div",
                    { className: "like-circle" },
                    _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "other-users" },
                  "Sarah Brown and 23 others liked update"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "comments-stats" },
                  "4 comments"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "compose-comment" },
                _react2.default.createElement("textarea", { name: true, id: true, cols: 80, rows: 10, defaultValue: "" }),
                _react2.default.createElement(
                  "div",
                  { className: "buttons" },
                  _react2.default.createElement(
                    "div",
                    { className: "repost-btn" },
                    _react2.default.createElement("i", { className: "fas fa-redo" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "like-btn" },
                    _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "update-container" },
          _react2.default.createElement(
            "div",
            { className: "author-info" },
            _react2.default.createElement("a", { href: "#", className: "user-img" }),
            _react2.default.createElement(
              "div",
              { className: "info" },
              _react2.default.createElement(
                "a",
                { href: "#" },
                "James Doe"
              ),
              "shared a story",
              _react2.default.createElement("a", { href: "#" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "media" },
            _react2.default.createElement("div", {
              className: "image",
              style: {
                background: 'url("http://www.lovethispic.com/uploaded_images/158130-Be-Your-Own-Inspiration.jpg")'
              }
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "padding-container" },
            _react2.default.createElement(
              "div",
              { className: "grey-container" },
              _react2.default.createElement(
                "div",
                { className: "update-info" },
                _react2.default.createElement(
                  "h3",
                  null,
                  "How to become a developer"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "update-stats" },
                _react2.default.createElement(
                  "div",
                  { className: "icon-section" },
                  _react2.default.createElement(
                    "div",
                    { className: "like-circle" },
                    _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "other-users" },
                  "Sarah Brown and 23 others liked update"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "comments-stats" },
                  "4 comments"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "compose-comment" },
                _react2.default.createElement("textarea", { name: true, id: true, cols: 80, rows: 10, defaultValue: "" }),
                _react2.default.createElement(
                  "div",
                  { className: "buttons" },
                  _react2.default.createElement(
                    "div",
                    { className: "repost-btn" },
                    _react2.default.createElement("i", { className: "fas fa-redo" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "like-btn" },
                    _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Post;
}(_react.Component);

exports.default = Post;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchHeader = function (_Component) {
  _inherits(SearchHeader, _Component);

  function SearchHeader() {
    _classCallCheck(this, SearchHeader);

    var _this = _possibleConstructorReturn(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: ""
    };
    return _this;
  }

  _createClass(SearchHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "search-header" },
        _react2.default.createElement(
          "div",
          { className: "search-box" },
          _react2.default.createElement("input", { type: "text", name: true, defaultValue: true }),
          _react2.default.createElement(
            "div",
            { className: "icon-section" },
            _react2.default.createElement(
              "div",
              { className: "noti" },
              _react2.default.createElement("i", { className: "fas fa-bell" }),
              _react2.default.createElement(
                "div",
                { className: "noti-number active" },
                "3"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "comment" },
              _react2.default.createElement("i", { className: "fas fa-comment" }),
              _react2.default.createElement(
                "div",
                { className: "noti-number active" },
                "3"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("i", { className: "fas fa-user" }),
              _react2.default.createElement(
                "div",
                { className: "noti-number active" },
                "3"
              )
            )
          )
        )
      );
    }
  }]);

  return SearchHeader;
}(_react.Component);

exports.default = SearchHeader;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _LeftMenu = __webpack_require__(231);

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

var _Messenger = __webpack_require__(232);

var _Messenger2 = _interopRequireDefault(_Messenger);

var _SearchHeader = __webpack_require__(234);

var _SearchHeader2 = _interopRequireDefault(_SearchHeader);

var _Post = __webpack_require__(233);

var _Post2 = _interopRequireDefault(_Post);

var _ComposeSection = __webpack_require__(230);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: ""
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "app-container home-page" },
          _react2.default.createElement(_LeftMenu2.default, null),
          _react2.default.createElement(
            "section",
            { id: "content-container" },
            _react2.default.createElement(_SearchHeader2.default, null),
            _react2.default.createElement(
              "div",
              { className: "content-area" },
              _react2.default.createElement(_ComposeSection2.default, null),
              _react2.default.createElement(_Post2.default, null)
            )
          ),
          _react2.default.createElement(_Messenger2.default, null)
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[238]);