const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener("blur", (event) => {

    if (inputRef.dataset.length <= event.currentTarget.value.length) {
        inputRef.classList.remove("valid")
        inputRef.classList.remove("invalid")
        inputRef.classList.add("valid")
    } else {
        inputRef.classList.remove("valid")
        inputRef.classList.remove("invalid")
        inputRef.classList.add("invalid")
    }
    // console.log(inputRef.outerHTML);
});

