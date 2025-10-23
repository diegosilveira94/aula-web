// exer-A
let titulo = document.getElementById("titulo");
titulo.innerHTML = "Bem-vindo ao meu site!";

// exer-B
let Novoparagrafo = document.createElement("p");
Novoparagrafo.innerHTML = "Este é um novo parágrafo";
let div = document.getElementById("minha-div");
div.appendChild(Novoparagrafo);

// exer-C
let link = document.getElementById("meu-link");
link.setAttribute("href", "https://www.senac.br/");

// exerc-D
let paragrafo = document.getElementById("meu-paragrafo");
paragrafo.classList.add("destaque");

// exerc-E
let outroParagrafo = document.createElement("p");
outroParagrafo.innerHTML = "Este é outro parágrafo";
document.body.appendChild(outroParagrafo);