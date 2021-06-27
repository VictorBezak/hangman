import Hangman from './Hangman';
import AnswerSpaces from './AnswerSpaces';
import LetterBank from './LetterBank';
export default class GameState {
    answer;
    hangman;
    answerSpaces;
    letterBank;
    constructor(answerInput) {
        this.answer = answerInput;
        this.hangman = new Hangman();
        this.answerSpaces = new AnswerSpaces(answerInput);
        this.letterBank = new LetterBank();
    }
    init() { }
    reset() { }
    gameLost() {
        alert("game lost");
    }
    gameWon() {
        alert("game won");
    }
}
