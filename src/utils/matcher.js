/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:21
 * @update 2018-04-26 09:21
 */


'use strict';


// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = "[-\\+]?\\d+%?";

// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

var UNIT = '([^,\\s]+)';
var SEPARATOR = ',\\s*';

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

    return matches;
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

    return matches;
};

