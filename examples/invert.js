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

var change = function () {
    outputEl.style.backgroundColor = color.hex.invert(colorEl.value);
};

colorEl.onchange = change;
change();



