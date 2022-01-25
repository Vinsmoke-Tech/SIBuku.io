let closer = document.querySelector('#closer');
let navbar = document.querySelector('.navbar');
let cart = document.querySelector('.shopping-cart');
let login = document.querySelector('.login-form');
let search = document.querySelector('.header .search-form');
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;


document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = 'block';
    navbar.classList.toggle('active');

}

document.querySelector('#cart-btn').onclick = () => {
    closer.style.display = 'block';
    cart.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    closer.style.display = 'block';
    login.classList.toggle('active');
}

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
}
window.onscroll = () => {
    search.classList.remove('active');
}


closer.onclick = () => {
    closer.style.display = "none";
    navbar.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}


function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}