#!/usr/bin/env node

const str = 'JavaScript is a programming language - an awesome programming language JavaScript is';
const result = /(.+) is a (?<description>.+) - an awesome \k<description> \1 is/.exec(str);

console.table(result)