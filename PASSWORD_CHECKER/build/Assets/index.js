const user_input = document.querySelector("#user_password");
const eye_icon = document.querySelector("#eye");
const check_password = document.querySelector("#check");

// A Function to show and hide user input and also toggle the eye icon
eye_icon.addEventListener("click", () => {
    eye_icon.classList.toggle("fa-eye");
    eye_icon.classList.toggle("fa-eye-slash");

    user_input.type = user_input.type === "password" ? "text" : "password";
});

// A Function to take user input, cross examine it across all given conditions and categorize it as weak, medium or strong
user_input.addEventListener("input", () => {

    // Initializing every variables and setting the conditions using the Regex Expression and the .test object method
    const user_input_password = user_input.value;
    const password_result = document.querySelector("#outcome");
    const uppercase_letters = /[A-Z]/.test(user_input_password);
    const lowercase_letters = /[a-z]/.test(user_input_password);
    const spec_char = /[!@#$%^&*(),.?":{}|<>]/.test(user_input_password);
    const numbers =/\d/.test(user_input_password);
    const password_length = user_input_password.length >= 8;


   // Conditional statement to categorize the user input
    if (password_length && uppercase_letters && spec_char && lowercase_letters && numbers) {
        password_result.textContent = "Strong Password";
    } 
    else if (password_length && spec_char && numbers) {
        password_result.textContent = "Medium Password";
    } 
    else {
        password_result.textContent = "Weak Password";
    }
});
