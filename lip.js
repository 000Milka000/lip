let mas = [2,48,5,6,9,91,71,24];
console.log(mas.sort((a,b) => a-b));
console.log(mas.sort());

const isURL = require('isurl');

console.log(isURL('http://domain/'));  //-> false
console.log(isURL(new URL('http://domain/')));  //-> true