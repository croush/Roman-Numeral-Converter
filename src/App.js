import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './'

export class DecimalToRoman extends Component{
  constructor(props){
    super(props);
    this.state = {input: ''};
  }
  
  handleInput = (x) => {
  debugger;
    this.setState({input: x.target.value});
  }
  
  toRoman = (decimal) => {
  debugger;
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
  }
 
  render(){
    return(
      <div className='col'>
        <input type='text' onChange={this.handleInput} value={this.state.input}  className='form-control' maxLength='15' placeholder='Enter decimal here' />
          <h4>Roman Numeral Equivalent: </h4>
          <div className='scrollable'><h2><p className='breakable'>{this.toRoman(this.state.input)}</p></h2></div>
      </div>
      );
  }
}

export class RomanToDecimal extends React.Component{
  constructor(props){
    super(props);
    this.state = {input: ''};
  }
  
  handleInput = (x) => {
    this.setState({input: x.target.value});
  }
  
  toDecimal = (numeral) => {
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
  }
 
  render(){
    return(
        <div className='col'>
        <input type='text' onChange={this.handleInput} value={this.state.input}  className='form-control' maxLength='15' placeholder='Enter roman numeral here' />
          <h4>Arabic Decimal Equivalent: </h4>
          <div className='scrollable'><h2><p className='breakable'>{this.toDecimal(this.state.input)}</p></h2></div>
      </div>
      );
  }
}


class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<div className='container'>
          <div className='jumbotron'>
          <h3 className='display-3'>Roman Numeral Conversion <br/>
          <small>With ReactJS and Bootstrap</small>
          </h3>
          
            <div className='row'>
            {this.props.children}
          </div>
      </div>
      </div>
      );
  }
}

export default App;
