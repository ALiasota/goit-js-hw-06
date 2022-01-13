const input = document.querySelector("#validation-input");

const classContains = className => {if (input.classList.contains(className)) {input.classList.remove(className)}};

input.addEventListener("blur", event => {
    input.addEventListener("focus", () => {
    classContains("valid");
    classContains("invalid");
    });
    event.currentTarget.value.length === Number(input.dataset.length) ?
    input.classList.add("valid") :
    input.classList.add("invalid");
})