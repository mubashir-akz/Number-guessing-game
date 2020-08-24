let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessbtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


minNum.textContent = min
maxNum.textContent = max
guessbtn.addEventListener('click', function () {


    const guess = parseInt(guessInput.value)
    console.log(typeof (guess))

    if (isNaN(guess) || guess > 10 || guess < 1) {
        showError(`enter values ${min} to ${max}`, 'red')
    }
    if (guess === winningNum) {
        showError(`${winningNum} is correct.YOU WON!`, 'green')
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green'
    }
    else {
        guessesLeft-=1

        if (guessesLeft == 0) {
            guessInput.disabled = true;
            guessbtn.disabled = true;
            guessInput.style.borderColor = 'red'

            showError(`Game Over correct number is ${winningNum}`,'red');
        }
        else{
            guessInput.style.borderColor = 'red'

            showError(`${guess}.You have only ${guessesLeft} guesses left`,'red')
        }
    }
})


function showError(text, color) {
    message.textContent = text;
    message.style.color = color;
}