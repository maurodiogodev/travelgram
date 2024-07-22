const toggleThemeButton = document.querySelector('#toggle-theme')

toggleThemeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('light')
})