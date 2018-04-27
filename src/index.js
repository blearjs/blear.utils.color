/**
 * blear.utils.color
 * @link https://github.com/Qix-/color/blob/master/index.js
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 * @update 2018年04月27日10:21:01
 */


'use strict';


var hex = require('./sources/hex');
var hsla = require('./sources/hsla');
var rgba = require('./sources/rgba');
var build = require('./utils/build');

var lighten = require('./methods/lighten');
var blacken = require('./methods/blacken');
var darken = require('./methods/darken');
var whiten = require('./methods/whiten');
var invert = require('./methods/invert');
var bright = require('./methods/bright');
var mix = require('./methods/mix');

var LIGHTEN = 'lighten';
var DARKEN = 'darken';
var WHITEN = 'whiten';
var BLACKEN = 'blacken';
var BRIGHT = 'bright';
var INVERT = 'invert';
var MIX = 'mix';

var hexToRgba = hex.toRgba;
var hexToHsla = hex.toHsla;
var hslaToRgba = hsla.toRgba;
var hslaToHex = hsla.toHex;
var rgbaToHsla = rgba.toHsla;
var rgbaToHex = rgba.toHex;

/**
 * @property lighten
 */
build(hex, LIGHTEN, hexToHsla, lighten, hslaToHex);
build(hsla, LIGHTEN, null, lighten, null);
build(rgba, LIGHTEN, rgbaToHsla, lighten, hslaToRgba);

/**
 * @property darken
 */
build(hex, DARKEN, hexToHsla, darken, hslaToHex);
build(hsla, DARKEN, null, darken, null);
build(rgba, DARKEN, rgbaToHsla, darken, hslaToRgba);

/**
 * @property whiten
 */
build(hex, WHITEN, hexToHsla, whiten, hslaToHex);
build(hsla, WHITEN, null, whiten, null);
build(rgba, WHITEN, rgbaToHsla, whiten, hslaToRgba);

/**
 * @property blacken
 */
build(hex, BLACKEN, hexToHsla, blacken, hslaToHex);
build(hsla, BLACKEN, null, blacken, null);
build(rgba, BLACKEN, rgbaToHsla, blacken, hslaToRgba);

/**
 * @property bright
 */
build(hex, BRIGHT, hexToHsla, bright, null);
build(hsla, BRIGHT, null, bright, null);
build(rgba, BRIGHT, rgbaToHsla, bright, null);

/**
 * @property invert
 */
build(hex, INVERT, hexToRgba, invert, rgbaToHex);
build(hsla, INVERT, hslaToRgba, invert, rgbaToHsla);
build(rgba, INVERT, null, invert, null);

/**
 * @property mix
 */
build(hex, MIX, hexToRgba, mix, rgbaToHex, 2);
build(hsla, MIX, hslaToRgba, mix, rgbaToHsla, 2);
build(rgba, MIX, null, mix, null);



exports.hex = hex;
exports.hsla = hsla;
exports.rgba = rgba;


