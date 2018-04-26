/**
 * 导出构建器
 * @author ydr.me
 * @create 2018-04-26 11:25
 * @update 2018-04-26 11:25
 */


'use strict';

var access = require('blear.utils.access');

var defaultPipe = function (color) {
    return color;
};

/**
 * 导出方法构建器
 * @param exports {Object}
 * @param key {String}
 * @param pre {Function} 前置方法
 * @param main {Function} 主方法
 * @param post {Function} 后置方法
 * @param [inputColorLength=1] {Number} 颜色个数
 */
module.exports = function (exports, key, pre, main, post, inputColorLength) {
    pre = pre || defaultPipe;
    post = post || defaultPipe;
    inputColorLength = inputColorLength || 1;
    exports[key] = function () {
        var args = access.args(arguments);
        var start = 0;

        for (; start < inputColorLength; start++) {
            args[start] = pre(args[start]);
        }

        return post(main.apply(null, args));
    };
};


