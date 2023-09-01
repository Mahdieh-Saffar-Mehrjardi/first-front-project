let $ = document
// category js
let categoryTitle = $.querySelector('.category-title')
let categoryList = $.querySelector('.category-list')


let categoryItemsArray = [
    'Fashion', 'Shoes', 'Bags', 'Watch'
    , 'Flower', 'Pets', 'Electronics'
    , 'Vegetables', 'Furniture', 'Beauty'
    , 'Tools', 'Gym', 'Marijuana'
]

categoryItemsArray.forEach(item =>{
    categoryList.insertAdjacentHTML('beforeend', `
    <li>
        <a href=""> ${item} </a>
    </li>
    `)
})

categoryTitle.addEventListener('click', () => {
    categoryList.classList.toggle('is-open')
})

// new product js

let newProductArray = [
    { name: 'Watch 1', src: 'images/trending1.jpg', newPrice: '$156.00', oldPrice: '$260.00' },
    { name: 'Watch 2', src: 'images/trending2.jpg', newPrice: '$207.00', oldPrice: '$345.00' },
    { name: 'Watch 3', src: 'images/trending3.jpg', newPrice: '$356.00', oldPrice: '$445.00' },
    { name: 'Watch 4', src: 'images/trending4.jpg', newPrice: '$466.40', oldPrice: '$530.00' },
    { name: 'Watch 5', src: 'images/trending5.jpg', newPrice: '$218.40', oldPrice: '$420.00' },
    { name: 'Watch 6', src: 'images/trending6.jpg', newPrice: '$135.00', oldPrice: '$225.00' }
]

let newProductBox = $.querySelector('.new-product-bottom-section')
let angleLeft = $.querySelector('.new_angle_left')
let angleRight = $.querySelector('.new_angle_right')
let currentSlid = 1
let rowCount = 3

function displayNewProduct() {
    newProductBox.innerHTML = ''

    let endIndex = rowCount * currentSlid
    let startIndex = endIndex - rowCount

    let paginatedNew = newProductArray.slice(startIndex, endIndex)

    paginatedNew.forEach(product => {
        newProductBox.insertAdjacentHTML('beforeend', `
    <div class="new-product-content">
        <a href="">
            <img class="new-product-img" src="${product.src}" alt="new product">
        </a>
        <div>
            <a href="" class="new-product-name">${product.name}</a>
            <h4 class="new-product-price"> ${product.newPrice}
                <del> ${product.oldPrice} </del>
            </h4>
        </div>
    </div>
    `)
    })
}

displayNewProduct()

function changeSlid() {
    if (currentSlid > 1) {
        currentSlid--
    } else {
        currentSlid++
    }
    displayNewProduct()
}

angleLeft.addEventListener('click', changeSlid)
angleRight.addEventListener('click', changeSlid)

// increase and decrease the quantity

let quantityLeft = $.querySelector('.quantity-left')
let quantityRight = $.querySelector('.quantity-right')
let quantityNum = $.querySelector('.quantity-num')
let quantityButtons = $.querySelectorAll('.btn-solid')
let stock = $.querySelector('.stock')

quantityRight.addEventListener('click',function(){
    let num = quantityNum.innerHTML
    num++
    quantityNum.innerHTML = num
    if (num > 15){
        stock.innerHTML = 'Out of stock'
        quantityButtons.forEach(function(item){
            item.classList.replace('able','disable')
            item.href = 'URL:void(0)'
        })
    }
})

quantityLeft.addEventListener('click',function(){
    let num = quantityNum.innerHTML
    if(num > 1){
        num --
        quantityNum.innerHTML = num
    }
    if(num <= 15){
        stock.innerHTML = 'In stock'
        quantityButtons.forEach(function(item){
            item.classList.replace('disable','able')
            item.href = ''
        })
    }
})

// change image

let mainImg = $.querySelector('.main-image')
let productImgs = $.querySelectorAll('.product-images')
let oldSrc = mainImg.src
productImgs.forEach(img => {
    img.addEventListener('click', () => {
        productImgs.forEach(image => {
            if (image.src == oldSrc) {
                image.classList.remove('selected-img')
            }
        })
        console.log(img.src);
        mainImg.src = img.src
        img.classList.add('selected-img')
        oldSrc = img.src
    })
})

