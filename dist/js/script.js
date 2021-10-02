let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

window.onclick = () =>{
    menu.toggleClass('fa-times');
    navbar.toggleClass('active');
}
