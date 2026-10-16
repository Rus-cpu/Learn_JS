"use strict";

//this in global scope

console.log(this);

//this inside a function

function x() {
    console.log(this);
}

//this in strict mode- (this substitution)

//this keyword also depends on how this is called (window)

x(); //undefined
window.x(); // window

//this inside a object's method

const obj = {
    a: 10,
    x: function () {
     console.log(this.a);   
    }
}

obj.x(); 

//call apply and bind methods

const student1 = {
    firstName: "Rusan",
    lastName: "Maharjan"
};

let printName = function(hometown, state) {
    console.log(this.firstName+ " " + this.lastName+ " " + "from" + hometown +" " + state);
};

printName.call(student1, "kirtipur", "kathmandu");

const student2 = {
    firstName: "Anaya",
    lastName: "Maharjan"
};

printName.call(student2, "kirtipur", "kathmandu");

//if you use apply you have to pass arguments as lists
printName.apply(student2, ["kirtipur", "kathmandu"]);

//bind method make another copy 

const printMyName = printName.bind(student2, "kirtipur", "kathmandu");

console.log(printMyName);
printMyName();


//this keyword inside arrwo function
const obj1 = {
    a: 10,
    x: function () {
        const y = () => {
        console.log(this);
        }
        y();
    }
};

obj1.x();

