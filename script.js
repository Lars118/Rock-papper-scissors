let playerScore = 0
let compScore = 0

function computerPlay () {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied, you both picked Rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied, you both picked Paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied, you both picked Scissors'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lost, Paper covers Rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won, Rock breaks Scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lost, Scissors cuts Paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You won, Paper covers Rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'You lost, Rock crushes scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You won, Scissors cuts paper'
    }
}


    function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose a weapon (This game is played in console)', 'Rock, Paper or Scissors').toLowerCase()
        const computerSelection = computerPlay();
        console.log('1',playRound(playerSelection, computerSelection)); 
    }
   if (playerScore > compScore){
    return 'You won! Humanity is saved'
   } else if (playerScore < compScore) {
    return 'You lost! Humanity will be destroyed'
   } else {
    return 'You tied! Try again...'
   }
}
  
console.log(game());