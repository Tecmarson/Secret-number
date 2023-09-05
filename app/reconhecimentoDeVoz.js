import { verificaChute } from "./validandoChute.js";

export const elementoChute = document.querySelector("#chute");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
  const chute = event.results[0][0].transcript;
  exibeChute(chute);
  verificaChute(chute);
}

function exibeChute(chute) {
  elementoChute.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${chute}</span>
  `;
}

recognition.addEventListener("end", () => recognition.start());
