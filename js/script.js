const menu_icon = document.getElementById('menu_icon')
const nav = document.getElementById('nav_links')

function toggleMenu() {
    nav.classList.toggle('nav_active')
    menu_icon.classList.toggle('tryck_menu')
}

menu_icon.addEventListener('click', toggleMenu)



