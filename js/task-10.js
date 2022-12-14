function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const amountRef = document.querySelector("input");
const btnCreatRef = document.querySelector("button[data-create]");
const btnDestRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("div#boxes");
let quantity = 0;

btnCreatRef.addEventListener("click", () => {
  
  amountRef.addEventListener("input", (event) => {
    quantity = event.currentTarget.value;

  });
  createBoxes(quantity);
});

function createBoxes(amount) {
  let size = 30;
  let result = [];
  destroyBoxes();
  for (let ind = 0; ind < amount; ind++) {
    const divRef = document.createElement("div");
    divRef.style.width = `${size}px`;
    divRef.style.height = `${size}px`;
    divRef.style.backgroundColor = getRandomHexColor();
    size = size + 10;
    result.push(divRef);
    
    // console.log(result);
  }
  boxesRef.append(...result);
};

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

btnDestRef.addEventListener("click", destroyBoxes);

