const messages = [
    "Are you sure?",
    "Really sure??",
    "pretty please?",
    "jan... please...",
    "soch toh lo ek bar?",
    "ese na karo yr,bhot mehnat kari hai",
    "how cruel...",
    "bhot jyada wala sad hojayega ye toh",
    "acha fine, ab nahi puchrha",
    "hehe kidding, pls manja!! ❤️"
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