/**
 * 混色
 * @author ydr.me
 * @create 2018-04-26 17:40
 * @update 2018-04-26 17:40
 */


'use strict';

/**
 * 混色
 * @ref https://github.com/Qix-/color/blob/master/index.js#L366
 * @param rgb1
 * @param rgb2
 * @param weight
 * @returns {{r: number, g: number, b: number, a: number}}
 */
module.exports = function (rgb1, rgb2, weight) {
    var p = weight === undefined ? 0.5 : weight;
    rgb1.a = rgb1.a || 0;
    rgb2.a = rgb2.a || 0;

    var w = 2 * p - 1;
    var a = rgb1.a - rgb2.a;
    var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
    var w2 = 1 - w1;

    return {
        r: w1 * rgb1.r + w2 * rgb2.r,
        g: w1 * rgb1.g + w2 * rgb2.g,
        b: w1 * rgb1.b + w2 * rgb2.b,
        a: rgb1.a * p + rgb2.a * (1 - p)
    };
};



