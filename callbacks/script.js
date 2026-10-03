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

document.getElementById("clickMe").addEventListener("click", function xyz() {
    //here this function is callback function
    //if you do this click event then this function is called in the call stack
    console.log("the button was clicked.");
});