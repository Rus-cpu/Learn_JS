
// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Vallue!!");
// });

// async function getData() {
//     return p;
// }

// const dataPromise = getData();

// dataPromise.then(res => console.log(res));

//How to use async along with await

//difference between async function and await function
// const p = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!");
//     }, 10000)
// });

// async function handlePromise() {
//     const val = await p;
//     console.log(val);
// }

// function getData() {
//     p.then(res => console.log(res));
// }

// getData();
// handlePromise();

//Diving deep into async and await

// const p1 = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!");
//     }, 10000)
// });
// const p2 = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!");
//     }, 5000)
// });

// async function handlePromise() {
//     console.log("hello world");
//     const val2 = await p2;
//      console.log("namste javascript");
//     console.log(val2);
//     const val = await p1;
//     console.log("namste javascript");
//     console.log(val);  
// }

// handlePromise();

//real world example of async/await

const API_URL = "https://invalidurl";

async function handlePromise() {
    try {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    }
    catch(err) {
        console.log(err);
    }
}

