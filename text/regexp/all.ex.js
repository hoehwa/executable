#!/usr/bin/env node

const capturingGroupsStr = 'JavaScript is a programming language';
const capturingGroupsExample = /(JavaScript) is a (.*)/.exec(capturingGroupsStr);

console.log("Capturing groups")
console.table(capturingGroupsExample)
console.log("\n")

const nonCapturingGroupsStr = 'JavaScript is a programming language';
const nonCapturingGroupsExample = /(?:JavaScript|Python) is a (.+)/.exec(nonCapturingGroupsStr);

console.log("Named capturing groups")
console.table(nonCapturingGroupsExample)
console.log("\n")

const capturingGroupBackreferencesStr = 'JavaScript is a programming language - an awesome programming language JavaScript is';
const capturingGroupBackreferencesExample = /(.+) is a (?<description>.+) - an awesome \k<description> \1 is/.exec(capturingGroupBackreferencesStr);

console.log("Capturing group backreferences")
console.table(capturingGroupBackreferencesExample)
console.log("\n")

const lookahedStr = 'JavaScript is not the same as Java and you should remember that';
const positiveLookahedExample = /Java(?=Script)(.*)/.exec(lookahedStr);
const negativeLookahedExample = /Java(?!Script)(.*)/.exec(lookahedStr);

console.log("--- positive lookahed---")
console.table(positiveLookahedExample)
console.log("\n")

console.log("--- negative lookahed---")
console.table(negativeLookahedExample)
console.log("\n")

const unicodeCharactersStr = 'Greek looks like this: γεια';
const unicodeCharactersExample = /\p{Script=Greek}+/u.exec(unicodeCharactersStr);

console.log("Unicode characters")
console.table(unicodeCharactersExample)
console.log("\n")