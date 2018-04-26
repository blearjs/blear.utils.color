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
            l: 0,
            s: 1
        });
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
    });

    it('.stringify', function () {
        expect(hsl.stringify({
            h: 0,
            s: 0,
            l: 1
        })).toEqual('hsl(0, 0, 1)');
    });
});



