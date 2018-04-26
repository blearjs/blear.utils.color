/**
 * blear.utils.color
 * @link https://github.com/Qix-/color/blob/master/index.js
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */


'use strict';

var typeis = require('blear.utils.typeis');
var array = require('blear.utils.array');

var hex = require('./hex');
var hsl = require('./hsl');
var hsla = require('./hsla');
var rgb = require('./rgb');
var rgba = require('./rgba');
var build = require('./build');

var LIGHTEN = 'lighten';
var DARKEN = 'darken';

/**
 * @namespace hex
 * @method lighten
 */
build(hex, LIGHTEN, hexToHsl, hslLighten, hsl.hex);

/**
 * @name darken
 */
build(hex, DARKEN, hexToHsl, hslDarken, hsl.hex);

exports.hex = hex;
exports.hsl = hsl;
exports.hsla = hsla;
exports.rgb = rgb;
exports.rgba = rgba;


// ======================
/**
 * hsl 减浅
 * @param hslColor
 * @param ratio
 * @returns {*}
 */
function hslLighten(hslColor, ratio) {
    hslColor.l += hslColor.l * ratio;
    return hslColor;
}

/**
 * hsl 加深
 * @param hslColor
 * @param ratio
 * @returns {*}
 */
function hslDarken(hslColor, ratio) {
    hslColor.l -= hslColor.l * ratio;
    return hslColor;
}

/**
 * hex 转换为 hsl
 * @param hexColor
 * @returns {{h: Number, s: number, l: number}}
 */
function hexToHsl(hexColor) {
    return rgb.hsl(hex.parse(hexColor));
}

