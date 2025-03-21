// Initialization of variables
let user_input;
let user_balance = 0;
let output = 0;

// Withdrawal function using simple switch cases
document.getElementById("withdraw").onclick = function() {
    user_input = Number(document.getElementById("data").value);
    switch(true) {
        case user_input > 0 && user_input <= user_balance:
            output = user_balance - user_input;
            window.alert(`Your withdrawal of $${user_input} was successful`);
            break;

        case user_input > 0 && user_input > user_balance:
            window.alert("Insufficient Balance");
            break;

        default:
        window.alert("Invalid Withdrawal Amount");
    }

    user_balance = output;
}

// Windows alert pop up function to alert the user of his/her balance
document.getElementById('balance').onclick = function () {
    window.alert(`Your account balance is $${user_balance}`);
}

// Deposit Function which allowas user to deposit funds
document.getElementById('deposit').onclick = function () {
    user_input = Number(document.getElementById("data").value);
    switch(true) {
        case user_input > 0:
            output = user_balance + user_input;
            window.alert(`Your deposit of $${user_input} was successful`);
            break;

        default:
        window.alert("Invalid Deposit Amount");
    }

    user_balance = output;
}

// Exit function to reset all parameter and variables back to default
document.getElementById('exit').onclick = function () {
    user_balance = 0;
    output = 0;
    window.location.reload(true);
}