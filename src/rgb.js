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

var matcher = require('./matcher');

var RGB = 'rgb';


/**
 * 解析 rgb 颜色字符串为对象
 * @param rgb
 * @returns {null | {r: Number, g: number, b: number}}
 */
exports.parse = function (rgb) {
    var matches = matcher.match3(RGB, rgb);

    if (!matches) {
        return null;
    }

    return {
        r: round(matches[1]),
        g: round(matches[2]),
        b: round(matches[3])
    };
};

/**
 * rgb 转换为 hex 字符串
 * @param r
 * @param g
 * @param b
 * @returns {string}
 */
exports.hex = function (r, g, b) {
    return '#' + [
        toString16(round(r)),
        toString16(round(g)),
        toString16(round(b))
    ].join('');
};

/**
 * rgb 转换为 hsl
 * @param r
 * @param g
 * @param b
 * @returns {{h: Number, s: number, l: number}}
 */
exports.hsl = function (r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
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
};


/**
 * 转换为字符串
 * @param rgb
 * @returns {string}
 */
exports.stringify = function (rgb) {
    return RGB + '(' + [
        rgb.r,
        rgb.g,
        rgb.b
    ].join(', ') + ')';
};

// ====================================

function round(num) {
    return Math.round(num);
}

function toString16(num) {
    return num.toString(16);
}

