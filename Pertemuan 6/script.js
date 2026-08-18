const form = document.getElementById("myForm");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const country = document.getElementById("country");
country.value = '';

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isspace(text) {
    const regex = /^\S+$/;
    return regex.test(text);
}

function lowerCase(text) {
    const regex = /^[a-z]+$/;
    return regex.test(text)
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorText = formGroup.querySelector(".error-text");

    formGroup.className = "form-group error";
    errorText.innerText = message;
}

function clearError(input) {
    const formGroup = input.parentElement;
    const errorText = formGroup.querySelector(".error-text");

    formGroup.classList.remove('error')
    errorText.innerText = "";
}


namaInput.addEventListener("input", function (e) {
    clearError(namaInput)
})

emailInput.addEventListener("input", function (e) {
    clearError(emailInput)
})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // resetError();
    let isValid = true;

    const fullname = namaInput.value;
    if (fullname.trim() === "") {
        showError(namaInput, "Nama Wajib diisi");
        isValid = false;
    } else if (fullname.length <= 3) {
        showError(namaInput, "Minimal Nama 3 karakter");
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email wajib diisi");
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, "Email tidak valid");
        isValid = false;
    }

    if (country.value.trim() === "") {
        showError(country, "Country diisi");
        isValid = false;
    }

    if (isValid) {
        alert("Form Berhasil di submit!");

        form.reset();
    }

    console.log(country.value);
});
