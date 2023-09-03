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

// setting box js

let layoutSection = document.querySelector('.layout')

let layoutList = ['fashion', 'fashion2', 'fashion2', 'vegetable'
    , 'watch', 'Furniture', 'Flower', 'Beauty', 'Electronics',
    'Pets', 'gym', 'tools', 'Shoes', 'bags', 'Marijuana'
]

layoutList.forEach(item => {
    layoutSection.insertAdjacentHTML('beforeend',`
    <div class="setting-item">
        <div class="setting-image"></div>
        <div>
            <h4>${item}</h4>
            <div class="setting-box-btn">
                <a href="">Preview</a>
            </div>
        </div>
    </div> 
    `)
})

let shopSection = document.querySelector('.shop')

let shopList = ['Left Sidebar', 'Right Sidebar', 'No Sidebar']

shopList.forEach(item => {
    shopSection.insertAdjacentHTML('beforeend',`
    <div class="setting-item">
        <div class="setting-image"></div>
        <div>
            <h4>${item}</h4>
            <div class="setting-box-btn">
                <a href="">Preview</a>
            </div>
        </div>
    </div>
    `)
})

let productSection = document.querySelector('.product')

let productListSetting = ['Left Sidebar', 'Right Sidebar', 'No Sidebar',
    'Three Column', 'Four Image', 'Bundle Product', 'Image Outside'
]

productListSetting.forEach(item => {
    productSection.insertAdjacentHTML('beforeend',`
    <div class="setting-item">
        <div class="setting-image"></div>
        <div>
            <h4>${item}</h4>
            <div class="setting-box-btn">
                <a href="">Preview</a>
            </div>
        </div>
    </div>
    `)
})

let settingBoxTitle = document.querySelectorAll('.setting-box-title')
let colorPicker = document.querySelector('.color-picker')
let rtlElem = document.querySelector('.rtl')

settingBoxTitle[0].addEventListener('click', () => {
    layoutSection.classList.toggle('open')
})
settingBoxTitle[1].addEventListener('click', () => {
    shopSection.classList.toggle('open')
})
settingBoxTitle[2].addEventListener('click', () => {
    productSection.classList.toggle('open')
})
settingBoxTitle[3].addEventListener('click', () => {
    colorPicker.classList.toggle('open')
})
settingBoxTitle[4].addEventListener('click', () => {
    rtlElem.classList.toggle('open')
})

// open and close setting section

let settingBackBtn = document.querySelector('.setting-back')
let settingBox = document.querySelector('.setting-box')
let settingBtn = document.querySelector('.setting-button')
let closeSettingBox = document.querySelector('.close-setting-box')


settingBackBtn.addEventListener('click',()=>{
    settingBox.classList.remove('opensetting')
})

settingBtn.addEventListener('click',() => {
    settingBox.classList.add('opensetting')
})

closeSettingBox.addEventListener('click' , () => {
    settingBox.classList.remove('opensetting')
})
