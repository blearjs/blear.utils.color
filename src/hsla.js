/**
 * hls
 * 色相 （Hue）
 * 飽和度（Saturation）
 * 亮度/明度（Lightness）
 * a（alpha）
 * @author ydr.me
 * @create 2018-04-26 09:01
 * @update 2018-04-26 09:01
 */


'use strict';


var matcher = require('./matcher');
var hsl = require('./hsl');

var HSLA = 'hsla';

exports.parse = parse;
exports.toHex = toHex;
exports.toRgba = toRgba;
exports.stringify = stringify;

// ====================================

/**
 * 解析 hsl 颜色字符串为对象
 * @param hsla
 * @returns {{h: Number, s: number, l: number, a: number}}
 */
function parse(hsla) {
    var matches = matcher.match4(HSLA, hsla);

    return {
        h: round(matches[1]),
        l: round(matches[2]),
        s: round(matches[3]),
        a: Number(matches[4])
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
        toString16(round(rgb.r)),
        toString16(round(rgb.g)),
        toString16(round(rgb.b))
    ].join('');
}

/**
 * hsl 转换为 rgb
 * @link https://stackoverflow.com/a/9493060
 * @param hsla
 * @returns {{r: Number, g: number, b: number, a: number}}
 */
function toRgba(hsla) {
    var rgba = hsl.toRgb(hsla);
    rgba.a = hsla.a;
    return rgba;
}


/**
 * 转换为字符串
 * @param hsla
 * @returns {string}
 */
function stringify(hsla) {
    return HSLA + '(' + [
        hsla.h,
        hsla.s,
        hsla.l,
        hsla.a
    ].join(', ') + ')';
}


function round(num) {
    return Math.round(num);
}

function toString16(num) {
    return num.toString(16);
}

