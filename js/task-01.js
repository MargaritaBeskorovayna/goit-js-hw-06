const categoryItems = document.querySelectorAll(".item");
const itemsCount = categoryItems.length;
console.log(`Number of categories: ${ itemsCount } `);
categoryItems.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements =category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});