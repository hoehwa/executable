#!/usr/bin/env node

const process = require('process');

const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));


try {
  console.log(
    CSVToArray(
      process.argv[2],
      process.argv[3],
      process.argv[4]
    )
  );
} catch (err) {
  console.error(err.message)
}
