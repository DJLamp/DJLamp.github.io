let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = document.getElementById('guess').value;
    let result = document.getElementById('result');

    if (guess == randomNumber) {
        result.textContent = "Congratulations! You guessed the right number!";
        result.style.color = 'green';
    } else if (guess < randomNumber) {
        result.textContent = "Too low! Try again.";
        result.style.color = 'orange';
    } else if (guess > randomNumber) {
        result.textContent = "Too high! Try again.";
        result.style.color = 'orange';
    } else {
        result.textContent = "Please enter a valid number.";
        result.style.color = 'red';
    }
}
