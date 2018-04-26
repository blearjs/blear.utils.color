/**
 * blear.utils.color
 * @link https://github.com/Qix-/color/blob/master/index.js
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */


'use strict';

var typeis = require('blear.utils.typeis');

var hsl = require('./hsl');
var rgb = require('./rgb');

exports.lighten = function (color, ratio) {
    var hsl = toHSL(color);
    hsl.color[2] += hsl.color[2] * ratio;
    return hsl;
};


exports.darken = function (color, ratio) {

};


function toHSL(color) {
    var type = typeis(color);

    switch (type) {
        case 'string':
            break;

        case 'array':
            break;

        case 'object':
            break;

        default:
            return null;
    }
}

