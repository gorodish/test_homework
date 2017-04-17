var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should start with runningTotal of 0', function(){
    assert.equal(calculator.runningTotal, 0);
  });

  it('should add two numbers', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 6);
  });

  it('should subtract one number from another', function(){
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  });

  it('should multiply two numbers', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 10);
  });

  it('should divide one number into another', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5);
  });

  it('show the number clicked', function(){
    calculator.numberClick(1);
    assert.equal(calculator.runningTotal, 1);
  });

  it('should calculate based on the operator clicked', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 10);
  });

  it('should clear display when clear is clicked', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.clear;
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 6);
  });

  // it('should currently return infinity for div/0', function(){
  //   calculator.numberClick(5);
  //   calculator.operatorClick('+');
  //   calculator.numberClick(5);
  //   calculator.operatorClick('=');
  //   calculator.operatorClick('/');
  //   calculator.numberClick(0);
  //   calculator.operatorClick('=');
  //   assert.equal(calculator.runningTotal, "Infinity");
  // });

  it('should divide by 0', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    calculator.operatorClick('/');
    calculator.numberClick(0);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 0);
  });

});
