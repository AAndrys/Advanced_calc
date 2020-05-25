const input = document.querySelector('#value');
const buttons = document.querySelectorAll('button');
const buttonsNumb = document.querySelectorAll('.number');
const buttonsOperation = document.querySelectorAll('.operation');
const equal = document.getElementById('equal');
let pushed = 0;
let valueSave = 0;
let boolSqrt = false;
let boolTrygometric = false;
let boolDot = false;
let numberSave = '';
let numberSaveTwo = '';
let numberSaveThree = '';
let numberSaveLength = 0;
let boolStart = true;
let boolDotStart = true;
let boolDotEnable = true;
let toPower = '';
let boolPower = false;
let toPowerOf = '';
let memory = '';
let memoryTwo = '';
let boolMemory = true;

buttonsNumb.forEach((item) => {
    item.addEventListener('click', () => {
        boolSqrt = true;
        boolTrygometric = true;
        boolDot = true;
        boolMemory = true;
        if(boolStart) {
            input.innerHTML = '';
            boolStart = false;
        }
        pushed = item.value;
        if(boolPower == true) {
            toPower += pushed;
            console.log(toPower);
        } else {
            toPower = '';
        }
        numberSave += pushed;
        numberSaveTwo = numberSave;
        numberSaveThree = numberSaveTwo;
        input.innerHTML += pushed;
        valueSave = input.innerHTML;
    });
});

if(equal) {
    equal.addEventListener('click', () => {
        input.innerHTML = eval(input.innerHTML);
        valueSave = input.innerHTML;
        numberSave = input.innerHTML;
        if (toPowerOf.length != 0) {
            input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length - 1) + toThePowerOf(toPowerOf);
            input.innerHTML = eval(input.innerHTML);
            valueSave = input.innerHTML;
            numberSave = input.innerHTML;
            toPowerOf = '';
            toPower = '';
        }
    });
}

