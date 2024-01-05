#!/usr/bin/env node

const str = 'JavaScript is a programming language';
const result = /(JavaScript) is a (.*)/.exec(str);

console.table(result)