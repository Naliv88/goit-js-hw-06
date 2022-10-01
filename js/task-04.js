const decRef = document.querySelector('button[data-action="decrement"]');
const incRef = document.querySelector('button[data-action="increment"]');
const counterRef = document.querySelector("#value");
let counterValue = 0;

decRef.addEventListener("click", () => {
    counterValue = counterValue - 1;
    counterRef.textContent = counterValue;
});

incRef.addEventListener("click", () => {
    counterValue = counterValue + 1;
    counterRef.textContent = counterValue;
});


// counterRef.textContent = value;