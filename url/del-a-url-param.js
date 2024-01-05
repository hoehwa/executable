#!/usr/bin/env node

const process = require('process');

const urlString = 'https://mysite.com?p=42&from=home#details';
const url = new URL(urlString);

// Delete a parameter
const removedParam = process.argv[2];
url.searchParams.delete(removedParam);

console.log(`${url}`);