let messageError = document.querySelector(".error-message");
let form = document.querySelector(".form");
let emailInput = document.querySelector("#email");
let buttonSubmit = document.querySelector(".form__submit");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(emailInput === false){
        messageError.toggle= "error-message--active";
    }
});