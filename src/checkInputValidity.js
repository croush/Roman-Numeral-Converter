var isValid_repeat = (input) => {
  var regEx_repeat = /(IIII+)|(XXXX+)|(CCCC+)|(MMMM+)|(VV+)|(LL+)|(DD+)/;
  var isIllegal = (regEx_repeat.test(input));
  return isIllegal? false : true;
}

var isValid_subtractOnes = (input) => {
  var regEx = /(II[LCDM])|(XX[DM])/;
  var isIllegal = regEx.test(input);
  return isIllegal? false : true;
}

var isValid_subtractPerNumeral = (input) => {
    var regEx = /(II+[VXLCDM])|(VV+[XLCDM])|(XX+[LCDM])|(LL+[CDM])|(CC+[DM])|(DD+M)/;
    var isIllegal = regEx.test(input);
    return isIllegal? false : true;
}

var isNumeralValid = (input) => {
  var isValid = (isValid_repeat(input) && isValid_subtractOnes(input) && isValid_subtractPerNumeral(input));
  return isValid;
}

exports.isValid_repeat = isValid_repeat;
exports.isValid_subtractOnes = isValid_subtractOnes;
exports.isValid_subtractPerNumeral = isValid_subtractPerNumeral;
exports isNumeralValid = isNumeralValid;