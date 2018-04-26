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
    it('.toRgb', function () {
        expect(hex.toRgb('#ffffff')).toEqual({
            r: 255,
            g: 255,
            b: 255
        });
        expect(hex.toRgb('#fff')).toEqual({
            r: 255,
            g: 255,
            b: 255
        });
    });
});



