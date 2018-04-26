/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:03
 * @update 2018-04-26 09:03
 */


'use strict';

var expect = require('chai-jasmine').expect;
var rgb = require('../src/rgb.js');

describe('rgb', function () {
    it('.parse', function () {
        expect(rgb.parse('rgb(255, 255, 255)')).toEqual({
            r: 255,
            g: 255,
            b: 255
        });
        expect(function () {
            rgb.parse('rgba(0, 0, 1)');
        }).toThrow();
    });

    it('.hex', function () {
        expect(rgb.hex({
            r: 255,
            g: 255,
            b: 255
        })).toEqual('#ffffff');
        expect(rgb.hex({
            r: 255,
            g: 38,
            b: 0
        })).toEqual('#ff2600');
    });

    it('.hsl', function () {
        expect(rgb.hsl({
            r: 255,
            g: 255,
            b: 255
        })).toEqual({
            h: 0,
            s: 0,
            l: 1
        });
        expect(rgb.hsl({
            r: 255,
            g: 38,
            b: 0
        })).toEqual({
            h: 0.02483660130718954,
            s: 1,
            l: 0.5
        });
    });

    it('.stringify', function () {
        expect(rgb.stringify({
            r: 255,
            g: 255,
            b: 255
        })).toEqual('rgb(255, 255, 255)');
    });
});



