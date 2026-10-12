// const cart = ["shoes", "pants", "tee"];

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// }); //it cereates orderId

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });

// const GITHUB_API = "https://api.github.com/users/Rus-cpu";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function(data) {
//     console.log(data);
// })

// createOrder(cart, function(orderId) {
//     proceedToPayment(orderId, function (paymentInfo) {
//         showOrderSummary(paymentInfo, function() {
//             updateWalletBalance(summaryInfo);
//         })
//     })
// });

// createOrder(cart)
//     .then(function(orderId) {
//         return proceedToPayment(orderId);
//     })
//     .then(function (paymentInfo) {
//         return showOrderSummary(paymentInfo);
//     })
//     .then(function(summaryInfo) {
//         return updateWalletBalance(summaryInfo);
//     });

//by using arrow function
// createOrder(cart)
//     .then(orderId => proceedToPayment(orderId))
//     .then(paymentInfo => showOrderSummary(paymentInfo))
//     .then(summaryInfo => updateWalletBalance(summaryInfo));

const cart = ["shoes", "shirts", "pants"];

createOrder(cart)
.then(function (orderId) {
  console.log(orderId);
  return orderId;
})
.catch(function(err) {
  console.log(err.message);
})
.then(function (orderId) {
  return proceedToPayment(orderId);
})
.then(function(paymentInfo) {
  console.log(paymentInfo);
})
.catch(function(err) {
  console.log(err.message);
})
.then(function (orderId) {
  console.log("no matter what this will definately be called.");
});

function createOrder(cart) {
  //CreateOrder
  //orderId
  //validate a promise
  const pr = new Promise(function (resolve, reject) {
    if (!validateOrder(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function(resolve, reject) {
    resolve("Payment Successful");
  })
}

function validateOrder(cart) {
  return false;
}
