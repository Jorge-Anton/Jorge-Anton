import "./main.pcss"

const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")
const logoDark = document.getElementById("logoDark")
const logoLight = document.getElementById("logoLight")
const language = document.getElementById("language")
const languageSelector = document.getElementById("languageSelector")
let visibility = false
let languageToggle = false

hamburger.addEventListener('click', () => {
    if (visibility === false) {
        menu.style.transform = 'translateX(0)'
        visibility = true
        hamburger.style.position = "fixed"
        hamburger.style.marginRight = "32px"
        hamburger.style.transform = "rotate(90deg)"
        menu.style.borderLeftWidth = "0"
        logoDark.style.position = "fixed"
        logoDark.style.marginLeft = "32px"
        logoLight.style.position = "fixed"
        logoLight.style.marginLeft = "32px"
    } else {
        menu.style.transform = 'translateX(100%)'
        visibility = false
        hamburger.style.position = "relative"
        hamburger.style.marginRight = "0"
        hamburger.style.transform = "rotate(0)"
        menu.style.borderLeftWidth = "1px"
        logoDark.style.position = "relative"
        logoDark.style.marginLeft = "0"
        logoLight.style.position = "relative"
        logoLight.style.marginLeft = "0"
    }

})

language.addEventListener('click', () => {
    if (languageToggle === false) {
        languageSelector.style.display = 'flex'
        languageToggle = true
    } else {
        languageSelector.style.display = 'none'
        languageToggle = false
    }
})

document.addEventListener('click', function handleClickOutsideBox(event) {  
    if (!language.contains(event.target) && !languageSelector.contains(event.target)) {
      languageSelector.style.display = 'none';
      languageToggle = false
    }
  });

