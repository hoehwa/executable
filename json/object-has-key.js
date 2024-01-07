#!/usr/bin/env node

const process = require('process');

const hasKey = (obj, keys) => {
  return (
    keys.length > 0 &&
    keys.every(key => {
      if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false;
      obj = obj[key];
      return true;
    })
  );
};

try {
  hasKey(
    process.argv[2], // javascript object 
    process.argv[3], // array of string keys.
  );
} catch (err) {
  console.error(err.message)
}