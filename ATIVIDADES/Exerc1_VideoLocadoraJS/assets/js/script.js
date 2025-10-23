function exibirResultado() {
    let titulo = document.querySelector("#titulo-filme").value;
    let minutos = Number(document.querySelector("#duracao-filme").value);

    let horas = Math.floor(minutos / 60);
    console.log(`horas: ${horas}`);
    minutos = minutos % 60;
    console.log(`minutos: ${minutos}`);
    
    let tituloResultado = document.querySelector("#titulo-resultado");
    let horasMinutosResultado = document.querySelector("#horas-minutos-resultado");
    tituloResultado.innerText = titulo;
    horasMinutosResultado.innerHTML = `${horas} hora(s) e ${minutos} minuto(s)`
}

// click do botao
let botao = document.querySelector("button");
botao.addEventListener("click", function() {
    exibirResultado();
})