const form = document.querySelector("#loginForm");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const button = document.querySelector("#submit");
const message = document.querySelector("#submitMessage");

function formValidation(event) {
    event.preventDefault();

    if (emailValidation(email.value) === true) {
        emailError.style.display = "none";
        message.style.display = "block";
    } else {
        emailError.style.display = "block";
        message.style.display = "none";
    }

    if (lengthValidation(password.value, 7) === true) {
        passwordError.style.display = "none";
        message.style.display = "block";
    } else {
        passwordError.style.display = "block";
        message.style.display = "none";
    }
};

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

form.addEventListener("submit", formValidation);
