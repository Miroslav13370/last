export const myVariable = 'Block 7'

let button = document.querySelector('.main-menu__brand-open-button')
let contenier = document.querySelector('.main-menu__repair-brand-list')
let buttonImg = document.querySelector('.main-menu__brand-open-button-img')

button.addEventListener('change', function () {
  contenier.classList.toggle('unlock-brands')
  buttonImg.classList.toggle('rotate-brand')
  let text = document.querySelector('.main-menu__brand-open-text')

  if (button.checked) {
    text.textContent = 'Показать все'
  } else {
    text.textContent = 'Скрыть'
  }
})

let sld1 = new Swiper('.swiper_one', {
  freeMode: true,
  pagination: {
    el: '.swiper-pagination1',
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
