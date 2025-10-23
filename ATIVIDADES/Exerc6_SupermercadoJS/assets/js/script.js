function calculo() {
    // armazena elementos
    let produto = document.querySelector("#produto").value;
    let preco = Number(document.querySelector("#preco").value);

    // calculo

    let valorProdutoComDesconto = preco / 2;
    let valorFinal = (preco * 3) - valorProdutoComDesconto;
    
    // insere no html
    let msgResultado1 = document.querySelector("#text-1");
    msgResultado1.innerHTML = `${produto} - Promoção: Leve 3 por R$: ${valorFinal.toFixed(2)}`;
    let msgResultado2 = document.querySelector("#text-2");
    msgResultado2.innerHTML = `O 3º produto custa apenas R$ ${valorProdutoComDesconto.toFixed(2)}`;
}

// vincula o botão
const botao = document.querySelector("#btn-resultado");
botao.addEventListener("click", function() {
    calculo();
})