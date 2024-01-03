/*
10. Filter by Category.
Write a function that takes an array of products and returns a function that filters the array by a given product
category. The function must filter an eCommerce products array by a specific category. The closure filters
products using the filter() method. Finally, it returns a new array containing only the products with the same
category as the input.
*/
function products(arr) {
  function filterByCategory(category) {
    return arr.filter((product) => product.category === category);
  }
  return filterByCategory;
}
const productsArray = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Mixer Grinder", category: "Electronics" },
  { name: "Pant", category: "clothing" },
];

const filterArrayByCategory = products(productsArray);
console.log(filterArrayByCategory("Electronics"));
