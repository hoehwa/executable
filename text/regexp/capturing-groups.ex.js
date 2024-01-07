#!/usr/bin/env node

const str = 'JavaScript is a programming language';
const capturingGroupsExample = /(JavaScript) is a (.*)/.exec(str);

console.table(capturingGroupsExample)