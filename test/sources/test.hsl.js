/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:03
 * @update 2018-04-26 09:03
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hsl = require('../../src/sources/hsla.js');

describe('hsl', function () {
    it('.parse', function () {
        expect(hsl.parse('hsl(0, 0, 1)')).toEqual({
            h: 0,
            s: 0,
            l: 1,
            a: 0
        });
        expect(hsl.parse('hsl(0, 37.78%, 100%)')).toEqual({
            h: 0,
            s: 0.3778,
            l: 1,
            a: 0
        });
        expect(function () {
            hsl.parse('hsll(0, 0, 1)');
        }).toThrow();
    });

    it('.toHex', function () {
        expect(hsl.toHex({
            h: 0,
            s: 0,
            l: 1
        })).toEqual('#ffffff');
        expect(hsl.toHex({
            h: 9,
            s: 1,
            l: 0.5
        })).toEqual('#ff2600');
    });

    it('.toRgb', function () {
        expect(hsl.toRgba({
            h: 0,
            s: 0,
            l: 1,
            a: 0
        })).toEqual({
            r: 255,
            g: 255,
            b: 255,
            a: 0
        });
        expect(hsl.toRgba({
            h: 9,
            s: 1,
            l: 0.5
        })).toEqual({
            r: 255,
            g: 38,
            b: 0,
            a: 0
        });
    });

    it('.stringify', function () {
        expect(hsl.stringify({
            h: 0,
            s: 0,
            l: 1
        })).toEqual('hsl(0, 0, 1)');
    });
});



