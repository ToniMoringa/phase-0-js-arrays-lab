// Write your code here

// Create the Product Inventory Array
let products = ['Laptop', 'Phone', 'Headphones', 'Monitor'];

// (✿ Access Product Info ✿
function logFirstProduct() {
  console.log(products[0]);
}

// ✿ Add a Product ✿
function addProduct(productName) {
  products.push(productName);
}

// ✿ Update Product Info ✿
function updateProductName(index, newName) {
  products[index] = newName;
}

// ✿ Remove a Product ✿
function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct:
    typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName:
    typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct:
    typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products,
};
