const fontBurger = document.querySelector('.fa-bars')
const fontX = document.querySelector('.fa-times')
const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')

burger.addEventListener('click', function () {
    fontBurger.classList.toggle('show');
    fontX.classList.toggle('show');
    nav.classList.toggle('show')
    burger.classList.toggle('show')
})