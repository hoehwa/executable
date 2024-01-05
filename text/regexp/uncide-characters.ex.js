#!/usr/bin/env node

const str = 'Greek looks like this: γεια';
const result = /\p{Script=Greek}+/u.exec(str);
const negativeLookahed = /Java(?!Script)(.*)/.exec(str);

console.table(result)
