var expect    = require('chai').expect;
const converter = require('./converterFunctions');

describe("Roman Numeral/Arabic Decimal Converter", function() {
  describe("Roman Numeral to Decimal", function() {
    it("converts user input of RN to decimal equivalent", function() {
      var twentyR = converter.toDecimal('I');
      expect(twentyR).to.equal(1);
      var twentyR = converter.toDecimal('IV');
      expect(twentyR).to.equal(4);
      var twentyR = converter.toDecimal('XIX');
      expect(twentyR).to.equal(19);
    	var twentyR = converter.toDecimal('XX');
    	expect(twentyR).to.equal(20);
      var twentyR = converter.toDecimal('XL');
      expect(twentyR).to.equal(40);
      var twentyR = converter.toDecimal('L');
      expect(twentyR).to.equal(50);
      var twentyR = converter.toDecimal('XC');
      expect(twentyR).to.equal(90);
      var twentyR = converter.toDecimal('CD');
      expect(twentyR).to.equal(400);
      var twentyR = converter.toDecimal('D');
      expect(twentyR).to.equal(500);
      var twentyR = converter.toDecimal('CM');
      expect(twentyR).to.equal(900);
      var twentyR = converter.toDecimal('M');
      expect(twentyR).to.equal(1000);
      var twentyR = converter.toDecimal('MD');
      expect(twentyR).to.equal(1500);

    });
  });

  describe("Decimal to Roman Numeral", function() {
    it("converts user input of decimal to RN equivalent", function() {
      var nineteenD = converter.toRoman(1);
      expect(nineteenD).to.equal('I');
      var nineteenD = converter.toRoman(4);
      expect(nineteenD).to.equal('IV');
      var nineteenD = converter.toRoman(19);
      expect(nineteenD).to.equal('XIX');
      var twentyD = converter.toRoman(20);
      expect(twentyD).to.equal('XX');
      var fourtyD = converter.toRoman(40);
      expect(fourtyD).to.equal('XL');
      var fiftyD = converter.toRoman(50);
      expect(fiftyD).to.equal('L');
      var ninetyD = converter.toRoman(90);
      expect(ninetyD).to.equal('XC');
      var fourhundredD = converter.toRoman(400);
      expect(fourhundredD).to.equal('CD');
      var fivehundredD = converter.toRoman(500);
      expect(fivehundredD).to.equal('D');
      var ninehundredD = converter.toRoman(900);
      expect(ninehundredD).to.equal('CM');
      var oneThousandD = converter.toRoman(1000);
      expect(oneThousandD).to.equal('M');
      var fifteenHundreed = converter.toRoman(1500);
      expect(fifteenHundreed).to.equal('MD');
    });
  });

});