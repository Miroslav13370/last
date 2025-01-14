export const myVariable = 'Block 7'

let open = document.querySelector('.main-menu__link-burger')
let close = document.querySelector('.burger_menu__header-close')
let menu = document.querySelector('.web-box__burger-menu')
let centerMenu = document.querySelector('.web-box__center')
let tell = document.querySelector('.main-menu__link-call')
let feedbackMenu = document.querySelector('.feedback-menu')
let feedbackMenuClose = document.querySelector('.feedback-menu__close')
let feedbackMenuBurg = document.querySelector('.tell-burg')
let menuOnTogleFeedback = document.querySelector('.feedback-tel-box')

let massageBtn = document.querySelector('.main-menu__link-chat')
let massageMenu = document.querySelector('.calll-menu')
let massageMenuClose = document.querySelector('.calll-menu__close')
let massageMenuBurg = document.querySelector('.massage-burger')

open.addEventListener('click', function () {
  open.classList.add('tgl')
})

centerMenu.addEventListener('click', function () {
  if (open.classList.contains('tgl')) {
    console.log('Успех проверки')
    menu.classList.add('unlock-burger')
    centerMenu.classList.add('blur')
  } else {
    menu.classList.remove('unlock-burger')
    centerMenu.classList.remove('blur')
    console.log('успех клика')
  }
  open.classList.remove('tgl')
})

close.addEventListener('click', function () {
  open.classList.remove('tgl')
  menu.classList.remove('unlock-burger')
  centerMenu.classList.remove('blur')
})

///////

tell.addEventListener('click', function () {
  feedbackMenu.classList.add('feedback-menu-open')
  menuOnTogleFeedback.classList.add('blur')
  console.log('успех телефон')
})

feedbackMenuClose.addEventListener('click', function () {
  feedbackMenu.classList.remove('feedback-menu-open')
  menuOnTogleFeedback.classList.remove('blur')
  massageMenu.classList.remove('calll-menu-open')
  console.log('успех телефон')
})

feedbackMenuBurg.addEventListener('click', function () {
  feedbackMenu.classList.add('feedback-menu-open')
  menuOnTogleFeedback.classList.add('blur')
  console.log('успех телефон')
})

/////

massageBtn.addEventListener('click', function () {
  massageMenu.classList.add('calll-menu-open')
  menuOnTogleFeedback.classList.add('blur')
  feedbackMenu.classList.remove('feedback-menu-open')
})

massageMenuBurg.addEventListener('click', function () {
  massageMenu.classList.add('calll-menu-open')
  menuOnTogleFeedback.classList.add('blur')
  feedbackMenu.classList.remove('feedback-menu-open')
})

massageMenuClose.addEventListener('click', function () {
  massageMenu.classList.remove('calll-menu-open')
  feedbackMenu.classList.remove('feedback-menu-open')
  menuOnTogleFeedback.classList.remove('blur')
})
