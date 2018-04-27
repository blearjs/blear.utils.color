/**
 * 白度
 * @author ydr.me
 * @create 2018-04-26 17:28
 * @update 2018-04-26 17:28
 */


'use strict';

/**
 * 白度
 * @param hsla
 * @param amount
 * @returns {{h: number, s: number, l: number, a: number}}
 */
module.exports = function (hsla, amount) {
    return {
        h: hsla.h,
        s: hsla.s,
        l: amount,
        a: hsla.a || 0
    };
};


