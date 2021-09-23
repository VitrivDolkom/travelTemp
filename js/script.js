const burger = document.querySelector('.menu__burger')
menu = document.querySelector('.menu__nav')
menuLInks = document.querySelectorAll('.menu__link')

if (burger) {
   burger.addEventListener("click", () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      document.body.classList.toggle('lock')
   })
   menuLInks.forEach(el => {
      el.addEventListener('click', e => {
         e.preventDefault()
         burger.classList.toggle('active')
         menu.classList.toggle('active')
         document.body.classList.remove('lock') 
      })
   })
}
$(document).ready(function () {
   $('a').on('click', function (e) {

      let $archor = $(this)

      $('html, body')
         .stop()
         .animate(
            {
               scrollTop: $($archor.attr('href')).offset().top - $('.header').height()
            },
            {
               duration: 1000,
               specialEasing: {
                  // width: 'linear',
                  // height: 'easyInOutCubic'
               }
            }
         )
      e.preventDefault()
   })
})
const filterCheckboxs = document.querySelectorAll('.filter__checkbox')
const productsMan = document.querySelector('#prod-man')
const productsWoman = document.querySelector('#prod-woman')
const btnSeeAll = document.querySelector('#all-prod')

filterCheckboxs.forEach(el => {
   el.addEventListener('click', (event) => {
      event.target.closest('.filter__label').classList.toggle('checked')
      if (event.target.classList.contains(productsMan.id) && event.target.closest('.filter__label').classList.contains('checked')) {
         productsMan.style.opacity = '1'
         productsMan.style.zIndex = '1'
         productsMan.classList.add('open')
         productsMan.classList.remove('close')
      }
      else if (event.target.classList.contains(productsWoman.id) && event.target.closest('.filter__label').classList.contains('checked')) {
         productsWoman.style.opacity = '1'
         productsWoman.style.zIndex = '1'
         productsWoman.classList.add('open')
         productsWoman.classList.remove('close')
      }
      else if (event.target.classList.contains(productsMan.id)) {
         productsMan.style.opacity = '0'
         productsMan.style.zIndex = '-1'
         productsMan.classList.add('close')
         productsMan.classList.remove('open')
      }
      else if (event.target.classList.contains(productsWoman.id)) {
         productsWoman.style.opacity = '0'
         productsWoman.style.zIndex = '-1'
         productsWoman.classList.add('close')
         productsWoman.classList.remove('open')
      }
   })
})

if (btnSeeAll) {
   btnSeeAll.addEventListener('click', () => {
      const allFilterLabel = document.querySelectorAll('.filter__label')
      allFilterLabel.forEach(el => {
         el.classList.add('checked')
      })
      productsWoman.classList.remove('close')
      productsWoman.classList.add('open')
      productsMan.classList.remove('close')
      productsMan.classList.add('open')
      productsMan.style.opacity = '1'
      productsMan.style.zIndex = '1'
      productsWoman.style.opacity = '1'
      productsWoman.style.zIndex = '1'
   })
}
const arrowLeftMan = document.querySelector('#arrow-left-man')
const arrowRightMan = document.querySelector('#arrow-right-man')
const sliderLineMan = document.querySelector('#slider-line-man')
const numberOfProductsMan = document.querySelector('#item-prod__number-man')
const numberOfAllProductsMan = document.querySelector('#item-prod-all-number-man')
let offsetMan = 0

const screenWidth = window.screen.width

