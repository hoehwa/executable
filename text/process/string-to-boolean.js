#!/usr/bin/env node

const process = require('process');

const toBoolean = (value, truthyValues = ['true']) => {
  const normalizedValue = String(value).toLowerCase().trim();
  return truthyValues.includes(normalizedValue);
};


try {
  console.log(
    toBoolean(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}
