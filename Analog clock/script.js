setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
   const date = new Date();
   const getHours = date.getHours()
   const getMinutes = date.getMinutes();
   const getSeconds = date.getSeconds();

   //Conversion into degrees
   const hrotation = 30*getHours + 0.5*getMinutes;
   const mrotation = 6*getMinutes + 0.1*getSeconds;
   const srotation = 6*getSeconds;

   hourHand.style.transform = `translateX(-50%) rotate(${hrotation}deg)`
   minuteHand.style.transform = `translateX(-50%) rotate(${mrotation}deg)`
   secondHand.style.transform = `translateX(-50%) rotate(${srotation}deg)`

}

setClock()


/* 
    hour hand
    12 hrs = 360 deg
    1 hr = 360/12 = 30deg
    h hr = 30h ;
    + deg of round for minutes also 
    60 min = 30deg
    1 min = 1/2 deg
    h min = 1/2h deg
    h hr = 30h + 1/2min
    
    minute hand
    60 min = 360deg
    1 min = 6 deg 
    h min = 6h  + o.1sec
    60 sec = 6 deg 
    1 sec = 0.1 deg

    sec hand
    60 sec = 360deg
    1 sec = 6 deg 
    h sec = 6h deg 

*/
