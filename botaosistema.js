
function menu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');   
}

const botao = document.getElementById('btn-mobile');

botao.addEventListener('click', menu);





