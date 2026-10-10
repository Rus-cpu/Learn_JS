// const cart = ["shoes", "pants", "tee"];

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId); 
// }); //it cereates orderId


// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     proceedToPayment(orderId); 
// });

const GITHUB_API = "https://api.github.com/users/Rus-cpu";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function(data) {
    console.log(data);
})

const cart = ["shoes", "shirt", "kurtha"];

createOrder(cart, function(orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function() {
            updateWalletBalance(summaryInfo);
        })
    })
});


createOrder(cart)
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function(summaryInfo) {
        return updateWalletBalance(summaryInfo);
    });