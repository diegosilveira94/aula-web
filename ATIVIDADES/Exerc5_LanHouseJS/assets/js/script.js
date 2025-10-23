function calculo() {
    // armazena elementos
    let preco = Number(document.querySelector("#preco").value);
    let tempoUso = Number(document.querySelector("#tempo").value);

    // calculo
    let valor = Math.ceil(tempoUso / 15) * preco;
    
    // insere no html
    let msgResultado = document.querySelector("#resultado");
    msgResultado.innerHTML = `Valor a pagar R$ ${valor}`;
}

// vincula o botão
const botao = document.querySelector("#btn-resultado");
botao.addEventListener("click", function() {
    calculo();
})