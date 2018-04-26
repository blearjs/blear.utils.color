/**
 * 导出构建器
 * @author ydr.me
 * @create 2018-04-26 11:25
 * @update 2018-04-26 11:25
 */


'use strict';

var access = require('blear.utils.access');

/**
 * 导出方法构建器
 * @param exports {Object}
 * @param key {String}
 * @param pre {Function} 前置方法
 * @param main {Function} 主方法
 * @param post {Function} 后置方法
 */
module.exports = function (exports, key, pre, main, post) {
    exports[key] = function (color/*arguments*/) {
        var args = access.args(arguments);
        args[0] = pre(color);
        return post(main.apply(null, args));
    };
};


