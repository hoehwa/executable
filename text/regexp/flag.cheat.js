#!/usr/bin/env node

function Flag() {
  this['g'] = 'Global';
  this['m'] = 'Multiline';
  this['i'] = 'Case insensitive';
  this['u'] = 'Unicode';
}

const sheet = new Flag();

console.table(sheet)