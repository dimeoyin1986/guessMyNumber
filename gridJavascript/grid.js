"use strict";
let randomNum = Math.trunc(Math.random() * 20) + 1
console.log(randomNum);
let highscore = 0;

const username = document.querySelector(".username").textContent = "dimeoyin engineers we care about you ..."
const myContainer = document.querySelector(".container")
const myNumber = document.querySelector(".number")
const myScore = document.querySelector(".score")
const myHighScore = document.querySelector(".highscore")
console.log(myHighScore)
const myCheck = document.querySelector(".check")


const message = (message) => {
    document.querySelector(".message").textContent = message;
}



let score = document.querySelector(".score").textContent = 30;
document.querySelector(".again").addEventListener("click", () => {
    myScore.textContent = 30;
    myNumber.textContent = "?";
    message(" 🤔 start guessing");
    /* document.querySelector(".message").textContent = " 🤔 start guessing";*/
    randomNum = Math.trunc(Math.random() * 20) + 1
    console.log(randomNum)
    document.querySelector(".guess").value = ""
    myContainer.style.backgroundColor = "darkred"
    myNumber.style.color = "white"
    myNumber.style.backgroundColor = "black"
})



myCheck.addEventListener("click", () => {
    // const guessNumber = (document.querySelector(".guess").value)*1;
    const guessNumber = Number(document.querySelector(".guess").value);
     console.log( typeof guessNumber)
    if (!guessNumber) {
        message("⛔ No number is supply");
    } else if (guessNumber === randomNum) {
        message("🍿 Correct number !")
        myContainer.style.backgroundColor = "darkgreen"
        myNumber.style.color = "gold"
        myNumber.style.backgroundColor = "navy"
        myNumber.textContent = randomNum;

    } else if (guessNumber !== randomNum) {
        if (score > 1) {
            message(guessNumber > randomNum ? `📈 this number is too high` : `📉 this number is too low`)
            /*score = score - 1;*/
            score -= 1;

            myScore.textContent = score;

        } else {
            message(`💥You lost the game `)
            /* document.querySelector(".message").textContent = `💥You lost the game `*/
            myScore.textContent = 0;
        }
    }

    if (score > highscore) {
        highscore = score;
        myHighScore.textContent = highscore;

    }

})