import Hangman from './Hangman.js';
import AnswerSpaces from './AnswerSpaces.js';
import LetterBank from './LetterBank.js';

export default class {
  constructor(answer) {
    this.answer = answer;
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
    this.letterBank.init(this.onGuess)
    
    // Initialize game board
    // this.hangman.reset()
    // showAnswerSpaces(answerValue)
    // showLetterBank(letterBank)
  }

  onGuess(e) {
    const target = e.target;

    if (target && target.classList.contains("letter")) {
      let selectedLetter = target.textContent;

      if (selectedLetter) {
        let bankIndex = allLetters.indexOf(selectedLetter.toUpperCase())
        
        if (this.answer.includes(selectedLetter.toUpperCase())) {
          console.log(`${selectedLetter} is in answer`);
          showLetter(selectedLetter);
        } else {
          console.log(`${selectedLetter} is not in answer`);
          this.badGuess();
        }
        
        allLetters.splice(bankIndex, 1)
      }
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

  reset() {}

  guess(letter) {

  }

  
  badGuess() {
    this.incorrectGuesses += 1;
    let hm = game.hangman
    
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
        game.lost();
    }
  }

  lost() {
    this.hangman.die();

    setTimeout(() => alert("game lost"), 0);
  }

  won() {
    alert("game won")
  }
}