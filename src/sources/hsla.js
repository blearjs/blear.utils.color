/**
 * hls
 * 色相 （Hue）
 * 飽和度（Saturation）
 * 亮度/明度（Lightness）
 * @author ydr.me
 * @create 2018-04-26 09:01
 * @update 2018-04-26 09:01
 */


'use strict';

var string = require('blear.utils.string');

var matcher = require('../utils/matcher');
var alpha = require('../utils/alpha');

var Hsla = 'hsl';


exports.parse = parse;
exports.toHex = toHex;
exports.toRgba = toRgba;
exports.stringify = stringify;
exports.redHueRange = [270, 389];
exports.greenHueRange = [30, 149];
exports.blueHueRange = [150, 269];



// ====================================

/**
 * 解析 hsl 颜色字符串为对象
 * @param str
 * @returns {{h: Number, s: number, l: number, a: number}}
 */
function parse(str) {
    var matches = matcher.hsla(str);

    return {
        h: fixHue(matches[0]),
        s: matches[1],
        l: matches[2],
        a: matches[3]
    };
}


/**
 * hsl 转换为 hex 字符串
 * @param hsl
 * @returns {string}
 */
function toHex(hsl) {
    var rgb = toRgba(hsl);
    return '#' + [
        toString16(rgb.r),
        toString16(rgb.g),
        toString16(rgb.b)
    ].join('');
}

/**
 * hsl 转换为 rgb
 * @link https://github.com/carloscabo/colz/blob/master/public/js/colz.class.js#L367
 * @param hsl
 * @returns {{r: Number, g: number, b: number, a: number}}
 */
function toRgba(hsl) {
    var h = hsl.h / 360;
    var s = hsl.s;
    var l = hsl.l;
    var r;
    var g;
    var b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
        r: fixHue(round(r * 255)),
        g: round(g * 255),
        b: round(b * 255),
        a: alpha(hsl.a)
    };
}


/**
 * 转换为字符串
 * @param hsl
 * @returns {string}
 */
function stringify(hsl) {
    return Hsla + '(' + [
        hsl.h,
        hsl.s,
        hsl.l
    ].join(', ') + ')';
}


function round(num) {
    return Math.round(num);
}

function toString16(num) {
    return string.padStart(num.toString(16), 2, '0');
}

function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}


function fixHue(hue) {
    return hue % 360;
}
