const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

list.append(...ingredients.map(ing => {

  let liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = ing;
  return liRef;
}));


console.log(list);

