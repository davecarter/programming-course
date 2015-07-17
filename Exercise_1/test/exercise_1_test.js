import expect from 'expect';
import {getTheGreatestNumber, compareThreeNumbers} from '../src/exercise1';

describe('Given two numbers', function(){
  it('returns the first number if it is the greatest', function() {   
    expect(getTheGreatestNumber(100, 10)).toBe(100);
  });

  it('returns any of the numbers if they are equal', function() {
    expect(getTheGreatestNumber(100, 100)).toBe(100);
  });

  it('returns the second number if it is the greatest', function(){
    expect(getTheGreatestNumber(100, 1000)).toBe(1000);
  });
});

describe('Given three numbers', function(){
  it('returns the first number if it is the greatest', function(){
    expect(compareThreeNumbers(100, 50, 10)).toBe(100);
    expect(compareThreeNumbers(100, 10, 50)).toBe(100);
  });

  it('returns the second number if it is the greatest', function() {
    expect(compareThreeNumbers(10, 100, 50)).toBe(100);
    expect(compareThreeNumbers(50, 100, 10)).toBe(100);
  });

  it('returns the third number if it is the greatest', function(){
    expect(compareThreeNumbers(10, 50, 100)).toBe(100);
    expect(compareThreeNumbers(50, 10, 100)).toBe(100);
  });
});

