const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide, index)=>{
    slide.style.left = `${index *100}%`;
});

let counter = 0;
nextBtn.addEventListener('click',()=>{
    counter++;
    carousel();
})
prevBtn.addEventListener('click',()=>{
    counter--;
    carousel();
})

function carousel(){
    //working of slides
    // if(counter === slides.length ){
        
    //     counter = 0;
    // }
    // if(counter < 0){
     
    //     counter = slides.length - 1;
    // }

    //hiding buttons
    if(counter === 0){
        prevBtn.style.display = 'none';
    }
    else{
        prevBtn.style.display = 'block';
        
    }
    
    if(counter === slides.length-1){
        nextBtn.style.display = 'none';
        
    }
    else{
        nextBtn.style.display = 'block';

    }
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}