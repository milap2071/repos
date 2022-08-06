let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let password = document.getElementById("inputPassword");
let confirmPassword = document.getElementById("inputConfirmPassword");
let passwordMatch = document.getElementById("passwordMatch");

let btnSubmit = document.getElementById("btnSubmit");

// btnSubmit.addEventListener("click", e => {
//     verify();
// });

password.addEventListener("focus", e => {
    passwordMatch.style.visibility = "hidden";

});
confirmPassword.addEventListener("focus", e => {
    passwordMatch.style.visibility = "hidden";

});


let arrInput = [firstName, lastName, email, phoneNumber, password, confirmPassword];


function verify() {
    for (let element of arrInput) {
        element.setCustomValidity("");
    }


    if (emptyCheck()) {

        return false;
    } else if (password.value != confirmPassword.value) {
        alert("Password unmatch");
        password.setCustomValidity("Password do not match.");
        passwordMatch.style.visibility = "visible";
        return false;
    }
    console.log("No error");
    alert(`Name: ${firstName.value} ${lastName.value}
    Email: ${email.value}
    Phone: ${phoneNumber.value}
    `);
    // password.setCustomValidity("");
    return true;

}

function emptyCheck() {
    for (let element of arrInput) {
        if (element.value == "" || element.value == undefined) {
            console.log(element.value);
            element.setCustomValidity("");
            element.setCustomValidity("Field is empty");
            // element.reportValidity();
            return true;
        }
    }
}

function passwordCheck() {
    if (password.value === confirmPassword.value) {

        return true;
    } else {
        return false;
    }

}