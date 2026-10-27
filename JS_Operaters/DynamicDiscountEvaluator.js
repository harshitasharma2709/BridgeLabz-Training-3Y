// Q8: Dynamic Discount Evaluator

// Store cart items
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart total using reduce()
let originalTotal = cart.reduce(
    (total, product) => total + product.price,
    0
);

// Apply category-wise discounts
let discountedCart = cart.map(product => {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    let discount = product.price * discountRate;
    let finalPrice = product.price - discount;

    return {
        item: product.item,
        originalPrice: product.price,
        discount: discount,
        finalPrice: finalPrice
    };
});

// Calculate total after category discounts
let discountedTotal = discountedCart.reduce(
    (total, product) => total + product.finalPrice,
    0
);

// Apply extra 5% discount if original cart total exceeds 50000
let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
}

let finalTotal = discountedTotal - extraDiscount;

// Display the results
console.table(discountedCart);
console.log(`Original Cart Total: ₹${originalTotal}`);
console.log(`Total After Category Discounts: ₹${discountedTotal}`);
console.log(`Extra Discount: ₹${extraDiscount}`);
console.log(`Final Cart Total: ₹${finalTotal}`);