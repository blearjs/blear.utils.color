/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:03
 * @update 2018-04-26 09:03
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hsla = require('../../src/sources/hsla.js');

describe('hsla', function () {
    it('.parse', function () {
        expect(hsla.parse('hsl(0, 0, 1)')).toEqual({
            h: 0,
            s: 0,
            l: 1,
            a: 1
        });
        expect(hsla.parse('hsl(0, 37.78%, 100%)')).toEqual({
            h: 0,
            s: 0.3778,
            l: 1,
            a: 1
        });
        expect(function () {
            hsla.parse('hsll(0, 0, 1)');
        }).toThrow();
    });

    it('.toHex', function () {
        expect(hsla.toHex({
            h: 0,
            s: 0,
            l: 1
        })).toEqual('#ffffff');
        expect(hsla.toHex({
            h: 9,
            s: 1,
            l: 0.5
        })).toEqual('#ff2600');
    });

    it('.toRgba', function () {
        expect(hsla.toRgba({
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
        expect(hsla.toRgba({
            h: 399,
            s: 1,
            l: 0.5
        })).toEqual({
            r: 255,
            g: 166,
            b: 0,
            a: 1
        });
    });

    it('.stringify', function () {
        expect(hsla.stringify({
            h: 0,
            s: 0,
            l: 1
        })).toEqual('hsl(0, 0, 1)');
    });
});