let numberOfProductsOnSmallScreenMan = 1
if (arrowRightMan) {

   if (screenWidth > 1120) {
      arrowRightMan.addEventListener('click', clickArrowRightMan.bind(arrowRightMan, 384, 12))
   }

   if (screenWidth < 1120 && screenWidth > 900) {
      arrowRightMan.addEventListener('click', clickArrowRightMan.bind(arrowRightMan, 300, 12))
   }

   if (screenWidth < 901 && screenWidth > 620) {
      arrowRightMan.addEventListener('click', clickArrowRightMan.bind(arrowRightMan, 300, 13))
   }

   if (screenWidth < 620 && screenWidth > 299) {
      numberOfAllProductsMan.children[0].remove()
      numberOfAllProductsMan.textContent = `1/15`
      arrowRightMan.addEventListener('click', clickArrowRightManOnSmallScreen.bind(arrowRightMan, 300, 14))
   }

   function clickArrowRightMan(widthCard, colOfTouch) {
      offsetMan -= widthCard
      if (offsetMan < - (widthCard * colOfTouch)) offsetMan = 0
      sliderLineMan.style.left = offsetMan + 'px'
      if (offsetMan > -(widthCard * 3)) numberOfProductsMan.textContent = '1'
      else if (offsetMan === - (widthCard * 6)) numberOfProductsMan.textContent = '3'
      else if (offsetMan === - (widthCard * 9)) numberOfProductsMan.textContent = '4'
      else if (offsetMan === - (widthCard * colOfTouch)) numberOfProductsMan.textContent = '5'
      else if (offsetMan === - (widthCard * 3)) numberOfProductsMan.textContent = '2'
   }

   function clickArrowRightManOnSmallScreen(widthCard, colOfTouch) {
      if (numberOfProductsOnSmallScreenMan === colOfTouch + 1) {
         offsetMan = 0
         numberOfProductsOnSmallScreenMan = 0
      }
      numberOfProductsOnSmallScreenMan += 1
      offsetMan -= widthCard
      sliderLineMan.style.left = offsetMan + 'px'
      numberOfAllProductsMan.textContent = `${numberOfProductsOnSmallScreenMan}/${colOfTouch + 1}`
   }
}



if (arrowLeftMan) {

   if (screenWidth > 1120) {
      arrowLeftMan.addEventListener('click', clickArrowLeftMan.bind(arrowLeftMan, 384, 12))
   }

   if (screenWidth > 900 && screenWidth < 1120) {
      arrowLeftMan.addEventListener('click', clickArrowLeftMan.bind(arrowLeftMan, 300, 12))
   }

   if (screenWidth > 620 && screenWidth < 901) {
      arrowLeftMan.addEventListener('click', clickArrowLeftMan.bind(arrowLeftMan, 300, 13))
   }

   if (screenWidth > 299 && screenWidth < 620) {
      arrowLeftMan.addEventListener('click', clickArrowLeftManOnSmallScreen.bind(arrowLeftMan, 300, 14))
   }

   function clickArrowLeftMan(widthCard, colOfTouch) {
      offsetMan += widthCard
      if (offsetMan > widthCard - 1) offsetMan = - (widthCard * colOfTouch)
      sliderLineMan.style.left = offsetMan + 'px'
      if (offsetMan === 0) numberOfProductsMan.textContent = '1'
      else if (offsetMan === -(widthCard * colOfTouch)) numberOfProductsMan.textContent = '5'
      else if (offsetMan === -(widthCard * 9)) numberOfProductsMan.textContent = '4'
      else if (offsetMan === -(widthCard * 6)) numberOfProductsMan.textContent = '3'
      else if (offsetMan === -(widthCard * 3)) numberOfProductsMan.textContent = '2'
   }

   function clickArrowLeftManOnSmallScreen(widthCard, colOfTouch) {
      if (numberOfProductsOnSmallScreenMan === 1) {
         offsetMan = -(widthCard * colOfTouch)
         numberOfProductsOnSmallScreenMan = colOfTouch + 1
      }
      else {
         numberOfProductsOnSmallScreenMan -= 1
         offsetMan += widthCard
      }

      sliderLineMan.style.left = offsetMan + 'px'
      numberOfAllProductsMan.textContent = `${numberOfProductsOnSmallScreenMan}/${colOfTouch + 1}`
   }
}




// todo swiper

const sliderMan = document.querySelector('#slider-man')

sliderMan.addEventListener('touchstart', touchstartMan)
sliderMan.addEventListener('touchmove', touchmoveMan)

let posXMan
let posYMan

