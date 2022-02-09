const fs = require('fs');

const ask = require('./ask');
const imc = require('./imc');

function main() {
  const name = ask.askName();
  const weight = ask.askWeight();
  const height = ask.askHeight();
  const imcResult = imc.calculateImc(weight, height);
  const classification = imc.imcClassification(imcResult);

  fs.appendFileSync('imc.txt', `Olá ${name}, seu IMC é ${imcResult}. Sua classificação de peso é ${classification}.\n`)/

  console.log(`Olá ${name}, seu IMC foi salvo com sucesso!`);
}

main();
