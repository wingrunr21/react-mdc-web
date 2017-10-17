'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  active: _propTypes2.default.bool
};

var ROOT = 'mdc-textfield__bottom-line';
var ACTIVE = ROOT + '--active';

var BottomLine = function BottomLine(_ref) {
  var active = _ref.active;
  return _react2.default.createElement('div', {
    className: (0, _classnames3.default)(ROOT, _defineProperty({}, ACTIVE, active))
  });
};
BottomLine.propTypes = propTypes;
exports.default = BottomLine;