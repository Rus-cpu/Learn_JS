
// // important methods to learn in Array

// //Map Method

// const numbers = [1, 2, 3, 4, 5, 6];

// const doubled = numbers.map(num => num * 2);

// console.log(doubled);

// // filter method

// const even = numbers.filter(num => num % 2 === 0);

// console.log(even);

// //reduce method

// const sum = numbers.reduce((total, num) => {
//     return total + num;
// }, 0);

// console.log(sum);

// //find method

// const numbers1 = [10, 20, 30, 40, 50];
// const result = numbers1.find(num => num > 25);

// console.log(result);

// //example with objects of find method

// const users = [{name: "Rusan", age: 20}, {name: "Anuj", age: 19}, {name: "Pratik", age:20}];

// const result1 = users.find(user => user.name === "Rusan");
// console.log(result1);

// //some method

// const peopleAges = [17, 14, 13, 8, 20];

// const hasAdults = peopleAges.some(ages => ages >= 18);
// console.log(hasAdults);

// //each method

// const everyAult = peopleAges.every(ages => ages >= 18);

// console.log(everyAult);

// //forEach Method

// numbers1.forEach((num, index) => console.log(index, num));

// //for method on objects

// users.forEach(user => console.log(`Hello ${user.name} you are ${user.age} years old`));

// const arr = [5, 1, 2, 3, 6];

// const output = arr.map(x => x.toString(2));

// console.log(output);

// const output1 = arr.reduce((max, curr) => {
//     if (curr > max) {
//         max = curr;
//     }
//     return max;
// }, 0);

// console.log(output1);

// const output2 = arr.filter(x => x > 4);

// console.log(output2);

//real life examples of map filter and reduce

const users = [
    {firstName: "Rusan", lastName: "Maharjan", age: 20},
    {firstName: "Anuj", lastName: "Maharjan", age: 19},
    {firstName: "Salute", lastName: "Maharjan", age: 19},
    {firstName: "Jenief", lastName: "Mali", age: 20},
];

const fullName = users.map(data => `${data.firstName} ${data.lastName}`);

console.log(fullName);

