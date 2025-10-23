function calculo() {
    let titulo = document.querySelector("#titulo").value;
    let duracao = Number(document.querySelector("#duracao").value);
}

// vincula o botão
let botao = document.querySelector("#botao");
botao.addEventListener("click", function() {
    calculo();
})