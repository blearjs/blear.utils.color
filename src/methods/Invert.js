/**
 * 反色
 * @author ydr.me
 * @create 2018-04-26 17:20
 * @update 2018-04-26 17:20
 */


'use strict';

/**
 * 反色
 * @param rgb
 * @returns {{r: number, g: number, b: number}}
 */
module.exports = function (rgb) {
    return {
        r: 255 - rgb.r,
        g: 255 - rgb.g,
        b: 255 - rgb.b
    };
};


