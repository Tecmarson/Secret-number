export const menorValor = 1;
export const maiorValor = 100;
export const elementoMenorValor = document.querySelector("#menor-valor");
export const elementoMaiorValor = document.querySelector("#maior-valor");
export const numeroSecreto = gerarNumeroAleatorio();

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

export function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);
