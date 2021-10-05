const form = document.querySelector("#signUpForm");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#passWord");
const passwordError = document.querySelector("#passWordError");
const repeat = document.querySelector("#passWordRepeat");
const repeatError = document.querySelector("#passWordRepeatError");

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

    if (pwdValidation(repeat.value) === true) {
        repeatError.style.display = "none";
    } else {
        repeatError.style.display = "block";
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

function pwdValidation() {
    if (repeat === password) {
        return true;
    } else {
        return false;
    }
}
