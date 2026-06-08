function validarQuiz() {

    // Respostas corretas
    const respostas = {
        p1: "sim",
        p2: "nao",
        p3: "sim",
        p4: "sim",
        p5: "sim",
        p6: "nao",
        p7: "nao",
        p8: "certo",      // Hortaliças
        p9: "certo",
        p10: "certo"
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