const form = document.querySelector("#signUpForm");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#passWord");
const passwordError = document.querySelector("#passWordError");
const repeat = document.querySelector("#passWordRepeat");
const repeatError = document.querySelector("#passWordRepeatError");
const button = document.querySelector("#submit");
const message = document.querySelector("#submitMessage");

function formValidation(event) {
    event.preventDefault();

    if (lengthValidation(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (emailValidation(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (lengthValidation(password.value, 7) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }
};

form.addEventListener("submit", formValidation);

function lengthValidation(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function pwdCheck() {
    if (repeat.value === password.value) {
        repeat.setCustomValidity('');
    } else {
        repeat.setCustomValidity("The passwords dont match");
        ;
    }
} 

password.onchange = pwdCheck;
repeat.onkeyup = pwdCheck;

function enableButton() {
    if (fullName.value === "" && regEx.test(email.value) && password.value === "" && repeat.value === "") {
        button.disabled = true;
        message.style.display = "none";
     } else {
        button.disabled = false;
        message.style.display = "block";
}

}

fullName, email, password, repeat.addEventListener("change", enableButton);

