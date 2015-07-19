import expect from 'expect';
import {getBigger, getBiggestOfThree} from '../src/numbers_03.js';

describe('Given two numbers', function(){
  it('returns the biggest when is b', function(){
    var a = 10;
    var b = 20;
    expect(getBigger(a,b)).toBe(b);
  })

  it('returns the biggest when is a', function(){
    var a = 20;
    var b = 10;
    expect(getBigger(a, b)).toBe(a);
  })
});

describe('Given three numbers', function(){
  it('returns the biggest of all three when is c', function(){
    var a = 10;
    var b = 20;
    var c = 30;
    getBigger(a, b);
    expect(getBiggestOfThree(getBigger(a, b), c)).toBe(c);
  })

  it('returns the biggest of all three when is b', function(){
    var a = 10;
    var b = 30;
    var c = 20;
    getBigger(a, b);
    expect(getBiggestOfThree(getBigger(a, b), c)).toBe(b);
  })
});