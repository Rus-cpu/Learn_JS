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
