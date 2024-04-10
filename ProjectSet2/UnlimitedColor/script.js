// generate a random color

const randomColor = function(){
    const hex="0123456789ABCDEF" //hex color code
    let color = "#" //hex color code
    for (let i = 0; i <6;i++) {
        color+=hex[Math.floor(Math.random() * 16)]; // here the loop runs 6 times to generate a random color of hex code i.e, 6 characters are appended with the #
    }
    return color;
};

// console.log(randomColor());
let interval;
const startChangingColor = function(){
   function changeColor() 
   {
        document.body.style.backgroundColor=randomColor();
    }
    if(!interval)
   interval = setInterval(changeColor,1000);
   
   }

const stopChangingColor = function(){
    clearInterval(interval);
    interval = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);