const { calc, filter } = require("./calculcator.js");
// is used to take function inside this file

console.log(calc(1, 4, "+"))
console.log(filter([1, 2, 3, 4], (a) => {return a > 2}));