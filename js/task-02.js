const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector("ul#ingredients");

const arrLi = [];

ingredients.forEach(ing => {
  let liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = ing;
  arrLi.push(liRef);
  });

listRef.append(...arrLi);

// console.log(listRef.outerHTML);

