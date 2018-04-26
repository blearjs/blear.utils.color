/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:03
 * @update 2018-04-26 09:03
 */


'use strict';

var expect = require('chai-jasmine').expect;
var rgba = require('../src/rgba.js');

describe('rgba', function () {
    it('.parse', function () {
        expect(rgba.parse('rgba(255, 255, 255, .1)')).toEqual({
            r: 255,
            g: 255,
            b: 255,
            a: 0.1
        });
    });

    it('.hex', function () {
        expect(rgba.hex(255, 255, 255, .1)).toEqual('#ffffff');
    });

    it('.hsl', function () {
        expect(rgba.hsl(255, 255, 255, .1)).toEqual({
            h: 0,
            s: 0,
            l: 1,
            a: 0.1
        });
    });

    it('.stringify', function () {
        expect(rgba.stringify({
            r: 255,
            g: 255,
            b: 255,
            a: 0.1
        })).toEqual('rgba(255, 255, 255, 0.1)');
    });
});



