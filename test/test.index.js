/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var color = require('../src/index.js');

describe('index', function () {
    it('hex.lighten', function () {
        expect(
            color.hex.lighten('#ff9900', 0.3)
        ).toEqual('#ffb84d');
    });
    it('hex.darken', function () {
        expect(
            color.hex.darken('#ff9900', 0.3)
        ).toEqual('#b36b00');
    });
});

