/**
 * hex
 * #rrggbb
 * @author ydr.me
 * @create 2018-04-26 09:01
 * @update 2018年04月26日11:18:31
 */


'use strict';

var string = require('blear.utils.string');

var rgba = require('./rgba');

var repeat = string.repeat;

exports.toRgba = toRgba;
exports.toHsla = toHsla;

// ====================================

/**
 * 解析 hex 颜色字符串为对象
 * @param hex
 * @returns {{r: Number, g: number, b: number, a: number}}
 */
function toRgba(hex) {
    hex = hex.replace(/^#/, '');

    var half = 1;
    var r;
    var g;
    var b;
    var a = 'ff';

    switch (hex.length) {
        case 3:
            half = 2;
            break;
        case 4:
            half = 2;
            a = repeat(hex.slice(3, 4), 2);
            break;
        // case 5:
        //     half = 2;
        //     a = hex.slice(3, 5);
        //     break;
        case 6:
            half = 1;
            break;
        // case 7:
        //     half = 1;
        //     a = repeat(hex.slice(6, 7), 2);
        //     break;
        case 8:
            half = 1;
            a = hex.slice(6, 8);
            break;

        default:
            throw new SyntaxError('hex 语法有误');
    }

    r = repeat(hex.slice(0, 2 / half), half);
    g = repeat(hex.slice(2 / half, 4 / half), half);
    b = repeat(hex.slice(4 / half, 6 / half), half);

    return {
        r: from16(r),
        g: from16(g),
        b: from16(b),
        a: from16(a) / 255
    };
}

/**
 * 转换为 hsl
 * @param hex
 * @returns {*|{h: Number, s: number, l: number}}
 */
function toHsla(hex) {
    return rgba.toHsla(toRgba(hex));
}


function from16(num) {
    return parseInt(num, 16);
}


