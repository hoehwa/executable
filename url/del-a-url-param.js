#!/usr/bin/env node

const process = require('process');

const urlString = process.argv[2];
const url = new URL(urlString);

// Delete a parameter
const removedParam = process.argv[3];
url.searchParams.delete(removedParam);

try {
  console.log(
	`${url}`
  );
} catch (err) {
  console.error(err.message)
}
