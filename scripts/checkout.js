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

// contry section

let inputElems = $.querySelectorAll('.user-input')
let orderBtn = $.querySelector('.payment-btn')
let userCountry = $.querySelector('.user-country')
let isfull = true
let num =[]

document.addEventListener('change', () => {
    inputElems.forEach(item => {

        if (!item.value) {
            isfull = false
            num.push(false)
        }
        else {
            num.push(false)
        }
    })
    if (userCountry.value == 'Select Country') {
        isfull = false
    } else {
        isfull = true
    }
    if (isfull) {
        orderBtn.classList.replace('disable', 'able')
    } else {
        orderBtn.classList.replace('able', 'disable')
    }
})

// choose way of payment

let stripeOption = $.querySelector('#stripe-option')
let paypalOption = $.querySelector('#paypal-option')
let paymentButton = $.querySelector('.payment-btn-box')

paypalOption.addEventListener('change', () => {
    if (paypalOption.checked) {
        paymentButton.classList.add('hide-button')
    } else {
        paymentButton.classList.remove('hide-button')
    }

})

stripeOption.addEventListener('change', () => {
    if (stripeOption.checked) {
        paymentButton.classList.remove('hide-button')
    } else {
        paymentButton.classList.add('hide-button')
    }
})

// show warning to user when the input is emoty

let firstname = $.querySelector('.firstname')
let lastname = $.querySelector('.lastname')
let phone = $.querySelector('.phone')
let emailaddress = $.querySelector('.emailaddress')
let address = $.querySelector('.address')
let city = $.querySelector('.town-city')
let state = $.querySelector('.state')
let code = $.querySelector('.postalCode')
let firstnameInput = $.querySelector('.firstname-input')
let lastnameInput = $.querySelector('.lastname-input')
let phoneInput = $.querySelector('.phone-input')
let emailaddressInput = $.querySelector('.emailaddress-input')
let addressInput = $.querySelector('.address-input')
let cityInput = $.querySelector('.city-input')
let stateInput = $.querySelector('.state-input')
let codeInput = $.querySelector('.code-input')

function warning(inputElem, warningElem) {

    inputElem.addEventListener('blur', () => {
        if (!inputElem.value) {
            warningElem.classList.add('show')
        }
    inputElem.addEventListener('keydown', () => {

        if (!inputElem.value) {
                warningElem.classList.add('show')
        } else {
                warningElem.classList.remove('show')
        }
    })

    })
}

warning(firstnameInput, firstname)
warning(lastnameInput, lastname)
warning(phoneInput, phone)
warning(emailaddressInput, emailaddress)
warning(addressInput, address)
warning(cityInput, city)
warning(codeInput, code)
warning(stateInput, state)

