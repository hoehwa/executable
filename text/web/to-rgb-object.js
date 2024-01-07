#!/usr/bin/env node

const process = require('process');

const toRGBObject = rgbStr => {
  const [red, green, blue] = rgbStr.match(/\d+/g).map(Number);
  return { red, green, blue };
};

try {
  console.table(
    toRGBObject(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}



