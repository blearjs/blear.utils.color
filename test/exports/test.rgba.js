/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var rgba = require('../../src/index.js').rgba;

describe('.rgba', function () {
    it('.lighten', function () {
        expect(
            rgba.lighten({
                r: 255,
                g: 255,
                b: 0,
                a: 0.5
            }, 0.3)
        ).toEqual({
            r: 255,
            g: 255,
            b: 77,
            a: 0.5
        });
    });

    it('.darken', function () {
        expect(
            rgba.darken({
                r: 255,
                g: 255,
                b: 0,
                a: 0.5
            }, 0.3)
        ).toEqual({
            r: 178,
            g: 179,
            b: 0,
            a: 0.5
        });
    });
});

