import { verificaChute } from "./validandoChute.js";

export const elementoChute = document.querySelector("#chute");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

export function onSpeak(event) {
  const chute = event.results[0][0].transcript;
  exibeChute(chute);
  verificaChute(chute);
}

export function exibeChute(chute) {
  elementoChute.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${chute}</span>
  `;
}

recognition.addEventListener("end", () => recognition.start());
