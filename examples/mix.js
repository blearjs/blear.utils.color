/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 12:31
 * @update 2018-04-26 12:31
 */


'use strict';

var color = require('../src/index');

var outputEl = document.getElementById('output');
var color1El = document.getElementById('color1');
var color2El = document.getElementById('color2');
var rangeEl = document.getElementById('range');

var change = function () {
    outputEl.style.backgroundColor = color.hex.mix(
        color1El.value,
        color2El.value,
        rangeEl.value
    );
};

color1El.onchange = change;
color2El.onchange = change;
rangeEl.onchange = change;
change();



