#!/usr/bin/env node
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const target = {
  id: 1234,
  location: new Point(10, 20),
  name: 'Delivery point',
};

console.log(
  JSON.stringify(target, (key, value) => {
    // Exclude id
    if (key === 'id') return undefined;
    // Convert location to an array of coordinates
    if (value instanceof Point) return [value.x, value.y];
    // Return other properties (i.e. name) without modification
    return value;
  })
);