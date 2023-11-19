/*
lab 10
REMEMBER: JQUERY MUST BE LOADED FOR SCRIPT TO WORK

Author: Heidi Dullack
Date: November 2023
Code belongs to Wes Modes
*/

function generateRandomText() {
    const text = "When you were here before Couldn't look you in the eye You're just like an angel Your skin makes me cry  You float like a feather  In a beautiful world   I wish I was special  You're so fuckin' special But I'm a creep I'm a weirdo What the hell am I doin' here? I don't belong here I don't care if it hurts I wanna have control I want a perfect body I want a perfect soul I want you to notice When I'm not around So fuckin' special I wish I was special But I'm a creep I'm a weirdo What the hell am I doin' here? I don't belong here She's running out the door (run) She's running out She run, run, run, run Run Whatever makes you happy Whatever you want You're so fuckin' special I wish I was special But I'm a creep I'm a weirdo What the hell am I doin' here? I don't belong here I don't belong here";
    const min = 4;
    const max = 150;
    const randLen = Math.floor(Math.random() * (max - min +1)) + min;
    // get a random starting index to slice the radiohead text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // generate the random text
    return text.slice(randStart + randLen);
}

//add a click listener for the button
$("#make-convo").on("click", function(){
});

// get new fake dialogue
const newText = generateRandomText();

//append a div to our new output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>')