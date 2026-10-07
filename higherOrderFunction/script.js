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

// const calculate = function (radius, logic) {
//     output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

//using array function for the same purpose

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

//this is how map method does the same work
//now creating out similar type of method

// Array.prototype.calculate = function(arr, logic) {
//     output = [];
//     for(let i = 0; i < arr.length; i++)
//     {
//         output.push(logic(arr[i]));
//     }
//     return output;
// }

// console.log(radius.calculate(radius, area));

//this is how you can create similar type of method such as map

// if you want to create a similar one by only passing one argument that is logic then

Array.prototype.calculate = function(logic) {
    output = [];
    for(let i = 0; i < this.length; i++)
    {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));

//you can obtain that by using this keyword