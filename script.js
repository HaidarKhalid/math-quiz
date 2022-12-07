let inputInp = document.querySelector(".input");
let num1;
let num2;

let scoreEL = document.querySelector(".score");
let scoreNotEL = document.querySelector(".score-not");
let score = 0 
let scoreNot = 0 

let previosEl = document.querySelector(".previos-answer");

let q1 = document.querySelector(".num-st")
let q2 = document.querySelector(".num-nd")

function getRandom() {
    num1 = Math.floor(Math.random() * 11)
    num2 = Math.floor(Math.random() * 11)
    q1.innerHTML = num1
    q2.innerHTML = num2
}
getRandom()

function submitA() {
    inputInp = document.querySelector(".input")
    answer = num1 * num2
    if (inputInp.value == answer) {
        let previos = answer
        inputInp.value = ""
        score++
        scoreEL.innerHTML = "score :" + score
        previosEl.innerHTML = `PREVIOS ANSWER WAS (${previos})`
        getRandom() 
    } else {
        let previos = answer
        inputInp.value = ""
        scoreNot++
        scoreNotEL.innerHTML = "Not correct :" + scoreNot
        previosEl.innerHTML = `PREVIOS ANSWER WAS (${previos})`
        getRandom()
    }
}

inputInp.addEventListener("keyup", (e)=> {
    if (e.key === "Enter") {
        submitA()
    } else {
    }
})