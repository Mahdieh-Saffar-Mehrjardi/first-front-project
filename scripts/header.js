// loading
let loding = document.querySelector('.loding')
window.addEventListener('load',function(){
    loding.style.display = 'none'
})

// go top button
let goTop = document.querySelector('.go-top-button')

window.addEventListener('scroll',function(){
    if (window.scrollY >= 700) {
        goTop.style.display = 'block'

    } else {
        goTop.style.display = 'none'
    }
})

const scrollWindow = function () {
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 50);
            scrollWindow();
        }, 10);
    }
};

goTop.addEventListener('click',scrollWindow);

// header js
let sidebar = document.querySelector('.sidebar-back')
let sidebarMenu = document.querySelector('.sidebar-menu')
let backBotton = document.querySelector('.back-botton')
let openSidebar = document.querySelector('.open-sidebar')
let sidebarListhover = document.querySelectorAll('.sub-menu-hover')
let sidebarOpen = document.querySelector('.sidebar-open')

backBotton.addEventListener('click',function(){
    sidebar.classList.remove('is-open')
})

sidebarOpen.addEventListener('click',function(){
    sidebar.classList.remove('is-open')
})

openSidebar.addEventListener('click',function(){
    sidebar.classList.add('is-open')
})

sidebarListhover.forEach(function(item){
    item.addEventListener('mouseover',function(){
        sidebarMenu.classList.add('sidebar-unset')
    })
})

sidebarListhover.forEach(function(item){
    item.addEventListener('mouseout',function(){
        sidebarMenu.classList.remove('sidebar-unset')
    })
})

// dark button
let darkbtn = document.querySelector('.dark-button')

darkbtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
