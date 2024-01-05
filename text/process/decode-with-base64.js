#!/usr/bin/env node

const process = require('process');

const decodedString = atob(stringToDecode);


try {
  console.log(
    decodedString(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
