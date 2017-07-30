This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Roman Numeral Conversion

This is a play project to explore ReactJS further, and to complete the TDD Code Kata. An effort was made to test react components as well as functions with Jest and Enzyme; more work is needed to complete this. Functions (toRoman and toDecimal) were written and tested with Mocha and Chai. The tests were finally moved and added to the repo in the third commit.

Testing was important in the development of this simple app. It was most useful to develop and test the functionality before trying to implement a React component.

### ToDo:
* There is a potential hang-up problem when the user input is very long. Chrome asks to kill the app when this happens. 
* Aesthetics
* Further testing of edge cases.
* Validation for user input is not implemented, so the rules below are not observed in the toDecimal function. That is, a user can enter *IIII*, which violates the rules below, but is still converted to *4* by toDecimal.

>The symbols 'I', 'X', 'C', and 'M' can be repeated at most 3 times in a row. The symbols 'V', 'L', and 'D' can never be repeated. The '1' symbols ('I', 'X', and 'C') can only be subtracted from the 2 next highest values ('IV' and 'IX', 'XL' and 'XC', 'CD' and 'CM'). Only one subtraction can be made per numeral ('XC' is allowed, 'XXC' is not). The '5' symbols ('V', 'L', and 'D') can never be subtracted.
