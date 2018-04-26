/**
 * hls
 * 色相 （Hue）
 * 亮度/明度（Lightness）
 * 飽和度（Saturation）
 * a（alpha）
 * @author ydr.me
 * @create 2018-04-26 09:01
 * @update 2018-04-26 09:01
 */


'use strict';


var matcher = require('./matcher');
var hsl = require('./hsl');

var HSLA = 'hsla';


/**
 * 解析 hsl 颜色字符串为对象
 * @param hsla
 * @returns {{h: Number, s: number, l: number, a: number}}
 */
exports.parse = function (hsla) {
    var matches = matcher.match4(HSLA, hsla);

    return {
        h: round(matches[1]),
        l: round(matches[2]),
        s: round(matches[3]),
        a: Number(matches[4])
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
 * @param hsla
 * @returns {{r: Number, g: number, b: number, a: number}}
 */
var toRGB = exports.rgba = function (hsla) {
    var rgba = hsl.rgb(hsla);
    rgba.a = hsla.a;
    return rgba;
};


/**
 * 转换为字符串
 * @param hsla
 * @returns {string}
 */
exports.stringify = function (hsla) {
    return HSLA + '(' + [
        hsla.h,
        hsla.s,
        hsla.l,
        hsla.a
    ].join(', ') + ')';
};

// ====================================

function round(num) {
    return Math.round(num);
}

function toString16(num) {
    return num.toString(16);
}

