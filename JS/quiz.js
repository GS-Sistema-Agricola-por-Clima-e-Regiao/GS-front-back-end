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

function white(){
    document.body.style.backgroundColor = "white"
    document.getElementById("quiz").style.color ="black"
    document.getElementById("hcor").style.color ="black"
    document.getElementById("whi").style.color ="black"
    document.getElementById("blc").style.color ="black"
    document.getElementById("ble").style.color ="black"
    document.getElementById("env").style.color ="black"
}

function black(){
    document.body.style.backgroundColor = "black"
    document.getElementById("quiz").style.color ="white"
    document.getElementById("hcor").style.color ="white"
    document.getElementById("whi").style.color ="white"
    document.getElementById("blc").style.color ="white"
    document.getElementById("ble").style.color ="white"
    document.getElementById("env").style.color ="white"
}

function blue(){
    document.body.style.backgroundColor = "blue"
    document.getElementById("quiz").style.color ="white"
    document.getElementById("hcor").style.color ="white"
    document.getElementById("whi").style.color ="white"
    document.getElementById("blc").style.color ="white"
    document.getElementById("ble").style.color ="white"
    document.getElementById("env").style.color ="white"
}