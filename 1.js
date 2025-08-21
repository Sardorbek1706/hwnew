function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => a.price - b.price);
}

let drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
];

console.log(sortDrinkByPrice(drinks));
