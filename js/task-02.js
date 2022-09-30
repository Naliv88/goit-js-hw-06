const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
let liRef = document.createElement("li");


ingredients.forEach(ing=>{

  liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = ing;

  list.append(liRef)

});

console.log(list);
