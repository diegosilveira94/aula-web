// Conjunto de dados
let pessoas = [
  ["Leandro", "M", 1.75],
  ["Maria", "F", 1.55],
  ["Joao", "M", 1.87],
  ["Joana", "F", 1.52],
];

let menor = 0;
menor = pessoas[0][2];
let maior = 0;
maior = pessoas[2][2];
let somaAlturaMulher = 0;
let contadorMulher = 0;
let contadorHomem = 0;

// menor altura
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i][2] < menor) {
    menor = pessoas[i][2];
  }
}

// maior altura
for (let j = 0; j < pessoas.length; j++) {
  if (pessoas[j][2] > maior) {
    maior = pessoas[j][2];
  }
}

// media altura mulheres
for (let k = 0; k < pessoas.length; k++) {
  if (pessoas[k][1] == "F") {
    somaAlturaMulher += pessoas[k][2];
    contadorMulher++;
  }
}

for (let l = 0; l < pessoas.length; l++) {
  if (pessoas[l][1] == "M") {
    contadorHomem++;
  }
}

console.log(`Menor Altura: ${menor}`);
console.log(`Maior Altura: ${maior}`);
console.log(
  `Média Altura Mulheres: ${(somaAlturaMulher / contadorMulher).toFixed(2)}`
);
console.log(`Quantidade Homens: ${contadorHomem}`);
