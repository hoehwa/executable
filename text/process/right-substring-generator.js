#!/usr/bin/env node

const rightSubstrGenerator = function* (str) {
  if (!str.length) return;
  for (let i in str) yield str.slice(-i - 1);
};

try {
  console.log(
    [...rightSubstrGenerator(
      process.argv[2]
    )]
  );
} catch (err) {
  console.error(err.message)
}



