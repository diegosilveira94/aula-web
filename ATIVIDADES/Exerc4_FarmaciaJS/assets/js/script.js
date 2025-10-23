function calculo() {
    // armazena elementos
    let medicamento = document.querySelector("#medicamento").value;
    let preco = Number(document.querySelector("#preco").value);

    // calculo
    let promocao = Math.floor(preco * 2);
    
    // insere no html
    let msgTituloPromocao = document.querySelector("#promocao-medicamento");
    msgTituloPromocao.innerHTML = `Promoção de ${medicamento}`;
    let msgValorPromocao = document.querySelector("#promocao-valor");
    msgValorPromocao.innerHTML = `Leve 2 por apenas R$ ${promocao}`;
    
}

// vincula o botão
const botao = document.querySelector("#btn-promocao");
botao.addEventListener("click", function() {
    calculo();
})