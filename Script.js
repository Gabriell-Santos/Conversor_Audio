// Pegando as Tags do HTML

let TextArea = document.querySelector("#textarea");
let Voices = document.querySelector("voices");
let Button = document.querySelector("button");

// Criado a Função de Verificação do Texto!
Button.addEventListener("click", () => {
  if (TextArea.value !== "") {
    let speak = new SpeechSynthesisUtterance(TextArea.value);
    window.speechSynthesis.speak(speak);
  }
});
