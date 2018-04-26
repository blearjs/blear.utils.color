/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 12:31
 * @update 2018-04-26 12:31
 */


'use strict';

var color = require('../src/index');

var random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var randomHsl = function () {
    return color.hsl.toHex({
        h: random(1, 100) / 100,
        s: random(30, 90) / 100,
        l: random(30, 70) / 100
    });
};

var start = 0;
var end = 100;
var html = '';

for (; start < end; start++) {
    html += '<li class="color" style="background-color:' + randomHsl() + '">' +
        start +
        '</li>';
}

document.getElementById('ret').innerHTML = html;
