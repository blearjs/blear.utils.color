/**
 * 判断是否为深色
 * @author ydr.me
 * @create 2018-04-26 16:21
 * @update 2018-04-26 16:21
 */


'use strict';

/**
 * 判断是否为深色
 * @param rgb
 * @returns {boolean}
 */
module.exports = function (rgb) {
    // YIQ equation from http://24ways.org/2010/calculating-color-contrast
    return (
        rgb.r * 299 +
        rgb.g * 587 +
        rgb.b * 114
    ) / 1000 < 128;
};



