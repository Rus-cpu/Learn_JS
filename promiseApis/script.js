const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p1 success"), 3000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p2 success"), 1000);
});
const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p3 success"), 2000);
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});

//what if one promise fails then

const fp1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p1 success"), 3000);
});
const fp2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("p2 failed"), 1000);
});
const fp3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p3 success"), 2000);
});

Promise.all([fp1, fp2, fp3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//Now allSettled 
const asp1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p1 success"), 3000);
});
const asp2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p2 success"), 1000);
});
const asp3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("p3 failed"), 2000);
});

Promise.allSettled([asp1, asp2, asp3]).then((res) => {
  console.log(res);
});

//this is the safest way  