//const balance = new Number(100) 
// console.log(balance);//[Number: 100]

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(1));//100.0

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)) //124

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN')) //1,00,00,000
//sometime it becomes difficult to calculate the no of zeros, hence the above function

// +++++++++++++++++++ Maths ++++++++++++++++++
// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5

console.log(Math.random()); //0.73709674918341 //gives values between 0 and 1, always

console.log((Math.random()*10)+1); //9.086091646016758
//*10 to shift the point by one and adding 1 so that 0 never come[1 to 9]
console.log(Math.floor(Math.random()*10)+1); //floor gives the round off value to its floor, i.e. only the integer part

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1))+min);
//providing a range

