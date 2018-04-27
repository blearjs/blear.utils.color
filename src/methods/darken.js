/**
 * 加深
 * @author ydr.me
 * @create 2018-04-26 14:50
 * @update 2018-04-26 14:50
 */


'use strict';

var alpha = require('../utils/alpha');

/**
 * 加深
 * @param hsla
 * @param ratio
 * @returns {*}
 */
module.exports = function(hsla, ratio) {
    return {
        h: hsla.h,
        s: hsla.s,
        l: hsla.l - hsla.l * ratio,
        a: alpha(hsla.a)
    };
};


