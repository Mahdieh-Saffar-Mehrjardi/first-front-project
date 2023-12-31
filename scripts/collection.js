let $ = document
// sticky header
let stickyHeader = document.querySelector('.header-second-container')

document.addEventListener('scroll',function(){
    if (document.documentElement.scrollTop > 200) {
        stickyHeader.classList.add('sticky')
    } else {
        stickyHeader.classList.remove('sticky')
    }
})
//
let categoryTitle = $.querySelector('.category-title')
let categoryList = $.querySelector('.category-list')

let brandTitle = $.querySelector('.brand-title')
let brandName = $.querySelector('.brand-name')

let colorsTitle = $.querySelector('.colors-title')
let colorBox = $.querySelector('.color-box')

let priceTitle = $.querySelector('.price-title')
let rangeSlider = $.querySelector('.price-box')

categoryTitle.addEventListener('click', () => {
    categoryList.classList.toggle('open')
})

brandTitle.addEventListener('click', () => {
    brandName.classList.toggle('open')
})

colorsTitle.addEventListener('click', () => {
    colorBox.classList.toggle('open')
})

priceTitle.addEventListener('click', () => {
    rangeSlider.classList.toggle('open')
})

//category

let categoryArray = [
    'fashion', 'shoes', 'bags', 'watch'
    , 'flower', 'pets', 'electronics'
    , 'vegetables', 'furniture', 'beauty'
    , 'tools', 'gym', 'marijuana'
]

categoryArray.forEach(category => {
    categoryList.insertAdjacentHTML('beforeend', `
    <li>
        <a href=""> ${category} </a>
    </li>
    `)
})
//colors

let colorsArray = [
    'silver', 'sienna', 'navy', 'bisque',
    'chocolate', 'steelblue', 'wheat',
    'dimgrey', 'black', 'palegoldenrod', 'dimgray'
]


colorsArray.forEach(color => {
    colorBox.insertAdjacentHTML('beforeend', `
    <div class="collection-item">
        <input type="checkbox" value="${color}" id="${color}">
        <span class="color-item ${color}"></span>
        <label for="${color}">${color}</label>
    </div>
    `)
    let colorSpan = $.querySelector(`.${color}`)
    colorSpan.style.backgroundColor = color
})

//rangeSlider

const rangeSlider_min = 0;
const rangeSlider_max = 1000;

document.querySelector('#RangeSlider .range-slider-val-left').style.width = `${rangeSlider_min + (100 - rangeSlider_max / 10)}%`;
document.querySelector('#RangeSlider .range-slider-val-right').style.width = `${rangeSlider_min + (100 - rangeSlider_max / 10)}%`;

document.querySelector('#RangeSlider .range-slider-val-range').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-val-range').style.right = `${(100 - rangeSlider_max / 10)}%`;

document.querySelector('#RangeSlider .range-slider-handle-left').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-handle-right').style.left = `${rangeSlider_max / 10}%`;

document.querySelector('#RangeSlider .range-slider-tooltip-left').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-tooltip-right').style.left = `${rangeSlider_max / 10}%`;

document.querySelector('#RangeSlider .range-slider-tooltip-left .range-slider-tooltip-text').innerText = rangeSlider_min;
document.querySelector('#RangeSlider .range-slider-tooltip-right .range-slider-tooltip-text').innerText = rangeSlider_max;

document.querySelector('#RangeSlider .range-slider-input-left').value = rangeSlider_min;
document.querySelector('#RangeSlider .range-slider-input-left').addEventListener('input', e => {
    e.target.value = Math.min(e.target.value, e.target.parentNode.childNodes[5].value - 1);
    var value = (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.value) - (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.min);

    var children = e.target.parentNode.childNodes[1].childNodes;
    children[1].style.width = `${value}%`;
    children[5].style.left = `${value}%`;
    children[7].style.left = `${value}%`;
    children[11].style.left = `${value}%`;

    children[11].childNodes[1].innerHTML = e.target.value;
});

document.querySelector('#RangeSlider .range-slider-input-right').value = rangeSlider_max;
document.querySelector('#RangeSlider .range-slider-input-right').addEventListener('input', e => {
    e.target.value = Math.max(e.target.value, e.target.parentNode.childNodes[3].value - (-1));
    var value = (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.value) - (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.min);

    var children = e.target.parentNode.childNodes[1].childNodes;
    children[3].style.width = `${100 - value}%`;
    children[5].style.right = `${100 - value}%`;
    children[9].style.left = `${value}%`;
    children[13].style.left = `${value}%`;

    children[13].childNodes[1].innerHTML = e.target.value;
});

