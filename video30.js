//const programming = ["js", "c++", "python", "rb", "java"]

// const values = programming.forEach( (item) => {
//     console.log(item);
// })
//  console.log(values);
//js
// c++
// python
// rb
// java
// undefined

//forEach function only prints but returns nothing

const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
// const newNums = myNums.filter ( (num) => num > 4 )

// console.log(newNums);
// op
// [ 5, 6, 7, 8 ]
// unlike forEach func, filter func returns values

// const newNums = myNums.filter ( (num) => {
//     return num > 4
// } )

// console.log(newNums);

// using forEach
// const newNums = []

// myNums.forEach ( (num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// })

// console.log(newNums);

const myNumers = [1,2,3,4,5,6,7,8,9,10,11]
// const newNums = myNumers.map( (num) => { return num + 10})


//  chaining
const newNums = myNumers
                        .map( (num) => (num * 10))
                        .map( (num) =>(num +1))
                        .filter( (num) => num>=40)
console.log(newNums);