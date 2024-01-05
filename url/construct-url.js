#!/usr/bin/env node

const process = require('process');

const query = process.argv[2];
const locale = process.argv[3];
const campaign = process.argv[4];

const url = new URL('https://examp.le');

url.searchParams.set('q', query);
url.searchParams.set('lang', locale);
url.searchParams.set('from', campaign);

console.log(
  url.toString()
);