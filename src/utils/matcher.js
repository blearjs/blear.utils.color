/**
 * matacher
 * @author ydr.me
 * @create 2018-04-26 09:21
 * @update 2018-04-26 09:21
 */


'use strict';


var array = require('blear.utils.array');

var alpha = require('./alpha');

var percentRE = /%$/;
var alphaFlagRE = /a\s*\(/i;

exports.rgba = buildExports('rgba');
exports.hsla = buildExports('hsla');

// ========================================

/**
 * 构建正则表达式
 * @param prefix
 * @returns {RegExp}
 */
function buildRE(prefix) {
    return new RegExp(
        '^' + prefix +
        '?\\s*\\(\\s*(.*?)\\s*\\)$',
        'i');
}


/**
 * 构建出口
 * @param type
 */
function buildExports(type) {
    var re = buildRE(type);
    return function (string) {
        var matches = string.match(re);

        if (!matches) {
            throw new SyntaxError(type + ' 语法有误');
        }

        var hasAlpha = alphaFlagRE.test(string);
        var main = matches[1];
        var splits = main.split(/\s*,\s*/);
        var length = splits.length;

        if (!(hasAlpha && length === 4 || !hasAlpha && length === 3)) {
            throw new SyntaxError(type + ' 语法有误');
        }

        var matches2 = [];

        array.map(splits, function (match, index) {
            if (percentRE.test(match)) {
                match = match.replace(percentRE, '') / 100;
            }

            matches2.push(Number(match));
        });

        matches2[3] = alpha(matches2[3]);
        return matches2;
    };
}
