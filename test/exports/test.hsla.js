/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hsl = require('../../src/index.js').hsl;

describe('.hsl', function () {
    it('.lighten', function () {
        expect(
            hsl.lighten({
                h: 1,
                s: 1,
                l: 0.5
            }, 0.3)
        ).toEqual({
            h: 1,
            s: 1,
            l: 0.65
        });
    });

    it('.darken', function () {
        expect(
            hsl.darken({
                h: 1,
                s: 1,
                l: 0.5
            }, 0.3)
        ).toEqual({
            h: 1,
            s: 1,
            l: 0.35
        });
    });
});

