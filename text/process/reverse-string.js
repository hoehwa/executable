#!/usr/bin/env node

const process = require('process');

const reverseString = str => [...str].reverse().join('');

try {
  console.log(
    reverseString(
      process.argv[2]
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