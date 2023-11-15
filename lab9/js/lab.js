/*
Note: jQuery must be loaded for this script to work
Author: Heidi Dullack
Date: November 13, 2023
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Click meee!</button>");
// add a click listener to this button
$("#button-challenge").click(function(){
    //now add/subtract the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>Click meee!!!</button>");
// add a click listener to the challenge button
$("button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

// add button to results section
$("#results").append("<button id='button-resultss'>CLick meeeee!!!!!!</button>");
// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});