/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hex = require('../../src/index.js').hex;

describe('.hex', function () {

    it('.blacken', function () {
        expect(
            hex.blacken('#ff9900', 0.3)
        ).toEqual('#ffc266');
        expect(
            hex.blacken('#ff9900', 0)
        ).toEqual('#ffffff');
        expect(
            hex.blacken('#ff9900', 1)
        ).toEqual('#000000');
    });

    it('.bright', function () {
        expect(
            hex.bright('#841d24')
        ).toEqual(false);
        expect(
            hex.bright('#fbffce')
        ).toEqual(true);
    });

    it('.darken', function () {
        expect(
            hex.darken('#ff9900', 0.3)
        ).toEqual('#b36b00');
    });

    it('.invert', function () {
        expect(
            hex.invert('#ff9900')
        ).toEqual('#0066ff');
    });

    it('.lighten', function () {
        expect(
            hex.lighten('#ff9900', 0.3)
        ).toEqual('#ffb84d');
    });

    it('.mix', function () {
        expect(
            hex.mix(
                '#ff9900',
                '#7ac2ff',
                0.3
            )
        ).toEqual('#a2b6b3');
    });

    it('.whiten', function () {
        expect(
            hex.whiten('#ff9900', 0.3)
        ).toEqual('#995c00');
        expect(
            hex.whiten('#ff9900', 0)
        ).toEqual('#000000');
        expect(
            hex.whiten('#ff9900', 1)
        ).toEqual('#ffffff');
    });

});

