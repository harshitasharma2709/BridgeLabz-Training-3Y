// Q6: E-Commerce Inventory using Array Methods

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 500, stock: 20 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 800, stock: 4 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 10 },
    { id: 5, name: "Notebook", category: "Stationery", price: 100, stock: 3 }
];

// 1. Get low stock products using filter().
function getLowStockProducts(list) {
    return list.filter(product => product.stock < 6);
}

// 2. Sort products by price using sort().
function sortProductsByPrice(list) {
    return [...list].sort((a, b) => a.price - b.price);
}

// 3. Calculate total inventory value using reduce().
function calculateTotalInventoryValue(list) {
    return list.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

// 4. Group products by category using reduce().
function groupByCategory(list) {
    return list.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low Stock Products:");
console.log(getLowStockProducts(products));

console.log("Sorted Products:");
console.log(sortProductsByPrice(products));

console.log("Total Inventory Value:");
console.log(calculateTotalInventoryValue(products));

console.log("Products by Category:");
console.log(groupByCategory(products));