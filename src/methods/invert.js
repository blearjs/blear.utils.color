/**
 * 反色
 * @author ydr.me
 * @create 2018-04-26 17:20
 * @update 2018-04-26 17:20
 */


'use strict';

/**
 * 反色
 * @param rgba
 * @returns {{r: number, g: number, b: number, a: number}}
 */
module.exports = function (rgba) {
    return {
        r: 255 - rgba.r,
        g: 255 - rgba.g,
        b: 255 - rgba.b,
        a: rgba.a || 0
    };
};


