/**
 * 黑度
 * @author ydr.me
 * @create 2018-04-26 17:28
 * @update 2018-04-26 17:28
 */


'use strict';

/**
 * 黑度
 * @param hsl
 * @param amount
 * @returns {{h: number, s: number, l: number, a: number}}
 */
module.exports = function (hsl, amount) {
    return {
        h: hsl.h,
        s: hsl.s,
        l: 1 - amount,
        a: hsl.a
    };
};


