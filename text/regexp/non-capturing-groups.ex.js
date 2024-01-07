#!/usr/bin/env node

const str = 'JavaScript is a programming language';
const nonCapturingGroupsExample = /(?:JavaScript|Python) is a (.+)/.exec(str);

console.table(nonCapturingGroupsExample)