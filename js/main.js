const navBar = document.querySelector('#navigation');

controlScrollStatus()
window.addEventListener('scroll', controlScrollStatus)

function controlScrollStatus() {
    if (scrollY > 0) {
        navBar.classList.remove('scroll-out')
        navBar.classList.add("scroll-in")
    } else {
        navBar.classList.remove('scroll-in')
        navBar.classList.add('scroll-out')
    }
}

const toggleThemeButton = document.querySelector('#toggle-theme')

toggleThemeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('light')
})

const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobile-menu');
const toggleThemeLabel = document.querySelector('#toggle-theme-label');
let menuIsOpen = false

menuBtn.addEventListener('click', () => {
    if (menuIsOpen) {
        closeMenu()
        console.log("closed btn")

        return
    }

    openMenu()
    console.log("open btn")
    return
})

window.addEventListener('click', e => {

    if (menuIsOpen && !navBar.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMenu()
        console.log('closed from disfocused area')
    }

})

function openMenu() {
    toggleMenu()
    mobileMenu.classList.remove('is-active-off')
    mobileMenu.classList.add('is-active')

    menuIsOpen = true
}

function closeMenu() {
    toggleMenu()
    mobileMenu.classList.remove('is-active')
    mobileMenu.classList.add('is-active-off')

    menuIsOpen = false
}

function toggleMenu() {
    menuBtn.classList.toggle('is-active')
    // mobileMenu.classList.toggle('is-active')
    mobileMenu.classList.toggle('mobile-nav')
    toggleThemeLabel.classList.toggle('hidden')
}