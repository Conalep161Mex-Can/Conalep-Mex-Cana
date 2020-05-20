let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containermenu = document.querySelector('.menu');
let activador = true;

btnMenu.addEventListener('click', () => {

    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.5s"

        activador = false;
    }else{
        activador = false;

        menu.style.left = "-100%";
        menu.style.transition = "0.5s"

        activador = true;
    }
});

//intercalar clase Active
let enlaces = document.querySelectorAll('.lista li a');

enlaces.forEach((element)=>{
    element.addEventListener('click', (event) => {
        enlaces.forEach( (link) => {
            link.classList.remove('activo');
        });
        event.target.classList.add('activo');
    });
});

// Efectos scroll

let prevScrollpos = window.pageYOffset;
let gotop = document.querySelector('.go-top');

window.onscroll = () => {
    let currensScrollps = window.pageYOffset;
    //MOATRAR Y OCULTAR MENU
    if (prevScrollpos > currensScrollps) {
        containermenu.style.top = "0";
        containermenu.style.transition = "0.5s";
    }else{
        containermenu.style.top = "-60px";
        containermenu.style.transition = "0.5s";
    }

    prevScrollpos = currensScrollps;

    //MOSTRAS Y OCULTAR SCROLL ESTILOS 
    let arriba = window.pageYOffset;

    if (arriba <= 600) {
        containermenu.style.bordeBottom = "3px solid #ff0101";

     gotop.style.right = "0";
     gotop.style.transition = "0.5s";

    }else {

     containermenu.style.bordeBottom = "none";

     gotop.style.right = "-100%";

    }
}

gotop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});