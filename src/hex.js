/**
 * hex
 * #rrggbb
 * @author ydr.me
 * @create 2018-04-26 09:01
 * @update 2018年04月26日11:18:31
 */


'use strict';

var string = require('blear.utils.string');

var repeat = string.repeat;

exports.parse = parse;

// ====================================

/**
 * 解析 hex 颜色字符串为对象
 * @param hex
 * @returns {{r: Number, g: number, b: number}}
 */
function parse(hex) {
    hex = hex.replace(/^#/, '');
    var half = hex.length === 3 ? 2 : 1;
    var r = repeat(hex.slice(0, 2 / half), half);
    var g = repeat(hex.slice(2 / half, 4 / half), half);
    var b = repeat(hex.slice(4 / half, 6 / half), half);

    return {
        r: from16(r),
        g: from16(g),
        b: from16(b)
    };
}


function from16(num) {
    return parseInt(num, 16);
}


