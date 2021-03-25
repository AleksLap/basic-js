const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }
  encrypt(str, key) {
    let string = str.toLowerCase().split('');
    let keyStr = key.toLowerCase().split('');
    let strLetters = [];
    let keyArr = [];
    let encrArr = [];
    let result = [];
    let notLCount = 0;
    let keyCount = 0;

    if(!str || !key) throw new Error();
    if(this.direct === undefined) this.direct = true;

    for(let i = 0; i < string.length; i++) {
      if(this.alphabet.indexOf(string[i]) != -1) {
        strLetters.push(string[i]);
      }
    };

    for(let i = 0; i < strLetters.length; i++) {
      if(keyCount < keyStr.length) {
        keyArr.push(keyStr[keyCount]);
        keyCount += 1;
      } else {
        keyCount = 0;
        keyArr.push(keyStr[keyCount]);
        keyCount += 1;
      }
    };

    strLetters.forEach((l, i) => {
      if (this.alphabet.indexOf(l) + this.alphabet.indexOf(keyArr[i]) >= 26) {
        encrArr.push(this.alphabet.charAt(this.alphabet.indexOf(l) + this.alphabet.indexOf(keyArr[i]) - 26))
      } else {
        encrArr.push(this.alphabet.charAt(this.alphabet.indexOf(l) + this.alphabet.indexOf(keyArr[i])))
      }
    });

    string.forEach((l, i) => {
      let el = this.alphabet.indexOf(l);
      if(el == -1) {
        notLCount += 1;
        result.push(l);
      } else {
        result.push(encrArr[i - notLCount]);
      }
    })

    if(!this.direct) result.reverse();

    return result.join('').toUpperCase();
}    

  decrypt(str, key) {
    let string = str.toLowerCase().split('');
    let keyStr = key.toLowerCase().split('');
    let strLetters = [];
    let keyArr = [];
    let encrArr = [];
    let result = [];
    let notLCount = 0;
    let keyCount = 0;

    if(!str || !key) throw new Error();
    if(this.direct === undefined) this.direct = true;

    for(let i = 0; i < string.length; i++) {
      if(this.alphabet.indexOf(string[i]) != -1) {
        strLetters.push(string[i]);
      }
    };

    for(let i = 0; i < strLetters.length; i++) {
      if(keyCount < keyStr.length) {
        keyArr.push(keyStr[keyCount]);
        keyCount += 1;
      } else {
        keyCount = 0;
        keyArr.push(keyStr[keyCount]);
        keyCount += 1;
      }
    };

    strLetters.forEach((l, i) => {
      if (this.alphabet.indexOf(l) - this.alphabet.indexOf(keyArr[i]) < 0) {
        encrArr.push(this.alphabet.charAt(this.alphabet.indexOf(l) - this.alphabet.indexOf(keyArr[i]) + 26))
      } else {
        encrArr.push(this.alphabet.charAt(this.alphabet.indexOf(l) - this.alphabet.indexOf(keyArr[i])))
      }
    });

    string.forEach((l, i) => {
      let el = this.alphabet.indexOf(l);
      if(el == -1) {
        notLCount += 1;
        result.push(l);
      } else {
        result.push(encrArr[i - notLCount]);
      }
    })

    if(!this.direct) result.reverse();

    return result.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
