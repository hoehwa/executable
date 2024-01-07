#!/usr/bin/env node

const process = require('process');

const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    ),
  ].join('\n')

try {
  console.log(
    JSONtoCSV(
      process.argv[2],
      process.argv[3],
      process.argv[4]
    )
  );
} catch (err) {
  console.error(err.message)
}