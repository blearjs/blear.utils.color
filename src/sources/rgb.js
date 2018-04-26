/**
 * rgb
 * r = red
 * g = green
 * b = blue
 * @author ydr.me
 * @create 2018-04-26 08:51
 * @update 2018-04-26 08:51
 */


'use strict';

var string = require('blear.utils.string');

var matcher = require('../utils/matcher');

var RGB = 'rgb';

exports.parse = parse;
exports.toHex = toHex;
exports.toHsl = toHsl;
exports.stringify = stringify;


// ====================================

/**
 * 解析 rgb 颜色字符串为对象
 * @param rgb
 * @returns {{r: Number, g: number, b: number}}
 */
function parse(rgb) {
    var matches = matcher.match3(RGB, rgb);
    return {
        r: round(matches[1]),
        g: round(matches[2]),
        b: round(matches[3])
    };
}

/**
 * rgb 转换为 hex 字符串
 * @param rgb {{r: number, g: number, b: number}}
 * @returns {string}
 */
function toHex(rgb) {
    return '#' + [
        toString16(round(rgb.r)),
        toString16(round(rgb.g)),
        toString16(round(rgb.b))
    ].join('');
}

/**
 * rgb 转换为 hsl
 * @link https://stackoverflow.com/a/9493060
 * @param rgb
 * @returns {{h: Number, s: number, l: number}}
 */
function toHsl(rgb) {
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h;
    var s;
    var l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return {
        h: h,
        s: s,
        l: l
    };
}


/**
 * 转换为字符串
 * @param rgb
 * @returns {string}
 */
function stringify(rgb) {
    return RGB + '(' + [
        rgb.r,
        rgb.g,
        rgb.b
    ].join(', ') + ')';
}


function round(num) {
    return Math.round(num);
}

function toString16(num) {
    return string.padStart(num.toString(16), 2, '0');
}

