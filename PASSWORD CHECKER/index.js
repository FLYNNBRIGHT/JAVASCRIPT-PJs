const user_input = document.querySelector("#user_password");
const eye_icon = document.querySelector("#eye");
const user_password = user_input.value;
const outcome_active = document.querySelector("#outcome_active");

const lowercase_active = document.querySelector("#lower");
const uppercase_active = document.querySelector("#upper");
const numbers_active = document.querySelector("#number");
const length_active = document.querySelector("#length");
const special_active = document.querySelector("#special");

eye_icon.addEventListener("click", () => {
    eye_icon.classList.toggle("fa-eye");
    eye_icon.classList.toggle("fa-eye-slash");

    user_input.type = user_input.type === "password" ? "text" : "password";
});


user_input.addEventListener("keypress", () => {
    outcome_active.classList.remove("hidden");

    if (user_password.length > 8) {
        length_active.classList.remove("not_match");
        length_active.classList.add("match");
        console.log("length = 8");
        
    }

    else {
        length_active.classList.remove("match");
    }
});

