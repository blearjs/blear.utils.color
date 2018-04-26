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
    it('.parse', function () {
        expect(hsl.parse('hsl(0, 0, 1)')).toEqual({
            h: 0,
            s: 0,
            l: 1
        });
        expect(function () {
            hsl.parse('hsll(0, 0, 1)');
        }).toThrow();
    });

    it('.hex', function () {
        expect(hsl.hex({
            h: 0,
            s: 0,
            l: 1
        })).toEqual('#ffffff');
    });

    it('.rgb', function () {
        expect(hsl.rgb({
            h: 0,
            s: 0,
            l: 1
        })).toEqual({
            r: 255,
            g: 255,
            b: 255
        });
        expect(hsl.rgb({
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



