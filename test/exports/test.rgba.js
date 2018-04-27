/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var rgba = require('../../src/index.js').rgba;

describe('.rgba', function () {

    it('.blacken', function () {
        expect(
            rgba.blacken({
                r: 255,
                g: 255,
                b: 0
            }, 0.3)
        ).toEqual({
            r: 255,
            g: 255,
            b: 102,
            a: 0
        });
    });

    it('.bright', function () {
        expect(
            rgba.bright({
                r: 255,
                g: 255,
                b: 0
            })
        ).toEqual(false);
    });

    it('.darken', function () {
        expect(
            rgba.darken({
                r: 255,
                g: 255,
                b: 0,
                a: 0.3
            }, 0.3)
        ).toEqual({
            r: 178,
            g: 179,
            b: 0,
            a: 0.3
        });
    });

    it('.invert', function () {
        expect(
            rgba.invert({
                r: 255,
                g: 255,
                b: 0
            })
        ).toEqual({
            r: 0,
            g: 0,
            b: 255,
            a: 0
        });
    });

    it('.lighten', function () {
        expect(
            rgba.lighten({
                r: 255,
                g: 255,
                b: 0
            }, 0.3)
        ).toEqual({
            r: 255,
            g: 255,
            b: 77,
            a: 0
        });
    });

    it('.whiten', function () {
        expect(
            rgba.whiten({
                r: 255,
                g: 255,
                b: 0,
                a: 0.3
            }, 0.3)
        ).toEqual({
            r: 153,
            g: 153,
            b: 0,
            a: 0.3
        });
    });

    it('.mix', function () {
        expect(
            rgba.mix({
                r: 255,
                g: 255,
                b: 0,
                a: 0.3
            },{
                r: 123,
                g: 231,
                b: 111,
                a: 0.6
            }, 0.8)
        ).toEqual({
            r: 213,
            g: 247,
            b: 35,
            a: 0.36
        });
    });
});

