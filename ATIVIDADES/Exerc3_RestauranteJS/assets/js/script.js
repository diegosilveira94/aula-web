function calculo() {
    // armazena elementos
    let precoBuffet = Number(document.querySelector("#preco").value);
    let peso = Number(document.querySelector("#peso").value);

    // calculo
    let valorPagar = precoBuffet * (peso / 1000);
    
    // insere no html
    let msgValorPagar = document.querySelector("#valor-pagar");
    msgValorPagar.innerHTML = `Valor a pagar R$ ${valorPagar.toFixed(2)}`;
    
}

// vincula o botão
const botao = document.querySelector("#btn-calcular");
botao.addEventListener("click", function() {
    calculo();
})