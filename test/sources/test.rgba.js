/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:03
 * @update 2018-04-26 09:03
 */


'use strict';

var expect = require('chai-jasmine').expect;
var rgba = require('../../src/sources/rgba.js');

describe('rgba', function () {
    it('.parse', function () {
        expect(rgba.parse('rgb(255, 255, 255)')).toEqual({
            r: 255,
            g: 255,
            b: 255,
            a: 1
        });
        expect(function () {
            rgba.parse('rgb(0, 0, 1, 1)');
        }).toThrow();
        expect(function () {
            rgba.parse('rgba(0, 0, 1)');
        }).toThrow();
    });

    it('.toHex', function () {
        expect(rgba.toHex({
            r: 255,
            g: 255,
            b: 255
        })).toEqual('#ffffff');
        expect(rgba.toHex({
            r: 255,
            g: 38,
            b: 0
        })).toEqual('#ff2600');
        expect(rgba.toHex({
            r: 1,
            g: 22,
            b: 123,
            a: 1
        })).toEqual('#01167b');
        expect(rgba.toHex({
            r: 1,
            g: 3,
            b: 5,
            a: 0.7
        })).toEqual('#010305b3');
    });

    it('.toHsl', function () {
        expect(rgba.toHsla({
            r: 255,
            g: 255,
            b: 255
        })).toEqual({
            h: 0,
            s: 0,
            l: 1,
            a: 1
        });
        expect(rgba.toHsla({
            r: 255,
            g: 38,
            b: 0
        })).toEqual({
            h: 8.941176470588236,
            s: 1,
            l: 0.5,
            a: 1
        });
        expect(rgba.toHsla({
            r: 255,
            g: 0,
            b: 0,
            a: 0.5
        })).toEqual({
            h: 0,
            s: 1,
            l: 0.5,
            a: 0.5
        });
        expect(rgba.toHsla({
            r: 0,
            g: 255,
            b: 0
        })).toEqual({
            h: 120,
            s: 1,
            l: 0.5,
            a: 1
        });
        expect(rgba.toHsla({
            r: 0,
            g: 0,
            b: 255
        })).toEqual({
            h: 240,
            s: 1,
            l: 0.5,
            a: 1
        });
    });

    it('.stringify', function () {
        expect(rgba.stringify({
            r: 255,
            g: 255,
            b: 255
        })).toEqual('rgb(255, 255, 255)');
    });
});



