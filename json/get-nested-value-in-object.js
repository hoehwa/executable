#!/usr/bin/env node

const process = require('process');

const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);

try {
  console.log(
    dig(
	  process.argv[2],
	  process.argv[3]
    )
  );
} catch (err) {
  console.error(err.message)
}