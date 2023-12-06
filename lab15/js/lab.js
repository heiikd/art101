console.log("JS Loaded");
$.ajax({
  // API url
  url: "https://pokeapi.co/api/v2/pokemon/137/",

  // whether this is a post or get req
  type: "GET", 
  //data type we want to get back
  datatType: "json",
      //success function
      success: function(data) {
        console.log(data);
    },
})
