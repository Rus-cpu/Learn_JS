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