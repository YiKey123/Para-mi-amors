let noButtonClicks = 0;
document.getElementById('noButton').addEventListener('click', function () {
    const yesButton = document.getElementById('yesButton');
    const messageDisplay = document.getElementById('messageDisplay');
    const currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const messages = [
        "¿Estás segura?",
        "¿De verdad segura?",
        "¿100% convencida?",
        "No pareces muy convencida, probemos de nuevo",
        "Piénsalo un poco...",
        "Un poco más...",
        "Un poquitito más...",
        "No te arrepentirás",
        "¡Es tu última oportunidad!",
        "Me refería a que esta lo es",
        "Y por esta me refiero a ahora",
        "Quise decir ahora",
        "Di que si amor",
        "¿Por favor?",
        "¿Per favore?",
        "Please?",
        "Porfi"
    ];
    noButtonClicks++;
    yesButton.style.fontSize = (currentFontSize + 5) + 'px';
    if (noButtonClicks < messages.length) {
        messageDisplay.textContent = messages[noButtonClicks - 1];
    } else {
        messageDisplay.textContent = "Porfi";
    }
});
document.getElementById('yesButton').addEventListener('click', function () {
    const gif = document.getElementById('gif');
    const message = document.getElementById('message');
    const buttons = document.querySelector('.buttons');
    gif.src = 'si.gif';
    message.textContent = `Sabía que dirías que sí en tan solo ${noButtonClicks} intento(s), te amo`;
    buttons.style.display = 'none';
});
