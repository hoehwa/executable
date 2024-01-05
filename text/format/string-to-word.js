#!/usr/bin/env node

const process = require('process');

const words = (str, pattern = /[^a-zA-Z-]+/) =>
  str.split(pattern).filter(Boolean);

try {
  console.log(
    words(
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