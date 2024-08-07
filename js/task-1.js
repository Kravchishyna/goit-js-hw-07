const categories = document.querySelector('#categories');

const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  const elementsCount = item.querySelectorAll('ul > li').length;
  console.log(`Elements: ${elementsCount}`);
});