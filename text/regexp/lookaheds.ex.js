#!/usr/bin/env node

const str = 'JavaScript is not the same as Java and you should remember that';
const positiveLookahed = /Java(?=Script)(.*)/.exec(str);
const negativeLookahed = /Java(?!Script)(.*)/.exec(str);

console.log("--- positive lookahed---")
console.table(positiveLookahed)

console.log("--- negative lookahed---")
console.table(negativeLookahed)