#!/usr/bin/env node

const str = 'JavaScript is a programming language';
const namedCapturingGroupsExample = /(?:JavaScript|Python) is a (.+)/.exec(str);

console.table(namedCapturingGroupsExample)