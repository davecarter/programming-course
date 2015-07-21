import expect from 'expect';
import {isMultipleOfFive, getMultiplesOfFive, getSumOfMultiples} from '../src/iterators.js'

describe('Given a number', function(){
  it('return true if it is a multiple of 5', function(){
    expect(isMultipleOfFive(5)).toBe(true);
    expect(isMultipleOfFive(10)).toBe(true);
    expect(isMultipleOfFive(1)).toBe(false);
    expect(isMultipleOfFive(9)).toBe(false);
  });
});

describe('Given two numbers', function(){
  it('Gets all the multiples of five between them', function(){
    // expect(getMultiplesOfFive(1, 5)).toInclude(5);
    expect(getMultiplesOfFive(1, 10)).toInclude(5).toInclude(10);
  });

  xit('Gets the sum of all the multiples of five between them', function(){
    expect(getSumOfMultiples(1, 5)).toBe(5);
    expect(getSumOfMultiples(1, 10)).toBe(15);
    expect(getSumOfMultiples(1, 20)).toBe(50);
  })
});