/**
 * 混色
 * @author ydr.me
 * @create 2018-04-26 17:40
 * @update 2018-04-26 17:40
 */


'use strict';

var alpha = require('../utils/alpha');

/**
 * 混色
 * @ref https://github.com/Qix-/color/blob/master/index.js#L366
 * @param rgba1
 * @param rgba2
 * @param weight
 * @returns {{r: number, g: number, b: number, a: number}}
 */
module.exports = function (rgba1, rgba2, weight) {
    var p = weight === undefined ? 0.5 : weight;
    rgba1.a = alpha(rgba1.a);
    rgba2.a = alpha(rgba2.a);

    var w = 2 * p - 1;
    var a = rgba1.a - rgba2.a;
    var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
    var w2 = 1 - w1;

    return {
        r: round(w1 * rgba1.r + w2 * rgba2.r),
        g: round(w1 * rgba1.g + w2 * rgba2.g),
        b: round(w1 * rgba1.b + w2 * rgba2.b),
        a: rgba1.a * p + rgba2.a * (1 - p)
    };
};


function round(num) {
    return Math.round(num);
}


