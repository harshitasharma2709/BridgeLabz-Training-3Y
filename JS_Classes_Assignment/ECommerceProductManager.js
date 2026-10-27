"use strict";

// Create Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply percentage discount
    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    // Return formatted product details
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | ` +
            `Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Notebook", 100, "Stationery"),
    new Product(4, "Keyboard", 1200, "Electronics")
];

// Apply 10% discount to the first product
products[0].applyDiscount(10);

// Filter products with price greater than 1000
const expensiveProducts = products.filter(product => product.price > 1000);

// Display filtered products
console.log("Products Above ₹1000:");

expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});