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
var whiten = require('./methods/whiten');
var invert = require('./methods/invert');

var LIGHTEN = 'lighten';
var DARKEN = 'darken';
var WHITEN = 'whiten';
var BLACK = 'black';
var INVERT = 'invert';

var hexToRgb = hex.toRgb;
var hexToHsl = hex.toHsl;

var hslToHex = hsl.toHex;
var hslToRgb = hsl.toRgb;

var hslaToRgba = hsla.toRgba;

var rgbToHex = rgb.toHex;
var rgbToHsl = rgb.toHsl;

var rgbaToHsla = rgba.toHsla;

/**
 * @property lighten
 */
build(hex, LIGHTEN, hexToHsl, lighten, hslToHex);
build(hsl, LIGHTEN, null, lighten, null);
build(hsla, LIGHTEN, null, lighten, null);
build(rgb, LIGHTEN, rgbToHsl, lighten, hslToRgb);
build(rgba, LIGHTEN, rgbaToHsla, lighten, hslaToRgba);

/**
 * @property darken
 */
build(hex, DARKEN, hexToHsl, darken, hslToHex);
build(hsl, DARKEN, null, darken, null);
build(hsla, DARKEN, null, darken, null);
build(rgb, DARKEN, rgbToHsl, darken, hslToRgb);
build(rgba, DARKEN, rgbaToHsla, darken, hslaToRgba);

/**
 * @property whiten
 */
build(hex, WHITEN, hexToHsl, whiten, hslToHex);
build(hsl, WHITEN, null, whiten, null);
build(hsla, WHITEN, null, whiten, null);
build(rgb, WHITEN, rgbToHsl, whiten, hslToRgb);
build(rgba, WHITEN, rgbaToHsla, whiten, hslaToRgba);

/**
 * @property black
 */
build(hex, BLACK, hexToHsl, black, null);
build(hsl, BLACK, null, black, null);
build(hsla, BLACK, null, black, null);
build(rgb, BLACK, rgbToHsl, black, null);
build(rgba, BLACK, rgbaToHsla, black, null);

/**
 * @property invert
 */
build(hex, INVERT, hexToRgb, invert, rgbToHex);
build(hsl, INVERT, hslToRgb, invert, rgbToHsl);
build(hsla, INVERT, hslaToRgba, invert, rgbaToHsla);
build(rgb, INVERT, null, invert, null);
build(rgba, INVERT, null, invert, null);

exports.hex = hex;
exports.hsl = hsl;
exports.hsla = hsla;
exports.rgb = rgb;
exports.rgba = rgba;


