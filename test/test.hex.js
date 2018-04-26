/**
 * 文件描述
 * @author ydr.me
 * @create 2018-04-26 09:03
 * @update 2018-04-26 09:03
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hex = require('../src/hex.js');

describe('hex', function () {
    it('.parse', function () {
        expect(hex.parse('#ffffff')).toEqual({
            r: 255,
            g: 255,
            b: 255
        });
        expect(hex.parse('#fff')).toEqual({
            r: 255,
            g: 255,
            b: 255
        });
    });
});



