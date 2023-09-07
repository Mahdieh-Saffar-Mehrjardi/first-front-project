let $ = document
// stick header
let stickyHeader = document.querySelector('.header-second-container')

document.addEventListener('scroll',function(){
    if (document.documentElement.scrollTop > 200) {
        stickyHeader.classList.add('sticky')
    } else {
        stickyHeader.classList.remove('sticky')
    }
})

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

// add for each product

let productsArrayAll = [
    { id: 1, src: 'images/trending1.jpg', src2: 'images/trending1.jpg images/watch1_2.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver', onsale: false },
    { id: 2, src: 'images/trending2.jpg', src2: 'images/trending2.jpg images/trending1.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'sienna silver', onsale: false },
    { id: 3, src: 'images/trending3.jpg', src2: 'images/trending3.jpg images/watch3_1.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'navy', onsale: true },
    { id: 4, src: 'images/trending4.jpg', src2: 'images/trending4.jpg images/watch10.jpg images/watch7.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'bisque palegoldenrod silver', onsale: true },
    { id: 5, src: 'images/trending5.jpg', src2: 'images/trending5.jpg images/trending3.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'chocolate navy', onsale: true },
    { id: 6, src: 'images/trending6.jpg', src2: 'images/trending6.jpg images/trending4.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'steelblue bisque', onsale: false },
    { id: 7, src: 'images/trending7.jpg', src2: 'images/trending7.jpg images/watch1_2.jpg', name: 'Watch 14', discountedPrice: '$122.20', price: '$130.00', colors: 'silver wheat', onsale: false },
    { id: 8, src: 'images/watch8.jpg', src2: 'images/watch8.jpg images/watch8_2.jpg', name: 'Watch 8', discountedPrice: '$80.00', price: '$160.00', colors: 'dimgrey sienna', onsale: false },
    { id: 9, src: 'images/watch9.jpg', src2: 'images/watch9.jpg images/trending2.jpg', name: 'Watch 8', discountedPrice: '$80.00', price: '$160.00', colors: 'black sienna', onsale: false },
    { id: 10, src: 'images/watch10.jpg', src2: 'images/watch10.jpg images/watch12.jpg', name: 'Watch 10', discountedPrice: '$346.50 ', price: '$495.00', colors: 'silver palegoldenrod', onsale: true },
    { id: 11, src: 'images/watch11.jpg', src2: 'images/watch11.jpg images/watch1_2.jpg', name: 'Watch 11', discountedPrice: '$86.00 ', price: '$215.00', colors: 'dimgray chocolate', onsale: false },
    { id: 12, src: 'images/watch12.jpg', src2: 'images/watch12.jpg images/watch1_2.jpg', name: 'Watch 12', discountedPrice: '$135.00', price: '$150.00', colors: 'palegoldenrod bisque', onsale: true },
    { id: 13, src: 'images/watch13.jpg', src2: 'images/watch13.jpg images/trending5.jpg', name: 'Watch 13', discountedPrice: '$144.00 ', price: '$360.00', colors: 'black chocolate', onsale: true },
    { id: 14, src: 'images/watch15.jpg', src2: 'images/watch15.jpg images/watch1_2.jpg', name: 'Watch 14', discountedPrice: '$122.20', price: '$130.00', colors: 'silver wheat', onsale: false },
    { id: 15, src: 'images/watch7.jpg', src2: 'images/watch7.jpg images/watch1_2.jpg', name: 'Watch 7', discountedPrice: '$156.60 ', price: '$174.00', colors: 'wheat silver', onsale: false },
]

let productBox = $.querySelector('.container-top')
let locationParams = new URLSearchParams(location.search)
let mainProductId = locationParams.get('id')
console.log(mainProductId);
let mainProductObject = productsArrayAll.find(function (product) {
    return product.id === +mainProductId
})

productBox.insertAdjacentHTML('beforeend',`
                        <div class="col-first">
                            <img class="main-image" src="${mainProductObject.src}" alt="">
                            <div class="bottom-images">
                                
                            </div>
                        </div>
                        <div class="col-second">
                            <div>
                                <h2 class="watch-title">${mainProductObject.name}</h2>
                                <h4 class="price">
                                    <del class="main-price">${mainProductObject.discountedPrice}</del>
                                    <span class="offPercent">40% off</span>
                                </h4>
                                <h3 class="discount-price"> ${mainProductObject.price} </h3>
                                <ul class="product-color-box">
                                    
                                </ul>
                                <div class="dash-border">
                                    <h5 class="stock">
                                        <span>in stock</span>
                                    </h5>
                                    <h6 class="quantity">quantity</h6>
                                    <div class="quantity-box">
                                        <button class="quantity-btn quantity-left" type="button">
                                            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                        </button>
                                        <div class="quantity-num">1</div>
                                        <button class="quantity-btn quantity-right" type="button">
                                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="product-bottons">
                                    <a href="basket.html?id=${mainProductObject.id}" class="able btn-solid">add to cart</a>
                                    <a href="checkout.html" class="able btn-solid">buy now</a>
                                </div>
                                <div class="border-product">
                                    <h6 class="detail">product details</h6>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distrib...</p>
                                </div>
                                <div class="border-product">
                                    <h6 class="detail">share it</h6>
                                    <div class="product-icon">
                                        <ul class="product-social">
                                            <li>
                                                <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://plus.google.com/discover"><i class="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/"><i class="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
                                            </li>

                                        </ul>
                                        <button class="wish-box">
                                            <i class="fa fa-heart"></i>
                                            <span class="title-font">Add To WishList</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="border-product">
                                    <h6 class="detail">time reminder</h6>
                                    <div class="product-reminder-box">
                                        <p>
                                            <span class="timer-box">
                                                <span class="timer-num day">-863</span>
                                                <span class="timer-dot">:</span>
                                                <span class="timer-cal">Days</span>  
                                            </span>
                                            <span class="timer-box">
                                                <span class="timer-num hour">-14</span>
                                                <span class="timer-dot">:</span>
                                                <span class="timer-cal">Hrs</span> 
                                            </span>
                                            <span class="timer-box">
                                                <span class="timer-num minute">-29</span>
                                                <span class="timer-dot">:</span>
                                                <span class="timer-cal">Min</span> 
                                            </span>
                                            <span class="timer-box">
                                                <span class="timer-num second">-44</span>
                                                <span class="timer-cal">Sec</span> 
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

`)

let colorList = $.querySelector('.product-color-box')
let colorArray = mainProductObject.colors.split(' ')

colorArray.forEach(color => {
    colorList.insertAdjacentHTML('beforeend',
        `<li class="${color}"></li>`
    )
})

let colorSelected = $.querySelector(`.${colorArray[0]}`)
colorSelected.classList.add('selected')

let imageSrcArray = mainProductObject.src2.split(' ')
let productAllImg = $.querySelector('.bottom-images')
console.log(imageSrcArray);

imageSrcArray.forEach(imageSrc => {
    productAllImg.insertAdjacentHTML('beforeend', `
    <div>
        <img class="product-images" src="${imageSrc}" alt="">
    </div>
    `)
})

let productImg = $.querySelector('.product-images')
let allProductImg = $.querySelectorAll('.product-images')
let mainImgElem = $.querySelector('.main-image')
let lastColor = colorSelected
let lastImg = productImg
productImg.classList.add('selected-img')

colorArray.forEach((color, index) => {
    let colorElem = $.querySelector(`.${color}`)
    colorElem.addEventListener('click', () => {
        lastImg.classList.remove('selected-img')
        lastColor.classList.remove('selected')
        colorElem.classList.add('selected')
        allProductImg[index].classList.add('selected-img')
        lastColor = colorElem
        lastImg = allProductImg[index]
        mainImgElem.src = imageSrcArray[index]

    })
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