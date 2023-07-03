const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientItem=ingredients.map(ingredient=>{
const listIngredient=document.createElement("li");
listIngredient.classList.add("item");
listIngredient.textContent=ingredient;
return listIngredient;
})
const ingredientsList=document.querySelector("#ingredients");
ingredientsList.append(...ingredientItem)
