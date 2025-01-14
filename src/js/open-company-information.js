export const myVariable = 'Block 7'

let button = document.querySelector('.main-menu__company-information-buttton')
let contenier = document.querySelector('.main-menu__company-information-text')
let buttonImg = document.querySelector(
  '.main-menu__company-information-buttton-img'
)

button.addEventListener('change', function () {
  contenier.classList.toggle('unlock')
  buttonImg.classList.toggle('rotate')
  let text = document.querySelector(
    '.main-menu__company-information-buttton-text'
  )

  if (button.checked) {
    text.textContent = 'Читать далее'
  } else {
    text.textContent = 'Скрыть'
  }
})

let sld3 = new Swiper('.swiper_three', {
  freeMode: true,
  pagination: {
    el: '.swiper-pagination3',
    clickable: true
  },
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 1.15,
      spaceBetween: 16
    },
    769: {
      enabled: false,
      slidesPerView: 'auto',
      spaceBetween: 'auto'
    }
  }
})
