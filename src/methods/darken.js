/**
 * 加深
 * @author ydr.me
 * @create 2018-04-26 14:50
 * @update 2018-04-26 14:50
 */


'use strict';


/**
 * 加深
 * @param hsl
 * @param ratio
 * @returns {*}
 */
module.exports = function(hsl, ratio) {
    return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l - hsl.l * ratio,
        a: hsl.a
    };
};


