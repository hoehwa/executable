#!/usr/bin/env node

function Anchor() {
  this['^'] = 'start of the string or the start of a line in a multiline pattern';
  this['$'] = 'end of the string or the end of a line in a multiline pattern';
  this['\\b'] = 'word boundary';
  this['\\B'] = 'not word boundary (opposite of \b)';
}

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

function Flag() {
  this['g'] = 'Global';
  this['m'] = 'Multiline';
  this['i'] = 'Case insensitive';
  this['u'] = 'Unicode';
}

function Group() {
  this['(ab)'] = 'match and capture everything enclosed (here exactly ab)';
  this['(a|b)'] = 'match and capture either one character (here a or b)';
  this['(?:ab)'] = 'match everything enclosed, without capturing';
}

function Quantifier() {
  this['a?'] = 'zero or one of a (equal to a{0,1})';
  this['a*'] = 'zero or more of a (equal to a{0,})';
  this['a+'] = 'one or more of a (equal to a{1,})';
  this['a{3}'] = 'exactly 3 of a';
  this['a{3,}'] = '3 or more of a';
 this['a{3,5}'] = 'between 3 and 5 of a (inclusive)';
}

const anchorSheet = new Anchor();
const characterSequencesSheet = new CharacterSequences();
const flagSheet = new Flag();
const groupSheet = new Group();
const quantifierSheet = new Quantifier();

console.log("Anchors")
console.table(anchorSheet)
console.log("\n")

console.log("Character sequences")
console.table(characterSequencesSheet)
console.log("\n")

console.log("Quantifiers")
console.table(flagSheet)
console.log("\n")

console.log("Groups")
console.table(groupSheet)
console.log("\n")

console.log("Flags")
console.table(quantifierSheet)