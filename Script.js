// Pegando as Tags do HTML

let TextArea = document.querySelector("#textarea");
let Voices = document.querySelector("voices");
let Button = document.querySelector("button");

// Criando a lista de Vozes!
window.speechSynthesis.addEventListener("voiceschanged", () => {
  let voicesList = window.speechSynthesis.getVoices();
  for (let V in voicesList) {
    let optionEL = document.createElement("option");
    optionEL.setAttribute("value", V);
    optionEL.innerHTML = voicesList[V];
  }
});

// Criado a Função de Verificação do Texto!
Button.addEventListener("click", () => {
  if (TextArea.value !== "") {
    let speak = new SpeechSynthesisUtterance(TextArea.value);
    window.speechSynthesis.speak(speak);
  }
});