function touchstartMan(e) {
   const touch = e.touches[0]

   posXMan = touch.clientX
   posYMan = touch.clientY
}

function touchmoveMan(e) {
   if (!posXMan || !posYMan) return false
   const touch = e.touches[0]

   let posXManAfterMove = touch.clientX
   let posYManAfterMove = touch.clientY

   let diffX = posXMan - posXManAfterMove

   let diffY = posYMan - posYManAfterMove

   if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
         if (screenWidth > 900 && screenWidth < 1120) clickArrowLeftMan(300, 12)
         else if (screenWidth > 1120) clickArrowLeftMan(384, 12)
         else if (screenWidth > 620 && screenWidth < 900) clickArrowLeftMan(300, 13)
         else if (screenWidth < 620) clickArrowLeftManOnSmallScreen(300, 14)
      } 
      else {
         if (screenWidth > 900 && screenWidth < 1120) clickArrowRightMan(300, 12)
         else if (screenWidth > 1120) clickArrowRightMan(384, 12)
         else if (screenWidth > 620 && screenWidth < 900) clickArrowRightMan(300, 13)
         else if (screenWidth < 620) clickArrowRightManOnSmallScreen(300, 14)
      }
   }
   posXMan = null
   posYMan = null
}
const arrowLeftWoman = document.querySelector('#arrow-left-woman')
const arrowRightWoman = document.querySelector('#arrow-right-woman')
const sliderLineWoman = document.querySelector('#slider-line-woman')
const numberOfProductsWoman = document.querySelector('#item-prod__number-woman')
const numberOfAllProductsWoman = document.querySelector('#item-prod-all-number-woman')

let offsetWoman = 0

let numberOfProductsOnSmallScreenWoman = 1

if (arrowRightWoman) {

   if (screenWidth > 1120) {
      arrowRightWoman.addEventListener('click', clickArrowRightWoman.bind(arrowRightWoman, 384, 12))
   }

   if (screenWidth < 1120 && screenWidth > 900) {
      arrowRightWoman.addEventListener('click', clickArrowRightWoman.bind(arrowRightWoman, 300, 12))
   }

   if (screenWidth < 901 && screenWidth > 620) {
      arrowRightWoman.addEventListener('click', clickArrowRightWoman.bind(arrowRightWoman, 300, 13))
   }

   if (screenWidth > 299 && screenWidth < 620) {
      numberOfAllProductsWoman.children[0].remove()
      numberOfAllProductsWoman.textContent = `1/15`
      arrowRightWoman.addEventListener('click', clickArrowRightWomanOnSmallScreen.bind(arrowRightWoman, 300, 14))
   }

   function clickArrowRightWoman(widthCard, colOfTouch) {
      offsetWoman -= widthCard
      if (offsetWoman < -(widthCard * colOfTouch)) offsetWoman = 0
      sliderLineWoman.style.left = offsetWoman + 'px'
      if (offsetWoman > -(widthCard * 3)) numberOfProductsWoman.textContent = '1'
      else if (offsetWoman === - (widthCard * 6)) numberOfProductsWoman.textContent = '3'
      else if (offsetWoman === - (widthCard * 9)) numberOfProductsWoman.textContent = '4'
      else if (offsetWoman === - (widthCard * colOfTouch)) numberOfProductsWoman.textContent = '5'
      else if (offsetWoman === - (widthCard * 3)) numberOfProductsWoman.textContent = '2'
   }

   function clickArrowRightWomanOnSmallScreen(widthCard, colOfTouch) {
      if (numberOfProductsOnSmallScreenWoman === colOfTouch + 1) {
         offsetWoman = 0
         numberOfProductsOnSmallScreenWoman = 0
      }
      numberOfProductsOnSmallScreenWoman += 1
      offsetWoman -= widthCard
      sliderLineWoman.style.left = offsetWoman + 'px'
      numberOfAllProductsWoman.textContent = `${numberOfProductsOnSmallScreenWoman}/${colOfTouch + 1}`
   }
}


