function resultado() {
    const veiculo = document.querySelector("#modelo").value;
    let preco = Number(document.querySelector("#preco").value);
    const ano = Number(document.querySelector("#ano").value);
    let estadoVeiculo;

    console.log(veiculo);
    console.log(preco);
    console.log(ano);

    if (ano == 2025) {
        estadoVeiculo = 'Novo';
        preco += (preco * 0.08);  
    }
    else if (ano >= 2023) {
        estadoVeiculo = 'Seminovo';
        preco += (preco * 0.10);  
    }
    else {
        estadoVeiculo = 'Usado';
        preco += (preco * 0.10);
    }

    let msgResultado1 = document.querySelector("#resultado1");
    msgResultado1.textContent = `${veiculo} - ${estadoVeiculo}`;
    let msgResultado2 = document.querySelector("#resultado2");
    msgResultado2.textContent = `Preço de Venda R$: ${preco.toFixed(2)}`;

    console.log(msgResultado1);
    console.log(msgResultado2);
    
}

const botao = document.querySelector("#btn");
botao.addEventListener("click", function() {
    resultado();    
})


