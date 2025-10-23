// seleciona o paragrafo pelo id
let paragrafo = document.getElementById("meuParagrafo");

// add o ouvidor de eventos para quando passar o mouse por cima do parágrafo
paragrafo.addEventListener("mouseover", function() {
    paragrafo.classList.add("hover");
})

// add o ouvidor de eventos para quando o mouse sair do parágrafo
paragrafo.addEventListener("mouseout", function() {
    paragrafo.classList.remove("hover");
})
paragrafo.mou