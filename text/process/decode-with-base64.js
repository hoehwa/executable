#!/usr/bin/env node

const process = require('process');

try {
  console.log(
    atob(
	  process.argv[2]
	)
  );
} catch (err) {
  console.error(err.message)
}
