const myHeading = document.querySelector('h1');
myHeading.textContent = 'TIC TAC TOE';

document.querySelectorAll('td')
.forEach(element => element.addEventListener("click", function(event) {
    // Here, `this` refers to the element the event was hooked on
    console.log("clicked", event.target.id)
}

));

function reply_click(){
    console.log(event.srcElement.id);
}

// var board = {
//   '1A': undefined,
//   '1B':
// }

//could collect in matrix
/*
-CHECK winner function that runs every time to see if theres a winner, run this each time
-function to toggle a square, make a counter that flips back and forth between x and o
-helper functions to check for winners
*/

//i need to be able to add an X or O mark to each tb (table elemenent)
//if I click on an element I need to select x or o
//when one is clicked I need to make that marked


//add function to onclick to set the value to the selector selected (x or o)
//save the values to an array
//array for the whole table containing
  //3 arrays -- one for each row