/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:21
 * @update 2018-04-26 09:21
 */


'use strict';


var array = require('blear.utils.array');

var UNIT = '([^,\\s]+)';
var SEPARATOR = ',\\s*';
var percentRE = /%$/;
var re3Map = {};
var re4Map = {};

/**
 * 匹配3个数值
 * @param prefix
 * @param string
 * @returns {Array}
 */
exports.match3 = function (prefix, string) {
    var re = re3Map[prefix] || new RegExp('^' + prefix + '\\(' + [UNIT, UNIT, UNIT].join(SEPARATOR) + '\\)$', 'i');
    var matches = string.match(re);

    if (!matches) {
        throw new SyntaxError('`' + string + '`颜色语法有误');
    }

    return percentToNumber(matches);
};

/**
 * 匹配4个数值
 * @param prefix
 * @param string
 * @returns {Array}
 */
exports.match4 = function (prefix, string) {
    var re = re4Map[prefix] || new RegExp('^' + prefix + '\\(' + [UNIT, UNIT, UNIT, UNIT].join(SEPARATOR) + '\\)$', 'i');
    var matches = string.match(re);

    if (!matches) {
        throw new SyntaxError('`' + string + '`颜色语法有误');
    }

    return percentToNumber(matches);
};


/**
 * 数值百分比转换为小数
 * @param matches
 * @returns {*}
 */
function percentToNumber(matches) {
    return array.map(matches, function (match, index) {
        if (index === 0) {
            return match;
        }

        if (percentRE.test(match)) {
            match = match.replace(percentRE, '') / 100;
        }

        return match;
    });
}
