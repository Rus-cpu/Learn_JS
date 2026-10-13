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
  setTimeout(() => resolve("fp1 success"), 3000);
});
const fp2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("fp2 failed"), 1000);
});
const fp3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("fp3 success"), 2000);
});

Promise.all([fp1, fp2, fp3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
