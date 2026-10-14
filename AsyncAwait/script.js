
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
const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
});

async function handlePromise() {
    const val = await p;
    console.log(val);
}

function getData() {
    p.then(res => console.log(res));
}

getData();
handlePromise();