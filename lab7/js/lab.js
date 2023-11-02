// Lab 7
// Author: Heidi Dullack
// Date: Nov 1, 2023
// Code credit: Wes Modes

function sortUserName() {
   var userName = window.prompt("What is your Name?");
   console.log("userName =", userName);
   // split string to array
   var nameArray =userName.split('');
   console.log("nameArray =", nameArray);
   // sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   // join array back to a string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);

   return nameSorted;
}

// output
document.writeln("Haha! I mixed up your name: ",
    sortUserName(), "</br");