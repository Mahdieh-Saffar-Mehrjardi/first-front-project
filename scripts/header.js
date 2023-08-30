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
