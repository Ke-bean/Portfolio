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
const form = document.querySelector(".register");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email")
function registerValidation(){
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
            return 0;
        }
        if(emailVal == ""){
            const parentElement = email.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Email is required";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
            return 0;
        } else if(!isValidEmail(emailVal)){
            const parentElement = email.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Invalid Email";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
            return 0;
        }
        if(passwordVal == ""){
            const parentElement = password.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "password is required";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
            return 0;
        }else if(passwordVal.length < 8){
            const parentElement = password.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "password must be atleast 8 characters";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
            return 0;
        }
        if(password2Val == ""){
            const parentElement = password2.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Confirm your password";
            parentElement.classList.add("error");
            parentElement.classList.remove("success"); 
            return 0;
        }else if(password2Val !== passwordVal){
            const parentElement = password2.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Password doesn't match";
            parentElement.classList.add("error");
            parentElement.classList.remove("success"); 
            return 0;
        }
        return 1;
}
document.addEventListener("DOMContentLoaded", function () {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const form = document.querySelector(".register");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const password2 = document.querySelector("#password2");
  const registerBtn = document.querySelector("#signupBtn"); 

  registerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("users: ",users);
      const validation = registerValidation();
      console.log("validity: ", validation);
      if (validation === 1) {
          const newUser = {
              fullNames: username.value.trim(),
              email: email.value.trim(),
              password: password.value.trim()
          };
          users.push(newUser);
          console.log("users: ",users);

          localStorage.setItem("users", JSON.stringify(users));
          window.location.reload();
      }
  });
})
const loginForm = document.querySelector(".login");
const password12 = document.querySelector("#password12");
const password22 = document.querySelector("#password22");
const email2 = document.querySelector("#email2")
function loginValidation(){
  const emailVal = email2.value.trim();
  const passwordVal = password12.value.trim();
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
        }
        if(passwordVal == ""){
            const parentElement = password12.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "password is required";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
            return 0;
        }
        return 1;
}
document.addEventListener("DOMContentLoaded", function () {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const validation= loginValidation();
      if(validation==1){
      const emailVal = document.getElementById("email2").value.trim();
      const passwordVal = document.getElementById("password12").value.trim();

      const user = users.find (user => user.email === emailVal && user.password === passwordVal);

      if (user) {
          if(user.email=="chenqiua@gmail.com"){
          localStorage.setItem("auth", "loggedin");
          window.location.href = "../dashboard";
          }else{
            localStorage.setItem("userEmail",user.email);
            window.location.href = "../blog.html";
          }
          
      } else {
          document.querySelector(".error").innerHTML="Invalid email or password";
      } 
      }
  });
});

const isValidEmail = email => {
  const pattern = /\S+@\S+\.\S+/g;
  return pattern.test(String(email).toLowerCase())
}

