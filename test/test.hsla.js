/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:03
 * @update 2018-04-26 09:03
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hsla = require('../src/hsla.js');

describe('hsla', function () {
    it('.parse', function () {
        expect(hsla.parse('hsla(0, 0, 1, .1)')).toEqual({
            h: 0,
            l: 0,
            s: 1,
            a: 0.1
        });
        expect(function () {
            hsla.parse('hslal(0, 0, 1)');
        }).toThrow();
    });

    it('.toHex', function () {
        expect(hsla.toHex({
            h: 0,
            s: 0,
            l: 1,
            a: 0.1
        })).toEqual('#ffffff');
    });

    it('.toRgba', function () {
        expect(hsla.toRgba({
            h: 0,
            s: 0,
            l: 1,
            a: 0.1
        })).toEqual({
            r: 255,
            g: 255,
            b: 255,
            a: 0.1
        });
    });

    it('.stringify', function () {
        expect(hsla.stringify({
            h: 0,
            s: 0,
            l: 1,
            a: 0.1
        })).toEqual('hsla(0, 0, 1, 0.1)');
    });
});



