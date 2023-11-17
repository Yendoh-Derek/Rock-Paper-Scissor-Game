// Get DOM elements
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

  // Set initial scores
let playerScore = 0;
let computerScore = 0;

  // Update the scores on the page
function updateScores() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

// Get the move display elements
const moveDisplay = document.querySelector('.move p:last-child');
const movesLeftDisplay = document.querySelector('.move p:nth-child(2)');

// Set initial moves left
let movesLeft = 10;

// Update the move display
function updateMoveDisplay() {
  movesLeftDisplay.textContent = `Moves left: ${movesLeft}`;
}

// Get the buttons
const rockButton = document.querySelector('.btn button:nth-child(1)');
const paperButton = document.querySelector('.btn button:nth-child(2)');
const scissorsButton = document.querySelector('.btn button:nth-child(3)');

// Function to handle player move
function playerMove(playerChoice) {
  
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Implement the logic to determine the winner
  if (playerChoice === computerChoice) {
    moveDisplay.textContent = 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    moveDisplay.textContent = 'You win!';
    playerScore++;
  } else {
    moveDisplay.textContent = 'Computer wins!';
    computerScore++;
  }

  // Decrease moves left and update displays
  movesLeft--;
  updateScores();
  updateMoveDisplay();

  // Check if the game is over
  if (movesLeft === 0) {
    endGame();
  }
}


// Function to end the game
function endGame() {
    if(playerScore > computerScore){
        alert("Game Over! You've won!  Refresh the page to play again.");
    }
    else if(playerScore === computerScore){
        alert("Game Over! You had a tie!  Refresh the page to play again.");
    }
    else{
        alert("Game Over! You've lost!  Refresh the page to play again.");   
    }
    
}


// Add click event listeners to buttons
rockButton.addEventListener('click', () => playerMove('rock'));
paperButton.addEventListener('click', () => playerMove('paper'));
scissorsButton.addEventListener('click', () => playerMove('scissors'));

// Initialize displays
updateScores();
updateMoveDisplay();
