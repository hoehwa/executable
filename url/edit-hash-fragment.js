#!/usr/bin/env node

const process = require('process');

const urlString = 'https://mysite.com?p=42&from=home#details';
const url = new URL(urlString);

// Edit the hash fragment
const newHash = process.argv[2];
url.hash = newHash;

console.log(`${url}`);