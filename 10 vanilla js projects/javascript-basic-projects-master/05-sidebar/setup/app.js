const sidebar = document.querySelector('.sidebar');
sidebarToggle = document.querySelector('.sidebar-toggle');
closeBtn = document.querySelector('.close-btn');
// console.log(sidebarToggle);

sidebarToggle.addEventListener('click', ()=>{
    // console.log('toggle')
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', ()=>{
    // console.log('close')
    sidebar.classList.remove('show-sidebar');
})