const myHeading = document.querySelector('h1');
myHeading.textContent = 'TIC TAC TOE';

document.querySelectorAll('td')
.forEach(e => e.addEventListener("click", function() {
    // Here, `this` refers to the element the event was hooked on
    console.log("clicked")
}));

//i need to be able to add an X or O mark to each tb (table elemenent)
//if I click on an element I need to select x or o
//when one is clicked I need to make that marked

console.log('test')

//testing for github