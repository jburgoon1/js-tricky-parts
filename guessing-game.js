function guessingGame(num) {
const number = Math.floor(Math.random()*100)
let count = 0
let isWinner = false


return function game(guess){
    if (isWinner) return "The game is over, you already won!";
    count++;
    if (guess === number) {
      isWinner = true;
      const guessWord = count === 1 ? "guess" : "guesses";
      return `You win! You found ${guess} in ${count} ${guessWord}.`;
    }
    if (guess < number) return `${guess} is too low!`;
    if (guess > number) return `${guess} is too high!`;
 
}
}

module.exports = { guessingGame };
