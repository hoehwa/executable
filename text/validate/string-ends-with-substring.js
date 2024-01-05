#!/usr/bin/env node

const process = require('process');

const endsWithSubstring = (text, word) => {
  for (i = word.length; i > 0; i--) {
    const substr = word.slice(0, i);
    if (text.endsWith(substr)) return substr;
  }
  return undefined;
};

try {
  console.log(
    endsWithSubstring(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}


