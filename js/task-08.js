const form = document.querySelector(".login-form");



form.addEventListener("submit", onFormSubm);

function onFormSubm (event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("все поля должны быть заполнены");
        return;
    }
    const user = {
        email: email.value,
        password: password.value
    }
    console.log(user);

    event.currentTarget.reset();
}

