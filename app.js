const startBtn = document.getElementById('startBtn');
const rangeBtn = document.getElementById('rangeBtn');
const gameStartDiv = document.querySelector('.game-start');
const gameDiv = document.querySelector('.game-body');
const gameDiv2 = document.querySelector('.game-body-2');
const guessBtn = document.getElementById('guessBtn');
const guessInput = document.getElementById('guessInput');
const messageText = document.getElementById('messageText');
const livesEl = document.getElementById('lives');
let minNum;
let maxNum;
let randomNum;
let lives = 3;

gameDiv.style.display = 'none';
gameDiv2.style.display = 'none';
document.getElementById("resetGame").style.display = "none";

startBtn.addEventListener('click', () => {
    gameStartDiv.style.display = 'none';
    gameDiv.style.display = 'flex';
});

rangeBtn.addEventListener('click', () => {
    minNum = parseInt(document.getElementById('minNum').value);
    maxNum = parseInt(document.getElementById('maxNum').value);

    if (isNaN(minNum) || isNaN(maxNum) || minNum >= maxNum) {
        alert('Please enter valid numbers with min less than max.');
        return;
    }

    randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    console.log(randomNum);
    gameDiv.style.display = 'none';
    gameDiv2.style.display = 'flex';
});

guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        messageText.textContent = 'Please enter a valid number.';
        return;
    }

    if (guess === randomNum) {
        messageText.textContent = 'Congratulations! You guessed the correct number!';
        guessBtn.disabled = true;
        guessInput.disabled = true;
        document.getElementById("resetGame").style.display = "block";
    } else {
        if (guess < randomNum) {
            messageText.textContent = 'Try a higher number';
        } else if (guess > randomNum) {
            messageText.textContent = 'Try a lower number';
        }
        lives--;
        livesEl.textContent = lives;
        if (lives === 0) {
            messageText.textContent = `Game over, the correct number is ${randomNum}`;
            guessBtn.disabled = true;
        }
    }
});

function resetGame() {
    location.reload();

}