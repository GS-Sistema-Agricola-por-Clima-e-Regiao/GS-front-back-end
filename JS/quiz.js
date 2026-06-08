function validarQuiz() {

    // Respostas corretas
    const respostas = {
        1: "sim",
        2: "nao",
        3: "sim",
        4: "sim",
        5: "sim",
        6: "nao",
        7: "nao",
        8: "certo",      // Hortaliças
        9: "certo",
        10: "certo"
    };

    let pontos = 0;

    // Verifica se todas as perguntas foram respondidas
    for (let pergunta in respostas) {

        const selecionada = document.querySelector(
            `input[name="${pergunta}"]:checked`
        );

        if (!selecionada) {
            alert(`Responda a pergunta ${pergunta.toUpperCase()}`);
            return;
        }

        if (selecionada.value === respostas[pergunta]) {
            pontos++;
        }
    }

    alert(`Você acertou ${pontos} de ${Object.keys(respostas).length} questões.`);
}