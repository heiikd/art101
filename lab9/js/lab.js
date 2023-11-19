/*
Note: jQuery must be loaded for this script to work
Author: Heidi Dullack
Date: November 13, 2023
*/

// toggle for special css

$(document).ready(function(){
    $("#toggleButton").on("click",function(){
        $("#toggleDiv").toggleClass("special");
    });
});



$(document).ready(function(){
    $(".toggleButton").on("click", function(){
        $(this).parent().toggleClass("special");
    });
 });
 