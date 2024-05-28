
const hamburger = document.querySelector('.hamburger');
//console.log(hamburger); // to see what is in the variable: hamburger
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
console.log(navLink);
hamburger.addEventListener('click', mobileMenu);
navLink.forEach(n => n.addEventListener('click',closeMenu));
function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}
function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}
/** Added event listener  to make an hover effect on meni items for mobiles  and tablets */
document.addEventListener('touchstart', function(event) {
    if (event.target.classList.contains('nav-link')) {
        event.target.classList.add('hover');
    }
});

document.addEventListener('touchend', function(event) {
    if (event.target.classList.contains('nav-link')) {
        event.target.classList.remove('hover');
    }
});
