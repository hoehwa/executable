#!/usr/bin/env node

const str = 'JavaScript is a programming language';
const result = /(?:JavaScript|Python) is a (.+)/.exec(str);

console.table(result)