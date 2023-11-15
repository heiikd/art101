$("#my-button").click(function(){
    console.log("button clicked!");
    var name=prompt("whats your name?");
    console.log("Prompt returned: " + name);
    newText = "Hello" + name + "!";
    $("#title").html(newText);
});