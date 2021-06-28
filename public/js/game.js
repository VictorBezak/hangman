import Game from './classes/Game.js';

// Answer Input
let answerInput = document.querySelector('#answer-input input');
let startGameBtn = document.getElementById('start-offline-game-btn')
let game;

if (startGameBtn && answerInput) {
  startGameBtn.addEventListener('click', () => {
    if (answerInput.value !== "") {
      let answer = answerInput.value.toUpperCase();

      game = new Game(answer);
      game.init();
    }
  })
}
