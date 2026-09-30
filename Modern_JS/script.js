//Destructuring 

const user = {
    name : "Rusan",
    age: 20
};

//insted of doing this

// const name = user.name;
// const age = user.age;

// console.log(name, age);

//you can do this in modern javascript

const { name: name1 , age: age1 } = user;

console.log(name1, age1);

//simpler way would be

const {name,age} = user;
console.log(name, age);

//array destructuring 

const numbers = [10, 20, 30, 40];

const [a, b, c, d] = numbers;

console.log(a, b, c, d);

//spread and rest

//if you want to add new numbers in your array

const newNumbers = [...numbers, 50, 60];
console.log(newNumbers);

//for objects
const updatedUser = {
    ...user,
    city: "kathmandu"
};

console.log(updatedUser);

//reset
function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num ,0);
}

console.log(add(10, 20, 30, 40, 50));

//CallBacks
//it is a function passed into another function

function greet(name, callback) {
    console.log(`hello ${name}`);

    callback();
}

greet("Rusan", () => {
    console.log("finished!");
});

//one of the methods of callbacks

setTimeout(() => {
    console.log("Hello!");
}, 2000);