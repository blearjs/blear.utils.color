/**
 * blear.utils.color
 * @link https://github.com/Qix-/color/blob/master/index.js
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */


'use strict';

var hsl = require('./hsl');
var rgb = require('./rgb');

exports.lighten = function (color, ratio) {
    var hsl = this.hsl();
    hsl.color[2] += hsl.color[2] * ratio;
    return hsl;
};


exports.darken = function (color, ratio) {

};


