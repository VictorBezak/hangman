export default class AnswerSpaces {
  constructor(answer) {
    this.answer = answer;
  }


  init() {
    const answerBoard = document.getElementById("answer-board");

    if (answerBoard) {
      while (answerBoard.firstChild) {
        answerBoard.removeChild(answerBoard.firstChild)
      }

      let answerSpaces = document.createElement("ul")
      answerSpaces.id = "letter-spaces"

      for (let i = 0; i < this.answer.length; i++) {
        let space = document.createElement("li")
        let char = this.answer[i]
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

  showLetter(letter) {
    const letterSpaces = document.getElementById("letter-spaces");

    if (letterSpaces) {
      let matchingIndeces = []
      for (let i = 0; i < answer.length; i++) {
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
}