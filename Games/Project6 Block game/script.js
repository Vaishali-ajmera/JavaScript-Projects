const character = document.querySelector('#character')
const block = document.querySelector('#block')
const score =  document.getElementById("scoreSpan")

let counter = 0

function jump(){
    if(character.classList == "animate"){
        return
    }
    character.classList.add("animate");
    setTimeout(() => character.classList.remove("animate"),300)

}

const checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft <20 && blockLeft > 0 && characterTop >= 130 )
    {
        block.style.animation = "none";
        alert("Game Over. score: "+ Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        score.innerHTML = Math.floor(counter/100);
    }
} ,10);

document.addEventListener("click",jump);