var fs = require('fs');
var moduleMasses = fs.readFileSync('./module_masses.txt').toString().split('\n');

var totalFuelRequired = 0;
calculateFuel(moduleMasses);
console.log(totalFuelRequired + ' fuel required for all modules.');

function calculateFuel(masses) {
    masses.forEach(mass => {
        var fuelRequired = Math.floor(parseInt(mass, 10) / 3) - 2;
        if (fuelRequired > 0) {
            totalFuelRequired += fuelRequired;
            calculateFuel([fuelRequired]);
        }
    });
}