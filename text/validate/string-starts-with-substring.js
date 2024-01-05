#!/usr/bin/env node

const process = require('process');

const startsWithSubstring = (text, word) => {
  for (i = word.length; i > 0; i--) {
    const substr = word.slice(-i);
    if (text.startsWith(substr)) return substr;
  }
  return undefined;
};

try {
  console.log(
    startsWithSubstring(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


