#!/usr/bin/env node

function CharacterSequences() {
  this['.'] = 'any character except line breaks';
  this['\\w'] = 'any word character';
  this['\\W'] = 'any non-word character (opposite of \w)';
  this['\\s'] = 'any whitespace character';
  this['\\S'] = 'any non-whitespace character (opposite of \s)';
  this['\\d'] = 'any digit character';
  this['\\D'] = 'any non-digit character (opposite of \d)';
  this['[abc]'] = 'a single character in the given set (here a, b or c)';
  this['[^abc]'] = 'a single character not in the given set (opposite of [abc])';
  this['[a-z]'] = 'a single character in the given range (here between a and z inclusive)';
  this['[^a-z]'] = 'a single character not in the given range (opposite of [a-z])';
  this['[a-zA-Z]'] = 'a single character in either of the given ranges';
}

const sheet = new CharacterSequences();

console.table(sheet)