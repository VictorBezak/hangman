export default class LetterBank {
  constructor(answer) {
    this.answer = answer;
    this.bank = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
  }

  init() {
    const bank = document.getElementById("word-bank")

    this.show(this.bank)
  }

  show(letters) {
    const bank = document.getElementById("word-bank");

    if (bank) {
      while (bank.firstChild) {
        bank.removeChild(bank.firstChild)
      }

      for (let i = 0; i < letters.length; i++) {
        let letterBtn = document.createElement("button")
        letterBtn.classList.add("letter")
        letterBtn.textContent = letters[i].toUpperCase()

        bank.appendChild(letterBtn)
      }
    }
  }
}