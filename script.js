const wordBank = ["austria", "macau", "mexico", "iraq", "taiwan"];
let word = wordBank[Math.floor(Math.random() * wordBank.length)];
let guessedWord = Array(word.length).fill("_");
let attempts = 10;

const wordDisplay = document.getElementById("word");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const lettersDiv = document.getElementById("letters");

wordDisplay.innerText = guessedWord.join(" ");
attemptsDisplay.innerText = "Attempts left: " + attempts;

// Create A-Z buttons
const alphabet = "abcdefghijklmnopqrstuvwxyz";

alphabet.split("").forEach(letter => {
    let btn = document.createElement("button");
    btn.innerText = letter;
    btn.onclick = () => handleGuess(letter, btn);
    lettersDiv.appendChild(btn);
});

function handleGuess(letter, btn) {
    btn.disabled = true;

    let correct = false;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            guessedWord[i] = letter;
            correct = true;
        }
    }

    if (correct) {
        message.innerText = "Great guess!";
    } else {
        attempts--;
        message.innerText = "Wrong guess!";
    }

    wordDisplay.innerText = guessedWord.join(" ");
    attemptsDisplay.innerText = "Attempts left: " + attempts;

    if (!guessedWord.includes("_")) {
        message.innerText = "🎉 You won! Word: " + word;
        disableAllButtons();
    }

    if (attempts === 0) {
        message.innerText = "❌ Game Over! Word: " + word;
        disableAllButtons();
    }
}

function disableAllButtons() {
    document.querySelectorAll("#letters button").forEach(btn => {
        btn.disabled = true;
    });
}