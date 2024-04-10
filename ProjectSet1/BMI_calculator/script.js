const form = document.querySelector('form') //selecting the form,as height and weight are inputtd in the form

form.addEventListener('submit', (e) => {
    e.preventDefault();


    //only on the submit event, below lines will be executed
    const height = parseInt(document.querySelector('#height').value) //here, the value received from the form will be in string, hence need to be converted to int for calculation, so parseInst is used.

    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result');
    const msg = document.querySelector('#msg');

    // implementing checks

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }
    //checking if height is null or less than 0 or a character which cant be converted to string then in the result, the above msg will be displayed.

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid height ${weight}`;
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // toFixed() is used to fix the num upto two decimal places
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6)
        msg.innerHTML ="YOU ARE UNDER WEIGHT"
        else if(bmi > 18.6 && bmi <= 24.9)
        msg.innerHTML ="YOU HAVE NORMAL WEIGHT"
        else
        msg.innerHTML ="YOU ARE OVER WEIGHT"
    }
})