let idade = 0;
let peso = 0;
let sexo = "";
let contadorPessoas = 0;
let pessoas = [];
let contadorHomens = 0;
let contadorMulheres = 0;
let acumPesoMulheres = 0;
let acumIdadeHomens = 0;
const readline = require("readline-sync"); // input com node

console.log("===== MÉDIAS E TOTAIS =====\n");
console.log("Digite a idade, peso e idade de 10 pessoas abaixo.\n");
while (contadorPessoas != 10) {
  idade = Number(
    readline.question(`Digite a idade da ${contadorPessoas + 1} pessoa: `)
  );

  peso = Number(
    readline.question(`Digite o peso da ${contadorPessoas + 1} pessoa: `)
  );

  sexo = readline.question(`Digite o sexo da ${contadorPessoas + 1} pessoa (M/F): `);

  pessoas.push([idade, peso, sexo]);
  contadorPessoas++;
}

for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i][2] == "M") {
    contadorHomens++;
    acumIdadeHomens += pessoas[i][0];
  }
  if (pessoas[i][2] == "F") {
    contadorMulheres++;
    acumPesoMulheres += pessoas[i][1];
  }
}

console.log(`Total de homens: ${contadorHomens}`);
console.log(`Total de mulheres: ${contadorMulheres}`);
console.log(`Média idade homens: ${acumIdadeHomens / contadorHomens}`);
console.log(`Média pesos das mulheres: ${acumPesoMulheres / contadorMulheres}`);

