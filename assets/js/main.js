const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

//   menu show
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

// menu hidden
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

// search
const search = document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close')

// search show
searchBtn.addEventListener('click', () => {
    search.classList.add('show-search')
})
// search hidden
searchClose.addEventListener('click', () => {
    search.classList.remove('show-search')
})
// login
const login = document.getElementById('login'),
    loginBtn = document.getElementById('login-btn'),
    loginClose = document.getElementById('login-close')
// login show
loginBtn.addEventListener('click', () => {
    login.classList.add('show-login')
})
// login hidden
loginClose.addEventListener('click', () => {
    login.classList.remove('show-login')
})