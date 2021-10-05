const formAlt = document.querySelector("#signUpFormAlt");

const fullNameAlt = document.querySelector("#fullNameAlt");
const fullNameAltError = document.querySelector("#fullNameAltError");
const emailAlt = document.querySelector("#emailAlt");
const emailAltError = document.querySelector("#emailAltError");
const passwordAlt = document.querySelector("#passWordAlt");
const passwordAltError = document.querySelector("#passWordAltError");
const repeatAlt = document.querySelector("#passWordRepeatAlt");
const repeatAltError = document.querySelector("#passWordRepeatAltError");

function formValidation(event) {
    event.preventDefault();

    if (lengthValidation(fullNameAlt.value, 0) === true) {
        fullNameAltError.style.display = "none";
    } else {
        fullNameAltError.style.display = "block";
    }

    if (emailValidation(emailAlt.value) === true) {
        emailAltError.style.display = "none";
    } else {
        emailAltError.style.display = "block";
    }

    if (lengthValidation(passwordAlt.value, 7) === true) {
        passwordAltError.style.display = "none";
    } else {
        passwordAltError.style.display = "block";
    }

    if (pwdValidation(repeatAlt.value) === true) {
        repeatAltError.style.display = "none";
    } else {
        repeatAltError.style.display = "block";
    }
};

formAlt.addEventListener("submit", formValidation);

function lengthValidation(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function emailValidation(emailAlt) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function pwdValidation() {
    if (repeatAlt != passwordAlt) {
        return true;
    } else {
        return false;
    }
}

