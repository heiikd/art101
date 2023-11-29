/*
lab 10
REMEMBER: JQUERY MUST BE LOADED FOR SCRIPT TO WORK

Author: Heidi Dullack
Date: November 2023
*/


function fizzbuzz() {
    var oneLongString = "";

    //loop numbers 1 to 200
    for ( num = 1; num <= 200; num++) {
        output = "";
        // multiples of 3 print fizz
        if (num % 3 === 0) {
            output += "Fizz";
        }
        //multiples of 5 print buzz
        if (num % 5 === 0) {
            output += "Buzz";
        }
        //multiples of 7 print boom
        if (num % 7 === 0) {
            output += "Boom";
        }
        //
        if (output === "") {
            output = num;
        }

        oneLongString += output + " ";
        console.log(output);
    }

    $("#output").html(oneLongString);

}

// Call the function
fizzbuzz();
