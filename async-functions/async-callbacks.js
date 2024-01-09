//A type of callback function that executes after a specific condition is met and runs concurrently to any other code currently running.

easterEgg.addEventListener("click", () => {
  console.log("Up, Up, Down, Down, Left, Right, Left, Right, B, A");
});

//In the code above, the function passed as the second argument of .addEventListener() is an asynchronous callback — this function doesn’t execute until the easterEgg is clicked.

/*###############################################################################################################################################################################*/

//setTimeout() we can write code that tells our JavaScript program to wait a minimum amount of time before executing its callback function.

setTimeout(() => {
  console.log("Delay the printing of this string, please.");
}, 1000);

/*setTimeout() takes 2 arguments, a callback function and a number specifying how long to wait before executing the function. In the example above, the function will print 'Delay the printing of this string, please.' after 1000 milliseconds (or 1 second) have passed.

Since setTimeout() is non-blocking, we can be executing multiple lines of code at the same time */

setTimeout(() => {
  console.log("Delay the printing of this string, please.");
}, 1000);
console.log("Doing important stuff.");
console.log("Still doing important stuff.");

/*###############################################################################################################################################################################*/

/* setInterval takes a callback function and a number specifying how often the callback function should execute.*/

setInterval(() => {
  alert("Are you paying attention???");
}, 300000);
