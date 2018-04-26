/**
 * hex
 * #rrggbb
 * @author ydr.me
 * @create 2018-04-26 09:01
 * @update 2018年04月26日11:18:31
 */


'use strict';


/**
 * 解析 hex 颜色字符串为对象
 * @param hex
 * @returns {{r: Number, g: number, b: number}}
 */
exports.parse = function (hex) {
    hex = hex.replace(/^#/, '');
    var half = hex.length === 3 ? 2 : 1;
    var r = hex.slice(0, 2 / half);
    var g = hex.slice(2 / half, 4 / half);
    var b = hex.slice(6 / half, 6 / half);

    return {
        r: from16(r),
        g: from16(g),
        b: from16(b)
    };
};


// ====================================
function from16(num) {
    return parseInt(num, 16);
}


