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

//for race promise api
const rp1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("p1 success"), 3000);
});
const rp2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject("p2 failed"), 1000);
});
const rp3 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("p3 success"), 2000);
});


Promise.race([rp1, rp2, rp3]).then(res => {console.log(res)}).catch((err) => console.error(err));

//So race condition displays the first promise to be settled whether it is resloved or rejected

//Promise.any
const ap1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("p1 success"), 3000);
});
const ap2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject("p2 fail"), 2000);
});
const ap3 = new Promise(function(resolve, reject) {
  setTimeout(() => reject("p3 fail"), 1000);
});
Promise.any([ap1, ap2, ap3]).then(res => {console.log(res)}).catch((err) => console.error(err));

//in any the first resolved settled promised is the result
//what will happen if all the promises are rejected

const fap1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject("p1 fail"), 3000);
});
const fap2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject("p2 fail"), 2000);
});
const fap3 = new Promise(function(resolve, reject) {
  setTimeout(() => reject("p3 fail"), 1000);
});
Promise.any([fap1, fap2, fap3])
.then(res => 
  {
    console.log(res)
  })
  .catch((err) => {
 console.error(err);
 console.log(err.errors);
});   