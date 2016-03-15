# PasswordRuler Add-ons [![Build Status](http://img.shields.io/travis/tameraydin/password-ruler-addons/master.svg?style=flat-square)](https://travis-ci.org/tameraydin/password-ruler-addons) [![Coverage Status](https://img.shields.io/coveralls/tameraydin/password-ruler-addons/master.svg?style=flat-square)](https://coveralls.io/r/tameraydin/password-ruler-addons?branch=master)

It is a wrapper around [common-password-rules](https://github.com/tameraydin/common-password-rules) that provides [PasswordRuler](https://github.com/tameraydin/password-ruler) compatible validators.

## Install

```
npm install password-ruler-addons
```

## Usage

```js
const PasswordRuler = require('password-ruler');
const { containsLowerCase, excludesBirthDate } = require('password-ruler-addons');

containsLowerCase(); // => { validate: [Function], weight: 1 }

new PasswordRuler({
  lowerCase: containsLowerCase(2, 3),
  noBirthDate: excludesBirthDate()
});
```

## API

See [common-password-rules](https://github.com/tameraydin/common-password-rules#api) for all possible methods.

## License

MIT [http://tameraydin.mit-license.org/](http://tameraydin.mit-license.org/)