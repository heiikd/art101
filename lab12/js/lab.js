/*
lab 10
REMEMBER: JQUERY MUST BE LOADED FOR SCRIPT TO WORK

Author: Heidi Dullack
Date: November 2023
*/


function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
    if (mod == 0) {
        return "Gryffindor!" + " Traits: brave, daring, courageous, determined"
    }
    else if (mod == 1) {
        return "Ravenclaw!" + " Traits: wise, witty, innovative, academic"
    }
    else if (mod == 2) {
        return "Slytherin!" + " Traits: ambitious, shrewd, prideful, closed off"
    }
    else if (mod == 3) {
        return "Hufflepuff!" + " Traits: trustworthy, humble, hardworking, loyal"
    }
}


//add a click listener for the button
$("#button").on("click", function(){

//get value of input and assign to variable name
var name = document.getElementById("input").value;

//run function and store result in variable house
var house = sortingHat(name);

//append a div to our new output div
$("#output").append('<div class="text"><p>' + "The Sorting Hat has sorted you into " + house + '</p></div>')

});