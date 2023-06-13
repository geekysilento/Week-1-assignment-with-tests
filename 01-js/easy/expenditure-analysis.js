function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  }

  const result = Object.entries(categoryTotals).map(([category, totalSpent]) => {
    return { category, totalSpent };
  });

  return result;
}

module.exports= calculateTotalSpentByCategory