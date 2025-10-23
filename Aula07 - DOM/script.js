// Selecionar o elemento h1 e alterar texto
let titulo = document.querySelector("#titulo"); // pela classe
titulo.innerText = "Bem vindo ao meu site";
console.log(titulo);

// Selecionar elementos com classe texto e alterar cores
let texto = document.getElementsByClassName("texto");
texto[0].style.color = "blue";
texto[1].style.backgroundColor = "green";

// Selecionar o primeiro parágrafo e alterar texto
let primeiroParagrafo = document.querySelector(".texto"); // primeira menção q aparecer
primeiroParagrafo.innerText = "Este é um novo texto";

// selecionar todos os paragrafos
let todosParagrafos = document.querySelectorAll("p");
console.log(`Qtd parágrafos: ${todosParagrafos.length}`);

// criar um novo elemento <p> e add dentro da DIV no HTML
let novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "Este é novo parágrafo";
let novaDiv = document.getElementById("novaDiv");
novaDiv.appendChild(novoParagrafo);

// alterar atributos <a href> com set (get pega o atributo)
let link = document.getElementById("link");
link.setAttribute("href", "https://www.uol.com.br");

// adicionar nova classe no elemento
let OutroParagrafo = document.getElementById("paragrafoNovo");
OutroParagrafo.classList.add("destaque");

// remover classe do elemento
OutroParagrafo.classList.remove("destaque");
