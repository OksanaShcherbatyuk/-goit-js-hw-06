const categoriesRef = document.querySelector("#categories");
console.log(`В списке ${categoriesRef.children.length} категории`);
const navRef = document.querySelectorAll(".item")

console.log('Категория: ', navRef[0].firstElementChild.textContent);
console.log('Количество элементов: ', navRef[0].lastElementChild.children.length);
console.log('Категория: ', navRef[1].firstElementChild.textContent);
console.log('Количество элементов: ', navRef[1].lastElementChild.children.length);
console.log('Категория: ', navRef[2].firstElementChild.textContent);
console.log('Количество элементов: ', navRef[2].lastElementChild.children.length);
