const messages = [
    "Sure na yan?",
    "As in?",
    "Luh, seryoso?",
    "Loveeeee pleaseee...",
    "Just think about it!",
    "If you say no, iiyak ako...",
    "ma long coat ako niyan...",
    "awit parang gagsti..",
    "Sige na nga, I will stop asking na...",
    "Just kidding, say yes please! ❤️"
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
