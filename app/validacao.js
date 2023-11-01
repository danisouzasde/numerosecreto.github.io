function verificaSeAcertou(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido, nao e um numero</div>`;
    return;
  }

  if (numeroMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>

      <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button> `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O numero secreto e menor <i class="fa-solid fa-arrow-down-long"></div>`;
  } else {
    elementoChute.innerHTML += `<div>O numero secreto e maior <i class="fa-solid fa-arrow-up-long"></div>`;
  }
}
function chuteInvalido(numero) {
  return Number.isNaN(numero);
}
function numeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
