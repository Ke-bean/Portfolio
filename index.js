const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

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
            errorMsg.innerHTML = "Email can't be empty";
            parentElement.classList.add("error");
            parentElement.classList.remove("success");
        } else if(!isValidEmail(emailVal)){
            const parentElement = email.parentElement;
            const errorMsg = parentElement.querySelector(".error");
            errorMsg.innerHTML = "Provide a valid email";
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
            errorMsg.innerHTML = "password can't be empty";
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
    }
)
const isValidEmail = email =>{
    const pattern = /\S+@\S+\.\S+/g;
    return pattern.test(String(email).toLowerCase())
}
