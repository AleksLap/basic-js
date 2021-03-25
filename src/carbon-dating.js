const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const REACTION_CONST = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && typeof parseFloat(sampleActivity) === "number") {
    if (sampleActivity > 0 && sampleActivity < 15) {
      const result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (REACTION_CONST / HALF_LIFE_PERIOD));
      return result;
    }
  }
  return false;
};
