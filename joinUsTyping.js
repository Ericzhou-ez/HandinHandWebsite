const staticText = "Hand in Hand, together we";
const words = ["THRIVE.", "GROW.", "SUCCEED.", "ADVANCE.", "CREATE.", "INSPIRE.", "DISCOVER.", "TRANSFORM."];
const typingSpeed = 220; // Adjusted typing speed for smoother effect
const erasingSpeed = 60; // Adjusted erasing speed for smoother effect
const delayBetweenWords = 1400; // Delay between words in milliseconds

const dynamicTextElement = document.querySelector('.dynamic-text');
let wordIndex = 0;
let charIndex = 0;

function typeWord() {
    if (charIndex < words[wordIndex].length) {
        dynamicTextElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(eraseWord, delayBetweenWords);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        dynamicTextElement.textContent = dynamicTextElement.textContent.slice(0, -1);
        charIndex--;
        setTimeout(eraseWord, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWord, typingSpeed);
});
