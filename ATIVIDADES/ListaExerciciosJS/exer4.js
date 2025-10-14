const btn = document.querySelector("#btnCalcular");
const tabela = document.querySelector("#tabela tbody");

btn.addEventListener('click', () => {
    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);

    if(!n1 || !n2 || !n2 === 0) {
        alert("Valores inválidos")
        return;
    }
    let soma = n1 + n2;
    let mult = n1 * n2;
    let div = n1 / n2;
    let resto = n1 % n2;

    tabela.innerHTML = "";
    
    // Cria uma nova linha
    const novaLinha1 = document.createElement("tr");
    novaLinha1.innerHTML = `
        <td>Soma</td>
        <td>${soma}</td>
    `;
    const novaLinha2 = document.createElement("tr");
    novaLinha2.innerHTML = `
        <td>Multiplicação</td>
        <td>${mult}</td>
    `;
    const novaLinha3 = document.createElement("tr");
    novaLinha3.innerHTML = `
        <td>Divisão</td>
        <td>${div}</td>
    `;
    const novaLinha4 = document.createElement("tr");
    novaLinha4.innerHTML = `
        <td>Resto</td>
        <td>${resto}</td>
    `;
    
    tabela.appendChild(novaLinha1);
    tabela.appendChild(novaLinha2);
    tabela.appendChild(novaLinha3);
    tabela.appendChild(novaLinha4);
})
