#!/usr/bin/env node

const process = require('process');

const serializeForm = form =>
  Array.from(new FormData(form), field =>
    field.map(encodeURIComponent).join('=')
  ).join('&');

try {
  console.log(
    serializeForm(
      document.querySelector(
        process.argv[2]
      )
    )
  );
} catch (err) {
  console.error(err.message)
}



