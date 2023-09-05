import { maiorValor, menorValor, numeroSecreto } from "./sortearNumero.js";
import { elementoChute } from "./reconhecimentoDeVoz.js";

export function verificaChute(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += "<div>Chute inválido!</div>";
  }

  if (valorMaiorMenorPermitido(numero)) {
    elementoChute.innerHTML = `
    <div>Valor inválido: O número precisa está entre ${menorValor} e ${maiorValor}.</div>
    `;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto é ${numeroSecreto}.</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente.</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
    `;
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
    `;
  }
}

export function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function valorMaiorMenorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (event) => {
  if (event.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
