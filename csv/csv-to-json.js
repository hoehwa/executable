#!/usr/bin/env node

const process = require('process');

const CSVToJSON = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};

try {
  console.log(
    CSVToJSON(
      process.argv[2],
      process.argv[3]
    )
  );
} catch (err) {
  console.error(err.message)
}
