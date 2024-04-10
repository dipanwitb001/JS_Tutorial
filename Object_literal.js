//object can be Singleton or literals
// in this , we will discuss about literals


const mySum = Symbol("key1");
//Symbol datatype
//!!! learn more about synbol datatype and how to add key to it

//object literal
const JsUser = {
    name: "Dipanwita",
    "full name": "Dipanwita Biswas",
    [mySum]:"mykey1",
    age: 23,
    location: "Kolkata",
    email:"dipanwita@gmail.com",
    isLoggedIn: false,
    lastLogingDays : ["Monday", "Saturday"]
}

//ways to access object literal, which consits of key and elements

console.log(JsUser.email) //dipanwita@gmail.com
console.log(JsUser["email"])//dipanwita@gmail.com
console.log(JsUser["full name"])//Dipanwita Biswas
console.log(JsUser[mySum])//mykey1

//to change any key value
JsUser.email = "dipanwita@google.com"

//to lock the values so that values cant be changed
Object.freeze(JsUser);

JsUser.email = "dipanwita@yahoo.com" // this value wont be updated as the object has been freezed
console.log(JsUser);