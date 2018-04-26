/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hsla = require('../../src/index.js').hsla;

describe('.hsla', function () {
    it('.lighten', function () {
        expect(
            hsla.lighten({
                h: 1,
                s: 1,
                l: 0.5,
                a: 0.5
            }, 0.3)
        ).toEqual({
            h: 1,
            s: 1,
            l: 0.65,
            a: 0.5
        });
    });

    it('.darken', function () {
        expect(
            hsla.darken({
                h: 1,
                s: 1,
                l: 0.5,
                a: 0.5
            }, 0.3)
        ).toEqual({
            h: 1,
            s: 1,
            l: 0.35,
            a: 0.5
        });
    });
});

