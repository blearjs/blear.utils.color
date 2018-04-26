/**
 * 白度
 * @author ydr.me
 * @create 2018-04-26 17:28
 * @update 2018-04-26 17:28
 */


'use strict';

/**
 * 白度
 * @param hsl
 * @param amount
 * @returns {*}
 */
module.exports = function (hsl, amount) {
    hsl.l = amount;
    return hsl;
};


