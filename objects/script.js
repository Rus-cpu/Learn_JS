//creating a object user

const user = {
    name: "Rusan",
    age: 20,
    course: "BCA"
};

console.log(user.name);

//other way of displaying the values

console.log(user["name"]);

//if you want to add key and values to your objects

user.email = "rusan@example.com";

console.log(user["email"]);

//creating methods 

const user1 = {
    name: "Ram",

    greet () {
        console.log(`hello! ${user1.name}`);
    }
};

user1.greet();

//lets learn about the important methods while working with objects

//objects.key() method

const keys = Object.keys(user);

console.log(keys);

Object.keys(user).forEach(key =>
    console.log(key)
);

//Object.value Method
const values = Object.values(user);
console.log(values);

Object.values(user).forEach(value =>
    console.log(value)
);

//Object.entries method

const entries = Object.entries(user);
console.log(entries);

Object.entries(user).forEach((key, value) => {
    console.log(key, value);
})

//using for of

for(const [key, value] of Object.entries(user)) {
    console.log(key, value);
    //suppose you want to display users information
    console.log(`${key}: ${value}`);
}