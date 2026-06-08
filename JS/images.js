const imagem = document.getElementById("imagem-beneficios");

const imagens = [
  "./images/diminuiçãoDeGastos.png",
  "./images/produtividade.png",
  "./images/agronegocio.png",
];

let indice = 0;

document.querySelector(".next").addEventListener("click", () => {
  indice++;

  if (indice >= imagens.length) {
    indice = 0;
  }

  imagem.src = imagens[indice];
});

document.querySelector(".prev").addEventListener("click", () => {
  indice--;

  if (indice < 0) {
    indice = imagens.length - 1;
  }

  imagem.src = imagens[indice];
});
