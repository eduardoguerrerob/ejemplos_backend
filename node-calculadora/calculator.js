const writeLog = require('./log');

function sumar(op1, op2) {
    let suma = op1 + op2;
    writeLog(`Sumar ${op1} + ${op2} es ${suma}`);
    return suma;
}

function restar(op1, op2) {
    let resta = op1 - op2;
    writeLog(`Restar ${op1} - ${op2} es ${resta}`);
    return resta;
}

function multiplicar(op1, op2) {
    let mult = op1 * op2;
    writeLog(`Multiplicar ${op1} * ${op2} es ${mult}`);
    return
}

function dividir(op1, op2) {
    if (op2 != 0) {
        let div = op1 / op2;
        writeLog(`Dividir ${op1} / ${op2} es ${div}`);
        return div;
    }
    else
        writeLog('División por cero');
}

module.exports = {
    sum: sumar,
    res: restar,
    mul: multiplicar,
    div: dividir
}

