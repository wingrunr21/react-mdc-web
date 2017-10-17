'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ROOT = 'mdc-textfield__input';
var propTypes = {
  textarea: _propTypes2.default.bool
};

var Input = function Input(_ref) {
  var textarea = _ref.textarea,
      otherProps = _objectWithoutProperties(_ref, ['textarea']);

  var type = textarea ? 'textarea' : 'input';
  return (0, _react.createElement)(type, _extends({ className: ROOT }, otherProps));
};
Input.propTypes = propTypes;
exports.default = Input;