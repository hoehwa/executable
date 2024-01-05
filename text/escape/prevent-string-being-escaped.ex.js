#!/usr/bin/env node

const process = require('process');

const path = `C:\web\index.html` // 'C:web.html'

const unescapedPath = String.raw`C:\web\index.html`; // 'C:\web\index.html'

console.log('path: ', path)
console.log('unescapedPath: ', unescapedPath)