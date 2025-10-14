/*  Aula de JavaScript

    Conceitos básicos */

alert('Texto do js externo');

// Variáveis
/*  -> Tipagem dinâmica, ou seja, não é necessário indicar o tipo primitivo.
    -> "var" torna a variável global.
    -> "let" é uma variável que pertence somente ao escopo.
    -> "const" é uma variável que não pode ter alterado o seu valor, não se aplica no array, pode ser alterado.
*/

const PI = 3.14;
let nome = 'Diego'; // String
let nome1 = "Diego"+nome; // String
let nome2 = `Diego ${nome}`; // String
let opcao = true; // boolean
let peso = 80.5; // float
let idade = 31 // int

let idades = [42, 36, 7, 99]; //Array dinâmico
let valores = [10, 'Diego', 5.55, true]; //Array com diversos tipos de dados
idades[99] = 'último'; //armazenar valor na posição especifica
for (let i in valores) console.log(valores[i]); // forma 1 de iteração array
for (let i of valores) console.log(i); // forma 2 de iteração array
for (let i in valores) console.log(i); // forma 3 de iteração do indice do array
console.log(valores);

// Objeto do HTML
let objeto = document.querySelector('h1');
console.log(objeto); //imprime o elemento
console.log(objeto.textContent); //imprime o conteúdo dentro do 
objeto.textContent = 'Texto alterado';

// Funcoes
function soma(n1=2, n2=3){
        console.log(`Soma: ${n1 + n2 + 1}`);
}

let valor1 = Number(prompt('Digite o valor 1: '));
let valor2 = Number(prompt('Digite o valor 2: '));
soma(valor1, valor2);