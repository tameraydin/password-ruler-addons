import test from 'ava';
import commonPasswordRules from 'common-password-rules';
import { containsLowerCase, contains } from 'common-password-rules';
import addons from '../src/index';

test('should duplicate common-password-rules', t => {
  t.same(Object.keys(commonPasswordRules), Object.keys(addons));
});

test('should fetch weight properly', t => {
  t.is(addons.containsLowerCase().weight, 1);
  t.is(addons.containsLowerCase(1, 3).weight, 3);
  t.is(addons.contains('[x]', 1, 2).weight, 2);
});

test('should validate properly', t => {
  t.is(addons.containsLowerCase().validate('A'), containsLowerCase('A'));
  t.is(addons.containsLowerCase(2).validate('aA'), containsLowerCase('aA', 2));
  t.is(addons.containsLowerCase(2, 3).validate('aA'),
    containsLowerCase('aA', 2));
  t.is(addons.contains('[x]').validate('x'), contains('x', '[x]'));
  t.is(addons.contains('[x]').validate('x'), contains('x', '[x]'));
});
