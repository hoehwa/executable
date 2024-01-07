#!/usr/bin/env node

const str = 'Greek looks like this: γεια';
const unicodeCharactersExample = /\p{Script=Greek}+/u.exec(str);

console.table(unicodeCharactersExample)
