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
// validation for register(signup link);
const form = document.querySelector(".register");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email")
form.addEventListener("submit", e => {
        e.preventDefault();
        const usernameVal = username.value.trim();
        const emailVal = email.value.trim();
        const passwordVal = password.value.trim();
        const password2Val = password2.value.trim();
        if(usernameVal == ""){
            const parentElement = username.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "username can't be empty";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
        }else{
            const parentElement = username.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "";
            parentElement.classList.add("success");
            parentElement.classList.remove("error");
        }
        if(emailVal == ""){
            const parentElement = email.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Email is required";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
        } else if(!isValidEmail(emailVal)){
            const parentElement = email.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Invalid Email";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
        }else{
            const parentElement = email.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "";
            parentElement.classList.add("success");
            parentElement.classList.remove("error");
        }
        if(passwordVal == ""){
            const parentElement = password.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "password is required";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
        }else if(passwordVal.length < 8){
            const parentElement = password.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "password must be atleast 8 characters";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
        }else{
            const parentElement = password.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "";
            parentElement.classList.add("success");
            parentElement.classList.remove("error");
        }
        if(password2Val == ""){
            const parentElement = password2.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Confirm your password";
            parentElement.classList.add("error");
            parentElement.classList.remove("success"); 
        }else if(password2Val !== passwordVal){
            const parentElement = password2.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Password doesn't match";
            parentElement.classList.add("error");
            parentElement.classList.remove("success"); 
        }else{
            const parentElement = password2.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "";
            parentElement.classList.add("success");
            parentElement.classList.remove("error");
        }
        localStorage.setItem("username", usernameVal)
        localStorage.setItem("email", emailVal)
        localStorage.setItem("Password", passwordVal)
        console.log(localStorage.getItem("email"))
    }
)
// validation for login form
const loginForm = document.querySelector(".login");
const password12 = document.querySelector("#password12");
const password22 = document.querySelector("#password22");
const email2 = document.querySelector("#email2")
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const emailVal = email2.value.trim();
  const passwordVal = password12.value.trim();
  const password2Val = password22.value.trim();
    if(emailVal == ""){
       const parentElement = email2.parentElement;
       const errorMsg = parentElement.querySelector(".error");
        errorMsg.innerHTML = "Email is required";
        parentElement.classList.add("error");
          parentElement.classList.remove("success");
    } else if(!isValidEmail(emailVal)){
            const parentElement = email2.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Invalid Email";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
        }else{
            const parentElement = email2.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "";
            parentElement.classList.add("success");
            parentElement.classList.remove("error");
        }
        if(passwordVal == ""){
            const parentElement = password12.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "password is required";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
        }else if(passwordVal.length < 8){
            const parentElement = password12.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "password must be atleast 8 characters";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
        }else{
            const parentElement = password12.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "";
            parentElement.classList.add("success");
            parentElement.classList.remove("error");
        }
        if(password2Val == ""){
            const parentElement = password22.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Confirm your password";
            parentElement.classList.add("error");
            parentElement.classList.remove("success"); 
        }else if(password2Val !== passwordVal){
            const parentElement = password22.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Password doesn't match";
            parentElement.classList.add("error");
            parentElement.classList.remove("success"); 
        }else{
            const parentElement = password22.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "";
            parentElement.classList.add("success");
            parentElement.classList.remove("error");
        }
    }
)
// validation for contact me form

const isValidEmail = email => {
  const pattern = /\S+@\S+\.\S+/g;
  return pattern.test(String(email).toLowerCase())
}
