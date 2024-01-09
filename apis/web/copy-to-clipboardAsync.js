#!/usr/bin/env node

const process = require('process');

const copyToClipboardAsync = str => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject('The Clipboard API is not available.');
};

try {
  console.log(
    copyToClipboardAsync(
      process.argv[2]
    )
  );
} catch (err) {
  console.error(err.message)
}

/*
💬 Note
If you need to support older browsers, you might want to use Document.execCommand() instead.
You can find out more about it in the copyToClipboard snippet.
 */
