const circle = document.getElementById('circle');

circle.addEventListener("mouseenter" , () =>{
    if(!circle.classList.contains('hover'))
            circle.classList.add('hover');
    else
        circle.classList.remove('hover');     
        
});
