#!/usr/bin/env node

const process = require('process');

const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};


try {
  console.log(
    isValidJSON(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
