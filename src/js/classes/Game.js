import Hangman from './Hangman.js';
// import AnswerSpaces from './AnswerSpaces';
// import LetterBank from './LetterBank';

export default class {
  constructor(answerInput) {
    this.answer = answerInput;
    this.hangman = new Hangman();
    this.hangman.init();
    // this.answerSpaces = new AnswerSpaces(answerInput);
    // this.letterBank = new LetterBank();
  }

  init() { }

  reset() { }

  lost() {
    this.hangman.die();

    setTimeout(() => alert("game lost"), 0);
  }

  won() {
    alert("game won")
  }
}