#!/usr/bin/env node

const process = require('process');
const writeFileSync = require('fs').writeFileSync

const JSONToFile = (obj, filename) =>
  writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));

try {
  JSONToFile(
    process.argv[2], // javascript object 
    process.argv[3], // filename without extension
  );
} catch (err) {
  console.error(err.message)
}