const clock = document.getElementById('clock');
// document.querySelector('#clock') ---> can be selected like this too

// let date = new Date()

//  it is a static clock, i.e, time will bw changwd whenver it is reloaded or any change is made in the file

// clock.innerHTML = date.toLocaleTimeString()

// method that will load the time automatically after a set inetval
setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
