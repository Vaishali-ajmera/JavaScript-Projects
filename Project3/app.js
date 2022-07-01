let data = 
[
    {
        name: "rohan",
        age: 20 
    },
    {
        name: "sohan",
        age: 18
    },
    {
        name: "mohan",
        age: 12
    },
    {
        name: "dholan",
        age: 56 
    },
    {
        name: "ram",
        age: 20 
    }
    
    

]

const info = document.querySelector('#info');
let details = data.map( (item) => {// here item is object
    return ` <div> ${item.name} is ${item.age} years old. </div>`;
    
});
console.log(details);

info.innerHTML = details.join('\n');