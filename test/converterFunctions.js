var toRoman = (decimal) => {
    var dic ={M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var i='';
    var roman = '';
    for(i in dic){
      while(decimal >= dic[i]){
        roman += i;
        decimal -= dic[i];
      }
    }
    return(roman);
  };

var toDecimal = (numeral) => {
    var dic ={M:1000,D:500,C:100,L:50,X:10,V:5,I:1};
    //var dic = {1000:M,900:CM,500:D,400:CD,100:C,90:XC,50:L,40:XL,10:X,9:XI,5:V,4:VI,1:I};
    var result = '';
    var i = '';
    var j = '';

    for(var j=0;j<numeral.length;j++){
      var currentLetter = numeral.charAt(j);
      var nextLetter = numeral.charAt(j+1);
      var neg = false;
      if(dic[currentLetter] < dic[nextLetter]){
        neg = true;
      }
      for(i in dic){
        if(currentLetter == i){
          result = neg ? (+result)-(+dic[i]) : (+result)+(+dic[i]);
        }
      }
    }
    return(result);
  };




exports.toRoman = toRoman;
exports.toDecimal = toDecimal;
