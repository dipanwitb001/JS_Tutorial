//Singleton
//const tinderUser = new Object() --> singleton object

const tinderUser = {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); ---> { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@example.com",

    //objects inside object
    fullname : {
        userfullName :{
            firstname : "John",
            lastname : "Smith"
        }
    }
}

// console.log(regularUser.fullname); // ---> { userfullName: { firstname: 'John', lastname: 'Smith' } }

// console.log(regularUser.fullname.userfullName) // --> { firstname: 'John', lastname: 'Smith' }

// console.log(regularUser.fullname.userfullName.firstname) ;// ---> John


//Object merging

const obj1= { 1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = { obj1, obj2}
// console.log(obj3) ; // --> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

console.log(Object.assign(obj1, obj2)) // read the documentation about object assign
// --> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//another way
// 


// array object

const users = [
    {
        id: 1,
        email: "dip@gmail.com",
    },
    {
        id: 1,
        email: "dip@gmail.com",
    },
    {
        id: 1,
        email: "dip@gmail.com",
    }
]

users[1].email
// console.log(Object.keys(tinderUser)); // keys are stored in array form --> [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));// values are stored in array form --> [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser)); // keys are stored in array form --> [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks if the mentioned property exists or not ---> true


///// OBJECT DE-STRUCTING

const course = {
    coursename : "js in Hindi",
    price:"999",
    courseInstructor: "hitesh" 
}

// values can be accessed in traditional way as well as in de-structed way like :

const{courseInstructor} = course
console.log(courseInstructor); // ---> hitesh
// or it can be given a specific name

const{courseInstructor: instructor} = course
console.log(instructor) // ---> hitesh