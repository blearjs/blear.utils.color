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
        expect(hex.toRgba('#ffffff')).toEqual({
            r: 255,
            g: 255,
            b: 255,
            a: 0
        });
        expect(hex.toRgba('#fff')).toEqual({
            r: 255,
            g: 255,
            b: 255,
            a: 0
        });
    });
});



