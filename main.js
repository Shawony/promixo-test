const hamburgerButton = document.querySelector('.hamburger-menu-button')

const hamburgerCloseButton = document.querySelector('.hamburger-close-button')

const navLinksContainer = document.querySelector('.nav-links-container')

const dropdownLinksContainer = document.querySelector('.dropdown-container')

const navbarButtonContainer = document.querySelector('.navbar-button-container')

const dropdownItem = document.querySelector('.dropdown-item')

const overlay = document.querySelector('.overlay')

hamburgerButton.addEventListener('click', () => {
  navLinksContainer.classList.add('show')
  navLinksContainer.classList.remove('hide')
  navbarButtonContainer.classList.add('show')
  navbarButtonContainer.classList.remove('hide')
  overlay.classList.add('show')
  overlay.classList.remove('hide')

  console.log('opened')
})

hamburgerCloseButton.addEventListener('click', () => {
  navLinksContainer.classList.add('hide')
  navLinksContainer.classList.remove('show')
  navbarButtonContainer.classList.add('hide')
  navbarButtonContainer.classList.remove('show')
  overlay.classList.add('hide')
  overlay.classList.remove('show')
  console.log('closed')
})

dropdownItem.addEventListener('click', () => {
  if (dropdownLinksContainer.classList.contains('hide')) {
    dropdownLinksContainer.classList.remove('hide')
    dropdownLinksContainer.classList.add('show')
  } else {
    dropdownLinksContainer.classList.remove('show')
    dropdownLinksContainer.classList.add('hide')
  }
})
