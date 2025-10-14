let salario = 0;
let aumento1 = 0.2;
let aumento2 = 0.15;
let aumento3 = 0.1;
let aumento4 = 0.05;

const readline = require("readline-sync");

console.log("===== CÁLCULO AUMENTO SALARIAL =====\n");

console.log();
salario = parseFloat(readline.question("Digite o salario: \n"));

do {
  if (salario < 0) {
    console.log("Valor incorreto. Digite um valor valido.");
    continue;
  } else {
    if (salario <= 280) {
      console.log(
        `O salario com o reajuste ficou: R$ ${(salario + (salario * aumento1))}`
      );
      break;
    }
    if (salario > 280 && salario <= 700) {
      console.log(
        `O salario com o reajuste ficou: R$${salario + (salario * aumento2)}`
      );
      break;
    }
    if (salario > 700 && salario <= 1500) {
      console.log(
        `O salario com o reajuste ficou: R$${salario + (salario * aumento3)}`
      );
      break;
    }
    if (salario > 1500) {
      console.log(
        `O salario com o reajuste ficou: R$${salario + salario * aumento4}`
      );
      break;
    }
  }
} while (salario < 0 || salario === str);
