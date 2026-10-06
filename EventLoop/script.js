//first example using setTimeout webAPIs to register callback funtion

// console.log("start");

// setTimeout(function cb() {
//     console.log("callback");
// },5000);

// console.log("end");

//adding a button for second example

const page = document.querySelector("body");

const button = document.createElement("button");

button.innerText = "Click Me!";
button.id = "btn";

page.appendChild(button);

console.log("start");
document.getElementById("btn").addEventListener("click", function cb() {
    console.log("callback");
});

console.log("End");

//event loop for fetch 
console.log("START");

setTimeout(function cbT() {
    console.log("CB setTimeout");
},5000);

fetch("https://api.netflix.com").then(function cbF() {
    console.log("cb Netflix");
});

console.log("END");

//here cb function of promises and mutation observer are stored in microtask queue so they get pushed into js engine through callback first after that the cb function of setTimout is pushed in JS engine through callback queue