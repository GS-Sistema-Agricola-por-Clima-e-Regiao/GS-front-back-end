function mostrarDetalhe(tipo) {
    const elemento = document.getElementById(tipo);

    const textos = {
        produtividade:
            "O sistema recomenda culturas adequadas para cada região, aumentando a produtividade.",

        diminuicao:
            "A escolha correta da cultura reduz desperdícios e custos.",

        fortalecimento:
            "A tecnologia fortalece o agronegócio através de análises climáticas."
    };

    if (elemento.innerHTML !== "") {
        elemento.innerHTML = "";
        return;
    }

    elemento.innerHTML = `
        <div class="aba">
            ${textos[tipo]}
        </div>
    `;
}