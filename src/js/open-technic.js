export const myVariable = 'Block 7'

let button = document.querySelector('.main-menu__technic-open-button')
let contenier = document.querySelector('.main-menu__technic-list')
let buttonImg = document.querySelector('.main-menu__technic-open-button-img')

button.addEventListener('change', function () {
  contenier.classList.toggle('unlock-technic')
  buttonImg.classList.toggle('rotate-technic')
  let text = document.querySelector('.main-menu__technic-open-text')

  if (button.checked) {
    text.textContent = 'Показать все'
  } else {
    text.textContent = 'Скрыть'
  }
})

let sld2 = new Swiper('.swiper_two', {
  freeMode: true,
  pagination: {
    el: '.swiper-pagination2',
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
