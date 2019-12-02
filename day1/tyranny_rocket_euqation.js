var fs = require('fs');
var moduleMasses = fs.readFileSync('./module_masses.txt').toString().split('\n');

console.log(typeof moduleMasses);
console.log(moduleMasses.length);
moduleMasses.forEach( module => console.log(module) );
