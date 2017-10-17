'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  children: _propTypes2.default.node,
  focused: _propTypes2.default.bool,
  helptextPersistent: _propTypes2.default.bool,
  helptextValidation: _propTypes2.default.bool,
  invalid: _propTypes2.default.bool
};

var ROOT = 'mdc-textfield-helptext';
var PERSISTENT = 'mdc-textfield-helptext--persistent';
var VALIDATION = 'mdc-textfield-helptext--validation-msg';

var Helptext = function Helptext(_ref) {
  var _classnames;

  var children = _ref.children,
      focused = _ref.focused,
      helptextPersistent = _ref.helptextPersistent,
      helptextValidation = _ref.helptextValidation,
      invalid = _ref.invalid;

  var validationMsgNeedsDisplay = helptextValidation && invalid;
  var ariaHidden = !focused && !helptextPersistent && !validationMsgNeedsDisplay;
  var ariaProp = ariaHidden ? { 'aria-hidden': true } : {};
  var roleProp = validationMsgNeedsDisplay ? { role: 'alert' } : {};

  return _react2.default.createElement(
    'p',
    _extends({
      className: (0, _classnames3.default)(ROOT, (_classnames = {}, _defineProperty(_classnames, PERSISTENT, helptextPersistent), _defineProperty(_classnames, VALIDATION, helptextValidation), _classnames))
    }, ariaProp, roleProp),
    children
  );
};
Helptext.propTypes = propTypes;
exports.default = Helptext;