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

var ratio = 0.618033988749895;
var randomHex = function () {
    var l = random(0, 100) / 100;
    return color.hsl.toHex({
        h: random(0, 360),
        s: random(0, 100) / 100,
        l: l
    });
};

var start = 0;
var end = 100;
var html = '';

for (; start < end; start++) {
    var hex = randomHex();
    var black = color.hex.bright(hex);
    html += '<li class="color" style="' +
        'background-color:' + hex + ';' +
        'color: ' + (black ? 'black' : 'white') + ';' +
        '">' +
        start +
        '</li>';
}

document.getElementById('ret').innerHTML = html;
