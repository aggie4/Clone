const toggleBth = document.querySelector('.navber__toogleBth');
const menu = document.querySelector('.navber__menu');
const icons = document.querySelector('.navber__icons');

toggleBth.addEventListener('click',() => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

