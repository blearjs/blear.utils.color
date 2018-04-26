/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var color = require('../src/index.js');

describe('测试文件', function () {
    it('hex.lighten', function () {
        color(color.hex.parse('#ff9900').lighten(0.3));
    });
});

