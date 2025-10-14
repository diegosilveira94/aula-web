// Conjunto de dados
let pessoas = [
  ["Leandro", 21, "Bom"],
  ["Maria", 35, "Regular"],
  ["Carlos", 28, "Ótimo"],
  ["Fernanda", 42, "Ruim"],
  ["João", 19, "Bom"],
  ["Patrícia", 31, "Regular"],
  ["Rafael", 26, "Ótimo"],
  ["Juliana", 38, "Ruim"],
  ["Bruno", 24, "Bom"],
  ["Aline", 33, "Regular"],
  ["Eduardo", 45, "Ótimo"],
  ["Camila", 22, "Ruim"],
  ["Thiago", 29, "Bom"],
  ["Larissa", 36, "Regular"],
  ["André", 40, "Ótimo"],
];

let contadorRegular = 0;
let contadorBom = 0;
let contadorOtimo = 0;
let acumIdadeOtimo = 0;

for (let i = 0; i < pessoas.length; i++) {
  // opiniao regular
  if (pessoas[i][2] == "Regular") contadorRegular++;
  // % opiniao bom
  if (pessoas[i][2] == "Bom") contadorBom++;
  // idade com opiniao otimo
  if (pessoas[i][2] == "Ótimo") {
    acumIdadeOtimo += pessoas[i][1];
    contadorOtimo++;
  }
}

console.log(
  `Quantidade de pessoas que responderam regular: ${contadorRegular}`
);
console.log(
  `Média idades das pessoas que responderam ótimo: ${(
    acumIdadeOtimo / contadorOtimo
  ).toFixed(0)}`
);
console.log(
  `Porcentagem de pessoas que responderam bom entre todos os espectadores: ${(
    (contadorBom / 15) *
    100
  ).toFixed(2)}%`
);
