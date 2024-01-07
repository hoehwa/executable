#!/usr/bin/env node

const origin = {
  protocol: 'http, https',
  hostname: 'localhost, 30secondsofcode.org',
  port: '80, 3000'
};

const crossOrigins = [
  {
    protocol: 'http://30secondsofcode.org',
    hostname: 'http://www.30secondsofcode.org',
    port: 80
  },
  {
    protocol: 'https://www.30secondsofcode.org',
    hostname: 'http://dev.30secondsofcode.org',
    port: 3001
  }
]

console.log('the origin is composed of the following:')
console.table(origin)
console.log('\n')

console.log('Belows are the different cross origins:')
console.table(crossOrigins)