let sliderNumber = $.querySelectorAll('.range-slider-tooltip-text')
let inputLeft = $.querySelector('.range-slider-input-left')
let inputRight = $.querySelector('.range-slider-input-right')
let leftText = $.querySelector('.left-text')
let rightText = $.querySelector('.right-text')

inputLeft.addEventListener('mousemove', () => {

    if (sliderNumber[0].innerHTML > 79) {
        leftText.classList.add('show_text')
    } else {
        leftText.classList.remove('show_text')
    }
})
inputRight.addEventListener('mousemove', () => {

    if (sliderNumber[1].innerHTML < 787) {
        rightText.classList.add('show_text')
    } else {
        rightText.classList.remove('show_text')
    }
})

// new product

let newProductArray = [
    { name: 'Trim Dress', url: 'images/new product1.jpg', newPrice: '$87.00', oldPrice: '$145.00' },
    { name: 'Belted Dress', url: 'images/new product2.jpg', newPrice: '$111.00', oldPrice: '$185.00' },
    { name: 'Fitted Dress', url: 'images/new product3.jpg', newPrice: '$104.40', oldPrice: '$174.00' },
    { name: 'Belted Top', url: 'images/new product4.jpg', newPrice: '$49.00', oldPrice: '$98.00' },
    { name: 'Waist Dress', url: 'images/new product5.jpg', newPrice: '$184.00', oldPrice: '$230.00' },
    { name: 'Crop Top', url: 'images/new product6.jpg', newPrice: '$72.60', oldPrice: '$121.00' }
]

let newProductBox = $.querySelector('.new-product-box')
let angleLeft = $.querySelector('.new-angle-left')
let angleRight = $.querySelector('.new-angle-right')
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
            <img class="new-product-img" src="${product.url}" alt="new product">
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

// product list

