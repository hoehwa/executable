#!/usr/bin/env node

function Group() {
  this['(ab)'] = 'match and capture everything enclosed (here exactly ab)';
  this['(a|b)'] = 'match and capture either one character (here a or b)';
  this['(?:ab)'] = 'match everything enclosed, without capturing';
}

const sheet = new Group();

console.table(sheet)