import test from 'ava';
import commonPasswordRules from 'common-password-rules';
import passwordRulerAddons from '../src/index';

test('commonPasswordRules', t => {
  t.same(Object.keys(commonPasswordRules), Object.keys(passwordRulerAddons));

  t.is(passwordRulerAddons.containsLowerCase().weight, 1);
  t.is(passwordRulerAddons.containsLowerCase(1, 3).weight, 3);

  t.is(passwordRulerAddons.containsLowerCase().validate('A'),
    commonPasswordRules.containsLowerCase('A'));

  t.is(passwordRulerAddons.containsLowerCase(2).validate('aA'),
    commonPasswordRules.containsLowerCase('aA', 2));

  t.is(passwordRulerAddons.containsLowerCase(2, 3).validate('aA'),
    commonPasswordRules.containsLowerCase('aA', 2));

  t.is(passwordRulerAddons.contains('[x]').validate('x'),
    commonPasswordRules.contains('x', '[x]'));

  t.is(passwordRulerAddons.contains('[x]', 1, 2).weight, 2);
  t.is(passwordRulerAddons.contains('[x]').validate('x'),
    commonPasswordRules.contains('x', '[x]'));
});
