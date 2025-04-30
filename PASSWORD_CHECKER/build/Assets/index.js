const user_input = document.querySelector("#user_password");
const eye_icon = document.querySelector("#eye");
const check_password = document.querySelector("#check");

// const lowercase_active = document.querySelector("#lower");
// const uppercase_active = document.querySelector("#upper");
// const numbers_active = document.querySelector("#number");
// const length_active = document.querySelector("#length");
// const special_active = document.querySelector("#special");

// const no_pass = document.querySelector("#no_pass");
// const weak_pass = document.querySelector("#weak_pass");
// const med_pass = document.querySelector("#med_pass");
// const str_pass = document.querySelector("#str_pass");

eye_icon.addEventListener("click", () => {
    eye_icon.classList.toggle("fa-eye");
    eye_icon.classList.toggle("fa-eye-slash");

    user_input.type = user_input.type === "password" ? "text" : "password";
});

check_password.addEventListener("click", () => {
    // console.log(user_input_password);
    const user_input_password = user_input.value;


    const uppercase_letters = /[A-Z]/.test(user_input_password);
    const lowercase_letters = /[a-z]/.test(user_input_password);
    const spec_char = /[\W_]/.test(user_input_password);
    const numbers = /[\d]/.test(user_input_password);
    const password_length = user_input_password.length;

    if (password_length >= 8 && uppercase_letters && spec_char && lowercase_letters && numbers) {
        console.log("Strong Password");
    } else if (password_length >= 8 && spec_char && numbers) {
        console.log("Medium Password");
    } else {
        console.log("Weak Password");
    }
});
