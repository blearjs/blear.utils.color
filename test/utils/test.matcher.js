/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var matcher = require('../../src/utils/matcher');

describe('index', function () {
    it('.rgba', function () {
        expect(matcher.rgba('rgb(1,2,3)')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgb(1,2,3)')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgba(1,2,3,1)')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgba(1,2,3,1 )')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgba(1,2,3, 1 )')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgba(1,2,3  ,  1  )')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgba(1,2,  3  ,  1  )')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgba(1,2  ,  3  ,  1  )')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgba(1,  2  ,  3  ,  1  )')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgba(1  ,  2  ,  3  ,  1  )')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgba(  1  ,  2  ,  3  ,  1  )')).toEqual([1, 2, 3, 1]);
        expect(matcher.rgba('rgba   (  1  ,  2  ,  3  ,  1  )')).toEqual([1, 2, 3, 1]);
        expect(function () {
            matcher.rgba('rgba(1,2,3)')
        }).toThrow();
        expect(function () {
            matcher.rgba('rgb(1,2,3,4)')
        }).toThrow();
        expect(function () {
            matcher.rgba('hsl(1,2,3)')
        }).toThrow();
        expect(function () {
            matcher.rgba('hsl(1,2,3,4)')
        }).toThrow();
        expect(function () {
            matcher.rgba('hsla(1,2,3)')
        }).toThrow();
        expect(function () {
            matcher.rgba('hsla(1,2,3,4)')
        }).toThrow();
    });

    it('.hsla', function () {
        expect(matcher.hsla('hsl(1,2,3%)')).toEqual([1, 2, 0.03, 1]);
        expect(matcher.hsla('hsl(0, 0, 1)')).toEqual([0, 0, 1, 1]);
    });
});

