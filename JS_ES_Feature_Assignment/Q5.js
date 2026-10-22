"use strict";

// Q5: Hoisting Lab

// Original code behavior
console.log(score); // undefined: var is hoisted
announce();         // Function declaration is hoisted

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

function startGame() {
    console.log(status);
}

startGame();

// Fixed version using const and arrow functions
const fixedScore = 50;
const announceGame = () => console.log("Game started");
const gameStatus = "ready";
const startFixedGame = () => console.log(gameStatus);

console.log(fixedScore);
announceGame();
startFixedGame();