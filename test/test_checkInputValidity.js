var expect    = require('chai').expect;
const checkInputValidity = require('./checkInputValidity');

  describe("User input is correctly handled per the rules", function(){
      var repeatI = checkInputValidity.isValid_repeat('IIII');
      expect(repeatI).to.equal(false);
  });

  describe("User input is validated correctly", function() {
  describe("Repeated numerals caught", function() {
    it("Disallows repeated I,X,C more than three times consecutively", function() {
      var repeatI = checkInputValidity.isValid_repeat('IIII');
      expect(repeatI).to.equal(false);
      var nonRepeatI = checkInputValidity.isValid_repeat('III');
      expect(nonRepeatI).to.equal(true);
      var repeatV = checkInputValidity.isValid_repeat('XXXX');
      expect(repeatV).to.equal(false);
      var nonRepeatV = checkInputValidity.isValid_repeat('XXX');
      expect(nonRepeatV).to.equal(true);
      var repeatC = checkInputValidity.isValid_repeat('CCCC');
      expect(repeatC).to.equal(false);
      var nonRepeatC = checkInputValidity.isValid_repeat('CCC');
      expect(nonRepeatC).to.equal(true);
    });
    it("Disallows any repetition of V,L,D", function() {
      var repeatV = checkInputValidity.isValid_repeat('VV');
      expect(repeatV).to.equal(false);
      var nonRepeatV = checkInputValidity.isValid_repeat('V');
      expect(nonRepeatV).to.equal(true);
      var repeatL = checkInputValidity.isValid_repeat('LL');
      expect(repeatL).to.equal(false);
      var nonRepeatL = checkInputValidity.isValid_repeat('L');
      expect(nonRepeatL).to.equal(true);
      var repeatD = checkInputValidity.isValid_repeat('DD');
      expect(repeatD).to.equal(false);
      var nonRepeatD = checkInputValidity.isValid_repeat('D');
      expect(nonRepeatD).to.equal(true);
    });
  });
  describe("Illegal subtraction caught", function() {
    it("Enforces the rule: The '1' symbols ('I', 'X', and 'C') can only be subtracted from the 2 next highest values", function() {
      var subtractILegalV = checkInputValidity.isValid_subtractOnes('IV');
  	  expect(subtractILegalV).to.equal(true);
  	  var subtractILegalX = checkInputValidity.isValid_subtractOnes('IX');
  	  expect(subtractILegalX).to.equal(true);
  	  var subtractILegalC = checkInputValidity.isValid_subtractOnes('IC');
  	  expect(subtractILegalC).to.equal(false);

  	  var subtractXLegalL = checkInputValidity.isValid_subtractOnes('XL');
  	  expect(subtractXLegalL).to.equal(true);
  	  var subtractXLegalD = checkInputValidity.isValid_subtractOnes('XC');
  	  expect(subtractXLegalD).to.equal(true);
  	  var subtractXLegalM = checkInputValidity.isValid_subtractOnes('XM');
  	  expect(subtractXLegalM).to.equal(false);

  	  var subtractXLegalL = checkInputValidity.isValid_subtractOnes('XL');
  	  expect(subtractXLegalL).to.equal(true);
  	  var subtractXLegalD = checkInputValidity.isValid_subtractOnes('XC');
  	  expect(subtractXLegalD).to.equal(true);
  	  var subtractXLegalM = checkInputValidity.isValid_subtractOnes('XM');
  	  expect(subtractXLegalM).to.equal(false);
    });


    it("Disallows more than one subtraction per numeral", function() {
      var subtractI = checkInputValidity.isValid_subtractPerNumeral('IV');
      expect(subtractI).to.equal(true);
      var subtractII = checkInputValidity.isValid_subtractPerNumeral('IIV');
      expect(subtractII).to.equal(false);
      var subtractX = checkInputValidity.isValid_subtractPerNumeral('XC');
      expect(subtractX).to.equal(true);
      var subtractXX = checkInputValidity.isValid_subtractPerNumeral('XXC');
      expect(subtractXX).to.equal(false);
    });

    it("Disallows subtraction of '5' symbols", function() {
      var subtractV = checkInputValidity.isValid_illegalSubtract('VX');
      expect(subtractV).to.equal(false);
      var subtractI = checkInputValidity.isValid_illegalSubtract('IX');
      expect(subtractI).to.equal(true);

      var subtractL = checkInputValidity.isValid_illegalSubtract('LD');
      expect(subtractL).to.equal(false);
      var subtractX = checkInputValidity.isValid_illegalSubtract('XD');
      expect(subtractX).to.equal(true);

      var subtractD = checkInputValidity.isValid_illegalSubtract('DM');
      expect(subtractD).to.equal(false);
    });
  });

  describe("Illegal subtraction caught", function() {
      var validInput = checkInputValidity.isNumeralValid('IV');
      expect(validInput).to.equal(true);
      var iRepeat = checkInputValidity.isNumeralValid('IIII');
      expect(iRepeat).to.equal(false);
      var xRepeat = checkInputValidity.isNumeralValid('XXC');
      expect(xRepeat).to.equal(false);
  });
});