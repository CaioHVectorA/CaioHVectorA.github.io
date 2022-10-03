


function menu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');   
}

const botao = document.getElementById('btn-mobile');

botao.addEventListener('click', menu);


var navTodos =  document.querySelector('header nav ul li:nth-child(1) a')
var navSeries = document.querySelector('header nav ul li:nth-child(2) a')
var navSolos = document.querySelector('header nav ul li:nth-child(3) a')

navSeries.addEventListener('click',localseries)
navSolos.addEventListener('click',localsolos)
navTodos.addEventListener('click',localtodos)

function localsolos () {
    window.localStorage.setItem('uvc_tipo','solos')
    window.localStorage.setItem('uvc_scroll','sim')
}

function localtodos () {
    window.localStorage.setItem('uvc_tipo','todos')
    window.localStorage.setItem('uvc_scroll','sim')
}

function localseries () {
    window.localStorage.setItem('uvc_tipo','series')
    window.localStorage.setItem('uvc_scroll','sim')
}


