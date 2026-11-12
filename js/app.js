let messaggeError = document.querySelector(".error-messagge");
let form = document.querySelector(".form");
let emailInput = document.getElementById("email");
let buttonSubmit = document.querySelector(".form__submit");
let card = document.querySelector(".card")
let emailValid = document.querySelector(".card-success");
let emailSpan = document.querySelector(".email-user");
let closeSuccess = document.querySelector(".button-success");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (emailInput.validity.valid === false) {
    messaggeError.classList.add("error-messagge--active");
    emailInput.classList.add("email--error")
}else {
    messaggeError.classList.remove("error-messagge--active");
    emailInput.classList.remove("email--error");
    card.classList.toggle("remove-card");
    emailValid.classList.toggle("card-success--active");
};
});

emailInput.addEventListener('input', (e) => {
    emailSpan.textContent = e.target.value;
});

closeSuccess.addEventListener('click', () => {
    card.classList.toggle("remove-card");
    emailValid.classList.toggle("card-success--active");
})