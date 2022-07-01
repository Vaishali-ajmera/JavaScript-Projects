var numberOfDrums = document.querySelectorAll(".drum").length;
//var n = a.length();

for(i = 0;i<numberOfDrums ;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I got clicked! ");
    });

}