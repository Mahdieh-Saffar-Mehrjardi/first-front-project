let $ = document
// slider section js

let sliderArray = [
    { id: 1, subtitile: 'Every Time', title: 'Mittnalier', url: '../images/9.jpg' },
    { id: 2, subtitile: 'Welcome To Fashion', title: 'Men Watch', url: '../images/10.jpg' },
]

let numberOfItem = 1
let slider = $.querySelector('.slider')
let arrowLeft = $.querySelector('.arrow-left')
let arrowRight = $.querySelector('.arrow-right')
let sliderContents = $.querySelector('.slider-contents')

function sliderHandler() {
    sliderContents.innerHTML = ''

    if (numberOfItem === 1) {
        sliderContents.insertAdjacentHTML('afterbegin',`
        <h4 class="slider-subtitle">${sliderArray[1].subtitile}</h4>
        <h1 class="slider-title">${sliderArray[1].title}</h1>
        <a href="collection.html" class="shop-button">Shop now</a>
        `
        )
        slider.classList.replace('slider-first', 'slider-second')
        numberOfItem = 2
    } else {

        sliderContents.insertAdjacentHTML('afterbegin',`
        <h4 class="slider-subtitle">${sliderArray[0].subtitile}</h4>
        <h1 class="slider-title">${sliderArray[0].title}</h1>
        <a href="collection.html" class="shop-button">Shop now</a>
        `
        )
        slider.classList.replace('slider-second', 'slider-first')
        numberOfItem = 1
    }
}

arrowLeft.addEventListener('click', sliderHandler)
arrowRight.addEventListener('click', sliderHandler)

// trending product first 

let trendingContainer = $.querySelector('.trending-container')
let trendingListSelector = $.querySelectorAll('.trending-list-link ')
let trendingColorList
let colorsArray
let trendingImgBox
let trendingSelector = trendingListSelector[0]

