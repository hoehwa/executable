#!/usr/bin/env node
// for object
let lunch = {
  sandwich: "turkey",
  chips: "Cape Cod",
  drink: "Pepsi",
};

console.log("Lunch Order");
console.table(JSON.stringify(lunch));

// for array
let drinks = ["Pepsi", "water", "lemonade"];

console.log("Lunch Order");
console.table(JSON.stringify(drinks));

