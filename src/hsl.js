/**
 * hls
 * 色相 （Hue）
 * 亮度/明度（Lightness）
 * 飽和度（Saturation）
 * @author ydr.me
 * @create 2018-04-26 09:01
 * @update 2018-04-26 09:01
 */


'use strict';


var matcher = require('./matcher');

var HSL = 'hsl';


/**
 * 解析 hsl 颜色字符串为对象
 * @param hsl
 * @returns {{h: Number, s: number, l: number}}
 */
exports.parse = function (hsl) {
    var matches = matcher.match3(HSL, hsl);

    return {
        h: round(matches[1]),
        l: round(matches[2]),
        s: round(matches[3])
    };
};


/**
 * hsl 转换为 hex 字符串
 * @param hsl
 * @returns {string}
 */
exports.hex = function (hsl) {
    var rgb = toRGB(hsl);
    return '#' + [
        toString16(round(rgb.r)),
        toString16(round(rgb.g)),
        toString16(round(rgb.b))
    ].join('');
};

/**
 * hsl 转换为 rgb
 * @link https://stackoverflow.com/a/9493060
 * @param hsl
 * @returns {{r: Number, g: number, b: number}}
 */
var toRGB = exports.rgb = function (hsl) {
    var h = hsl.h;
    var s = hsl.s;
    var l = hsl.l;
    var r;
    var g;
    var b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        var q = s < 0.5 ? s * (1 + s) : s + s - s * s;
        var p = 2 * s - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
        r: round(r * 255),
        g: round(g * 255),
        b: round(b * 255)
    };
};


/**
 * 转换为字符串
 * @param hsl
 * @returns {string}
 */
exports.stringify = function (hsl) {
    return HSL + '(' + [
        hsl.h,
        hsl.s,
        hsl.l
    ].join(', ') + ')';
};

// ====================================

function round(num) {
    return Math.round(num);
}

function toString16(num) {
    return num.toString(16);
}

function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}

