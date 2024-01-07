#!/usr/bin/env node

const str = 'JavaScript is not the same as Java and you should remember that';
const positiveLookahedExample = /Java(?=Script)(.*)/.exec(str);
const negativeLookahedExample = /Java(?!Script)(.*)/.exec(str);

console.log("--- positive lookahed---")
console.table(positiveLookahedExample)

console.log("--- negative lookahed---")
console.table(negativeLookahedExample)