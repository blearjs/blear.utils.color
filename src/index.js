/**
 * blear.utils.color
 * @link https://github.com/Qix-/color/blob/master/index.js
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */


'use strict';


var hex = require('./sources/hex');
var hsl = require('./sources/hsl');
var hsla = require('./sources/hsla');
var rgb = require('./sources/rgb');
var rgba = require('./sources/rgba');
var build = require('./utils/build');

var lighten = require('./methods/lighten');
var darken = require('./methods/darken');
var black = require('./methods/black');

var LIGHTEN = 'lighten';
var DARKEN = 'darken';
var BLACK = 'black';

/**
 * @property lighten
 */
build(hex, LIGHTEN, hex.toHsl, lighten, hsl.toHex);
build(hsl, LIGHTEN, null, lighten, null);
build(hsla, LIGHTEN, null, lighten, null);
build(rgb, LIGHTEN, rgb.toHsl, lighten, hsl.toRgb);
build(rgba, LIGHTEN, rgba.toHsla, lighten, hsla.toRgba);

/**
 * @property darken
 */
build(hex, DARKEN, hex.toHsl, darken, hsl.toHex);
build(hsl, DARKEN, null, darken, null);
build(hsla, DARKEN, null, darken, null);
build(rgb, DARKEN, rgb.toHsl, darken, hsl.toRgb);
build(rgba, DARKEN, rgba.toHsla, darken, hsla.toRgba);

/**
 * @property black
 */
build(hex, BLACK, hex.toHsl, black, null);
build(hsl, BLACK, null, black, null);
build(hsla, BLACK, null, black, null);
build(rgb, BLACK, rgb.toHsl, black, null);
build(rgba, BLACK, rgba.toHsla, black, null);

exports.hex = hex;
exports.hsl = hsl;
exports.hsla = hsla;
exports.rgb = rgb;
exports.rgba = rgba;


