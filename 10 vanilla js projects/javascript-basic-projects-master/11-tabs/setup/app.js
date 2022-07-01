const btns  = document.querySelectorAll('.tab-btn');
const about  = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if(id){
        // remove active from btns
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        //remove other articles
        articles.forEach((article)=>{
            article.classList.remove('active');
        });

        const element = document.getElementById(id);
        // console.log(element)
        element.classList.add('active');

        
    }

})