/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 12:31
 * @update 2018-04-26 12:31
 */


'use strict';

var color = require('../src/index');

var outputEl = document.getElementById('output');
var colorEl = document.getElementById('color');
var rangeEl = document.getElementById('range');

var change = function () {
    var hex = colorEl.value;
    var ratio = rangeEl.value * 1;

    outputEl.style.backgroundColor = color.hex.whiten(hex, ratio);
};

colorEl.onchange = change;
rangeEl.onchange = change;
change();



