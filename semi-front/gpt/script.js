const display = document.getElementById("display");

function falarFlamengo() {
    const mensagem = new SpeechSynthesisUtterance("Flamengo go go go!");

    mensagem.lang = "pt-BR";
    mensagem.rate = 1.1;
    mensagem.pitch = 1.2;
    mensagem.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(mensagem);
}

function addValue(value) {
    falarFlamengo();
    display.value += value;
}

function clearDisplay() {
    falarFlamengo();
    display.value = "";
}

function calculate(button) {

    if (display.value === "") return;

    falarFlamengo();

    button.classList.add("active");

    setTimeout(() => {

        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Erro";
        }

        button.classList.remove("active");

    }, 400);
}