let productArray = [
    { id: 1, index:1, src: 'images/trending1.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver', onsale: false },
    { id: 2, index:2, src: 'images/trending2.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'silver sienna', onsale: false },
    { id: 3, index:3, src: 'images/trending3.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'navy', onsale: true },
    { id: 4, index:4, src: 'images/trending4.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'bisque', onsale: true },
    { id: 5, index:5, src: 'images/trending5.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'chocolate navy', onsale: true },
    { id: 6, index:6, src: 'images/trending6.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'steelblue bisque', onsale: false },
    { id: 15, index:7, src: 'images/watch7.jpg', name: 'Watch 7', discountedPrice: '$156.60', price: '$174.00', colors: 'wheat silver', onsale: false },
    { id: 8, index:8, src: 'images/watch8.jpg', name: 'Watch 8', discountedPrice: '$132.30', price: '$189.00', colors: 'dimgrey sienna', onsale: false },
    { id: 9, index:9, src: 'images/watch9.jpg', name: 'Watch 9', discountedPrice: '$96.05', price: '$99.00', colors: 'black sienna', onsale: false },
    { id: 10, index:10, src: 'images/watch10.jpg', name: 'Watch 10', discountedPrice: '$346.50', price: '$495.00', colors: 'silver palegoldenrod', onsale: true },
    { id: 11, index:11, src: 'images/watch11.jpg', name: 'Watch 11', discountedPrice: '$86.00', price: '$215.00', colors: 'dimgrey chocolate', onsale: false },
    { id: 12, index:12, src: 'images/watch12.jpg', name: 'Watch 12', discountedPrice: '$135.00', price: '$150.00', colors: 'palegoldenrod bisque', onsale: true },
    { id: 13, index:13, src: 'images/watch13.jpg', name: 'Watch 13', discountedPrice: '$144.00', price: '$360.00', colors: 'black chocolate', onsale: true },
    { id: 6, index:14, src: 'images/watch14.jpg', name: 'Watch 14', discountedPrice: '$265.05', price: '$285.00', colors: 'steelblue black', onsale: true },
    { id: 14, index:15, src: 'images/watch15.jpg', name: 'Watch 15', discountedPrice: '$122.20', price: '$130.00', colors: 'silver wheat', onsale: false },
    { id: 2, index:16, src: 'images/watch16.jpg', name: 'Watch 16', discountedPrice: '$239.04', price: '$249.00', colors: 'sienna navy', onsale: true },
    { id: 4, index:17, src: 'images/trending4.jpg', name: 'Watch 17', discountedPrice: '$80.00', price: '$160.00', colors: 'bisque palegoldenrod silver', onsale: false },
]

let productGrid = $.querySelector('.product-list')
let productList = $.querySelector('.product-view-list')
let countTextUp = $.querySelector('.count-text-up')
let countTextBottom = $.querySelector('.count-text-bottom')
let currentpage = 1
let productCount = 16

function displayPtoductGrid(currentRow) {
    productGrid.innerHTML = ''
    productList.innerHTML = ''

    let endIndex = productCount * currentpage
    let startIndex = endIndex - productCount

    let paginatedProduct = productArray.slice(startIndex, endIndex)

    let countText = `Showing Products 1-${paginatedProduct.length} of ${productArray.length} Result`

    countTextUp.innerHTML = countText
    countTextBottom.innerHTML = countText

    paginatedProduct.forEach(product => {
        productGrid.insertAdjacentHTML('beforeend', `
    <div class="product-item ${currentRow}">
        <div class="product-item-box">
            <div class="product-img-box">
                <span class="new-sapn">
                    new
                </span>
                <a href="detail.html?id=${product.id}">
                    <img class="product-img" src="${product.src}" alt="">
                    
                </a>
                <div class="product-icons">
                    <a class="product-icons-link" href="#">
                         <i
                            class="fa fa-shopping-cart fa-flip-horizontal shopping shopping_cart"></i>
                    </a>

                    <a class="product-icons-link" href="#">
                         <i class="fa fa-heart shopping heart"></i>
                    </a>

                    <a class="product-icons-link" href="#">
                        <i class="fa-solid fa-magnifying-glass shopping magnifying"></i>
                    </a>

                    <a class="product-icons-link" href="#">
                        <i class="fa fa-refresh shopping refresh"></i>
                    </a>
                </div>
            </div>
            <div class="product-detail">
                <div class="stars">
                    <div class="star">★</div>
                    <div class="star">★</div>
                    <div class="star">★</div>
                    <div class="star">★</div>
                    <div class="star">★</div>
                </div>
                <a href="">
                     <h6 class="product-name">${product.name}</h6>
                </a>
                 <h4 class="product-discounted-price"> ${product.discountedPrice}
                     <del class="product-price">${product.price}</del>
                 </h4>
                <ul class="product-color-list">
                    
                </ul>

            </div>

        </div>
    </div>
    `)
        let productColorList = $.querySelectorAll('.product-color-list')
        let colorsArray = product.colors.split(' ')
        let productImgBox = $.querySelectorAll('.product-img-box')
        colorsArray.forEach(color => {
            productColorList[product.index - ((currentpage - 1) * 16) - 1].insertAdjacentHTML('beforeend',
                `<li class="${color} product-color"></li>`
            )
        })

        if (product.onsale) {
            productImgBox[product.index - ((currentpage - 1) * 16) - 1].insertAdjacentHTML('afterbegin',
                `<span class="product-on-sale">
            on sale
        </span>`
            )
        }
    })
}

function displayProductList() {
    productGrid.innerHTML = ''
    productList.innerHTML = ''

    let endIndex = productCount * currentpage
    let startIndex = endIndex - productCount

    let paginatedProduct = productArray.slice(startIndex, endIndex)

    let countText = `Showing Products 1-${paginatedProduct.length} of ${productArray.length} Result`

    countTextUp.innerHTML = countText
    countTextBottom.innerHTML = countText

    paginatedProduct.forEach(product => {
        productList.insertAdjacentHTML('beforeend', `
        <div class="product-box-list">
        <div class="product-img-box-list">
            <span class="new-sapn">
                new
            </span>
            <a href="detail.html?id=${product.id}">
                <img class="product-img" src="${product.src}" alt="">
            </a>
            

            <div class="product-icons">
                <a class="product-icons-link" href="#">
                     <i
                        class="fa fa-shopping-cart fa-flip-horizontal shopping shopping_cart"></i>
                </a>

                <a class="product-icons-link" href="#">
                     <i class="fa fa-heart shopping heart"></i>
                </a>

                <a class="product-icons-link" href="#">
                    <i class="fa-solid fa-magnifying-glass shopping magnifying"></i>
                </a>

                <a class="product-icons-link" href="#">
                    <i class="fa fa-refresh shopping refresh"></i>
                </a>
            </div>
        </div>
        <div class="product-detail-list">
            <div class="stars">
                <div class="star">★</div>
                <div class="star">★</div>
                <div class="star">★</div>
                <div class="star">★</div>
                <div class="star">★</div>
            </div>
            <a href="">
                 <h6 class="product-name-list">${product.name}</h6>
            </a>
            <p class="product-name-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
             <h4 class="product-discounted-price price-list"> ${product.discountedPrice}
                 <del class="product-price">${product.price}</del>
             </h4>
            <ul class="product-color-list">
                
            </ul>

        </div>
    </div>
    `)
        let productColorList = $.querySelectorAll('.product-color-list')
        colorsArray = product.colors.split(' ')
        let productImgBox = $.querySelectorAll('.product-img-box-list')
        colorsArray.forEach(color => {
            productColorList[product.index - ((currentpage - 1) * 16) - 1].insertAdjacentHTML('beforeend',
                `<li class="${color} product-color"></li>`
            )
        })

        if (product.onsale) {
            productImgBox[product.index - ((currentpage - 1) * 16) - 1].insertAdjacentHTML('afterbegin',
                `<span class="product-on-sale">
            on sale
        </span>`
            )
        }
    })
}

let currentRow = 'row4-product'
let isGrid = true
let svgView = $.querySelector('.svg-view')
let collectionIcons = $.querySelector('.collection-grid-view')
let listView = $.querySelector('.i-view')

displayPtoductGrid(currentRow)

svgView.addEventListener('click', () => {
    displayPtoductGrid(currentRow)
    isGrid = true
    collectionIcons.classList.remove('hidden-icons')
})


listView.addEventListener('click', () => {
    displayProductList()
    isGrid = false
    collectionIcons.classList.add('hidden-icons')
})

let prevBtn = $.querySelector('.prev')
let nextBtn = $.querySelector('.next')
let numButtons = $.querySelectorAll('.num-button')
let pageCount = Math.ceil(productArray.length / productCount)
let lastPage = currentpage

numButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentpage = btn.innerHTML
        if (isGrid) {
            displayPtoductGrid(currentRow)
        } else {
            displayProductList()
        }

        if (currentpage == 1) {
            prevBtn.classList.add('disable-prev')
            nextBtn.classList.remove('disable-prev')
        } else if (currentpage == pageCount) {
            nextBtn.classList.add('disable-prev')
            prevBtn.classList.remove('disable-prev')
        }

        numButtons.forEach(numBtn => {
            if (numBtn.innerHTML == currentpage) {
                numBtn.parentElement.classList.add('active')
            }
            if (numBtn.innerHTML == lastPage) {
                numBtn.parentElement.classList.remove('active')
            }
        })
        lastPage = currentpage
    })
})

prevBtn.addEventListener('click', () => {
    if (currentpage > 1) {
        currentpage--
        if (isGrid) {
            displayPtoductGrid(currentRow)
        } else {
            displayProductList()
        }
        if (currentpage == 1) {
            prevBtn.classList.add('disable-prev')
            nextBtn.classList.remove('disable-prev')
        }

        numButtons.forEach(numBtn => {
            if (numBtn.innerHTML == currentpage) {
                numBtn.parentElement.classList.add('active')
            }
            if (numBtn.innerHTML == currentpage + 1) {
                numBtn.parentElement.classList.remove('active')
            }
        })
    }
})

nextBtn.addEventListener('click', () => {
    if (currentpage < pageCount) {
        currentpage++

        if (isGrid) {
            displayPtoductGrid(currentRow)
        } else {
            displayProductList()
        }

        if (currentpage == pageCount) {
            nextBtn.classList.add('disable-prev')
            prevBtn.classList.remove('disable-prev')
        }

        numButtons.forEach(numBtn => {
            if (numBtn.innerHTML == currentpage) {
                numBtn.parentElement.classList.add('active')
            }
            if (numBtn.innerHTML == currentpage - 1) {
                numBtn.parentElement.classList.remove('active')
            }
        })
    }
})

//layaout view

let row2 = $.querySelector('.row2')
let row3 = $.querySelector('.row3')
let row4 = $.querySelector('.row4')
let row5 = $.querySelector('.row5')
let allProductItem = $.querySelectorAll('.product-item')

row2.addEventListener('click', () => {
    allProductItem = $.querySelectorAll('.product-item')
    console.log(allProductItem);
    allProductItem.forEach(product => {
        product.classList.remove(currentRow)
        product.classList.add('row2-product')
    })
    currentRow = 'row2-product'
    console.log('clic');
})

row3.addEventListener('click', () => {
    allProductItem = $.querySelectorAll('.product-item')
    allProductItem.forEach(product => {
        product.classList.remove(currentRow)
        product.classList.add('row3-product')
    })
    currentRow = 'row3-product'
})

row4.addEventListener('click', () => {
    allProductItem = $.querySelectorAll('.product-item')
    allProductItem.forEach(product => {
        product.classList.remove(currentRow)
        product.classList.add('row4-product')
    })
    currentRow = 'row4-product'
})

row5.addEventListener('click', () => {
    allProductItem = $.querySelectorAll('.product-item')
    allProductItem.forEach(product => {
        product.classList.remove(currentRow)
        product.classList.add('row5-product')
    })
    currentRow = 'row5-product'
})

