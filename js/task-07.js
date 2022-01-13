const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("change", event => {     
    text.style.fontSize = `${event.currentTarget.value}px`;
})