$("#my-button").click(function(){
    console.log("button clicked!");
    var name = $("#input").val() 
    console.log("va returned: " + name);
    newText = "Hello " + name + "!";
    $("#title").html(newText);
});