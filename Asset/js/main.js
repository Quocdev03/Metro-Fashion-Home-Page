let menu = document.querySelector('#menu-icon')
let headerMenu = document.querySelector('.headerMenu')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    headerMenu.classList.toggle('active')
}

