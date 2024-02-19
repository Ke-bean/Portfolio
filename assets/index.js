'use strict';
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
})
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Js for the blog
const blogHheader = document.querySelector("header");
window.addEventListener("scroll", () =>{
  blogHheader.classList.toggle("shadow", window.scrollY > 0)
})
// Js for auth
const login = document.querySelector(".login")
const register = document.querySelector(".register");
const loginLink = document.querySelector(".loginLink")
const registerLink = document.querySelector(".registerLink");
registerLink.addEventListener("click", () =>{
  register.classList.add("active");
  login.classList.add("active")
})
loginLink.addEventListener("click", () =>{
  register.classList.remove("active");
  login.classList.remove("active")
})