/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = new Map();

  for (const transaction of transactions) {
    const { category, price } = transaction;

    if (categoryMap.has(category)) {
      // If the category already exists in the map, add the price to the existing total
      categoryMap.set(category, categoryMap.get(category) + price);
    } else {
      // If the category doesn't exist in the map, create a new entry with the price
      categoryMap.set(category, price);
    }
  }

  // Convert the map to an array of objects
  const result = [];
  for (const [category, total] of categoryMap) {
    result.push({ [category]: total });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
