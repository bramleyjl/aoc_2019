var fs = require('fs');

for (var i = 0; i <= 200; i++) {
    for (var j = 0; j <= 200; j++) {
        var intCodeArray = fs.readFileSync('./intcode_program.txt').toString().split(',').map(Number);
        var output = calcOutput(intCodeArray, i, j);
        if (output === 19690720) console.log(100 * i + j);
    }
}


function calcOutput(intCode, noun, verb) {
    intCode[1] = noun;
    intCode[2] = verb;
    var index = 0;
    while (index <= intCode.length - 1) {
        if (intCode[index] === 99) {
            return intCode[0];
        } else if (intCode[index] === 1) {
            var firstNum = intCode[intCode[index + 1]];
            var secondNum = intCode[intCode[index + 2]];
            intCode[intCode[index + 3]] = firstNum + secondNum;
            index += 4;
        } else if (intCode[index] === 2) {
            var firstNum = intCode[intCode[index + 1]];
            var secondNum = intCode[intCode[index + 2]];
            intCode[index + 3] = firstNum * secondNum;
            index += 4
        } else {
            index += 1;
        }
    }
}