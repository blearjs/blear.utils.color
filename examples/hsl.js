/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 12:31
 * @update 2018-04-26 12:31
 */


'use strict';

var color = require('../src/index');

var outputEl = document.getElementById('output');
var range1El = document.getElementById('range1');
var range2El = document.getElementById('range2');
var range3El = document.getElementById('range3');

var change = function () {
    var h = range1El.value * 1;
    var s = range2El.value * 1;
    var l = range3El.value * 1;

    outputEl.style.backgroundColor = color.hsl.toHex({
        h: h,
        s: s,
        l: l
    })
};

range1El.onchange = change;
range2El.onchange = change;
range3El.onchange = change;
change();



