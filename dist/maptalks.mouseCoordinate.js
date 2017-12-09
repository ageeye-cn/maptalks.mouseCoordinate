/*!
 * maptalks.mouseCoordinate v0.1.0
 * LICENSE : MIT
 * (c) 2016-2017 maptalks.org
 */
/*!
 * requires maptalks@>=0.36.0 
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('maptalks')) :
	typeof define === 'function' && define.amd ? define(['exports', 'maptalks'], factory) :
	(factory((global.maptalks = global.maptalks || {}),global.maptalks));
}(this, (function (exports,maptalks) { 'use strict';

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var options = {
    'position': { 'bottom': 0, 'right': 0 },
    'precision': 5
};

var MouseCoordinate = function (_maptalks$control$Con) {
    _inherits(MouseCoordinate, _maptalks$control$Con);

    function MouseCoordinate() {
        _classCallCheck(this, MouseCoordinate);

        return _possibleConstructorReturn(this, _maptalks$control$Con.apply(this, arguments));
    }

    MouseCoordinate.prototype.buildOn = function buildOn(map) {
        var dom = document.createElement('div');

        dom.style.padding = "0 5px";
        dom.style.backgroundColor = 'rgba(255,255,255,0.7)';
        dom.style.fontSize = '13px';

        return dom;
    };

    MouseCoordinate.prototype.onAdd = function onAdd() {
        this._map.on('mousemove', this.onMouseMove, this);
    };

    MouseCoordinate.prototype.onMouseMove = function onMouseMove(event) {
        var _event$coordinate = event.coordinate,
            x = _event$coordinate.x,
            y = _event$coordinate.y,
            precision = this.options.precision;


        this._controlDom.innerText = x.toFixed(precision) + " : " + y.toFixed(precision);
    };

    MouseCoordinate.prototype.onRemove = function onRemove() {
        this._map.off('mouseover', this.onMouseOver);
    };

    return MouseCoordinate;
}(maptalks.control.Control);

MouseCoordinate.mergeOptions(options);

exports.MouseCoordinate = MouseCoordinate;

Object.defineProperty(exports, '__esModule', { value: true });

typeof console !== 'undefined' && console.log('maptalks.mouseCoordinate v0.1.0, requires maptalks@>=0.36.0.');

})));
