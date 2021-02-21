
let menu = document.querySelector(".menu")
let wrapper = document.querySelector('.wrapper')
let activity = false


function burgerMenu() {
    let navbar = document.querySelector('.navbar')
    let burger = `<div style="height: 40%;" class="adaptiveMenu wrapper">
  <div style="display: grid;" class="menu">
    <a class="menu-link" href="#"><span>Starting</span></a>
    <a class="menu-link" href="#"><span>How to</span></a>
    <a class="menu-link" href="#"><span>FAQ</span></a>
    <a class="menu-link" href="#"><span>Forum</span></a>
    <a class="menu-link" href="#"><span>Pattern</span></a>
  </div>
</div>`
    let adaptiveMenu = document.querySelector('.adaptiveMenu')
    if (activity === false) {
        activity = true
        return navbar.insertAdjacentHTML('beforebegin', burger)
    } else if (activity === true) {
        activity = false
        return adaptiveMenu.parentNode.removeChild(adaptiveMenu)

    }

}


document.addEventListener('click', burgerMenu)