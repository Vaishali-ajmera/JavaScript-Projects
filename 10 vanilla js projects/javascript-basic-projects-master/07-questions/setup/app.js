//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(question =>{
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click',()=>{
        questions.forEach(item =>{
            // if(item.classList.contains('show-text')){
            //     item.classList.remove('show-text');
            // }
            if(item!==question){
                item.classList.remove('show-text');
            }
        })


        
            question.classList.toggle('show-text');
         })

})
// console.log(questions)






// traversing the dom

// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(function(btn) {
//     btn.addEventListener('click', e =>{
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
    
// });