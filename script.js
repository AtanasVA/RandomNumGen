'use strict';

let number = Math.trunc(Math.random()*20)+1;

let score = document.querySelector('.score').textContent;
let highScore = document.querySelector('.highscore').textContent;

const defaultMessage = document.querySelector('.message').textContent;
const defaultStyle = document.querySelector('body').style.backgroundColor;
const defaultNumber = document.querySelector('.number').textContent;
const defaultGuess = document.querySelector('.guess').value;
const defaultScore = document.querySelector('.score').textContent;
const defaultHighScore = document.querySelector('.highscore').textContent;

let messageBox = function(message){
    document.querySelector('.message').textContent = message;
}
let bodyColor = function(color){
    document.querySelector('body').style.backgroundColor = color;
}
let boxWidth = function(width){
    document.querySelector('.number').style.width = width;
}
let secretNumber = function(number){
    document.querySelector('.number').textContent = number;
}
let scoreUpdate = function(score){
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    //If no input
    if(!guess){
        messageBox("Try again. You must enter a number :)");

        //If answer is equal to
    }else if(guess === number){
        messageBox("Correct number!");
        bodyColor('#60b347');
        boxWidth('30rem');
        secretNumber(number);
        if (highScore < score){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //If answer is not equal to
    } else if(guess !== number){
        // document.querySelector('.message').textContent = guess > number ? "Number too high, try again..." : "Number too low, try again...";
        messageBox(guess > number ? "Number too high, try again..." : "Number too low, try again...");
        score--;
        scoreUpdate(score);

        if(score < 1){
            messageBox("You lost the game :(");
            scoreUpdate(0);
            bodyColor('#bf3434');
            boxWidth('30rem');
            secretNumber(number);
        }

    } 
})

document.querySelector('.again').addEventListener('click', function(){
    number = Math.trunc(Math.random()*20)+1
    console.log(number);
    messageBox(defaultMessage);
    bodyColor(defaultStyle);
    document.querySelector('.number').textContent = defaultNumber;
    document.querySelector('.guess').value = '';
    scoreUpdate(defaultScore);
    score = defaultScore;
    boxWidth('15rem');
})