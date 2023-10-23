const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', () => {
         hamburger.classList.toggle('is-active')
         menu.classList.toggle('menu-active')
})

const loader = document.querySelector(".loader")

window.addEventListener('scroll', () => {
         hamburger.classList.remove('is-active')
         menu.classList.remove('menu-active')
})

function loadrActive() {
         loader.classList.add("loader-active")
}

function loaderActiveTime() {
         setInterval(loadrActive, 3000)
}

window.onload = loaderActiveTime()