const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  list: document.querySelector("#ingredients"),
}

  const products = ingredients.map(ingredient => {
    const makeIngredientEl = document.createElement('li');
    makeIngredientEl.textContent = ingredient;
    return makeIngredientEl;
  });

  console.log(products);
  const parentNode = document.querySelector("#ingredients");
  parentNode.append(...products);