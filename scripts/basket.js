let stickyHeader = document.querySelector('.header-second-container')

document.addEventListener('scroll',function(){
    if (document.documentElement.scrollTop > 200) {
        stickyHeader.classList.add('sticky')
    } else {
        stickyHeader.classList.remove('sticky')
    }
})