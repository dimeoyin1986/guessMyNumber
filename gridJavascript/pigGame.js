"use strict"

const player0El = document.querySelector(".player-0-panel")
const player1El = document.querySelector(".player-1-panel")
const score0El = document.querySelector("#score-0");
const score1El = document.querySelector("#score-1");
const current0El = document.querySelector("#current-0")
const current1El = document.querySelector("#current-1")
const diceEl = document.querySelector(".dice");
console.log(diceEl)
const btnNew = document.querySelector(".new");
const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");

/*diceEl.classList.add("hidden")

score0El.textContent = 0;
score1El.textContent = 0;
let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;*/

let scores, playing, currentScore, activePlayer
const initFunction = () => {
    playing = true
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    diceEl.classList.add("hidden")
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove("winner")
    player1El.classList.remove("winner")
    player0El.classList.add("active")
    player1El.classList.remove("active")
}
initFunction()


const switchPlayer = () => {
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`#current-${activePlayer}`).textContent = 0;
    currentScore = 0;
  
    player0El.classList.toggle("active")
    player1El.classList.toggle("active")
}


// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener("click", () => {
    if (playing) {
        // 1. generate random dice roll
        const diceNumber = Math.trunc(Math.random() * 6) + 1
        console.log(diceNumber)
        // 2. display random dice roll
        diceEl.classList.remove("hidden")
        diceEl.src = `../assets/images/face-${diceNumber}.jpeg`
        // 1. check if the dice roll is 1,
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
        } else {
            //if so switch player
            switchPlayer()
        }

    }


})


btnHold.addEventListener("click", () => {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add("hidden")
            document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner")
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active")
        } else {
            switchPlayer()
        }
    }


})


btnNew.addEventListener("click", () => {
    initFunction()
})


