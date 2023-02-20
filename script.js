// Link Id's from HTML to the JavaScript Variables

var startquiz = document.getElementById("start");
var startquizbtn = document.getElementById("startquizbtn");
var QAbody = document.getElementById("q&a");
var quiztimer = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var resultEl = document.getElementById("result");
var quizover = document.getElementById("Quizover");
var finalscoreEl = document.getElementById("finalscore");
var submitscorebtn = document.getElementById("submitscore");


 // Questions and Answers
 var QuestionsandAnswers = [{
    question: "Commonly used data types DO Not Include:",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers"},
    
    {
    question: "The condition in an if / else statement is enclosed with _____",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "paranthesis",
    choice4: "square brackets"},
   
    {
    question: "Arrays in JavaScript can be used to store _____",
    choice1: "numbers and strings",
    choice2: "other Arrays",
    choice3: "booleans",
    choice4: "all of the above"},

 {
    question: "String values must be enclosed wihtin _____ when being assigned to variables",
    choice1: "commas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "paranthesis"},

{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "Javascript",
    choice2: "terminal/bash",
    choice3: "for loops",
    choice4: "console.log"}   
]


