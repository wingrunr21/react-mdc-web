'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _Helptext = require('./Helptext');

var _Helptext2 = _interopRequireDefault(_Helptext);

var _BottomLine = require('./BottomLine');

var _BottomLine2 = _interopRequireDefault(_BottomLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textfield = function (_React$PureComponent) {
  _inherits(Textfield, _React$PureComponent);

  function Textfield(props) {
    _classCallCheck(this, Textfield);

    var _this = _possibleConstructorReturn(this, (Textfield.__proto__ || Object.getPrototypeOf(Textfield)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Textfield, [{
    key: 'onFocus',
    value: function onFocus() {
      this.setState({ focus: true });
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      var invalid = !event.target.checkValidity();
      this.setState({ focus: false, invalid: invalid });
    }
  }, {
    key: 'renderField',
    value: function renderField() {
      var _this2 = this;

      var focus = this.state.focus;
      var invalid = this.state.invalid;

      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled,
          floatingLabel = _props.floatingLabel,
          helptext = _props.helptext,
          helptextPersistent = _props.helptextPersistent,
          helptextValidation = _props.helptextValidation,
          useInvalidProp = _props.useInvalidProp,
          invalidProp = _props.invalid,
          id = _props.id,
          textarea = _props.textarea,
          value = _props.value,
          otherProps = _objectWithoutProperties(_props, ['className', 'disabled', 'floatingLabel', 'helptext', 'helptextPersistent', 'helptextValidation', 'useInvalidProp', 'invalid', 'id', 'textarea', 'value']);

      if (useInvalidProp) invalid = !!invalidProp;
      var label = floatingLabel || '';
      var customId = id || 'textfield-' + label.replace(/[^a-z0-9]/gi, '');

      return _react2.default.createElement(
        _Field2.default,
        {
          className: className,
          disabled: disabled,
          focused: focus,
          invalid: invalid,
          textarea: textarea
        },
        _react2.default.createElement(_Input2.default, _extends({
          disabled: disabled,
          id: customId,
          textarea: textarea,
          onBlur: function onBlur(event) {
            _this2.onBlur(event);
          },
          onFocus: function onFocus() {
            _this2.onFocus();
          },
          value: value
        }, otherProps)),
        _react2.default.createElement(
          _Label2.default,
          {
            focused: focus,
            id: customId,
            value: value
          },
          floatingLabel
        ),
        _react2.default.createElement(_BottomLine2.default, { active: focus })
      );
    }
  }, {
    key: 'renderHelptext',
    value: function renderHelptext() {
      var focus = this.state.focus;
      var invalid = this.state.invalid;
      var _props2 = this.props,
          helptext = _props2.helptext,
          helptextPersistent = _props2.helptextPersistent,
          helptextValidation = _props2.helptextValidation,
          useInvalidProp = _props2.useInvalidProp,
          invalidProp = _props2.invalid;

      if (useInvalidProp) invalid = !!invalidProp;
      return _react2.default.createElement(
        _Helptext2.default,
        {
          focused: focus,
          invalid: invalid,
          helptextPersistent: helptextPersistent,
          helptextValidation: helptextValidation
        },
        helptext
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var field = this.renderField();

      if (this.props.helptext) {
        return _react2.default.createElement(
          'div',
          null,
          field,
          this.renderHelptext()
        );
      }

      return field;
    }
  }]);

  return Textfield;
}(_react2.default.PureComponent);

Textfield.propTypes = {
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  floatingLabel: _propTypes2.default.string,
  helptext: _propTypes2.default.string,
  helptextPersistent: _propTypes2.default.bool,
  helptextValidation: _propTypes2.default.bool,
  useInvalidProp: _propTypes2.default.bool,
  invalid: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  textarea: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
exports.default = Textfield;