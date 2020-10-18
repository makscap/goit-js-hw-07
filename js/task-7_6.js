const validInputEl = document.querySelector("#validation-input");

validInputEl.addEventListener("blur", onInputValueCheck);
const validBtnClassList = validInputEl.classList;

function onInputValueCheck(event) {
  if (
    validInputEl.value.length === Number(validInputEl.dataset.length)) {
    validBtnClassList.add("valid");
    validBtnClassList.remove("invalid");
  } else {
    validBtnClassList.add("invalid");
    validBtnClassList.remove("valid");
  }
}
