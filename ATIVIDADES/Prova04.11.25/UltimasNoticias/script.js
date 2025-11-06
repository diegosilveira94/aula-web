let listaNoticia = [];
let contadorNoticias = 0;

function listar() {
    let noticia1 = document.querySelector("#noticia1");
    noticia1.innerText = `${listaNoticia.length}º) ${listaNoticia[listaNoticia.length - 1]}`;
    let noticia2 = document.querySelector("#noticia2");
    noticia2.innerText = `${listaNoticia.length - 1}º) ${listaNoticia[listaNoticia.length - 2]}`;
    let noticia3 = document.querySelector("#noticia3");
    noticia3.innerText = `${listaNoticia.length - 2}º) ${listaNoticia[listaNoticia.length - 3]}`;    
}

function adicionar() {
    let noticia = document.querySelector("#noticia").value;
    console.log(noticia);
    let msgQtdNoticias = document.querySelector('#qtd-noticias');
    msgQtdNoticias.textContent = contadorNoticias;
    listaNoticia.push(noticia);
}

const botao1 = document.querySelector("#btn-listar");
botao1.addEventListener("click", function() {
    listar();    
})

const botao2 = document.querySelector("#btn-add");
botao2.addEventListener("click", function() {
    adicionar()
    contadorNoticias++;
})