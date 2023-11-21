/*
lab 11: this jQuery script gets a value from an input and outputs a modified version

JQUERY MUST BE LOADED FOR SCRIPT TO WORK!!

Author: Heidi Dullack
Date: November 2023
Code belongs to Wes Modes
*/

// sort the characters of a string in alphabetical order
function sortString(inputString) {
    // we have to convert the string to an arrat and back again to sort it
    return inputString.split('').sort().join('');
}

// add a click listener to the button
$("#submit").click(function(){
// get the value of the input
const userName = $("#user-name").val();
// lets sort it!
userNameSorted = sortString(userName);
//append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>'); 
});