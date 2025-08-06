const inventory = {
  'laptop': { price: 999, stock: 5 },
  'mouse': { price: 25, stock: 10 },
  'keyboard': { price: 75, stock: 0 },
  'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const item of items) {
        if (!inventory[item] || inventory[item].stock <= 0) {
          return reject(new Error(`${item} is out of stock`));
        }
      }
      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise(resolve => {
    setTimeout(() => {
      let subtotal = items.reduce((sum, item) => sum + inventory[item].price, 0);
      let tax = +(subtotal * 0.08).toFixed(2);
      let total = +(subtotal + tax).toFixed(2);
      resolve({ subtotal, tax, total });
    }, 200);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.9) {
        resolve({
          transactionId: `txn_${Math.floor(Math.random() * 1000000)}`,
          amount,
          status: 'success'
        });
      } else {
        reject(new Error("Payment failed. Please try again."));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  return new Promise(resolve => {
    setTimeout(() => {
      items.forEach(item => {
        inventory[item].stock--;
      });
      resolve({ status: 'Inventory updated', remaining: JSON.parse(JSON.stringify(inventory)) });
    }, 300);
  });
}

function checkout(itemNames) {
  return checkInventory(itemNames)
    .then(items => calculateTotal(items)
      .then(totalDetails =>
        processPayment(totalDetails.total)
          .then(paymentInfo =>
            updateInventory(items).then(inventoryStatus => ({
              paymentInfo,
              totalDetails,
              inventoryStatus
            }))
          )
      )
    );
}
