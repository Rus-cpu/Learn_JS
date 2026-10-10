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