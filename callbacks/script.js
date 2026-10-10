//What is a callback function in javascript
setTimeout(function () {
    console.log("timer");
});

function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y");
}); 

// document.getElementById("clickMe").addEventListener("click", function xyz() {
//     //here this function is callback function
//     //if you do this click event then this function is called in the call stack
//     console.log("the button was clicked.");
// });

//what if you have to count the numbers of times the button was clicked

// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("button clicked", ++count);
// });

//declaring global variable might cause many problems so you can use closures which provide data encapsulation ,prevent global namespace pollution and allows independent instances od stateful functions

function cl() {
    count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log(`button clicked ${++count}`);
    });
}

cl();

//now this function xyz forms a closure with function cl this means that when a button is clicked the function xyz is triggerd that means it is calledbacks but it still remembers the variables and function present in the lexical environment of the parent function ie it forms closures with the parent.

//garbage collection and removeEventListeners
 
//advanced level of javascript

const cart = ["shoes", "pants", "kurta"];

api.creteOrder(cart, function () {
  api.proceedtoPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

//Callback hell: when you are passing call back function into other call back function creating a lot of nested callback function which makes your code unmaintainable and redable which is known as callback hell and it is also refered to as pyramid of DOOM

//Inversion of control: if you pass your callback function into other function hoping that the other function will do the work and call our function as intended then this leads to your piece of code depending on other code so you wont have control over your code.






