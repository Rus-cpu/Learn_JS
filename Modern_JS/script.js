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