
const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const nameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onNameOutput);
function onNameOutput(event) {
    if (event.currentTarget.value !== ``) {
        nameOutputEl.textContent = event.currentTarget.value;
    } else {
        nameOutputEl.textContent = "Незнакомец";
    }
}



