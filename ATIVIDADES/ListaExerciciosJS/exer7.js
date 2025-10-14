const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

let data;

const readline = require("readline-sync");
console.log("===== DATA POR EXTENSO =====\n");

data = readline.question("Digite a data abreviada (dd/mm/aaaa): \n");

let vetorData = data.split("/");
let mes = parseInt(vetorData[1]) - 1 ;
mes = meses[mes];

console.log(`${vetorData[0]} de ${mes} de ${vetorData[2]}`);