let newArrivalArray = [
    { id: 1, index: 0, src: 'images/trending1.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver', onsale: false },
    { id: 2, index: 1, src: 'images/trending2.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'silver sienna', onsale: false },
    { id: 3, index: 2, src: 'images/trending3.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'navy', onsale: true },
    { id: 4, index: 3, src: 'images/trending4.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'bisque', onsale: true },
    { id: 5, index: 4, src: 'images/trending5.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'chocolate navy', onsale: true },
    { id: 6, index: 5, src: 'images/trending6.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'steelblue bisque', onsale: false },
    { id: 7, index: 6, src: 'images/trending7.jpg', name: 'Watch 14', discountedPrice: '$122.20', price: '$130.00', colors: 'silver wheat', onsale: false },
    { id: 4, index: 7, src: 'images/trending4.jpg', name: 'Watch 16', discountedPrice: '$80.00', price: '$160.00', colors: 'bisque palegoldenrod silver', onsale: false },
]

let onSaleArray = [
    { id: 5, index: 0, src: 'images/trending5.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'chocolate navy', onsale: true },
    { id: 6, index: 1, src: 'images/trending6.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'steelblue bisque', onsale: false },
    { id: 8, index: 2, src: 'images/watch8.jpg', name: 'Watch 8', discountedPrice: '$80.00', price: '$160.00', colors: 'dimgrey sienna', onsale: false },
    { id: 10, index: 3, src: 'images/watch10.jpg', name: 'Watch 10', discountedPrice: '$346.50 ', price: '$495.00', colors: 'silver palegoldenrod', onsale: true },
    { id: 13, index: 4, src: 'images/watch13.jpg', name: 'Watch 13', discountedPrice: '$144.00 ', price: '$360.00', colors: 'black chocolate', onsale: true },
    { id: 14, index: 5, src: 'images/watch15.jpg', name: 'Watch 14', discountedPrice: '$122.20', price: '$130.00', colors: 'silver wheat', onsale: false },
    { id: 2, index: 6, src: 'images/trending2.jpg', name: 'Watch 15', discountedPrice: '$239.04 ', price: '$249.00', colors: 'sienna navy', onsale: true },
    { id: 4, index: 7, src: 'images/trending4.jpg', name: 'Watch 16', discountedPrice: '$80.00 ', price: '$160.00', colors: 'bisque palegoldenrod silver', onsale: false },
]

let bestSellersArray = [
    { id: 15, index: 0, src: 'images/watch7.jpg', name: 'Watch 7', discountedPrice: '$156.60 ', price: '$174.00', colors: 'wheat silver', onsale: false },
    { id: 8, index: 1, src: 'images/watch8.jpg', name: 'Watch 8', discountedPrice: '$132.30 ', price: '$189.00', colors: 'dimgrey sienna', onsale: false },
    { id: 9, index: 2, src: 'images/watch9.jpg', name: 'Watch 8', discountedPrice: '$80.00', price: '$160.00', colors: 'black sienna', onsale: false },
    { id: 10, index: 3, src: 'images/watch10.jpg', name: 'Watch 10', discountedPrice: '$346.50 ', price: '$495.00', colors: 'silver palegoldenrod', onsale: true },
    { id: 11, index: 4, src: 'images/watch11.jpg', name: 'Watch 11', discountedPrice: '$86.00 ', price: '$215.00', colors: 'dimgray chocolate', onsale: false },
    { id: 12, index: 5, src: 'images/watch12.jpg', name: 'Watch 12', discountedPrice: '$135.00', price: '$150.00', colors: 'palegoldenrod bisque', onsale: true },
    { id: 13, index: 6, src: 'images/watch13.jpg', name: 'Watch 13', discountedPrice: '$144.00 ', price: '$360.00', colors: 'black chocolate', onsale: true },
    { id: 6, index: 7, src: 'images/trending6.jpg', name: 'Watch 14', discountedPrice: '$265.05', price: '$285.00', colors: 'steelblue black', onsale: true },
]

function addProductToContainer(product) {
    trendingContainer.insertAdjacentHTML('beforeend',
        ` <div class="trending-product">
        <div class="trending-product-box">
            <div class="trending-img-box">
                 <span class="trending-new">
                  new
                 </span>
                <a href="detail.html?id=${product.id}">
                <img class="trending-img" src=${product.src} alt="">
                </a>
                <div class="trending-icons">
                    <a title="Add to cart" class="trending-icons-link" href="#">
                        <i class="fa fa-shopping-cart fa-flip-horizontal shopping shopping_cart"></i>
                    </a>

                    <a title="Add to Wishlist" class="trending-icons-link" href="#">
                     <i class="fa fa-heart shopping heart"></i>
                    </a>

                    <a title="Quick View" class="trending-icons-link" href="#">
                        <i class="fa-solid fa-magnifying-glass shopping magnifying"></i>
                    </a>

                    <a title="Compare" class="trending-icons-link" href="#">
                        <i class="fa fa-refresh shopping refresh"></i>
                    </a>
                </div>
            </div>
        <div class="trending-detail">
            <div class="stars">
                <div class="star">★</div>
                <div class="star">★</div>
                <div class="star">★</div>
                <div class="star">★</div>
                <div class="star">★</div>
            </div>
            <a href="">
                <h6 class="trending-name">${product.name}</h6>
            </a>
            <h4 class="trending-discounted-price"> ${product.discountedPrice}
                <del class="trending-price">${product.price}</del>
            </h4>

            <ul class="trending-color-list">

            </ul>
            
        </div>

    </div>
</div>`
    )
    trendingColorList = $.querySelectorAll('.trending-color-list')
    colorsArray = product.colors.split(' ')
    trendingImgBox = $.querySelectorAll('.trending-img-box')
    colorsArray.forEach(color => {
        trendingColorList[product.index].insertAdjacentHTML('beforeend',
            `<li class="${color} trending-color"></li>`
        )
    })

    if (product.onsale) {
        trendingImgBox[product.index].insertAdjacentHTML('afterbegin',
            `<span class="trending-on-sale">
        on sale
    </span>`
        )
    }
}

newArrivalArray.forEach(product => {
    addProductToContainer(product)
})

trendingListSelector.forEach(selector => {

    selector.addEventListener('click', () => {
        trendingContainer.innerHTML = ''
        console.log(selector);
        trendingSelector.classList.remove('selected')
        selector.classList.add('selected')
        trendingSelector = selector

        if (selector.innerHTML == 'new arrival') {
            newArrivalArray.forEach(product => {
                addProductToContainer(product)
            })
        } else if (selector.innerHTML == 'on sale') {
            onSaleArray.forEach(product => {
                addProductToContainer(product)
            })
        } else {
            bestSellersArray.forEach(product => {
                addProductToContainer(product)
            })
        }
    })
})

// trending product second

let trendingContainerSecond = $.querySelector('.trending-container-second')

let trendingArray2 = [
    { id: 1, src: 'images/trending1.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver', onsale: false },
    { id: 2, src: 'images/trending2.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'silver sienna', onsale: false },
    { id: 3, src: 'images/trending3.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'navy', onsale: true },
    { id: 4, src: 'images/trending4.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'bisque', onsale: true },
]

trendingArray2.forEach(product => {

    trendingContainerSecond.insertAdjacentHTML('beforeend',
        `<div class="trending-product-second">
        <div class="trending-product-box">
            <div class="trending-img-box-second">
                <span class="trending-new">
                    new
                </span>
                <a href="detail.html?id=${product.id}">
                    <img class="trending-img" src="${product.src}" alt="">
                </a>
                <div class="trending-icons-second">
                    <a title="Add to cart" class="trending-icons-link" href="#">
                        <i class="fa fa-shopping-cart fa-flip-horizontal shopping shopping_cart"></i>
                    </a>

                    <a title="Add to Wishlist" class="trending-icons-link" href="#">
                        <i class="fa fa-heart shopping heart"></i>
                    </a>

                    <a title="Quick View" class="trending-icons-link" href="#">
                        <i class="fa-solid fa-magnifying-glass shopping magnifying"></i>
                    </a>

                    <a title="Compare" class="trending-icons-link" href="#">
                        <i class="fa fa-refresh shopping refresh"></i>
                    </a>
                </div>
            </div>
            <div class="trending-detail">
                <div class="stars stars-second">
                    <div class="star">★</div>
                    <div class="star">★</i></div>
                    <div class="star">★</i></div>
                    <div class="star">★</i></div>
                    <div class="star">★</i></div>
                </div>
                <a href="">
                    <h6 class="trending-name">${product.name}</h6>
                </a>
                <h4 class="trending-discounted-price"> ${product.discountedPrice}
                    <del class="trending-price">${product.price}</del>
                </h4>
                <ul class="trending-color-list-second">
                    
                </ul>
            </div>

        </div>
    </div>`
    )
    trendingColorList = $.querySelectorAll('.trending-color-list-second')
    colorsArray = product.colors.split(' ')
    trendingImgBox = $.querySelectorAll('.trending-img-box-second')
    colorsArray.forEach(color => {
        trendingColorList[product.id - 1].insertAdjacentHTML('beforeend',
            `<li class="${color} trending-color"></li>`
        )
    })

    if (product.onsale) {
        trendingImgBox[product.id - 1].insertAdjacentHTML('afterbegin',
            `<span class="trending-on-sale">
            on sale
        </span>`
        )
    }

})
