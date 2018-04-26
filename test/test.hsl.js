/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:03
 * @update 2018-04-26 09:03
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hsl = require('../src/hsl.js');

describe('hsl', function () {
    it('main', function () {
        expect(hsl('hsl(0, 0, 1)')).toEqual({
            h: 0,
            s: 0,
            l: 1
        });
        expect(function () {
            hsl('hsll(0, 0, 1)');
        }).toThrow();
    });

    it('.toHex', function () {
        expect(hsl.toHex({
            h: 0,
            s: 0,
            l: 1
        })).toEqual('#ffffff');
        expect(hsl.toHex({
            h: 0.02483660130718954,
            s: 1,
            l: 0.5
        })).toEqual('#ff2600');
    });

    it('.toRgb', function () {
        expect(hsl.toRgb({
            h: 0,
            s: 0,
            l: 1
        })).toEqual({
            r: 255,
            g: 255,
            b: 255
        });
        expect(hsl.toRgb({
            h: 0.02483660130718954,
            s: 1,
            l: 0.5
        })).toEqual({
            r: 255,
            g: 38,
            b: 0
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