if (arrowLeftWoman) {
   if (screenWidth > 1120) {
      arrowLeftWoman.addEventListener('click', clickArrowLeftWoman.bind(arrowLeftWoman, 384, 12))
   }

   if (screenWidth > 900 && screenWidth < 1120) {
      arrowLeftWoman.addEventListener('click', clickArrowLeftWoman.bind(arrowLeftWoman, 300, 12))
   }

   if (screenWidth > 620 && screenWidth < 901) {
      arrowLeftWoman.addEventListener('click', clickArrowLeftWoman.bind(arrowLeftWoman, 300, 13))
   }

   if (screenWidth > 299 && screenWidth < 620) {
      arrowLeftWoman.addEventListener('click', clickArrowLeftWomanOnSmallScreen.bind(arrowLeftWoman, 300, 14))
   }


   function clickArrowLeftWoman(widthCard, colOfTouch) {
      offsetWoman += widthCard
      if (offsetWoman > widthCard - 1) offsetWoman = - (widthCard * colOfTouch)
      sliderLineWoman.style.left = offsetWoman + 'px'
      if (offsetWoman === 0) numberOfProductsWoman.textContent = '1'
      else if (offsetWoman === -(widthCard * colOfTouch)) numberOfProductsWoman.textContent = '5'
      else if (offsetWoman === -(widthCard * 9)) numberOfProductsWoman.textContent = '4'
      else if (offsetWoman === -(widthCard * 6)) numberOfProductsWoman.textContent = '3'
      else if (offsetWoman === -(widthCard * 3)) numberOfProductsWoman.textContent = '2'
   }

   function clickArrowLeftWomanOnSmallScreen(widthCard, colOfTouch) {
      if (numberOfProductsOnSmallScreenWoman === 1) {
         offsetWoman = -(widthCard * colOfTouch)
         numberOfProductsOnSmallScreenWoman = colOfTouch + 1
      } else {
         numberOfProductsOnSmallScreenWoman -= 1
         offsetWoman += widthCard
      }
      sliderLineWoman.style.left = offsetWoman + 'px'
      numberOfAllProductsWoman.textContent = `${numberOfProductsOnSmallScreenWoman}/${colOfTouch + 1}`
   }
}


// todo swiper

const sliderWoman = document.querySelector('#slider-woman')

sliderWoman.addEventListener('touchstart', touchstartWoman)
sliderWoman.addEventListener('touchmove', touchmoveWoman)

let posXWoman
let posYWoman

function touchstartWoman(e) {
   const touch = e.touches[0]

   posXWoman = touch.clientX
   posYWoman = touch.clientY
}

function touchmoveWoman(e) {
   if (!posXWoman || !posYWoman) return false
   const touch = e.touches[0]

   let posXWomanAfterMove = touch.clientX
   let posYWomanAfterMove = touch.clientY

   let diffX = posXWoman - posXWomanAfterMove

   let diffY = posYWoman - posYWomanAfterMove

   if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
         if (screenWidth > 900 && screenWidth < 1120) clickArrowLeftWoman(300, 12)
         else if (screenWidth > 1120) clickArrowLeftWoman(384, 12)
         else if (screenWidth > 620 && screenWidth < 900) clickArrowLeftWoman(300, 13)
         else if (screenWidth < 620) clickArrowLeftWomanOnSmallScreen(300, 14)
      }
      else {
         if (screenWidth > 900 && screenWidth < 1120) clickArrowRightWoman(300, 12)
         else if (screenWidth > 1120) clickArrowRightWoman(384, 12)
         else if (screenWidth > 620 && screenWidth < 900) clickArrowRightWoman(300, 13)
         else if (screenWidth < 620) clickArrowRightWomanOnSmallScreen(300, 14)
      }
   }
   posXWoman = null
   posYWoman = null
}
const sizeOf = document.querySelectorAll('.card-prod__size')


sizeOf.forEach(el => {
   el.addEventListener('click', () => {
      el.classList.toggle('active')
      const elChildren = el.children[0]
      elChildren.classList.toggle('active')
   })
})
