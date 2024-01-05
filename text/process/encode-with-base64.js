#!/usr/bin/env node

const process = require('process');

const encodedString = btoa(stringToEncode); // 'Zm9vYmFy'


try {
  console.log(
    encodedString(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
