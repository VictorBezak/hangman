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

// Body container

// const body = document.getElementById('body-container');
// let head;
// let leftEye;
// let rightEye;
// let torso;
// let leftArm;
// let rightArm;
// let leftLeg;
// let rightLeg;


// Body Parts

// if (body) {
//   head = body.querySelector('.head');

//   leftEye = body.querySelector('.eye.left');
//   rightEye = body.querySelector('.eye.right');
  
//   torso = body.querySelector('.torso');
  
//   leftArm = body.querySelector('.arm.left');
//   rightArm = body.querySelector('.arm.right');
  
//   leftLeg = body.querySelector('.leg.left');
//   rightLeg = body.querySelector('.leg.right');
// }

// Body Functions

// function show(part) {
//   if (part) {
//     part.classList.toggle('show');
//   } else {
//     console.log("part does not exist");
//   }
// }

// function gameLost() {
//   if (body) {
//     body.classList.toggle('dead');
//   }
//   setTimeout(() => alert("game lost"), 0);
// }

// function badGuess() {
//   missCounter += 1;
//   let hm = game.hangman
  
//   switch (missCounter) {
//     case 1:
//       hm.showPart(hm.head);
//       break;
//     case 2:
//       hm.showPart(hm.leftEye);
//       break;
//     case 3:
//       hm.showPart(hm.rightEye);
//       break;
//     case 4:
//       hm.showPart(hm.torso);
//       break;
//     case 5:
//       hm.showPart(hm.leftArm);
//       break;
//     case 6:
//       hm.showPart(hm.rightArm);
//       break;
//     case 7:
//       hm.showPart(hm.leftLeg);
//       break;
//     case 8:
//       hm.showPart(hm.rightLeg);
//       break;
//     case 9:
//       game.lost();
//   }
// }

// Game Board Functions

// function initGame(answerValue) {
//   let letterBank = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
  
//   // resetGraphic()
//   showAnswerSpaces(answerValue)
//   showLetterBank(letterBank)
  
//   return letterBank;
// }

// function resetGraphic() {
  // body.classList.remove("dead");
  // visibleBodyParts = body.querySelectorAll(".show");
  
  // for(let i = 0; i < visibleBodyParts.length; i++) {
  //   visibleBodyParts[i].classList.toggle("show");
  // }
// }

// function showAnswerSpaces(value) {
//   const answerBoard = document.getElementById("answer-board");
  
//   if (answerBoard) {
//     while(answerBoard.firstChild) {
//       answerBoard.removeChild(answerBoard.firstChild)
//     }
    
//     let answerSpaces = document.createElement("ul")
//     answerSpaces.id = "letter-spaces"

//     for(let i = 0; i < value.length; i++) {
//       let space = document.createElement("li")
//       let char = value[i]
//       space.classList.value = "letter-space"
    
//       if (char === " ") {
//         space.classList.add("whitespace")
//       } else {
//         // space.textContent = char.toUpperCase()
//       }
    
//       answerSpaces.appendChild(space)
//     }
//     answerBoard.appendChild(answerSpaces);
//   }
// }

// function showLetter(letter) {
//   const letterSpaces = document.getElementById("letter-spaces");
  
//   if (letterSpaces) {
//     let matchingIndeces = []
//     for(let i = 0; i < answer.length; i++) {
//       console.log(letter, answer[i], answer[i] === letter)
//       if (answer[i] === letter) {
//         matchingIndeces.push(i)
//       }
//     }
    
//     console.log(letterSpaces, matchingIndeces)
    
//     matchingIndeces.forEach(index => {
//       letterSpaces.children[index].textContent = letter.toUpperCase();
//     })
//   }
// }

// function showLetterBank(letters) {
//   const wordBank = document.getElementById("word-bank");
  
//   if (wordBank) {
//     while(wordBank.firstChild) {
//       wordBank.removeChild(wordBank.firstChild)
//     }

//     for(let i = 0; i < letters.length; i++) {
//       let letterBtn = document.createElement("button")
//       letterBtn.classList.add("letter")
//       letterBtn.textContent = letters[i].toUpperCase()
    
//       wordBank.appendChild(letterBtn)
//     }
//   }
// }

// Game State

// let missCounter = 0;


// Client

// const wordBank = document.getElementById("word-bank")

// if (wordBank) {
//   wordBank.addEventListener("click", (e) => {
//     const target = e.target;

//     if (target && target.classList.contains("letter")) {
//       let selectedLetter = target.textContent;

//       if (selectedLetter) {
//         let bankIndex = letterBank.indexOf(selectedLetter.toUpperCase())
        
//         console.log(answer)
//         if (answer.includes(selectedLetter.toUpperCase())) {
//           console.log(`${selectedLetter} is in answer`);
//           showLetter(selectedLetter);
//         } else {
//           console.log(`${selectedLetter} is not in answer`);
//           badGuess();
//         }
        
//         letterBank.splice(bankIndex, 1)
//         showLetterBank(letterBank)
//       }
//     }
//   })
// }
