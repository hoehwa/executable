#!/usr/bin/env node

const leftSubstrGenerator = function* (str) {
  if (!str.length) return;
  for (let i in str) yield str.slice(0, i + 1);
};

try {
  console.log(
    [...leftSubstrGenerator(
      process.argv[2]
    )]
  );
} catch (err) {
  console.error(err.message)
}



