// Q3: Product Discount using Constructor Function and Prototype

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method to apply discount.
Product.prototype.applyDiscount = function(percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Invalid discount percentage.");
    }

    return this.price - (this.price * percent / 100);
};

// Create three products.
const product1 = new Product("Laptop", 50000);
const product2 = new Product("Headphones", 3000);
const product3 = new Product("Keyboard", 2000);

const products = [product1, product2, product3];
const discounts = [10, 15, 20];

products.forEach((product, index) => {
    console.log("Product:", product.name);
    console.log("Original Price:", product.price);
    console.log("Discount:", discounts[index] + "%");
    console.log("Final Price:", product.applyDiscount(discounts[index]));
    console.log("----------------");
});

/*
Abstraction:
The applyDiscount() method hides the calculation details.
The user only needs to provide the discount percentage.
*/