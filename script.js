let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (getAbsoluteDistance(userGuess, targetNumber) === getAbsoluteDistance(computerGuess, targetNumber)) {
    return true;
  } else if (getAbsoluteDistance(userGuess, targetNumber) > getAbsoluteDistance(computerGuess, targetNumber)) {
    return false;
  } else {
    return true;
  }
};

const getAbsoluteDistance = (user, target) => Math.abs(user - target)

const updateScore = winner => {
  winner === 'human' ? humanScore ++ : computerScore ++
};

const advanceRound = () => currentRoundNumber ++;

const alert = userGuess => {
  if (userGuess > 9 || userGuess < 0) {
    return 'Your Number Is Out Of Range!!!';
  }
}
