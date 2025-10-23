function resultado() {
    const veiculo = document.querySelector("#input-veiculo").value;
    const preco = Number(document.querySelector("#input-preco").value);

    let msgPromocao = document.querySelector("#promocao");
    msgPromocao.innerText = `Promoção: ${veiculo}`;
    let msgEntrada = document.querySelector("#entrada");
    msgEntrada.textContent = `Entrada de R$ ${preco / 2}`;
    let msgParcela = document.querySelector("#parcela");
    msgParcela.textContent = `+ 12x de R$ ${(preco / 2) / 12}`;
}

const botao = document.querySelector("#ver-promocao");
botao.addEventListener("click", function() {
    resultado();    
})