// reminder box

let day = $.querySelector('.day')
let hour = $.querySelector('.hour')
let minute = $.querySelector('.minute')
let second = $.querySelector('.second')

setInterval(function () {

    let time = new Date()

    let dayValue = 800 - time.getDay()
    let hoursValue = time.getHours()
    let minutesValue = time.getMinutes()
    let secondsValue = time.getSeconds()

    day.innerHTML = `-${dayValue}`
    hour.innerHTML = `-${hoursValue}`
    minute.innerHTML = `-${minutesValue}`
    second.innerHTML = `-${secondsValue}`
}, 1000)

// container bottom

let description = $.querySelector('.description-title')
let descriptionContent = $.querySelector('.description-content')
let video = $.querySelector('.video-title')
let videoContent = $.querySelector('.video-content')
let writeReview = $.querySelector('.write-review-title')
let writeReviewContent = $.querySelector('.writeReview-content')
let selectedElem = description
let showContent = descriptionContent

function change(newElem, newContent){
    selectedElem.classList.remove('active')
    showContent.classList.replace('show','unshow')
    newElem.classList.add('active')
    newContent.classList.replace('unshow','show')
    selectedElem = newElem
    showContent = newContent
}

description.addEventListener('click', () => {
    change(description, descriptionContent)
})

video.addEventListener('click', () => {
    change(video, videoContent)
})

writeReview.addEventListener('click', () => {
    change(writeReview, writeReviewContent)
})

// related products section js

let relatedproducts = $.querySelector('.relatedproduct-container')
let productsArrray = [
    { id: 1, src: 'images/trending1.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver', onsale: false },
    { id: 2, src: 'images/trending2.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'sienna silver', onsale: false },
    { id: 3, src: 'images/trending3.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'navy', onsale: true },
    { id: 4, src: 'images/trending4.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'bisque', onsale: true },
    { id: 5, src: 'images/trending5.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'chocolate navy', onsale: true },
    { id: 6, src: 'images/trending6.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'steelblue bisque', onsale: false }
]

let colorlists
let colorsArray
let productImage

productsArrray.forEach(product => {
    relatedproducts.insertAdjacentHTML('beforeend', 
        `<div class="relatedproduct-items">
        <div class="relatedproduct-box">
            <div class="ralatedproduct-image">
                <span class="new-item">
                    new
                </span>
                <a href="">
                    <img class="product-img" src= "${product.src}" alt="">
                </a>
                <div class="product-icons">
                    <a class="product-icon__link" href="#">
                        <i class="fa fa-shopping-cart fa-flip-horizontal shopping shopping_cart"></i>
                    </a>

                    <a class="product-icon__link" href="#">
                        <i class="fa fa-heart shopping heart"></i>
                    </a>

                    <a class="product-icon__link" href="#">
                        <i class="fa-solid fa-magnifying-glass shopping magnifying"></i>
                    </a>

                    <a class="product-icon__link" href="#">
                        <i class="fa fa-refresh shopping refresh"></i>
                    </a>
                </div>
            </div>
            <div class="product-details">
                <div class="stars product-star">
                    <div class="star">★</div>
                    <div class="star">★</i></div>
                    <div class="star">★</i></div>
                    <div class="star">★</i></div>
                    <div class="star">★</i></div>
                </div>
                <a href="">
                    <h6 class="product-name">${product.name}</h6>
                </a>
                <h4 class="discounted-price"> ${product.discountedPrice}
                    <del class="product-price">${product.price}</del>
                </h4>
                <ul class="product-color-list">
                    
                </ul>
            </div>

        </div>
    </div>`

    )
    colorlists = $.querySelectorAll('.product-color-list')
    colorsArray = product.colors.split(' ')
    productImage = $.querySelectorAll('.ralatedproduct-image')
    colorsArray.forEach(color => {
        colorlists[product.id -1].insertAdjacentHTML('beforeend',
            `<li class="${color} color-box"></li>`
        )
    })

    if(product.onsale){
        productImage[product.id - 1].insertAdjacentHTML('afterbegin',
            `<span class="on-sale">
            on sale
        </span>`
        )
    }
})