import test from 'node:test';
import assert from 'node:assert/strict';
import { getSubstitutions, substitutionMap } from '../services/substitutions.js';
import { translations } from '../translations.js';

const REQUIRED_KEYS = [
  'substitution_title',
  'substitution_hint',
  'show_alternatives',
  'use_alternative',
  'optional_amount',
  'amount_placeholder',
  'original_amount'
];

test('getSubstitutions returns mapped alternatives case-insensitively', () => {
  const fromLower = getSubstitutions('milk');
  const fromUpper = getSubstitutions('Milk');

  assert.equal(fromLower.length, substitutionMap['milk'].length);
  assert.deepEqual(fromLower, fromUpper);
});

test('substitution ratios are preserved in mapping', () => {
  const honeySwap = substitutionMap['sugar'].find((opt) => opt.name === 'honey');
  assert.ok(honeySwap, 'Expected honey alternative for sugar');
  assert.equal(honeySwap?.ratio, 0.75);
});

test('new translation keys exist for both languages', () => {
  REQUIRED_KEYS.forEach((key) => {
    assert.ok(key in translations.en, `Missing en translation for ${key}`);
    assert.ok(key in translations.de, `Missing de translation for ${key}`);
  });
});
