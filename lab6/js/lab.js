// Lab 6
// Author: Heidi Dullack
// Date: 29 October 2023

// Define Variables
myTransport = ["bus", "walking", "bike", "subaru legacy"];

// create an object fo my main ride
myMainRide = {
  make: "Subaru",
  model : "Legacy",
  year : 2008,
  color : "brown",
}

// output
document.writeln("Getting around: " + myTransport + "<br>");
// write object to the document
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");