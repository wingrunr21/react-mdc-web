'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  id: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

var ROOT = 'mdc-textfield__label';
var LABEL_FLOAT_ABOVE = ROOT + '--float-above';

var Label = function Label(_ref) {
  var focused = _ref.focused,
      children = _ref.children,
      id = _ref.id,
      value = _ref.value;
  return _react2.default.createElement(
    'label',
    {
      className: (0, _classnames3.default)(ROOT, _defineProperty({}, LABEL_FLOAT_ABOVE, focused || value)),
      htmlFor: id
    },
    children
  );
};
Label.propTypes = propTypes;
exports.default = Label;