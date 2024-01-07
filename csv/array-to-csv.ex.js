#!/usr/bin/env node

const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v =>
      v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter)
    )
    .join('\n');


console.log(arrayToCSV([['a', 'b'], ['c', 'd']]));  // '"a","b"\n"c","d"'
console.log(arrayToCSV([['a', 'b'], ['c', 'd']], ';'));  // '"a";"b"\n"c";"d"'
console.log(arrayToCSV([['a', '"b" great'], ['c', 3.1415]]));  // '"a","""b"" great"\n"c",3.1415'