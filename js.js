
  document.addEventListener('DOMContentLoaded', function () {
    const playerChoices = document.querySelectorAll('#buttons button');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const winText = document.getElementById('win');
    const loseText = document.getElementById('lose');
    const drawText = document.getElementById('draw');

    let playerChoice;

    playerChoices.forEach(function (button) {
      button.addEventListener('click', function () {
        playerChoice = button.classList[0]; // 'rock', 'paper', or 'scissors'
        playGame();
      });
    });

    function playGame() {
      const computerChoice = getRandomChoice();
      updatePlayers(playerChoice, computerChoice);
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(result);
    }

    function getRandomChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }

    function updatePlayers(playerChoice, computerChoice) {
      player1.className = `player ${playerChoice}`;
      player2.className = `player ${computerChoice}`;
    }

    function determineWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return 'draw';
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'win';
      } else {
        return 'lose';
      }
    }

    function displayResult(result) {
      winText.classList.add('hidden');
      loseText.classList.add('hidden');
      drawText.classList.add('hidden');

      if (result === 'win') {
        winText.classList.remove('hidden');
      } else if (result === 'lose') {
        loseText.classList.remove('hidden');
      } else {
        drawText.classList.remove('hidden');
      }
    }
  });