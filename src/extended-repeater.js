const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  let result = [];

  if(!(str instanceof String)) {
    str = String(str);
  }
  
  if(addition === null || addition === false || addition === true) {
    addition = String(addition);
  }

  for (let i = 0; i < repeatTimes; i++) {
    let string = [];
    string.push(str);
  
    if (addition != '') {
      let strAdd = [];
      for (let j = 0; j < additionRepeatTimes; j++) {
        strAdd.push(addition);
      }
      string.push(strAdd.join(additionSeparator));
    }
  
    result.push(string.join(''));
  }
  
  return result.join(separator);

};
  