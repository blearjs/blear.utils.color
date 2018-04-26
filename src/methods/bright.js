/**
 * 判断是否为明亮
 * @author ydr.me
 * @create 2018-04-26 16:21
 * @update 2018-04-26 16:21
 */


'use strict';

/**
 * 判断是否为明亮
 * @param hsl
 * @returns {boolean}
 */
module.exports = function (hsl) {
    return hsl.l > 0.5;
};



