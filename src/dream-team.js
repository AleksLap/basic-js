const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];

  if(Array.isArray(members)) {
    members.forEach(member => {
      if(typeof member === 'string'){
        result.push(member.trim().charAt(0).toUpperCase())
      }
    });

    if(result.length > 0) {
      return result.sort().join('');
    } else {
      return false;
    }
  }
  return false;
};
