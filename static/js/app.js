var device = document.getElementById("device")
var currentTheme = document.getElementById("theme")
var body = document.body
var presentation = document.getElementById("presentation")
var presentation2 = document.getElementById("presentation2")
var presentation3 = document.getElementById("presentation3")
var presentation4 = document.getElementById("presentation4")
var barTheme = document.getElementById("barTheme")
var deviceDark = document.getElementById("device-dark")
var navBtn = document.getElementById("navBtn")
var navWrapper = document.getElementById("nav-wrapper")
var checkbox = document.getElementById("nav")
var textProtect = document.getElementById("textProtect")
var project1 = document.getElementById("project1")
var project2 = document.getElementById("project2")
var project3 = document.getElementById("project3")
var project4 = document.getElementById("project4")
var project5 = document.getElementById("project5")
var contFormation = document.getElementById("contFormation")
var txt = document.getElementsByClassName("text")
var textContacts = document.getElementById("textContacts")
var github = document.getElementById("github")
var linkedin = document.getElementById("linkedin")
var email = document.getElementById("email")

project1.addEventListener("click", function(){
    window.open("https://github.com/Time-1-ADS/PROJETO-NESS", "_blank")
})
project2.addEventListener("click", function(){
    window.open("https://github.com/Time-1-ADS/ProjetoGSW", "_blank")
})
project3.addEventListener("click", function(){
    window.open("https://github.com/RoyaltyDev/Projeto_integrador_2020-2", "_blank")
})
project4.addEventListener("click", function(){
    window.open("https://github.com/mvarocha/Spotify-Web", "_blank")
})
project5.addEventListener("click", function(){
    window.open("https://github.com/mvarocha/QRCodeGenerator", "_blank")
})
github.addEventListener("click", function(){
    window.open("https://github.com/mvarocha/", "_blank")
})
linkedin.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/mvarocha/", "_blank")
})
email.addEventListener("click", function(){
    window.open("mailto: marcus.varocha@gmail.com", "_blank")
})

device.onload = function () {
    var deviceWidth = (this.width)
    var deviceHeight = (this.height)
    var screen = document.getElementById("device__size")
    screen.style.width = deviceWidth + "px"
    screen.style.height = deviceHeight + "px"
}

if (checkbox.checked == true){
    first.className = 'screen__content--start hidden'
    second.className = 'screen__content--formation hidden'
    third.className = 'screen__content--projects hidden'
    fourth.className = 'screen__content--contacts hidden'
}


function changeTheme() {

    if (currentTheme.className == 'dark') {
        body.style.backgroundColor = "white";
        deviceDark.className = 'device'
        device.className = 'device selected'
        presentation.style.border = 'solid 10px black'
        presentation.style.color = 'black'
        presentation2.style.border = 'solid 10px black'
        presentation2.style.color = 'black'
        presentation3.style.border = 'solid 10px black'
        presentation3.style.color = 'black'
        presentation4.style.border = 'solid 10px black'
        presentation4.style.color = 'black'
        barTheme.style.background = 'black'
        currentTheme.className = 'light'
        navBtn.className = 'nav-btn btn-black'
        navWrapper.className = 'nav-wrapper nav-wrapper-white'
        textProtect.style = "color: black;"
        contFormation.style = "color: black;"
        textContacts.style = "color: black"
    }
    else {
        body.style.backgroundColor = "black";
        deviceDark.className = 'device selected'
        device.className = 'device'
        presentation.style.border = 'solid 10px #d9d9d9'
        presentation.style.color = '#d9d9d9'
        presentation2.style.border = 'solid 10px #d9d9d9'
        presentation2.style.color = '#d9d9d9'
        presentation3.style.border = 'solid 10px #d9d9d9'
        presentation3.style.color = '#d9d9d9'
        presentation4.style.border = 'solid 10px #d9d9d9'
        presentation4.style.color = '#d9d9d9'
        barTheme.style.background = '#d9d9d9'
        currentTheme.className = 'dark'
        navBtn.className = 'nav-btn btn-white'
        navWrapper.className = 'nav-wrapper nav-wrapper-black'
        textProtect.style = "color: #d9d9d9;"
        contFormation.style = "color: #d9d9d9;"
        textContacts.style = "color: #d9d9d9"
    }
}

var first = document.getElementById("screenFirst")
var second = document.getElementById("screenSecond")
var third = document.getElementById("screenThird")
var fourth = document.getElementById("screenFourth")

function inicio() {
    first.className = 'screen__content--start'
    second.className = 'screen__content--formation hidden'
    third.className = 'screen__content--projects hidden'
    fourth.className = 'screen__content--contacts hidden'
    checkbox.checked = false
}
function formacao() {
    first.className = 'screen__content--start hidden'
    second.className = 'screen__content--formation'
    third.className = 'screen__content--projects hidden'
    fourth.className = 'screen__content--contacts hidden'
    checkbox.checked = false
}
function projetos() {
    first.className = 'screen__content--start hidden'
    second.className = 'screen__content--formation hidden'
    third.className = 'screen__content--projects'
    fourth.className = 'screen__content--contacts hidden'
    checkbox.checked = false
}
function contatos() {
    first.className = 'screen__content--start hidden'
    second.className = 'screen__content--formation hidden'
    third.className = 'screen__content--projects hidden'
    fourth.className = 'screen__content--contacts'
    checkbox.checked = false
}