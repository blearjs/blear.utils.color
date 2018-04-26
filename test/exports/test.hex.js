/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hex = require('../../src/index.js').hex;

describe('.hex', function () {
    it('.black', function () {
        expect(
            hex.black('#841d24')
        ).toEqual(true);
        expect(
            hex.black('#fbffce')
        ).toEqual(false);
    });

    it('.lighten', function () {
        expect(
            hex.lighten('#ff9900', 0.3)
        ).toEqual('#ffb84d');
    });

    it('.darken', function () {
        expect(
            hex.darken('#ff9900', 0.3)
        ).toEqual('#b36b00');
    });
});

