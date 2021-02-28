const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-navigation");
const navLinks = document.querySelectorAll(".mobile-navigation li");
const mobileButton = document.querySelector(".mobile-navigation button");

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle("rotate");
    mobileNav.classList.toggle("appear");
    navLinks.forEach(link =>{
        link.classList.toggle("fade");
    })
    mobileButton.classList.toggle("fade");
})