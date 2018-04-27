/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var rgb = require('../../src/index.js').rgb;

describe('.rgb', function () {
    it('.lighten', function () {
        expect(
            rgb.lighten({
                r: 255,
                g: 255,
                b: 0
            }, 0.3)
        ).toEqual({
            r: 255,
            g: 255,
            b: 77
        });
    });

    it('.darken', function () {
        expect(
            rgb.darken({
                r: 255,
                g: 255,
                b: 0
            }, 0.3)
        ).toEqual({
            r: 178,
            g: 179,
            b: 0
        });
    });
});

