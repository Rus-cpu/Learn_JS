//Example of higher order function
function x() {
    console.log("Namaste");
}

function y(x) {
    x();
}
y(x);

//code to find area circumference and diameter of given radius in array

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i]);
//     }
//     return output;
// }

// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculateDiameter(radius));

//lets try the optimal way for the same problem using functional programming

const radius = [3, 1, 2, 4];

const area = function(radius) {
    return Math.PI * radius * radius;
}

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}

const diameter = function(radius) {
    return radius * radius;
}

const calculate = function (radius, logic) {
    output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    console.log(output);
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
