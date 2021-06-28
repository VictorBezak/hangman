import Hangman from './Hangman.js';
import AnswerSpaces from './AnswerSpaces.js';
import LetterBank from './LetterBank.js';
import ConfettiGenerator from "../deps/confetti.js";

export default class {
  constructor(answer) {
    this.answer = answer;
    this.lettersToGuess = new Set(answer);
    this.lettersToGuess.delete(" ");
    this.incorrectGuesses = 0;
    this.hangman = new Hangman();
    this.hangman.init();
    this.answerSpaces = new AnswerSpaces(answer);
    this.letterBank = new LetterBank(answer);
  }

  init() {
    // Clear input prompt and show game board
    this.showGameBoard()
    this.answerSpaces.init()
    this.letterBank.init()

    const bank = document.getElementById("word-bank")

    if (bank) {
      bank.addEventListener("click", (e) => {
        const target = e.target;

        if (target && target.classList.contains("letter")) {
          let selectedLetter = target.textContent;
    
          if (selectedLetter) {
            if (this.answer.includes(selectedLetter.toUpperCase())) {
              this.answerSpaces.showLetter(selectedLetter);
              this.lettersToGuess.delete(selectedLetter)
            } else {
              this.badGuess();
            }

            if (this.lettersToGuess.size === 0) {
              this.won();
            } else if (this.incorrectGuesses < 9) {
              // remove letter from bank options
              let bankIndex = this.letterBank.bank.indexOf(selectedLetter.toUpperCase())
              this.letterBank.bank.splice(bankIndex, 1)
              this.letterBank.show(this.letterBank.bank)
            }
          }
        }
      })
    }
  }

  showGameBoard() {
    const prompt = document.getElementById('answer-input-prompt');
    if (prompt) {
      prompt.style.display = 'none';
      let gameBoard = document.getElementById('game-board');

      if (gameBoard) {
        gameBoard.style.display = 'grid';
      }
    }
  }
  
  badGuess() {
    this.incorrectGuesses += 1;
    let hm = this.hangman
    
    switch (this.incorrectGuesses) {
      case 1:
        hm.showPart(hm.head);
        break;
      case 2:
        hm.showPart(hm.leftEye);
        break;
      case 3:
        hm.showPart(hm.rightEye);
        break;
      case 4:
        hm.showPart(hm.torso);
        break;
      case 5:
        hm.showPart(hm.leftArm);
        break;
      case 6:
        hm.showPart(hm.rightArm);
        break;
      case 7:
        hm.showPart(hm.leftLeg);
        break;
      case 8:
        hm.showPart(hm.rightLeg);
        break;
      case 9:
        this.lost();
    }
  }

  lost() {
    this.hangman.die();

    this.displayPlayAgain()

    setTimeout(() => alert("You lose"), 0);
  }

  won() {
    this.confetti();

    this.displayPlayAgain();

    setTimeout(() => alert("You win!"), 0);
  }

  confetti() {
    let canvas = document.createElement("canvas");
    canvas.id = "confetti";
    
    document.querySelector("body").appendChild(canvas)

    let confettiSettings = {
      target: canvas
    };

    const confetti = new ConfettiGenerator(confettiSettings)

    confetti.render()
  }

  displayPlayAgain() {
    let retryBtn = document.createElement("button");
    retryBtn.textContent = "Play Again";
    retryBtn.id = "play-again"

    retryBtn.addEventListener("click", () => location.reload())

    let bank = document.getElementById('word-bank');
    bank.style.display = "block"
    bank.style.width = "100%"
    bank.innerHTML = "";
    bank.appendChild(retryBtn);
  }
}