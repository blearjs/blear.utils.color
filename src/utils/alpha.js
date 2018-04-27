/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-27 13:52
 * @update 2018-04-27 13:52
 */


'use strict';

module.exports = function (alpha) {
    if (alpha === undefined) {
        return 1;
    }

    alpha = Number(alpha);
    alpha = Math.min(alpha, 1);
    alpha = Math.max(alpha, 0);
    return alpha;
};


