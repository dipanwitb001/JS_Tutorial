// // function calculateCartPrice(...num1){
// //     return num1
// // }

// // console.log(calculateCartPrice(200,400,500)) // --> [ 200, 400, 500 ] , in ...num, ... is rest operator(which is also used as spread operator on context basis), will accept any number of argumemts

// // // how to pass an object to function

// // const user = {
// //     usernames: "hitesh",
// //     price: 199
// // }

// // function handleObject(anyobject){
// //     console.log(`Username is ${anyobject.usernames} and price is ${anyobject.price}`)
// // }

// // handleObject(user)


// // ******************** arrow function *******************

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage : function() {
//         console.log(`${this.username}, welcome to website`); //this refers to the current context (just like in java), means the current variable
//         console.log(this)
// ;    }
// }

// // user.welcomeMessage() //hitesh, welcome to website
// // user.username="sam"
// // user.welcomeMessage() //sam, welcome to website

// // hitesh, welcome to website
// // {
// //     username: 'hitesh',
// //     price: 999,
// //     welcomeMessage: [Function: welcomeMessage]
// //   }
// //   sam, welcome to website
// //   {
// //     username: 'sam',
// //     price: 999,
// //     welcomeMessage: [Function: welcomeMessage]
// //   }


// // console.log(this) // --> {}

// // function chai() {
// //     let username = "hitesh"
// //     console.log(this);

// //     // <ref *1> Object [global] {
// //     //     global: [Circular *1],
// //     //     clearImmediate: [Function: clearImmediate],
// //     //     setImmediate: [Function: setImmediate] {
// //     //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
// //     //     },
// //     //     clearInterval: [Function: clearInterval],
// //     //     clearTimeout: [Function: clearTimeout],
// //     //     setInterval: [Function: setInterval],
// //     //     setTimeout: [Function: setTimeout] {
// //     //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
// //     //     },
// //     //     queueMicrotask: [Function: queueMicrotask],
// //     //     structuredClone: [Function: structuredClone],
// //     //     atob: [Getter/Setter],
// //     //     btoa: [Getter/Setter],
// //     //     performance: [Getter/Setter],
// //     //     fetch: [Function: fetch],
// //     //     crypto: [Getter]
// //     //   }

// //     console.log(this.username) // -> undefined
// //     // this cant be like is in function but only in objects
// // }

// // chai();

// // const chai = function () {
// //     let username = "hitesh"
// //     console.log(this.username); // undefined
// // }

// // chai()


// //arrow function
// const chai = () => {
//     let username = "hitesh"
//      console.log(this.username); // undefined
// }

// chai()

// //in amy type of function, this cant be used as in objects
// //learn the diif between regular and arrow functions



// // const addTwo = (num1, num2) =>  {
// //     return num1 + num2
// // }

// // const addTwo = (num1, num2) =>   num1 + num2

// // const addTwo = (num1, num2) =>   (num1 + num2)

// const addTwo = (num1, num2) => ({username:"hitesh"})
// // to return an object, it needs to be wrapped in {},{ } itself becomes a block



// Immediately Invoked Function Expressions

(function chai(){
    console.log(`DB COONECTED`);
})()

//Syntax of iife, ()(), () => where the function is wrapped within, () is the execution parenthesis of the function like   chai()

// use of iife, to immediately invoke the function as well as to eliminate the global scope pollution !!! learn more

(function aurcode(){
    console.log(`DB COONECTED two`);
})()
// this will give an error, as the first iife function doesnot know where to stop, hence terminator (;) must be used to terminate the iife function.

//arrow function can also be expressed as iife function