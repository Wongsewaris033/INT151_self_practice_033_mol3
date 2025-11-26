function setup() {
    const messageBox = document.getElementById("messageBox");
    messageBox.addEventListener("input", charCounting);

    const toggle = document.getElementById("togglePassword");
    toggle.addEventListener("click", changeDisplayMode);
}

function charCounting() {
    const input = document.getElementById("messageBox");
    const counter = document.getElementById("charCount");
    const length = input.value.length;

    counter.textContent = `Characters: ${length} / 150`;

    if (length > 150) {
        counter.classList.add("red");
    } else {
        counter.classList.remove("red");
    }
}

function changeDisplayMode() {
    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

setup();