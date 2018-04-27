/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var hsla = require('../../src/index.js').hsla;

describe('.hsla', function () {

    it('.blacken', function () {
        expect(
            hsla.blacken({
                h: 1,
                s: 1,
                l: 0.5
            }, 0.3)
        ).toEqual({
            h: 1,
            s: 1,
            l: 0.7,
            a: 0
        });
    });

    it('.bright', function () {
        expect(
            hsla.bright({
                h: 1,
                s: 1,
                l: 0.3
            })
        ).toEqual(false);
        expect(
            hsla.bright({
                h: 1,
                s: 1,
                l: 0.7
            })
        ).toEqual(true);
    });

    it('.darken', function () {
        expect(
            hsla.darken({
                h: 1,
                s: 1,
                l: 0.5,
                a: 0.3
            }, 0.3)
        ).toEqual({
            h: 1,
            s: 1,
            l: 0.35,
            a: 0.3
        });
    });

    it('.invert', function () {
        expect(
            hsla.invert({
                h: 1,
                s: 1,
                l: 0.5,
                a: 0.3
            })
        ).toEqual({
            h: 180.94117647058823,
            s: 1,
            l: 0.5,
            a: 0.3
        });
    });

    it('.lighten', function () {
        expect(
            hsla.lighten({
                h: 1,
                s: 1,
                l: 0.5
            }, 0.3)
        ).toEqual({
            h: 1,
            s: 1,
            l: 0.65,
            a: 0
        });
    });

    it('.mix', function () {
        expect(
            hsla.mix({
                h: 1,
                s: 1,
                l: 0.5
            },{
                h: 90,
                s: 1,
                l: 0.1
            }, 0.3)
        ).toEqual({
            h: 23.368421052631582,
            s: 1,
            l: 0.18627450980392157,
            a: 0
        });
    });

    it('.whiten', function () {
        expect(
            hsla.whiten({
                h: 1,
                s: 1,
                l: 0.5
            }, 0.3)
        ).toEqual({
            h: 1,
            s: 1,
            l: 0.3,
            a: 0
        });
    });

});

