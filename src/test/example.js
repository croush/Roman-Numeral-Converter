var expect    = require("chai").expect;
const converter = require('.converterFunctions');

describe("Roman Numeral/Arabic Decimal Converter", function() {
  describe("Roman Numeral to Decimal", function() {
    it("converts user input of RN to decimal equivalent", function() {
    	var twenty = converter.toRoman(20);
    	expect(twenty).to.equal("XX");
    });
  });

  describe("Decimal to Roman Numeral", function() {
    it("converts user input of decimal to RN equivalent", function() {
    	
    });
  });
});