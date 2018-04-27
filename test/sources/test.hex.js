/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:03
 * @update 2018-04-26 09:03
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hex = require('../../src/sources/hex.js');

describe('hex', function () {
    it('.toRgba', function () {
        expect(function () {
            hex.toRgba('#12')
        }).toThrow();
        expect(hex.toRgba('#123')).toEqual({
            r: from16('11'),
            g: from16('22'),
            b: from16('33'),
            a: from16('ff') / 255
        });
        expect(hex.toRgba('#1234')).toEqual({
            r: from16('11'),
            g: from16('22'),
            b: from16('33'),
            a: from16('44') / 255
        });
        expect(function () {
            hex.toRgba('#12345')
        }).toThrow();
        expect(hex.toRgba('#123456')).toEqual({
            r: from16('12'),
            g: from16('34'),
            b: from16('56'),
            a: from16('ff') / 255
        });
        expect(function () {
            hex.toRgba('#1234567')
        }).toThrow();
        expect(hex.toRgba('#12345678')).toEqual({
            r: from16('12'),
            g: from16('34'),
            b: from16('56'),
            a: from16('78') / 255
        });
    });

    it('.toHsla', function () {
        expect(function () {
            hex.toHsla('#12')
        }).toThrow();
        expect(hex.toHsla('#123')).toEqual({
            h: 210,
            s: 0.5000000000000001,
            l: 0.13333333333333333,
            a: 1
        });
        expect(hex.toHsla('#1234')).toEqual({
            h: 210,
            s: 0.5000000000000001,
            l: 0.13333333333333333,
            a: 0.26666666666666666
        });
        expect(function () {
            hex.toHsla('#12345')
        }).toThrow();
        expect(hex.toHsla('#123456')).toEqual({
            h: 210,
            s: 0.653846153846154,
            l: 0.20392156862745098,
            a: 1
        });
        expect(function () {
            hex.toHsla('#1234567')
        }).toThrow();
        expect(hex.toHsla('#12345678')).toEqual({
            h: 210,
            s: 0.653846153846154,
            l: 0.20392156862745098,
            a: 0.47058823529411764
        });
    });
});


function from16(str) {
    return parseInt(str, 16);
}

