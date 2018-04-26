/**
 * rgba
 * r = red
 * g = green
 * b = blue
 * a = alpha
 * @author ydr.me
 * @create 2018-04-26 08:51
 * @update 2018年04月26日09:20:54
 */


'use strict';

var matcher = require('./matcher');
var rgb = require('./rgb');

var RGBA = 'rgba';

/**
 * 解析 rgba 颜色字符串为对象
 * @param rgba
 * @returns {null | {r: Number, g: number, b: number, a: number}}
 */
exports.parse = function (rgba) {
    var matches = matcher.match4(RGBA, rgba);

    if (!matches) {
        return null;
    }

    return {
        r: round(matches[1]),
        g: round(matches[2]),
        b: round(matches[3]),
        a: Number(matches[4])
    };
};

/**
 * rgba 转换为 hex 字符串
 * @param rgba
 * @returns {string}
 */
exports.hex = function (rgba) {
    return rgb.hex(rgba);
};

/**
 * rgb 转换为 hsl
 * @param rgba
 * @returns {{h: Number, s: number, l: number, a: number}}
 */
exports.hsla = function (rgba) {
    var hsla = rgb.hsl(rgba);
    hsla.a = rgba.a;
    return hsla;
};


/**
 * 转换为字符串
 * @param rgba
 * @returns {string}
 */
exports.stringify = function (rgba) {
    return RGBA + '(' + [
        rgba.r,
        rgba.g,
        rgba.b,
        rgba.a
    ].join(', ') + ')';
};


// ====================================

function round(num) {
    return Math.round(num);
}
