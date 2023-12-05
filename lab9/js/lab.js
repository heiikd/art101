/*
Note: jQuery must be loaded for this script to work
Author: Heidi Dullack
Date: November 13, 2023
*/

// toggle for special css


$(document).ready(function(){

    // add button to challenge section
    $("#challenge").append("<button id='challengeButton'>Challenge Button</button>");

    // add button to problems section
    $("#problems").append("<button id='problemsButton'>Problems Button!!</button>");

    // add button to results section
    $("#results").append("<button id='resultsButton'>Results Button!!</button>");

    // add an event listener listener to this button
    $("#challengeButton").on("click", function(){
        alert("Button clicked!!");
        $("#toggleDiv").toggleClass("special");
    });

    // add an event listener listener to this button
    $("#problemsButton").on("click", function(){
        alert("Button clicked!!");
        $("#toggleDiv").toggleClass("special");
    });
    
    // add an event listener listener to this button
    $("#resultsButton").on("click", function(){
         alert("Button clicked!!");
         $("#toggleDiv").toggleClass("special");
    });
});

