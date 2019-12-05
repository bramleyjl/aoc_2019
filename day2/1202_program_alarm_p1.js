var fs = require('fs');
var intCode = fs.readFileSync('./intcode_program.txt').toString().split(',').map(Number);

intCode[1] = 12;
intCode[2] = 2;
var index = 0;

while (index <= intCode.length - 1) {
    if (intCode[index] === 99) {
        console.log(intCode[0]);
        break;
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