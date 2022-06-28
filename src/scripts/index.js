"use strict";

const navIcon = document.querySelector('.nav_icon');
const nav = document.querySelector('.nav_list_mobile');
const wrapper = document.querySelectorAll('.wrapper')
const header = document.querySelector('header')

const clickIconClicked = () => {
  if (event.target.tagName === 'A' || event.target.className === 'nav_list_mobile active') { return }
  nav.classList.remove('active')


  const iconClicked = document.querySelector('.nav_icon.clicked')
  iconClicked.removeEventListener('click', clickIconClicked)
  wrapper.forEach(item => item.removeEventListener('click', clickIconClicked))

  iconClicked.classList.remove('clicked')

  wrapper.forEach(item => item.addEventListener('click', clickIcon))

}

const clickIcon = () => {

  if (event.target.className != 'nav_icon' && event.target.className != 'nav_ico') { return }

  nav.classList.add('active');
  navIcon.classList.add('clicked')

  const iconClicked = document.querySelector('.nav_icon.clicked')

  if (iconClicked) {



    wrapper.forEach(item => item.addEventListener('click', clickIconClicked))

  }

}



wrapper.forEach(item => item.addEventListener('click', clickIcon))


















