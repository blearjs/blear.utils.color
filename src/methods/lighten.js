/**
 * 减浅
 * @author ydr.me
 * @create 2018-04-26 14:50
 * @update 2018-04-26 14:50
 */


'use strict';


/**
 * 减浅
 * @param hsl
 * @param ratio
 * @returns {*}
 */
module.exports = function(hsl, ratio) {
    hsl.l += hsl.l * ratio;
    return hsl;
};


