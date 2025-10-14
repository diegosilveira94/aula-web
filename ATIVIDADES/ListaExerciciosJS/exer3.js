let numeros = [];
let numero = 0;
let somaPares = 0;
let somaPrimos = 0;
let contadorNumeros = 0;

console.log("===== SOMA DOS NÚMEROS PARES E PRIMOS =====\n");
console.log("Digite 10 números abaixo.\n");
while (contadorNumeros != 10) {
  let numero = Number(
    prompt(`Digite o ${contadorNumeros + 1}° número desejado: `)
  );
  contadorNumeros++;
  numeros.push(numero);
  console.log(numeros);
  console.clear();
}

for (let i = 0; i < numeros.length; i++) {
  // soma pares
  if (numeros[i] % 2 == 0) somaPares += numeros[i];
  // soma primos
  if (numeros[i] > 1 && numeros[i] % 4 == 0 && numeros[i] % 6 == 0)
    somaPrimos += numeros[i];
}

console.log(`Soma números pares: ${somaPares}`);
console.log(`Soma números primos: ${somaPrimos}`);
