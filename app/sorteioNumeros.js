const menorValor = 100;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}
console.log(numeroSecreto);

const elementoMenor = document.getElementById("menor-valor");
const elementoMaior = document.getElementById("maior-valor");
elementoMenor.innerHTML = menorValor;
elementoMaior.innerHTML = maiorValor;
