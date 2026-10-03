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