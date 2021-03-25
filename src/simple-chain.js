const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  chain: '',
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    if(typeof value === undefined) {
      this.chainArray.push(`( )`);
    } else {
      this.chainArray.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || (position - Math.floor(position)) !== 0 || (position - 1) < 0 || (position - 1) > this.chainArray.length) {
      this.chainArray = [];
      throw new Error();
    } else {
      this.chainArray.splice((position - 1), 1);
    }
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.chainArray.join('~~');
    this.chainArray = [];
    return this.chain;
  }
};

module.exports = chainMaker;
