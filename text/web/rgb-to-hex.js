#!/usr/bin/env node

const process = require('process');

const RGBToHex = (r, g, b) =>
  ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

try {
  console.log(
    RGBToHex(255, 165, 1)(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}



