'use strict'

const commonPasswordRules = require('common-password-rules');
const passwordRulerAddons = {};

Object.keys(commonPasswordRules).forEach((validatorName) => {
  passwordRulerAddons[validatorName] = function() {
    let args = Array.prototype.slice.call(arguments);
    let validateFn = commonPasswordRules[validatorName];
    let weight = 1;

    if (args.length === validateFn.length) {
      weight = args.pop();
    }

    return {
      validate: (password) => {
        args.unshift(password);
        return validateFn.apply(null, args);
      },
      weight: weight
    };
  };
});

module.exports = passwordRulerAddons;
