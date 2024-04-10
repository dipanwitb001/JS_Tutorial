//Dates
//date is an object in javascript(java)
let myDate = new Date()
//console.log(myDate) 
//2024-04-02T16:11:21.438Z
//console.log(myDate.toString());
 //Tue Apr 02 2024 21:40:50 GMT+0530 (India Standard Time)

//console.log(myDate.toDateString())
//Tue Apr 02 2024

//console.log(myDate.toLocaleString());
// 2/4/2024, 9:44:24 pm

//console.log(typeof myDate); //object

//let myCreateDate = new Date(2023, 0 , 23)
//console.log(myCreateDate.toDateString()); //Mon Jan 23 2023

//let myCreateDate = new Date(2023, 0 , 23,5,3)
//console.log(myCreateDate.toLocaleString());
//  23/1/2023, 5:03:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp) //1712074783117 // ans is in mili seconds 

console.log(myDate.getMonth()); //3 , as it is april and month starts from 0
console.log(myDate.getDay()); //2, as it is 2nd april