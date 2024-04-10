// creation of promises
const promise1 =new Promise(function(resolve, reject) {
    // Do an asunc task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    },1000)
})
promise1.then(function(){
    console.log('Promise consumed');
})
// then and the promise is connected using the resolve method



new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2');
        resolve();
    },500)
}).then(function(){
    console.log('Async task 2 completed');
})

// parameter passing through promise (through resolve)
const promiseTHree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Chai",email:"chai@example.com"});
    },1000)
})

promiseTHree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Dipanwita",email: "chai@example.com"});
        }
        else{
            reject('ERROR : Something went wrong');
        }
    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);

}).catch((err) => {
    console.log(err);
}).finally(() => console.log("the promise is resolved or rejected"))


// async await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Disha",password: "123"});
        }
        else{
            reject('ERROR : JS went wrong');
        }
    },1000)
})

async function consumePromise(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise()








fetch('https://api.github.com/users/dipanwitb001')
.then((response) => {
    return response.json();
})
.then((date) => {
    console.log(date);
})
.catch((error) => console.log(error));