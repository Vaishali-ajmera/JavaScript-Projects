const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
    
    
    let randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber);
    // selecting random number fron 0-3
     document.body.style.backgroundColor = colors[randomNumber];
     color.textContent = colors[randomNumber];

})
