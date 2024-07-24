const navBar = document.querySelector('#navigation');

window.addEventListener('scroll', () => {
    if (scrollY > 0) {
        navBar.classList.remove('scroll-out')
        navBar.classList.add("scroll-in")
    } else {
        navBar.classList.remove('scroll-in')
        navBar.classList.add('scroll-out')
    }
})

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
    menuBtn.classList.add('is-active');
    mobileMenu.classList.add('is-active');
    mobileMenu.classList.add('mobile-nav');
    toggleThemeLabel.classList.add('hidden');

    menuIsOpen = true
}

function closeMenu() {
    menuBtn.classList.remove('is-active');
    mobileMenu.classList.remove('is-active');
    mobileMenu.classList.remove('mobile-nav');
    toggleThemeLabel.classList.remove('hidden');

    menuIsOpen = false
}