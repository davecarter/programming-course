import expect from 'expect';
import {getBiggest} from '../src/david.js';

describe('Given two numbers', function(){
  it('returns the biggest when is b', function(){
    var a = 10;
    var b = 20;
    expect(getBiggest(a,b)).toBe(b);
  })

  it('returns the biggest when is a', function(){
    var a = 20;
    var b = 10;
    expect(getBiggest(a, b)).toBe(a);
  })
});

describe('Given three numbers', function(){
  it('gets the biggest of all three numbers', function(){
    var a = 10;
    var b = 20;
    var c = 30;
    expect(getBiggest(a, b)).toBe(b);
    expect(getBiggest(b, c)).toBe(c);    
  })
})

