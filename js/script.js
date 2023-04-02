const menu_icon = document.getElementById('menu_icon')
const nav = document.getElementById('nav_links')

function toggleMenu() {
    nav.classList.toggle('nav_active')
    menu_icon.classList.toggle('tryck_menu')
}

menu_icon.addEventListener('click', toggleMenu)



/* const sliderImages = document.querySelector('.product_container');
const prevBtn = document.querySelector('.pre_btn');
const nextBtn = document.querySelector('.nxt_btn');
let currentPosition = 0;
const imageWidth = 600;

nextBtn.addEventListener('click', () => {
  currentPosition -= imageWidth;
  sliderImages.style.transform = `translateX(${currentPosition}px)`;
});

prevBtn.addEventListener('click', () => {
  currentPosition += imageWidth;
  sliderImages.style.transform = `translateX(${currentPosition}px)`;
}); */

