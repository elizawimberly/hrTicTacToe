const myHeading = document.querySelector('h1');
myHeading.textContent = 'TIC TAC TOE';

// document.querySelectorAll('td')
// .forEach(element => element.addEventListener("click", function(event) {
//     // Here, `this` refers to the element the event was hooked on
//     //click to get event.target.id
//     //use that val to look up matrix position
//     //add select input to matrix position -- x or o
//     //console.log("clicked", event.target.id)
//   }
// ));

document.querySelectorAll('select')
.forEach(element => element.addEventListener('change', (event) => {
    var selected = event.target.value; //THIS GET THE X OR O!
    //console.log('selected:', selected)
    var location = element.closest('td').id.toString();
    //console.log(location)
    var position = tableMap[location];
    //console.log(position)
    matrix[position[0]][position[1]] = selected;
    checkRows(matrix, selected);
  }
));


function checkCombos(matrix, selected) {
  for (var row of matrix) {
    for (var element of row) {
      if (element === selected) {
        alert(`${selected} won!`)
      }
    }
  }
}

function checkRows(matrix, selected) {
  var current = selected;
  for (var i = 0; i < matrix.length; i++) {
    //console.log(i, matrix[i]);
    var hasMatch = true;
    for (var j = 0; j < matrix[i].length; j++) {
      //console.log('j:', j , matrix[i][j]);
      if (matrix[i][j] !== selected) {
        hasMatch = false;
      }
    }
    if (hasMatch) {
      console.log('match!');
      alert(`${selected} won!`)
      break;
    }
  }
}



var row1 = new Array(3);
var row2 = new Array(3);
var row3 = new Array(3);

var matrix = [
  row1,//0
  row2,//1
  row3//2
]

var tableMap = {
  '1A': [0, 0],
  '1B': [0, 1],
  '1C': [0, 2],
  '2A': [1, 0],
  '2B': [1, 1],
  '2C': [1, 2],
  '3A': [2, 0],
  '3B': [2, 1],
  '3C': [2, 2]
}

/*
1A = matrix[0][0]
1B = matrix[0][1]
1C = matrix[0][2]
2A = matrix[1][0]
2B = matrix[1][1]
2C = matrix[1][2]
3A = matrix[2][0]
3B = matrix[2][1]
3C = matrix[2][2]
*/


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