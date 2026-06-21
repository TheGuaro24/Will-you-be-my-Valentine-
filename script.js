const messages = [
    "¿Segura? 🥺",
    "¿De verdad estás segura?? 💔",
    "¡Piénsalo bien por favor! 🥺",
    "Si dices que no, me dará un algo... 😭",
    "Piénsalo otra vez... hard mode active 🎮",
    "Te prometo que valdrá la pena ❤️",
    "Te compraré comida todos los días 🍕",
    "Por favooor di que síí 🙏✨",
    "Ok, ya me estoy poniendo triste... 🥺",
    "Está bien, ya no te pregunto más... mentira, ¡DI QUE SÍ! 😂"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
