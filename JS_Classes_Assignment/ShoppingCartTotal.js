"use strict";

// Create Cart class
class Cart {
    constructor() {
        this.items = [];
    }

    // Add an item to the cart
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    // Calculate the total cart value
    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    // Validate coupon and calculate final total
    applyCoupon(couponCode) {
        const couponPattern = /^(SAVE20|DISC10)$/;

        if (!couponPattern.test(couponCode)) {
            console.log("Invalid coupon code.");
            return this.getTotal();
        }

        // Apply the discount matching the coupon
        let discountPercent = 0;

        if (couponCode === "SAVE20") {
            discountPercent = 20;
        } else if (couponCode === "DISC10") {
            discountPercent = 10;
        }

        const originalTotal = this.getTotal();
        const discount = originalTotal * discountPercent / 100;
        const finalTotal = originalTotal - discount;

        console.log(`Original Total: ₹${originalTotal.toFixed(2)}`);
        console.log(`Coupon: ${couponCode}`);
        console.log(`Discount: ${discountPercent}%`);
        console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);

        return finalTotal;
    }
}

// Create cart and add items
const cart = new Cart();

cart.addItem("Laptop", 45000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

// Display total and apply coupon
console.log(`Cart Total: ₹${cart.getTotal().toFixed(2)}`);

cart.applyCoupon("SAVE20");