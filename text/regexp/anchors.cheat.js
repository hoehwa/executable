#!/usr/bin/env node

function Anchor() {
  this['^'] = 'start of the string or the start of a line in a multiline pattern';
  this['$'] = 'end of the string or the end of a line in a multiline pattern';
  this['\\b'] = 'word boundary';
  this['\\B'] = 'not word boundary (opposite of \b)';
}

const sheet = new Anchor();

console.table(sheet)