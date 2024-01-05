#!/usr/bin/env node

const process = require('process');

const toHSLObject = hslStr => {
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);
  return { hue, saturation, lightness };
};

try {
  console.log(
    toHSLObject(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}



