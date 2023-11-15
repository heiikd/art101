// Author: Heidi Dullack
// November 12, 2023

//create a number array
var numberArray = [32, 6, 87, 2, 16];
//create a function to add numbers in the array
function addFour(x){
    var results = x + 4;
    return results;
}

numberArray.map(addFour);

numberArray.map(function(x){
    var results = x - 8;
    return results;
})

var mapResults = numberArray.map(addFour);
console.log("Results: ", mapResults)


 // Your map results data
 var mapResults = "Your map results here";

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults = numberArray.map(addFour));