class Calc {
    constructor(operation) {
        this.operation(operation);
    }
    operation(operation) {
        if (operation.value == 'sqrt') {
                operation.addEventListener('click', () => {
                    if (toPower.length == 0 & toPowerOf.length != 0) {
                        boolSqrt = false;
                    }
                    if (numberSave.length == 0) {
                        boolSqrt = false;
                    }
                    if(boolSqrt == true) {
                    if (numberSave.length == 0) {
                        numberSave = numberSaveThree;
                    }
                    else {
                        numberSave = numberSaveTwo;
                    }
                    if (toPower.length != 0) {  
                        let sqrt = Math.sqrt(toPower);
                        input.innerHTML = valueSave.substring(0, valueSave.length - toPower.length) + sqrt;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        numberSave = sqrt;
                        boolTrygometric = false;
                        toPower = sqrt;
                    }
                    else {
                        let sqrt = Math.sqrt(numberSave);
                        input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length) + sqrt;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        numberSave = sqrt;
                        boolTrygometric = false;
                    }
                    };
                });
        }
        /////////MEMORY
        else if (operation.value == 'MR') {
            operation.addEventListener('click', () => {
                if (boolMemory == true & memory.length != 0) {
                        if (numberSave.length == 0) {
                                boolMemory = false;
                        }
                        else {
                            input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length) + memory;
                            numberSave = memory;
                            memory = memoryTwo;
                            valueSave = input.innerHTML;
                            boolMemory = false;
                            console.log('**MEMORY**: ' + memory);
                        }
                }
            });
        }
        else if (operation.value == 'M+') {
            operation.addEventListener('click', () => {
                if (toPower.length != 0) {
                    memoryTwo = +memoryTwo + +toPower;
                    memoryTwo = memoryTwo.toString();
                    memory = memoryTwo;
                    boolMemory = true;
                    console.log('**MEMORY**: ' + memory);
                }
                else if (numberSave.length != 0 & input.innerHTML.substring(valueSave.length - 1, valueSave.length) != '^') {
                    memoryTwo = +memoryTwo + +numberSave;
                    memoryTwo = memoryTwo.toString();
                    memory = memoryTwo;
                    boolMemory = true;
                    console.log('**MEMORY**: ' + memory);
                }
            });
        }
        else if (operation.value == 'M-') {
            operation.addEventListener('click', () => {
                if (toPower.length != 0) {
                    memoryTwo -= toPower;
                    memoryTwo = memoryTwo.toString();
                    memory = memoryTwo;
                    boolMemory = true;
                    console.log('**MEMORY**: ' + memory);
                }
                else if (numberSave.length != 0 & input.innerHTML.substring(valueSave.length - 1, valueSave.length) != '^') {
                    memoryTwo -= numberSave;
                    memoryTwo = memoryTwo.toString();
                    memory = memoryTwo;
                    boolMemory = true;
                    console.log('**MEMORY**: ' + memory);
                }
            });
        }
        else if (operation.value == 'MC') {
            operation.addEventListener('click', () => {
                memory = '';
                memoryTwo = '';
                console.log('**MEMORY**: ' + memory);
            });
        }
        ///////////////////////////////////
        else if (operation.value == 'x2') {
            operation.addEventListener('click', () => {
                if (toPower.length == 0 & toPowerOf.length != 0) {
                    boolTrygometric = false;
                }
                if (numberSave.length == 0) {
                    boolTrygometric = false;
                }
                if (boolTrygometric == true) {
                    if (numberSave.length == 0) {
                        numberSave = numberSaveThree;
                    }
                    else {
                        numberSave = numberSaveTwo;
                    }
                    if(toPower.length != 0) {
                        let square = squared(toPower);
                        input.innerHTML = valueSave.substring(0, valueSave.length - toPower.length) + square;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        numberSave = square;
                        boolTrygometric = false;
                        boolMemory = true;
                        toPower = square;
                    }
                    else {
                        let square = squared(numberSave);
                        input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length) + square;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        numberSave = square;
                        boolTrygometric = false;
                        boolMemory = true;
                    }
                };
            });
        }
        else if (operation.value == 'x3') {
            operation.addEventListener('click', () => {
                if (toPower.length == 0 & toPowerOf.length != 0) {
                    boolTrygometric = false;
                }
                if (numberSave.length == 0) {
                    boolTrygometric = false;
                }
                if (boolTrygometric == true) {
                    if (numberSave.length == 0) {
                        numberSave = numberSaveThree;
                    }
                    else {
                        numberSave = numberSaveTwo;
                    }
                    if (toPower.length != 0) { 
                        let cubed = cube(toPower);
                        input.innerHTML = valueSave.substring(0, valueSave.length - toPower.length) + cubed;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        numberSave = cubed;
                        boolTrygometric = false;
                        boolMemory = true;
                        toPower = cubed;
                    }
                    else {
                        let cubed = cube(numberSave);
                        input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length) + cubed;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        numberSave = cubed;
                        boolTrygometric = false;
                        boolMemory = true;
                    }
                };
            });
        }
        else if (operation.value == 'xy') {
            operation.addEventListener('click', () => {
                if (numberSave.length == 0) {
                    boolTrygometric = false;
                }
                if (boolTrygometric == true) {
                    if(numberSave.length == 0) {
                        numberSave = numberSaveThree;
                    }
                    else {
                        numberSave = numberSaveTwo;
                    }
                    boolPower = true;
                    toPowerOf = getThePowerOf(numberSave);
                    input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length) + toPowerOf;
                    valueSave = input.innerHTML;
                    toPowerOf = numberSave;
                    numberSaveTwo = '';
                    boolMemory = false;
                };
            });
        }
        else if (operation.value == '1/x') {
            operation.addEventListener('click', () => {
                if (toPower.length == 0 & toPowerOf.length != 0) {
                    boolTrygometric = false;
                }
                if (numberSave.length == 0) {
                    boolTrygometric = false;
                }
                if (boolTrygometric == true) {
                        if (numberSave.length == 0) {
                            numberSave = numberSaveThree;
                        }
                        else {
                            numberSave = numberSaveTwo;
                        }
                        if (toPower.length != 0) { 
                            let divideTwo = dividedTwo(toPower);
                            input.innerHTML = valueSave.substring(0, valueSave.length - toPower.length) + divideTwo;
                            valueSave = input.innerHTML;
                            numberSaveTwo = '';
                            boolTrygometric = false;
                            boolMemory = true;
                            toPower = divideTwo;
                        }
                        else {
                            let divide = divided(numberSave);
                            input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length) + divide;
                            valueSave = input.innerHTML;
                            numberSaveTwo = '';
                            boolTrygometric = false;
                            boolMemory = true;
                        }
                };
            });
        }
        else if (operation.value == 'sin') {
            operation.addEventListener('click', () => {
                if (toPower.length == 0 & toPowerOf.length != 0) {
                    boolTrygometric = false;
                }
                if (numberSave.length == 0) {
                    boolTrygometric = false;
                }
                if (boolTrygometric == true) {
                    if (numberSave.length == 0) {
                        numberSave = numberSaveThree;
                    }
                    else {
                        numberSave = numberSaveTwo;
                    }
                    if (toPower.length != 0) {  
                        let sin = Math.sin(toPower);
                        input.innerHTML = valueSave.substring(0, valueSave.length - toPower.length) + sin;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        boolMemory = true;
                        toPower = sin;
                    }
                    else {
                        let sin = Math.sin(numberSave);
                        input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length) + sin;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        boolMemory = true;
                    }
                };
            });
        }
        else if (operation.value == 'cos') {
            operation.addEventListener('click', () => {
                if (toPower.length == 0 & toPowerOf.length != 0) {
                    boolTrygometric = false;
                }
                if (numberSave.length == 0) {
                    boolTrygometric = false;
                }
                if (boolTrygometric == true) {
                    if (numberSave.length == 0) {
                        numberSave = numberSaveThree;
                    }
                    else {
                        numberSave = numberSaveTwo;
                    }
                    if (toPower.length != 0) {  
                        let cos = Math.cos(toPower);
                        input.innerHTML = valueSave.substring(0, valueSave.length - toPower.length) + cos;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        boolMemory = true;
                        toPower = cos;
                    }
                    else {
                        let cos = Math.cos(numberSave);
                        input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length) + cos;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        boolMemory = true;
                    }
                };
            });
        }
        else if (operation.value == 'tg') {
            operation.addEventListener('click', () => {
                if (toPower.length == 0 & toPowerOf.length != 0) {
                    boolTrygometric = false;
                }
                if (numberSave.length == 0) {
                    boolTrygometric = false;
                }
                if (boolTrygometric == true) {
                    if (numberSave.length == 0) {
                        numberSave = numberSaveThree;
                    }
                    else {
                        numberSave = numberSaveTwo;
                    }
                    if (toPower.length != 0) {  
                        let tg = Math.tan(toPower);
                        input.innerHTML = valueSave.substring(0, valueSave.length - toPower.length) + tg;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        boolMemory = true;
                        toPower = tg;
                    }
                    else {
                        let tg = Math.tan(numberSave);
                        input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length) + tg;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        boolMemory = true;
                    }
                };
            });
        }
        else if (operation.value == 'ctg') {
            operation.addEventListener('click', () => {
                if (toPower.length == 0 & toPowerOf.length != 0) {
                    boolTrygometric = false;
                }
                if (numberSave.length == 0) {
                    boolTrygometric = false;
                }
                if (boolTrygometric == true) {
                    if (numberSave.length == 0) {
                        numberSave = numberSaveThree;
                    }
                    else {
                        numberSave = numberSaveTwo;
                    }
                    if (toPower.length != 0) {   
                        let ctg = 1 / Math.tan(toPower);
                        input.innerHTML = valueSave.substring(0, valueSave.length - toPower.length) + ctg;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        boolMemory = true;
                        toPower = ctg;
                    }
                    else {
                        let ctg = 1 / Math.tan(numberSave);
                        input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length) + ctg;
                        valueSave = input.innerHTML;
                        numberSaveTwo = '';
                        boolMemory = true;
                    }
                };
            });
        }
        else if (operation.value == 'back') {
            operation.addEventListener('click', () => {
                boolDot = true;
                boolPower = true;
                if (input.innerHTML.charAt(input.innerHTML.length) == '^') {
                    toPowerOf = '';
                    numberSave = '';
                    toPower = '';
                }
                if (input.innerHTML.charAt(input.innerHTML.length - 1) == '.' & boolDotEnable == true) {
                    boolDotStart = true;
                }
                if (input.innerHTML.length == 1) {
                    input.innerHTML = 0;
                    valueSave = input.innerHTML;
                    boolStart = true;
                    toPower = '';
                    numberSaveTwo = '';
                    numberSaveThree = '';
                    numberSave = '';
                }
                else {
                    input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
                    valueSave = input.innerHTML;
                    if (input.innerHTML.substring(valueSave.length - 1, valueSave.length) != '+' || input.innerHTML.substring(valueSave.length - 1, valueSave.length) != '-' || input.innerHTML.substring(valueSave.length - 1, valueSave.length) != '*' || input.innerHTML.substring(valueSave.length - 1, valueSave.length) != '/') {
                        if(numberSave.length != numberSaveTwo) {
                            numberSave = numberSaveTwo;
                        }
                        else {
                            numberSave = numberSave.substring(0, numberSave.length - 1);
                            numberSaveTwo = numberSave;
                        }
                        if (numberSaveTwo.length == 0) {
                            numberSave = numberSaveThree;
                            numberSaveTwo = numberSaveThree;
                        }
                        boolTrygometric = true;
                        boolSqrt = true;
                    }
                }
            });
        }
        else if (operation.value == 'C') {
            operation.addEventListener('click', () => {
                boolTrygometric = false;
                input.innerHTML = 0;
                valueSave = input.innerHTML;
                numberSave = '';
                numberSaveLength = 0;
                boolStart = true;
                toPower = '';
                numberSaveTwo = '';
                numberSaveThree = '';
            });
        }
        else if (operation.value == '.') {
                operation.addEventListener('click', () => {
                    getDot();
                    if (boolDot == true) {
                        input.innerHTML = valueSave + operation.value;
                        valueSave = input.innerHTML;
                        boolDot = false;
                        numberSave += operation.value;
                    };
                });
        }
        else if(operation.value) {
            operation.addEventListener('click', () => {
                if (input.innerHTML.charAt(input.innerHTML.length - 1) != '.') {
                    boolSqrt = false;
                    boolTrygometric = false;
                    boolDot = true;
                    boolPower = false;
                    if(numberSaveTwo.length == 0) {
                        numberSave = numberSaveThree;
                        numberSaveTwo = numberSaveThree;
                    }
                    if(toPowerOf.length != 0) {
                        numberSave = toPowerOf + toPower;
                        input.innerHTML = valueSave.substring(0, valueSave.length - numberSave.length - 1) + toThePowerOf(toPowerOf);
                        valueSave = input.innerHTML;
                        numberSave = '';
                        toPowerOf = '';
                        toPower = '';
                        numberSaveThree = '';
                    }
                    let innerLength = input.innerHTML.substring(input.innerHTML.length - 1, input.innerHTML.length);
                    if (innerLength == '+' || innerLength == '-' || innerLength == '*' || innerLength == '/') {
                            input.innerHTML = valueSave.substring(0, input.innerHTML.length - 1) + operation.value;
                            valueSave = input.innerHTML;
                            numberSave = '';
                            toPowerOf = '';
                            toPower = '';
                            numberSaveThree = '';
                            boolMemory = true;
                    }
                    else {
                        input.innerHTML = valueSave + operation.value;
                        numberSave = '';
                        toPowerOf = '';
                        toPower = '';
                        numberSaveThree = '';
                    }
                }
            });
        }
    }
};
buttonsOperation.forEach((item) => {
    new Calc(item);
});

function getDot() {
    for (var i = 0; i < input.innerHTML.length; i++) {
        if (input.innerHTML.charAt(i) == '.') {
            boolDot = false;
        }
        if (input.innerHTML.charAt(i) == '+' || input.innerHTML.charAt(i) == '-' || input.innerHTML.charAt(i) == '*' || input.innerHTML.charAt(i) == '/') {
            if (numberSave.length != 0) {
                boolDot = true;
                console.log("Dot Activated");
                boolDotEnable = false;
            }
        }
        if (boolDotStart == true) {
            boolDot = true;
            console.log("Dot2 Activated");
            boolDotStart = false;
        }
    }
}
function squared(x) {
    return x * x;
}
function cube(x) {
    return x * x * x;
}
function divided(x) {
    return '1 /' + x;
}
function dividedTwo(x) {
    return 1 / x;
}
function getThePowerOf(x) {
    return `${x}^`;
}
function toThePowerOf(x) {
    return Math.pow(x, toPower);
}