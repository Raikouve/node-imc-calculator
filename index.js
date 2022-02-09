const ask = require('./ask');
const imc = require('./imc');

const name = ask.askName();
const weight = ask.askWeight();
const height = ask.askHeight();
const imcResult = imc.calculateImc(weight, height);

console.log(`Olá ${name}, seu IMC é ${imcResult}`);
