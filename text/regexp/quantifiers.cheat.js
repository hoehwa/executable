#!/usr/bin/env node

function Quantifier() {
  this['a?'] = 'zero or one of a (equal to a{0,1})';
  this['a*'] = 'zero or more of a (equal to a{0,})';
  this['a+'] = 'one or more of a (equal to a{1,})';
  this['a{3}'] = 'exactly 3 of a';
  this['a{3,}'] = '3 or more of a';
  this['a{3,5}'] = 'between 3 and 5 of a (inclusive)';
}

const sheet = new Quantifier();

console.table(sheet)