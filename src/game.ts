import GameState from './classes/GameState';
// import ConfettiGenerator from "confetti-js";

let gameState: GameState;
let answer: string = "init";
let letterBank: string[];
// Answer Input

let answerInput = document.querySelector('#answer-input input') as HTMLInputElement;

let startGameBtn: HTMLElement | null;
startGameBtn = document.getElementById('start-offline-game-btn')

if (startGameBtn && answerInput) {
  startGameBtn.addEventListener('click', () => {
    if (answerInput.value !== "") {
      answer = answerInput.value.toUpperCase();
      gameState = new GameState(answer);
      console.log(gameState)
      letterBank = initGame(answer)
      console.log(answer)
      const prompt = document.getElementById('answer-input-prompt');
      if (prompt) {
        prompt.style.display = 'none';
        let gameBoard = document.getElementById('game-board') as HTMLElement;

        if (gameBoard) {
          gameBoard.style.display = 'grid';
        }
      }
    }
  })
}

// Body container

const body = document.getElementById('body-container');
let head: HTMLElement | null;
let leftEye: HTMLElement | null;
let rightEye: HTMLElement | null;
let torso: HTMLElement | null;
let leftArm: HTMLElement | null;
let rightArm: HTMLElement | null;
let leftLeg: HTMLElement | null;
let rightLeg: HTMLElement | null;


// Body Parts

if (body) {
  head = body.querySelector('.head');

  leftEye = body.querySelector('.eye.left');
  rightEye = body.querySelector('.eye.right');
  
  torso = body.querySelector('.torso');
  
  leftArm = body.querySelector('.arm.left');
  rightArm = body.querySelector('.arm.right');
  
  leftLeg = body.querySelector('.leg.left');
  rightLeg = body.querySelector('.leg.right');
}

// Body Functions

function show(part: HTMLElement | null) {
  if (part) {
    part.classList.toggle('show');
  } else {
    console.log("part does not exist");
  }
}

function gameLost() {
  if (body) {
    body.classList.toggle('dead');
  }
  setTimeout(() => alert("game lost"), 0);
}

function badGuess() {
  missCounter += 1;
  
  switch (missCounter) {
    case 1:
      show(head);
      break;
    case 2:
      show(leftEye);
      break;
    case 3:
      show(rightEye);
      break;
    case 4:
      show(torso);
      break;
    case 5:
      show(leftArm);
      break;
    case 6:
      show(rightArm);
      break;
    case 7:
      show(leftLeg);
      break;
    case 8:
      show(rightLeg);
      break;
    case 9:
      gameLost();
  }
}

// Game Board Functions

function initGame(answerValue: string) {
  let letterBank = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
  
  // resetGraphic()
  showAnswerSpaces(answerValue)
  showLetterBank(letterBank)
  
  return letterBank;
}

// function resetGraphic() {
//   body.classList.remove("dead");
//   visibleBodyParts = body.querySelectorAll(".show");
  
//   for(let i = 0; i < visibleBodyParts.length; i++) {
//     visibleBodyParts[i].classList.toggle("show");
//   }
// }

function showAnswerSpaces(value: string) {
  const answerBoard = document.getElementById("answer-board");
  
  if (answerBoard) {
    while(answerBoard.firstChild) {
      answerBoard.removeChild(answerBoard.firstChild)
    }
    
    let answerSpaces = document.createElement("ul")
    answerSpaces.id = "letter-spaces"

    for(let i = 0; i < value.length; i++) {
      let space = document.createElement("li")
      let char = value[i]
      space.classList.value = "letter-space"
    
      if (char === " ") {
        space.classList.add("whitespace")
      } else {
        // space.textContent = char.toUpperCase()
      }
    
      answerSpaces.appendChild(space)
    }
    answerBoard.appendChild(answerSpaces);
  }
}

function showLetter(letter: string) {
  const letterSpaces = document.getElementById("letter-spaces");
  
  if (letterSpaces) {
    let matchingIndeces = []
    for(let i = 0; i < answer.length; i++) {
      console.log(letter, answer[i], answer[i] === letter)
      if (answer[i] === letter) {
        matchingIndeces.push(i)
      }
    }
    
    console.log(letterSpaces, matchingIndeces)
    
    matchingIndeces.forEach(index => {
      letterSpaces.children[index].textContent = letter.toUpperCase();
    })
  }
}

function showLetterBank(letters: string[]) {
  const wordBank = document.getElementById("word-bank");
  
  if (wordBank) {
    while(wordBank.firstChild) {
      wordBank.removeChild(wordBank.firstChild)
    }

    for(let i = 0; i < letters.length; i++) {
      let letterBtn = document.createElement("button")
      letterBtn.classList.add("letter")
      letterBtn.textContent = letters[i].toUpperCase()
    
      wordBank.appendChild(letterBtn)
    }
  }
}

// Game State

let missCounter = 0;


// Client

const wordBank = document.getElementById("word-bank")

if (wordBank) {
  wordBank.addEventListener("click", (e) => {
    const target = e.target as HTMLElement | null;

    if (target && target.classList.contains("letter")) {
      let selectedLetter: string | null = target.textContent;

      if (selectedLetter) {
        let bankIndex: number = letterBank.indexOf(selectedLetter.toUpperCase())
        
        console.log(answer)
        if (answer.includes(selectedLetter.toUpperCase())) {
          console.log(`${selectedLetter} is in answer`);
          showLetter(selectedLetter);
        } else {
          console.log(`${selectedLetter} is not in answer`);
          badGuess();
        }
        
        letterBank.splice(bankIndex, 1)
        showLetterBank(letterBank)
      }
    }
  })
}
