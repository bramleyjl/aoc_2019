var fs = require('fs');
var moduleMasses = fs.readFileSync('./module_masses.txt').toString().split('\n');

var totalFuelRequired = 0;
moduleMasses.forEach( module => {
    var fuelRequired = Math.floor(parseInt(module, 10) / 3) - 2;
    totalFuelRequired += fuelRequired;
});

console.log(totalFuelRequired + ' fuel required for all modules.');