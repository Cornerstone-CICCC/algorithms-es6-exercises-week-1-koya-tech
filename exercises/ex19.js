/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

let laugh = function (num) {
    return "ha".repeat(num) + "!";
}

function emotions(str, fx) {
    console.log("I'm " + str + ", " + fx);
}

emotions("happy", laugh(2));