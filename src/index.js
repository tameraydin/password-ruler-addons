'use strict'

const commonPasswordRules = require('common-password-rules');
const passwordRulerAddons = {};

Object.keys(commonPasswordRules).forEach((validatorName) => {
  passwordRulerAddons[validatorName] = () => {
    let args = arguments.slice();
    let weight = args.shift();

    return {
      validate: (password) => {
        args.unshift(password);
        return commonPasswordRules[validatorName].apply(args);
      },
      weight: weight
    };
  };
});

module.exports = passwordRulerAddons;
