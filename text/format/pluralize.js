#!/usr/bin/env node

const process = require('process');

const pluralize = (val, word, plural = word + 's') => {
  const _pluralize = (num, word, plural = word + 's') =>
    [1, -1].includes(Number(num)) ? word : plural;
  if (typeof val === 'object')
    return (num, word) => _pluralize(num, word, val[word]);
  return _pluralize(val, word, plural);
};

try {
  console.log(
    pluralize(
      process.argv[2],
      process.argv[3]
    )
  );
} catch (err) {
  console.error(err.message)
}

/*
const PLURALS = {
  person: 'people',
  radius: 'radii'
};

const autoPluralize = pluralize(PLURALS);
autoPluralize(2, 'person'); // 'people'
*/