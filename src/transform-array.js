const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    throw new Error();
  } else {
    for (let i = 0; i < arr.length; i++) {

      if(typeof arr[i] === 'string') {

        if(arr[i] === '--discard-next') {

          if(i !== arr.length - 1) {
            i++;
          }

        } else if(arr[i] === '--discard-prev') {

          if(i !== 0 && arr[i - 2] != '--discard-next') {
            result.pop();
          }

        } else if(arr[i] === '--double-next') {

          if(i < arr.length - 1) {
            result.push(arr[i + 1]);
          }

        } else if(arr[i] === '--double-prev') {

          if(i !== 0 && arr[i - 2] !== '--discard-next') {
            if(result[result.length - 1] !== undefined) {
              result.push(result[result.length - 1]);
            }
          }
          
        } else {
          result.push(arr[i]);
        }
      } else {
        result.push(arr[i]);
      }
    }
  }
  return result;
};
