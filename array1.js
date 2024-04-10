//array declerations

const arr = [1,2,3,4,5];
const heroes = ["surya sen","Netaji"];

const arr2 = new Array(1,2,3,4)
// console.log(arr[1]);

// //array methods
// // arr.push(6); // to add a new value to the array
// // arr.pop(); // to remove the last value

// arr.unshift(9); // to add a new value to the array without 
// arr.shift(); // to remove the first value

// console.log(arr.includes(9)); // false, checks if the element is present in the array or not
// console.log(arr.indexOf(3)); //2
// console.log(arr);

//slice, splice

const myn1 = arr.slice(1,3)

console.log(myn1); //[ 2, 3 ]
console.log("A ",arr);// A  [ 1, 2, 3, 4, 5 ]

const myn2 = arr.splice(1,3);

console.log(myn2); // [ 2, 3, 4 ]
console.log("B ",arr); // B  [ 1, 5 ]