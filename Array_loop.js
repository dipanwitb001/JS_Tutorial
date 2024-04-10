//array can be declared as
//["","","",""]
// [{}, {}, {}, {}]

// const arr= [1,2,3,4,5,6,7,8,9,10]
//  //forof loop
//  for (const num of arr) {
//     console.log(num);
//  }
// //forof works on array, number, string, boolean
//  const greeting = "Hello world"
//  for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
//  }

 //MAPS


 const map = new Map();
 map.set('IN',"INDIA");
 map.set('USA',"United States of America");
 map.set('Fr',"France");

 console.log(map);


//  Map(3) {
//     'IN' => 'INDIA',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

//trying to use loop in map function

// for (const key of map) {
//     console.log(key);
    // [ 'IN', 'INDIA' ]
    // [ 'USA', 'United States of America' ]
    // [ 'Fr', 'France' ]
//}

//in the abpve loop, key and values are printed together, we can separate them by de-structuring them

// for (const [key, value] of map) {
//     // console.log(key,':-', value);

//     // IN :- INDIA
//     // USA :- United States of America
//     // Fr :- France
// }

//forof loop in object


// const myObject = {
//     'game1':'NFS',
//     'game2':'Spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key,':-', value); //-->  myObject is not iterable
// }

//******************************************************************* */

//forin loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",

}

// for (const key in myObject) {
//     console.log(key);
//     // js
//     // cpp
//     // rb
//     //only the keys are given

// }

// for (const key in myObject) {
//     console.log(myObject[key]);
    // javascript
    // C++
    // ruby
//}

// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
//     js shortcut is for javascript
//     cpp shortcut is for C++
//     rb shortcut is for ruby
 //}

const programming = ["js", "c++", "python", "rb", "java"]

for (const key in programming) {
    // console.log(key);
// 0
// 1
// 2
// 3
// 4

//forin loop doesnt give values of the key directly
    //console.log(programming[key]); ==>
// js
// c++
// python
// rb
// java
}

// forEach function

// programming.forEach( function (val) {
//     console.log(val);
// // js
// // c++
// // python
// // rb
// // java
// })


// array using arrow functions

// programming.forEach( (item) => {
//     console.log(item);
// // js
// // c++
// // python
// // rb
// // java
// })

// function printMe(item){
//     console.log(item);
// }

// programming.forEach (printMe)

// op
// js
// c++
// python
// rb
// java


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})

// op
// javascript
// java
// python